import chalk from "chalk";
import inquirer from "inquirer";
import { DefaultColors } from "../styles/color-sets.js";
import { errorQuestion } from "./error-question.js";
import { Question } from "./question.js";

export class ErrorHandler {
  #stackColor = chalk.hex(DefaultColors.PURPLE);
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
      if (answer.error === "See Stack") {
        this.printStack();
      } else if (answer.error === "Continue" && callback && arg && arg.length > 0) {
        callback(arg);
      } else {
        
        return 1;
      }
    });
  }

  printStack() {
    console.log(this.#stackColor(`\n${this.error}\n` || `\nThis error has no stack.\n`));
    this.errorPrompt(errorQuestion);
  }
}
