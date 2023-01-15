import chalk from 'chalk';
import inquirer from 'inquirer';
import {DefaultColors} from '../styles/color-sets.js';
import {errorQuestion} from './error-question.js';
import {Question} from './question.js';
import logSymbols from 'log-symbols';

export class ErrorHandler {
  #errorColor = chalk.hex(DefaultColors.PURPLE);
  #exitColor = chalk.hex(DefaultColors.RED);
  #errorMarkColor = chalk.hex(DefaultColors.YELLOW);
  #error: any;

  handleError(callback?: Function, fun?: Function, config?: any) {
    return this.errorPrompt(errorQuestion, callback, fun, config);
  }

  get error() {
    return this.#error;
  }

  set error(err: any) {
    this.#error = err;
  }

  errorPrompt(question: Question[], callback?: Function, fun?: Function, config?: any): any {
    inquirer.prompt(question).then((answer) => {
      if (answer.choice === 'See Error') {
        this.printErrorData(callback, fun, config);
      } else if (answer.choice === 'Continue' && callback && fun && config && config.length > 0) {
        console.log(this.#errorMarkColor(logSymbols.warning), this.#errorColor('Continued execution with the failed call.'));
        callback(fun, config);
      } else {
        console.log(this.#errorMarkColor(logSymbols.error), this.#exitColor('Exited with incomplete execution.'));
        return 1;
      }
    });
  }

  printErrorData(callback?: Function, fun?: Function, config?: any) {
    console.log(this.#errorMarkColor(logSymbols.warning), this.#errorColor(this.error ? `${this.error}` : `Couldn't retrieve data for this error.`));
    this.errorPrompt(errorQuestion, callback, fun, config);
  }
}
