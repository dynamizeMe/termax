import chalk from 'chalk';
import inquirer from 'inquirer';
import { DefaultColors } from '../styles/color-sets.js';
import { errorQuestion } from './error-question.js';
import logSymbols from 'log-symbols';
import { Executor } from '../executor/executor.js';

export class ErrorHandler {
  #errorColor = chalk.hex(DefaultColors.PURPLE);
  #exitColor = chalk.hex(DefaultColors.RED);
  #errorMarkColor = chalk.hex(DefaultColors.YELLOW);
  #error: any;
  #executor!:Executor;

  constructor(executor: Executor) {
    this.#executor = executor;
  }

  handleError(fun?: Function, config?: any): void {
    this.errorPrompt(fun, config);
  }

  get error(): Error {
    return this.#error;
  }

  set error(err: any) {
    this.#error = err;
  }

  errorPrompt(fun?: Function, config?: any): any {
    inquirer.prompt(errorQuestion).then((answer): void => {
      if (answer.choice === 'See Error') {
        this.printErrorData(fun, config);
      } else if (answer.choice === 'Continue' && fun && config && config.length > 0) {
        console.log(this.#errorMarkColor(logSymbols.warning), this.#errorColor('Continued execution with the failed call.'));
        this.#executor.execute(fun, config);
      } else {
        console.log(this.#errorMarkColor(logSymbols.error), this.#exitColor('Exited with incomplete execution.'));
        return;
      }
    });
  }

  printErrorData(fun?: Function, config?: any): void {
    console.log(this.#errorMarkColor(logSymbols.warning), this.#errorColor(this.error ? `${this.error}` : `Couldn't retrieve data for this error.`));
    this.errorPrompt(fun, config);
  }
}
