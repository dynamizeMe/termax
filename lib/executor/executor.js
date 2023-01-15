var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Executor_Callback;
import { exec, execFile, fork, spawn } from 'child_process';
import { styleMaker } from '../styles/styles.js';
import { ErrorHandler } from '../error-handler/error-handler.js';
import { constructSpinner } from '../spinner/spinner-constructor.js';
import EventEmitter from 'events';
export class Executor {
    constructor(option, configs, callback) {
        this.functionMap = new Map([
            ['exec', exec],
            ['execFile', execFile],
            ['fork', fork],
            ['spawn', spawn]
        ]);
        _Executor_Callback.set(this, void 0);
        this.executeState = new EventEmitter();
        if (option && configs)
            this.execute(option, configs, callback);
    }
    execute(option, configs, callback) {
        if (callback && !__classPrivateFieldGet(this, _Executor_Callback, "f"))
            __classPrivateFieldSet(this, _Executor_Callback, callback, "f");
        if (typeof configs === 'string')
            configs = JSON.parse(configs);
        this.executeWrapper(typeof option === 'string' ? this.functionMap.get(option) : option, this.constructAtribute(configs[0].cmd, configs[0].args), configs);
    }
    constructAtribute(cmd, args) {
        return args ? [cmd, args] : [cmd];
    }
    checkLength(fun, configs) {
        if (configs.length)
            this.execute(fun, configs);
        else {
            if (__classPrivateFieldGet(this, _Executor_Callback, "f"))
                __classPrivateFieldGet(this, _Executor_Callback, "f").call(this);
            this.executeState.emit('done');
        }
    }
    executeWrapper(fun, args, configs) {
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
                    this.checkLength(fun, configs);
            }
            else if (signal) {
                spinner.info(`Exited with signal: ${signal}`);
                this.checkLength(fun, configs);
            }
            else {
                spinner.succeed(`${spinnerConfig.succeedText.prefix}: ${spinnerConfig.succeedText.text}` || '');
                configs.shift();
                this.checkLength(fun, configs);
            }
        });
    }
}
_Executor_Callback = new WeakMap();
