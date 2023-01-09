import ora from "ora";
import { spawn } from "child_process";
import { checkConfig } from "./checker.js";
import { styleMaker } from "./styles.js";
export function execute(configs) {
    var _a, _b;
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
            text: `${(_a = config.spinner.spawnText) === null || _a === void 0 ? void 0 : _a.accent}: ${(_b = config.spinner.spawnText) === null || _b === void 0 ? void 0 : _b.text}` || "",
            spinner: config.spinner.spinner || "dots2",
            color: config.spinner.color || "green",
            indent: config.spinner.indent || 0,
        }).start();
        const cmd = spawn(config.cmd, config.args);
        if (config.spinner.showData) {
            cmd.stdout.on("data", (data) => {
                console.log(`${data}`);
            });
        }
        cmd.stdout.on("pause", () => {
            var _a, _b;
            spinner.warn(`${(_a = configs[0].spinner.pauseText) === null || _a === void 0 ? void 0 : _a.accent}: ${(_b = configs[0].spinner.pauseText) === null || _b === void 0 ? void 0 : _b.text}` || '');
        });
        if (config.spinner.showDisconnect) {
            cmd.on("disconnect", () => {
                var _a, _b;
                console.log(`${(_a = configs[0].spinner.disconnectText) === null || _a === void 0 ? void 0 : _a.accent}: ${(_b = configs[0].spinner.disconnectText) === null || _b === void 0 ? void 0 : _b.text}`);
            });
        }
        if (config.spinner.showMessage) {
            cmd.on("message", (data) => {
                var _a, _b;
                console.log(`${(_a = configs[0].spinner.messageText) === null || _a === void 0 ? void 0 : _a.accent}: ${(_b = configs[0].spinner.messageText) === null || _b === void 0 ? void 0 : _b.text} - ${data}`);
            });
        }
        cmd.on("error", (err) => {
            var _a, _b;
            spinner.fail(`${(_a = config.spinner.errorText) === null || _a === void 0 ? void 0 : _a.accent}: ${(_b = config.spinner.errorText) === null || _b === void 0 ? void 0 : _b.text} - ${err.name}`);
        });
        cmd.on("close", () => {
            var _a, _b;
            spinner.succeed(`${(_a = config.spinner.succeedText) === null || _a === void 0 ? void 0 : _a.accent}: ${(_b = config.spinner.succeedText) === null || _b === void 0 ? void 0 : _b.text}` || "");
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
