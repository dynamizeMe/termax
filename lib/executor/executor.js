import { exec, execFile, fork, spawn } from 'child_process';
import { styleMaker } from '../styles/styles.js';
import { ErrorHandler } from '../error-handler/error-handler.js';
import { constructSpinner } from '../spinner/spinner-constructor.js';
const functionMap = new Map([
    ['exec', exec],
    ['execFile', execFile],
    ['fork', fork],
    ['spawn', spawn]
]);
function constructAtribute(cmd, args) {
    return args ? [cmd, args] : [cmd];
}
export function GetExecute(option, configs) {
    ExecuteWrapper(typeof option === 'string' ? functionMap.get(option) : option, constructAtribute(configs[0].cmd, configs[0].args), configs);
}
function ExecuteWrapper(fun, args, configs) {
    if (configs.length === 0) {
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
                errorHandler.handleError(GetExecute, fun, configs);
            else if (configs.length > 0)
                GetExecute(fun, configs);
        }
        else if (signal) {
            spinner.info(`Exited with signal: ${signal}`);
        }
        else {
            spinner.succeed(`${spinnerConfig.succeedText.prefix}: ${spinnerConfig.succeedText.text}` || '');
            configs.shift();
            if (configs.length > 0)
                GetExecute(fun, configs);
        }
    });
}
