import process from "process";
import { ExecuteConfigFactory } from "./execute-config.js";
//****************************TEST********************************/
const commands = [
    {
        cmd: "ng",
        args: ["new", "ccms", "--create-application=false"],
        spinner: {
            spinner: "dots",
            spawnText: "Initializing Workspace",
            succeedText: "Succusefully initiated workspace",
            color: "yellow",
            indent: 0,
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
            spawnText: "Adding application",
            succeedText: "Succusefully added application",
            color: "blue",
            indent: 2,
        },
    },
];
const toExecute = [
    ExecuteConfigFactory({
        cmd: "ng",
        args: ["new", "ccms", "--create-application=false"],
        spinner: {
            spinner: "dots",
            spawnText: "Initializing Workspace",
            succeedText: "Succusefully initiated workspace",
            color: "yellow",
            indent: 0,
        },
        callback: function () {
            process.chdir("./ccms");
        },
    }),
    ExecuteConfigFactory({
        cmd: "ng",
        args: ["generate", "application", "host"],
        spinner: {
            spinner: "arrow",
            spawnText: "Adding application",
            succeedText: "Succusefully added application",
            color: "blue",
            indent: 2,
        },
    })
];
console.log(toExecute);
// execute(toExecute);
