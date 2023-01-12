import inquirer from "inquirer";
import chalk from "chalk";
import { Question } from "./question.js";
import { DefaultColors } from "../styles/color-sets.js";

const messageColor = chalk.hex(DefaultColors.ORANGE);

export const errorQuestion: Question[] = [
  {
    type: 'list',
    name: 'choice',
    message: messageColor('How would you like to proceed?'),
    loop: true,
    waitUserInput: true,
    choices: [
      'Continue',
      'See Error',
      'Abort',
      new inquirer.Separator(),
    ],
  },
]
