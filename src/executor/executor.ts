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

let Callback: Function;

export function execute(option: processName | Function, configs: ExecuteConfig[] | string, callback?: () => any): void {
  if(callback && !Callback) Callback = callback;
  if(typeof configs === 'string') configs = JSON.parse(configs) as ExecuteConfig[];
  ExecuteWrapper(
    typeof option === 'string' ? (functionMap.get(option) as Function) : option,
    constructAtribute(configs[0].cmd, configs[0].args),
    configs
  );
}

function constructAtribute(cmd: string, args?: string[]) {
  return args ? [cmd, args] : [cmd];
}

function checkLength(fun: Function, configs: ExecuteConfig[]) {
  if (configs.length) execute(fun, configs);
  else {
    if(Callback) Callback();
    executeState.emit('done')
  };
}

function ExecuteWrapper(fun: Function, args: any[], configs: ExecuteConfig[]): void {
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
      checkLength(fun, configs);
    } else if (signal) {
      spinner.info(`Exited with signal: ${signal}`);
      checkLength(fun, configs);
    } else {
      spinner.succeed(`${spinnerConfig.succeedText.prefix}: ${spinnerConfig.succeedText.text}` || '');
      configs.shift();
      checkLength(fun, configs);
    }
  });
}
