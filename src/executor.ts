import ora from "ora";
import { spawn } from "child_process";
import { checkConfig } from "./checker.js";
import { executeConfig } from "./execute-config.js";

export function execute(cmds: executeConfig[]): void {
  if (!checkConfig(cmds[0])) {
    throw new Error(`Incorect configuration: ${cmds[0]}`);
  }
  if (cmds.length === 0) {
    console.log("All Done.");
    return;
  } else {

    const spinner = ora({
      discardStdin: false,
      text: cmds[0]?.spinner.spawnText || "",
      spinner: cmds[0]?.spinner.spinner || "dots2",
      color: cmds[0]?.spinner.color || "green",
      indent: cmds[0]?.spinner.indent || 0,
    }).start();

    const cmd = spawn(cmds[0].cmd, cmds[0].args);

    cmd.on("spawn", () => {});

    if (cmds[0]?.showData) {
      cmd.stdout.on("data", (data) => {
        console.log(`${data}`);
      });
    }

    cmd.stdout.on("pause", () => {
      spinner.warn(cmds[0].pauseText);
    });

    if (cmds[0]?.showDisconnect ) {
      cmd.on("disconnect", () => {
        console.log(cmds[0].disconnectText);
      });
    }

    if (cmds[0]?.showMessage) {
      cmd.on("message", (data) => {
        console.log(
          `${cmds[0].messageText} ${data}`
        );
      });
    }

    cmd.on("error", (err) => {
      spinner.fail(`${cmds[0].errorText}: ${err.name}`);
    });

    cmd.on("close", () => {
      spinner.succeed(cmds[0]?.spinner.succeedText || "");

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
