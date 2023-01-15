import chalk from 'chalk';
import inquirer from 'inquirer';
import { DefaultColors } from '../styles/color-sets.js';
import { errorQuestion } from './error-question.js';
import logSymbols from 'log-symbols';
export class ErrorHandler {
    #errorColor = chalk.hex(DefaultColors.PURPLE);
    #exitColor = chalk.hex(DefaultColors.RED);
    #errorMarkColor = chalk.hex(DefaultColors.YELLOW);
    #error;
    executor;
    constructor(executor) {
        this.executor = executor;
    }
    handleError(fun, config) {
        return this.errorPrompt(errorQuestion, fun, config);
    }
    get error() {
        return this.#error;
    }
    set error(err) {
        this.#error = err;
    }
    errorPrompt(question, fun, config) {
        inquirer.prompt(question).then((answer) => {
            if (answer.choice === 'See Error') {
                this.printErrorData(fun, config);
            }
            else if (answer.choice === 'Continue' && fun && config && config.length > 0) {
                console.log(this.#errorMarkColor(logSymbols.warning), this.#errorColor('Continued execution with the failed call.'));
                this.executor.execute(fun, config);
            }
            else {
                console.log(this.#errorMarkColor(logSymbols.error), this.#exitColor('Exited with incomplete execution.'));
                return 1;
            }
        });
    }
    printErrorData(fun, config) {
        console.log(this.#errorMarkColor(logSymbols.warning), this.#errorColor(this.error ? `${this.error}` : `Couldn't retrieve data for this error.`));
        this.errorPrompt(errorQuestion, fun, config);
    }
}
