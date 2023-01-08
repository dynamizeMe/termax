import ora from "ora";
import { spawn } from "child_process";
import { checkConfig } from "./checker.js";
export function execute(cmds) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (!checkConfig(cmds[0])) {
        throw new Error(`Incorect configuration: ${cmds[0]}`);
    }
    if (cmds.length === 0) {
        console.log("All Done.");
        return;
    }
    else {
        const spinner = ora({
            discardStdin: false,
            text: ((_a = cmds[0]) === null || _a === void 0 ? void 0 : _a.spinner.spawnText) || "",
            spinner: ((_b = cmds[0]) === null || _b === void 0 ? void 0 : _b.spinner.spinner) || "dots2",
            color: ((_c = cmds[0]) === null || _c === void 0 ? void 0 : _c.spinner.color) || "green",
            indent: ((_d = cmds[0]) === null || _d === void 0 ? void 0 : _d.spinner.indent) || 0,
        }).start();
        const cmd = spawn(cmds[0].cmd, cmds[0].args);
        cmd.on("spawn", () => { });
        if ((_e = cmds[0]) === null || _e === void 0 ? void 0 : _e.showData) {
            cmd.stdout.on("data", (data) => {
                console.log(`${data}`);
            });
        }
        cmd.stdout.on("pause", () => {
            spinner.warn(cmds[0].pauseText);
        });
        if ((_f = cmds[0]) === null || _f === void 0 ? void 0 : _f.showDisconnect) {
            cmd.on("disconnect", () => {
                console.log(cmds[0].disconnectText);
            });
        }
        if ((_g = cmds[0]) === null || _g === void 0 ? void 0 : _g.showMessage) {
            cmd.on("message", (data) => {
                console.log(`${cmds[0].messageText} ${data}`);
            });
        }
        cmd.on("error", (err) => {
            spinner.fail(`${cmds[0].errorText}: ${err.name}`);
        });
        cmd.on("close", () => {
            var _a;
            spinner.succeed(((_a = cmds[0]) === null || _a === void 0 ? void 0 : _a.spinner.succeedText) || "");
            if (cmds[0].callback) {
                cmds[0].callback();
            }
            cmds.shift();
            if (cmds.length > 0 && !spinner.isSpinning) {
                execute(cmds);
            }
        });
    }
}
