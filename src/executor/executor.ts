import {ChildProcess, exec, execFile, fork, spawn} from 'child_process';
import {ExecuteConfig} from './execute-config.js';
import {styleMaker} from '../styles/styles.js';
import {ErrorHandler} from '../error-handler/error-handler.js';
import {SpinnerConfig} from '../spinner/spinner-config.js';
import {constructSpinner} from '../spinner/spinner-constructor.js';

const functionMap = new Map<string, Function>([
  ['exec', exec],
  ['execFile', execFile],
  ['fork', fork],
  ['spawn', spawn]
]);

function constructAtribute(cmd: string, args?: string[]) {
  return args ? [cmd, args] : [cmd];
}

export function GetExecute(option: string | Function, configs: ExecuteConfig[]) {
  ExecuteWrapper(
    typeof option === 'string' ? (functionMap.get(option) as Function) : option,
    constructAtribute(configs[0].cmd, configs[0].args),
    configs
  );
}

function ExecuteWrapper(fun: Function, args: any[], configs: ExecuteConfig[]): void {
  if (configs.length === 0) {
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
      spinner.fail(`${spinnerConfig.errorText.accent}: ${spinnerConfig.errorText.text}`);
      configs.shift();
      errorHandler.handleError(GetExecute, fun, configs);
    } else if (signal) {
      spinner.info(`Exited with signal: ${signal}`);
    } else {
      spinner.succeed(`${spinnerConfig.succeedText.accent}: ${spinnerConfig.succeedText.text}` || '');
      if (config.callback) config.callback();
      configs.shift();
      if (configs.length > 0) GetExecute(fun, configs);
    }
  });
}

