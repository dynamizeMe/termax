import { exec, execFile, fork, spawn } from 'child_process';
import { styleMaker } from '../styles/styles.js';
import { ErrorHandler } from '../error-handler/error-handler.js';
import { constructSpinner } from '../spinner/spinner-constructor.js';
import EventEmitter from 'events';
export class Executor {
    #functionMap = new Map([
        ['exec', exec],
        ['execFile', execFile],
        ['fork', fork],
        ['spawn', spawn]
    ]);
    #Callback;
    executeState = new EventEmitter();
    constructor(option, configs, callback) {
        if (option && configs)
            this.execute(option, configs, callback);
    }
    execute(option, configs, callback) {
        if (callback && !this.#Callback)
            this.#Callback = callback;
        if (typeof configs === 'string')
            configs = JSON.parse(configs);
        this.#executeWrapper(typeof option === 'string' ? this.#functionMap.get(option) : option, this.#constructAtribute(configs[0].cmd, configs[0].args), configs);
    }
    #constructAtribute(cmd, args) {
        return args ? [cmd, args] : [cmd];
    }
    #checkLength(fun, configs) {
        if (configs.length)
            this.execute(fun, configs);
        else {
            if (this.#Callback)
                this.#Callback();
            this.executeState.emit('done');
        }
    }
    #executeWrapper(fun, args, configs) {
        const config = styleMaker(configs[0]);
        const spinnerConfig = config.spinner;
        const errorHandler = new ErrorHandler(this);
        this.executeState.emit('start');
        const spinner = constructSpinner(spinnerConfig).start();
        const child = fun(...args);
        child.on('error', (err) => {
            errorHandler.error = err;
        });
        child.on('close', (code, signal) => {
            if (code) {
                spinner.fail(`${spinnerConfig.errorText.prefix}: ${spinnerConfig.errorText.text}`);
                configs.shift();
                if (config.handleErrors)
                    errorHandler.handleError(fun, configs);
                else
                    this.#checkLength(fun, configs);
            }
            else if (signal) {
                spinner.info(`Exited with signal: ${signal}`);
                configs.shift();
                this.#checkLength(fun, configs);
            }
            else {
                spinner.succeed(`${spinnerConfig.succeedText.prefix}: ${spinnerConfig.succeedText.text}` || '');
                configs.shift();
                this.#checkLength(fun, configs);
            }
        });
    }
}
