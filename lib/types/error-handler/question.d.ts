import inquirer from "inquirer";
export type Question = {
    type: string;
    message: string;
    name: string;
    loop: boolean;
    waitUserInput: boolean;
    choices: (string | inquirer.Separator)[];
};
