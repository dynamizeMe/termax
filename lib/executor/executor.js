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
            spinner.fail(`${spinnerConfig.errorText.accent}: ${spinnerConfig.errorText.text}`);
            configs.shift();
            errorHandler.handleError(GetExecute, fun, configs);
        }
        else if (signal) {
            spinner.info(`Exited with signal: ${signal}`);
        }
        else {
            spinner.succeed(`${spinnerConfig.succeedText.accent}: ${spinnerConfig.succeedText.text}` || '');
            if (config.callback)
                config.callback();
            else {
                configs.shift();
                if (configs.length > 0) {
                    GetExecute(fun, configs);
                }
            }
        }
    });
}
// export function Execute(configs: ExecuteConfig[]): void {
//   if (configs.length === 0) {
//     return;
//   }
//   const config = styleMaker(configs[0]);
//   const spinnerConfig = config.spinner as SpinnerConfig;
//   const errorHandler = new ErrorHandler();
//   const spinner = constructSpinner(spinnerConfig).start();
//   const child = spawn(config.cmd, config.args);
//   if (spinnerConfig.showData) {
//     child.stdout.on('data', (data) => {
//       console.log(`${data}`);
//     });
//   }
//   child.on('error', (err) => {
//     errorHandler.error = err;
//   });
//   child.on('close', (code, signal) => {
//     if (code) {
//       spinner.fail(`${spinnerConfig.errorText.accent}: ${spinnerConfig.errorText.text}`);
//       configs.shift();
//       errorHandler.handleError(Execute, configs);
//     } else if (signal) {
//       spinner.info(`Exited with signal: ${signal}`);
//     } else {
//       spinner.succeed(`${spinnerConfig.succeedText.accent}: ${spinnerConfig.succeedText.text}` || '');
//       if (config.callback) config.callback();
//       else shift(configs, Execute);
//     }
//   });
// }
// export function Execute2(configs: ExecuteConfig[]): void {
//   if (configs.length === 0) {
//     return;
//   }
//   const config = styleMaker(configs[0]);
//   const spinnerConfig = config.spinner as SpinnerConfig;
//   const errorHandler = new ErrorHandler();
//   const spinner = constructSpinner(spinnerConfig).start();
//   const child = exec(config.cmd);
//   child.on('error', (err) => {
//     errorHandler.error = err;
//   });
//   child.on('close', (code, signal) => {
//     if (code) {
//       spinner.fail(`${spinnerConfig.errorText.accent}: ${spinnerConfig.errorText.text}`);
//       configs.shift();
//       errorHandler.handleError(Execute2, configs);
//     } else if (signal) {
//       spinner.info(`Exited with signal: ${signal}`);
//     } else {
//       spinner.succeed(`${spinnerConfig.succeedText.accent}: ${spinnerConfig.succeedText.text}` || '');
//       if (config.callback) config.callback();
//       else shift(configs, Execute2);
//     }
//   });
// }
// export function Execute3(configs: ExecuteConfig[]): void {
//   if (configs.length === 0) {
//     return;
//   }
//   const config = styleMaker(configs[0]);
//   const spinnerConfig = config.spinner as SpinnerConfig;
//   const errorHandler = new ErrorHandler();
//   const spinner = constructSpinner(spinnerConfig).start();
//   const child = execFile(config.cmd, config.args);
//   child.on('message', (message) => {
//     console.log(message);
//   });
//   child.on('error', (err) => {
//     errorHandler.error = err;
//   });
//   child.on('close', (code, signal) => {
//     if (code) {
//       spinner.fail(`${spinnerConfig.errorText.accent}: ${spinnerConfig.errorText.text}`);
//       configs.shift();
//       errorHandler.handleError(Execute3, configs);
//     } else if (signal) {
//       spinner.info(`Exited with signal: ${signal}`);
//     } else {
//       spinner.succeed(`${spinnerConfig.succeedText.accent}: ${spinnerConfig.succeedText.text}` || '');
//       if (config.callback) config.callback();
//       else shift(configs, Execute3);
//     }
//   });
// }
// export function Execute4(configs: ExecuteConfig[]): void {
//   if (configs.length === 0) {
//     return;
//   }
//   const config = styleMaker(configs[0]);
//   const spinnerConfig = config.spinner as SpinnerConfig;
//   const errorHandler = new ErrorHandler();
//   const spinner = constructSpinner(spinnerConfig).start();
//   const child = fork(config.cmd);
//   child.on('message', (message) => {
//     console.log(message);
//   });
//   child.on('error', (err) => {
//     errorHandler.error = err;
//   });
//   child.on('close', (code, signal) => {
//     if (code) {
//       spinner.fail(`${spinnerConfig.errorText.accent}: ${spinnerConfig.errorText.text}`);
//       configs.shift();
//       errorHandler.handleError(Execute4, configs);
//     } else if (signal) {
//       spinner.info(`Exited with signal: ${signal}`);
//     } else {
//       spinner.succeed(`${spinnerConfig.succeedText.accent}: ${spinnerConfig.succeedText.text}` || '');
//       if (config.callback) config.callback();
//       else shift(configs, Execute4);
//     }
//   });
// }
// function shift(configs: ExecuteConfig[], callback: Function) {
//   configs.shift();
//   if (configs.length > 0) {
//     callback(configs);
//   }
// }
