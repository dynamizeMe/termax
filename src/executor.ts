import ora from "ora";
import { spawn } from "child_process";
import { checkConfig } from "./checker.js";
import { ExecuteConfig } from "./execute-config.js";
import { styleMaker } from "./styles.js";

export function execute(configs: ExecuteConfig[]): void {
  const config = styleMaker('default', configs[0]);
  if (!checkConfig(config)) {
    throw new Error(`Incorect configuration: ${configs[0]}`);
  }
  if (configs.length === 0) {
    console.log("All Done.");
    return;
  } else {
    const spinner = ora({
      discardStdin: false,
      text: `${config.spinner.spawnText?.accent}: ${config.spinner.spawnText?.text}` || "",
      spinner: config.spinner.spinner || "dots2",
      color: config.spinner.color || "green",
      indent: config.spinner.indent || 0,
    }).start();

    const cmd = spawn(config.cmd, config.args);

    if (config.showData) {
      cmd.stdout.on("data", (data) => {
        console.log(`${data}`);
      });
    }

    cmd.stdout.on("pause", () => {
      spinner.warn(`${configs[0].pauseText?.accent}: ${configs[0].pauseText?.text}` || '');
    });

    if (config.showDisconnect ) {
      cmd.on("disconnect", () => {
        console.log(`${configs[0].disconnectText?.accent}: ${configs[0].disconnectText?.text}`);
      });
    }

    if (config.showMessage) {
      cmd.on("message", (data) => {
        console.log(
          `${configs[0].messageText?.accent}: ${configs[0].messageText?.text} - ${data}`
        );
      });
    }

    cmd.on("error", (err) => {
      spinner.fail(`${config.errorText?.accent}: ${config.errorText?.text} - ${err.name}`);
    });

    cmd.on("close", () => {
      spinner.succeed(`${config.spinner.succeedText?.accent}: ${config.spinner.succeedText?.text}` || "");

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
