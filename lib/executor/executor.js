import { exec, execFile, fork, spawn } from 'child_process';
import { styleMaker } from '../styles/styles.js';
import { ErrorHandler } from '../error-handler/error-handler.js';
import { constructSpinner } from '../spinner/spinner-constructor.js';
import EventEmitter from 'events';
export const executeState = new EventEmitter();
const functionMap = new Map([
    ['exec', exec],
    ['execFile', execFile],
    ['fork', fork],
    ['spawn', spawn]
]);
export function execute(option, configs) {
    if (typeof configs === 'string')
        configs = JSON.parse(configs);
    ExecuteWrapper(typeof option === 'string' ? functionMap.get(option) : option, constructAtribute(configs[0].cmd, configs[0].args), configs);
}
function constructAtribute(cmd, args) {
    return args ? [cmd, args] : [cmd];
}
function checkLength(fun, configs) {
    if (configs.length)
        execute(fun, configs);
    else
        executeState.emit('done');
}
function ExecuteWrapper(fun, args, configs) {
    if (!configs.length) {
        executeState.emit('done');
        return;
    }
    const config = styleMaker(configs[0]);
    const spinnerConfig = config.spinner;
    const errorHandler = new ErrorHandler();
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
                errorHandler.handleError(execute, fun, configs);
            checkLength(fun, configs);
        }
        else if (signal) {
            spinner.info(`Exited with signal: ${signal}`);
            checkLength(fun, configs);
        }
        else {
            spinner.succeed(`${spinnerConfig.succeedText.prefix}: ${spinnerConfig.succeedText.text}` || '');
            configs.shift();
            checkLength(fun, configs);
        }
    });
}
