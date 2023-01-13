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
      if (answer.choice === "See Error") {
        this.printErrorData(callback, config);
      } else if (
        answer.choice === "Continue" &&
        callback &&
        fun &&
        config &&
        config.length > 0
      ) {
        callback(fun, config);
      } else {
        console.log(this.#errorMarkColor(failMark), this.#exitColor("Exited with incomplete execution."));
        return 1;
      }
    });
  }

  printErrorData(callback?: Function, fun?: Function, config?: any) {
    console.log(this.#errorMarkColor(failMark), this.#errorColor(`${this.error}` || `This error has no data.`));
    this.errorPrompt(errorQuestion, callback, fun, config);
  }
}
