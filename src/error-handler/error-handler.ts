import chalk from "chalk";
import inquirer from "inquirer";
import { DefaultColors } from "../styles/color-sets.js";
import { errorQuestion } from "./error-question.js";
import { Question } from "./question.js";
import { failMark } from "../marks/marks.js";

export class ErrorHandler {
  #errorColor = chalk.hex(DefaultColors.PURPLE);
  #exitColor = chalk.hex(DefaultColors.RED);
  #errorMarkColor = chalk.hex(DefaultColors.YELLOW);
  #hasError: boolean = false;
  #error: any;

  handleError(callback?: Function, arg?: any) {
    return this.errorPrompt(errorQuestion, callback, arg);
  }

  get hasError(): boolean {
    return this.#hasError;
  }

  set hasError(val: boolean) {
    this.#hasError = val;
  }

  get error() {
    return this.#error;
  }

  set error(err: any) {
    this.#error = err;
  }

  errorPrompt(question: Question[], callback?: Function, arg?: any): any {
    inquirer.prompt(question).then((answer) => {
      if (answer.error === "See Error") {
        this.printErrorData(callback, arg);
      } else if (
        answer.error === "Continue" &&
        callback &&
        arg &&
        arg.length > 0
      ) {
        callback(arg);
      } else {
        console.log(this.#errorMarkColor(failMark), this.#exitColor("Exited with incomplete execution."));
        return 1;
      }
    });
  }

  printErrorData(callback?: Function, arg?: any) {
    console.log(this.#errorMarkColor(failMark), this.#errorColor(`${this.error}` || `This error has no data.`));
    this.errorPrompt(errorQuestion, callback, arg);
  }
}
