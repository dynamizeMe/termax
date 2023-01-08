import ora from "ora";
import { spawn } from "child_process";
import process from "process";
import { spinners } from "./spinners.js";
import { colors } from "./colors.js";
function test(cmds) {
    var _a, _b, _c, _d;
    if (!checkCommandConfig(cmds[0])) {
        throw new Error('Incorect configuration.');
    }
    if (cmds.length === 0) {
        console.log("All Done.");
        return;
    }
    else {
        console.log(checkCommandConfig(cmds[0]));
        const spinner = ora({
            discardStdin: false,
            text: ((_a = cmds[0]) === null || _a === void 0 ? void 0 : _a.spinner.spawnText) || '',
            spinner: ((_b = cmds[0]) === null || _b === void 0 ? void 0 : _b.spinner.spinner) || 'dots2',
            color: ((_c = cmds[0]) === null || _c === void 0 ? void 0 : _c.spinner.color) || 'green',
            indent: ((_d = cmds[0]) === null || _d === void 0 ? void 0 : _d.spinner.indent) || 0,
        }).start();
        const cmd = spawn(cmds[0].cmd, cmds[0].args);
        cmd.on("spawn", () => { });
        cmd.on("error", (err) => {
            spinner.fail(err.name);
        });
        cmd.stdout.on("data", (data) => {
            // console.log(`\nstdout: ${data}`);
        });
        cmd.on("disconnect", () => {
            console.log("Disconnect");
        });
        cmd.on("message", () => {
            console.log("Message");
        });
        cmd.on("close", () => {
            var _a;
            spinner.succeed(((_a = cmds[0]) === null || _a === void 0 ? void 0 : _a.spinner.succeedText) || '');
            if (cmds[0].callback) {
                cmds[0].callback();
            }
            cmds.shift();
            if (cmds.length > 0 && !spinner.isSpinning) {
                test(cmds);
            }
        });
    }
}
function checkCommandConfig(obj) {
    const requiredProperties = ['cmd', 'args', 'spinner'];
    const objProperties = Object.keys(obj);
    const hasAllProperties = objProperties.every((prop) => {
        return prop === 'callback' ? true : requiredProperties.includes(prop);
    });
    const isSpinnerProper = checkSpinnerConfig(obj === null || obj === void 0 ? void 0 : obj.spinner);
    return hasAllProperties && isSpinnerProper;
}
function checkSpinnerConfig(obj) {
    const requiredProperties = ['spinner', 'spawnText', 'succeedText', 'color', 'indent'];
    const objProperties = Object.keys(obj);
    const hasAllProperties = objProperties.every((prop) => { return requiredProperties.includes(prop); });
    const isSpinnerProper = spinners.includes(obj === null || obj === void 0 ? void 0 : obj.spinner);
    const isColorProper = colors.includes(obj === null || obj === void 0 ? void 0 : obj.color);
    return hasAllProperties && isSpinnerProper && isColorProper;
}
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
test(commands);
