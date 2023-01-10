import ora from "ora";
import { spawn } from "child_process";
import { checkConfig } from "../checker/checker.js";
import { styleMaker } from "../styles/styles.js";
export function execute(configs) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const config = styleMaker(configs[0]);
    if (!checkConfig(config)) {
        throw new Error(`Incorect configuration: ${configs[0]}`);
    }
    if (configs.length === 0) {
        console.log("All Done.");
        return;
    }
    else {
        const spinner = ora({
            discardStdin: false,
            text: `${(_b = (_a = config.spinner) === null || _a === void 0 ? void 0 : _a.spawnText) === null || _b === void 0 ? void 0 : _b.accent}: ${(_d = (_c = config.spinner) === null || _c === void 0 ? void 0 : _c.spawnText) === null || _d === void 0 ? void 0 : _d.text}` || "",
            spinner: ((_e = config.spinner) === null || _e === void 0 ? void 0 : _e.spinner) || "dots2",
            color: ((_f = config.spinner) === null || _f === void 0 ? void 0 : _f.color) || "green",
            indent: ((_g = config.spinner) === null || _g === void 0 ? void 0 : _g.indent) || 0,
        }).start();
        const cmd = spawn(config.cmd, config.args);
        if ((_h = config.spinner) === null || _h === void 0 ? void 0 : _h.showData) {
            cmd.stdout.on("data", (data) => {
                console.log(`${data}`);
            });
        }
        cmd.stdout.on("pause", () => {
            var _a, _b, _c, _d;
            spinner.warn(`${(_b = (_a = configs[0].spinner) === null || _a === void 0 ? void 0 : _a.pauseText) === null || _b === void 0 ? void 0 : _b.accent}: ${(_d = (_c = configs[0].spinner) === null || _c === void 0 ? void 0 : _c.pauseText) === null || _d === void 0 ? void 0 : _d.text}` || '');
        });
        if ((_j = config.spinner) === null || _j === void 0 ? void 0 : _j.showDisconnect) {
            cmd.on("disconnect", () => {
                var _a, _b, _c, _d;
                console.log(`${(_b = (_a = configs[0].spinner) === null || _a === void 0 ? void 0 : _a.disconnectText) === null || _b === void 0 ? void 0 : _b.accent}: ${(_d = (_c = configs[0].spinner) === null || _c === void 0 ? void 0 : _c.disconnectText) === null || _d === void 0 ? void 0 : _d.text}`);
            });
        }
        if ((_k = config.spinner) === null || _k === void 0 ? void 0 : _k.showMessage) {
            cmd.on("message", (data) => {
                var _a, _b, _c, _d;
                console.log(`${(_b = (_a = configs[0].spinner) === null || _a === void 0 ? void 0 : _a.messageText) === null || _b === void 0 ? void 0 : _b.accent}: ${(_d = (_c = configs[0].spinner) === null || _c === void 0 ? void 0 : _c.messageText) === null || _d === void 0 ? void 0 : _d.text} - ${data}`);
            });
        }
        cmd.on("error", (err) => {
            var _a, _b, _c, _d;
            spinner.fail(`${(_b = (_a = config.spinner) === null || _a === void 0 ? void 0 : _a.errorText) === null || _b === void 0 ? void 0 : _b.accent}: ${(_d = (_c = config.spinner) === null || _c === void 0 ? void 0 : _c.errorText) === null || _d === void 0 ? void 0 : _d.text} - ${err.name}`);
        });
        cmd.on("close", () => {
            var _a, _b, _c, _d;
            spinner.succeed(`${(_b = (_a = config.spinner) === null || _a === void 0 ? void 0 : _a.succeedText) === null || _b === void 0 ? void 0 : _b.accent}: ${(_d = (_c = config.spinner) === null || _c === void 0 ? void 0 : _c.succeedText) === null || _d === void 0 ? void 0 : _d.text}` || "");
            if (config.callback) {
                config.callback();
            }
            configs.shift();
            if (configs.length > 0 && !spinner.isSpinning) {
                execute(configs);
            }
        });
    }
}
