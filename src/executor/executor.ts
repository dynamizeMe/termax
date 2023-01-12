import {spawn} from 'child_process';
import {ExecuteConfig} from './execute-config.js';
import {styleMaker} from '../styles/styles.js';
import {ErrorHandler} from '../error-handler/error-handler.js';
import {SpinnerConfig} from '../spinner/spinner-config.js';
import {constructSpinner} from '../spinner/spinner-constructor.js';

export function Execute(configs: ExecuteConfig[]): void {
  if (configs.length === 0) {
    return;
  }
  const config = styleMaker(configs[0]);
  const spinnerConfig = config.spinner as SpinnerConfig;
  const errorHandler = new ErrorHandler();
  const spinner = constructSpinner(spinnerConfig).start();
  const child = spawn(config.cmd, config.args);

  if (spinnerConfig.showData) {
    child.stdout.on('data', (data) => {
      console.log(`${data}`);
    });
  }

  child.on('error', (err) => {
    errorHandler.hasError = true;
    errorHandler.error = err;
  });

  child.on('close', () => {
    if (!errorHandler.hasError) {
      spinner.succeed(`${spinnerConfig.succeedText.accent}: ${spinnerConfig.succeedText.text}` || '');
      if (config.callback) config.callback();
      else shift(configs, Execute);
    } else {
      spinner.fail(`${spinnerConfig.errorText.accent}: ${spinnerConfig.errorText.text}`);
      if (config.handleErrors) {
        configs.shift();
        errorHandler.handleError(Execute, configs);
      } else shift(configs, Execute);
    }
  });
}

function shift(configs: ExecuteConfig[], callback: Function) {
  configs.shift();
  if (configs.length > 0) {
    callback(configs);
  }
}
