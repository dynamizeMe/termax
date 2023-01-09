import process from "process";
import { execute } from "./executor.js";
//****************************TEST********************************/
const tests = [
    {
        cmd: "ng",
        args: ["new", "ccms", "--create-application=false"],
        spinner: {
            spinner: "dots",
            spawnText: {
                accent: "Prc",
                text: "Paz da ti kazem",
            },
            succeedText: {
                accent: 'Damn Right',
                text: 'Ya baby'
            }
        },
        callback: function () {
            process.chdir("./ccms");
        },
    },
    {
        cmd: "ng",
        args: ["generate", "application", "host"],
        spinner: {
            spinner: "dots6",
            color: 'blue',
            indent: 6,
            spawnText: {
                accent: "Prc",
                text: "Milojka",
            },
            succeedText: {
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
