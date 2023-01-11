import ora from "ora";
import { spawn } from "child_process";
import { checkConfig } from "../checker/checker.js";
import { ExecuteConfig } from "./execute-config.js";
import { styleMaker } from "../styles/styles.js";
import { ErrorHandler } from "../error-handler/error-handler.js";

export function Execute(configs: ExecuteConfig[]): void {
  const config = styleMaker(configs[0]);
  if (!checkConfig(config)) {
    throw new Error(`Incorect configuration: ${configs[0]}`);
  }
  if (configs.length === 0) {
    console.log("All Done.");
    return;
  } else {
    const errorHandler = new ErrorHandler();
    const spinner = ora({
      discardStdin: false,
      text:
        `${config.spinner?.spawnText?.accent}: ${config.spinner?.spawnText?.text}` ||
        "",
      spinner: config.spinner?.spinner || "dots2",
      color: config.spinner?.color || "green",
      indent: config.spinner?.indent || 0,
    }).start();

    const cmd = spawn(config.cmd, config.args);

    if (config.spinner?.showData) {
      cmd.stdout.on("data", (data) => {
        console.log(`${data}`);
      });
    }

    cmd.stdout.on("pause", () => {
      spinner.warn(
        `${configs[0].spinner?.pauseText?.accent}: ${configs[0].spinner?.pauseText?.text}` ||
          ""
      );
    });

    if (config.spinner?.showDisconnect) {
      cmd.on("disconnect", () => {
        console.log(
          `${configs[0].spinner?.disconnectText?.accent}: ${configs[0].spinner?.disconnectText?.text}`
        );
      });
    }

    if (config.spinner?.showMessage) {
      cmd.on("message", (data) => {
        console.log(
          `${configs[0].spinner?.messageText?.accent}: ${configs[0].spinner?.messageText?.text} - ${data}`
        );
      });
    }

    cmd.on("error", (err) => {
      errorHandler.hasError = true;
      errorHandler.error = err;
    });

    cmd.on("close", () => {
      if (!errorHandler.hasError) {
        spinner.succeed(
          `${config.spinner?.succeedText?.accent}: ${config.spinner?.succeedText?.text}` ||
            ""
        );

        if (config.callback) {
          config.callback();
        }

        shift(configs, spinner);
      } else {
        spinner.fail(
          `${config.spinner?.errorText?.accent}: ${config.spinner?.errorText?.text}`
        );
        configs.shift();
        errorHandler.handleError(Execute, configs);
      }
    });
  }
}

function shift(configs: ExecuteConfig[], spinner: any) {
  configs.shift();
  if (configs.length > 0 && !spinner.isSpinning) {
    Execute(configs);
  }
}
