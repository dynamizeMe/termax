import inquirer from "inquirer";
import chalk from "chalk";
import { DefaultColors } from "../styles/color-sets.js";
const messageColor = chalk.hex(DefaultColors.ORANGE);
export const errorQuestion = [
    {
        type: 'list',
        name: 'error',
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
];
