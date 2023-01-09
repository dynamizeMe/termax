import process from "process";
import { ExecuteConfig, ExecuteConfigFactory } from "./execute-config.js";
import { execute } from "./executor.js";
import chalk from 'chalk';
import {modifierNames, foregroundColorNames} from 'chalk';

//****************************TEST********************************/
const tests: ExecuteConfig[] = [
  {
    cmd: "ng",
    args: ["new", "ccms", "--create-application=false"],
    spinner: {
      spinner: "dots",
    },
    callback: function () {
      process.chdir("./ccms");
    },
  },
  {
    cmd: "ng",
    args: ["generate", "application", "host"],
    spinner: {
      spinner: "arrow",
      spawnText: {
        text: "Adding application"
      },
      succeedText:
      {
        text: "Succusefully added application"
      },
    },
  },
];

// const toExecute: executeConfig[] = [
//   ExecuteConfigFactory({
//     cmd: "ng",
//     args: ["new", "ccms", "--create-application=false"],
//     spinner: {
//       spinner: "dots",
//       spawnText: "Initializing Workspace",
//       succeedText: "Succusefully initiated workspace",
//       color: "yellow",
//       indent: 0,
//     },
//     callback: function () {
//       process.chdir("./ccms");
//     },
//   }),
//   ExecuteConfigFactory({
//     cmd: "ng",
//     args: ["generate", "application", "host"],
//     spinner: {
//       spinner: "arrow",
//       spawnText: "Adding application",
//       succeedText: "Succusefully added application",
//       color: "blue",
//       indent: 2,
//     },
//   })
// ]

// console.log(commands);

execute(tests);


const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

// Use RGB colors in terminal emulators that support it.
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));

const name = 'Sindre';
console.log(chalk.green('Hello %s'), name);

console.log(modifierNames.includes('bold'));
// console.log(foregroundColorNames.includes('pink'));
