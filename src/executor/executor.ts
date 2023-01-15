import {ChildProcess, exec, execFile, fork, spawn} from 'child_process';
import {ExecuteConfig} from './execute-config.js';
import {styleMaker} from '../styles/styles.js';
import {ErrorHandler} from '../error-handler/error-handler.js';
import {SpinnerConfig} from '../spinner/spinner-config.js';
import {constructSpinner} from '../spinner/spinner-constructor.js';
import EventEmitter from 'events';

export type processName = 'exec' | 'execFile' | 'fork' | 'spawn';
export type executorStates = 'done' | 'start';

export class Executor {
  functionMap = new Map<string, Function>([
    ['exec', exec],
    ['execFile', execFile],
    ['fork', fork],
    ['spawn', spawn]
  ]);
  #Callback!: Function;
  executeState = new EventEmitter();

  constructor(option?: processName | Function, configs?: ExecuteConfig[] | string, callback?: () => any) {
    if (option && configs) this.execute(option, configs, callback);
  }

  execute(option: processName | Function, configs: ExecuteConfig[] | string, callback?: () => any): void {
    if (callback && !this.#Callback) this.#Callback = callback;
    if (typeof configs === 'string') configs = JSON.parse(configs) as ExecuteConfig[];
    this.executeWrapper(
      typeof option === 'string' ? (this.functionMap.get(option) as Function) : option,
      this.constructAtribute(configs[0].cmd, configs[0].args),
      configs
    );
  }

  constructAtribute(cmd: string, args?: string[]) {
    return args ? [cmd, args] : [cmd];
  }

  checkLength(fun: Function, configs: ExecuteConfig[]) {
    if (configs.length) this.execute(fun, configs);
    else {
      if (this.#Callback) this.#Callback();
      this.executeState.emit('done');
    }
  }

  executeWrapper(fun: Function, args: any[], configs: ExecuteConfig[]): void {
    const config = styleMaker(configs[0]);
    const spinnerConfig = config.spinner as SpinnerConfig;
    const errorHandler = new ErrorHandler(this);
    this.executeState.emit('start');
    const spinner = constructSpinner(spinnerConfig).start();
    const child = fun(...args) as ChildProcess;

    child.on('error', (err) => {
      errorHandler.error = err;
    });

    child.on('close', (code, signal) => {
      if (code) {
        spinner.fail(`${spinnerConfig.errorText.prefix}: ${spinnerConfig.errorText.text}`);
        configs.shift();
        if (config.handleErrors) errorHandler.handleError(fun, configs)
        else this.checkLength(fun, configs);
      } else if (signal) {
        spinner.info(`Exited with signal: ${signal}`);
        this.checkLength(fun, configs);
      } else {
        spinner.succeed(`${spinnerConfig.succeedText.prefix}: ${spinnerConfig.succeedText.text}` || '');
        configs.shift();
        this.checkLength(fun, configs);
      }
    });
  }
}
