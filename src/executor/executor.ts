import {ChildProcess, exec, execFile, fork, spawn} from 'child_process';
import {ExecuteConfig} from './execute-config.js';
import {styleMaker} from '../styles/styles.js';
import {ErrorHandler} from '../error-handler/error-handler.js';
import {SpinnerConfig} from '../spinner/spinner-config.js';
import {constructSpinner} from '../spinner/spinner-constructor.js';
import EventEmitter from 'events';

export const executeState = new EventEmitter();
export type processName = 'exec' | 'execFile' | 'fork' | 'spawn';

const functionMap = new Map<string, Function>([
  ['exec', exec],
  ['execFile', execFile],
  ['fork', fork],
  ['spawn', spawn]
]);

export function execute(option: processName | Function, configs: ExecuteConfig[] | string): void {
  if(typeof configs === 'string') configs = JSON.parse(configs) as ExecuteConfig[];
  return ExecuteWrapper(
    typeof option === 'string' ? (functionMap.get(option) as Function) : option,
    constructAtribute(configs[0].cmd, configs[0].args),
    configs
  );
}

function constructAtribute(cmd: string, args?: string[]) {
  return args ? [cmd, args] : [cmd];
}

function ExecuteWrapper(fun: Function, args: any[], configs: ExecuteConfig[]): void {
  if (!configs.length) {
    executeState.emit('done');
    return;
  }
  const config = styleMaker(configs[0]);
  const spinnerConfig = config.spinner as SpinnerConfig;
  const errorHandler = new ErrorHandler();
  const spinner = constructSpinner(spinnerConfig).start();
  const child = fun(...args) as ChildProcess;

  child.on('error', (err) => {
    errorHandler.error = err;
  });

  child.on('close', (code, signal) => {
    if (code) {
      spinner.fail(`${spinnerConfig.errorText.prefix}: ${spinnerConfig.errorText.text}`);
      configs.shift();
      if (config.handleErrors) errorHandler.handleError(execute, fun, configs);
      else if (configs.length > 0) execute(fun, configs);
      else executeState.emit('done');
    } else if (signal) {
      spinner.info(`Exited with signal: ${signal}`);
    } else {
      spinner.succeed(`${spinnerConfig.succeedText.prefix}: ${spinnerConfig.succeedText.text}` || '');
      configs.shift();
      if (configs.length > 0) execute(fun, configs);
      else executeState.emit('done');
    }
  });
}
