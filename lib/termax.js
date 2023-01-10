import { execute } from "./executor/executor.js";
//****************************TEST********************************/
const tests = [
    {
        cmd: "sleep",
        args: ["5"]
    },
    {
        cmd: "sleep",
        args: ["5"],
        spinner: {
            style: "pale",
            spinner: "dots6",
            color: 'blue',
            spawnText: {
                accent: "Prc",
                text: "Milojka",
            },
            succeedText: {
                text: "Succusefully added application"
            },
        },
    },
    {
        cmd: "sleep",
        args: ["5"],
        spinner: {
            style: "vivid",
        },
    },
    {
        cmd: "sleep",
        args: ["5"],
        spinner: {
            style: "custom",
            styleConfig: {
                spawnColor: '#fc003f',
                succeedColor: '#0800fc',
                textColor: '#b5fc00'
            }
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
