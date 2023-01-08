import ora from "ora";
import process from "process";
import { spawn } from "child_process";
import { CommandConfig } from "./command-config.js";
import { checkCommandConfig } from "./checker.js";

function test(cmds: CommandConfig[]): void {
  if(!checkCommandConfig(cmds[0])) {
    throw new Error(`Incorect configuration: ${cmds[0]}`);
  }
  if (cmds.length === 0) {
    console.log("All Done.");
    return;
  } else {
    const spinner = ora({
      discardStdin: false,
      text: cmds[0]?.spinner.spawnText || '',
      spinner: cmds[0]?.spinner.spinner || 'dots2',
      color: cmds[0]?.spinner.color || 'green',
      indent: cmds[0]?.spinner.indent || 0,
    }).start();

    const cmd = spawn(cmds[0].cmd, cmds[0].args);

    cmd.on("spawn", () => {});

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
      spinner.succeed(cmds[0]?.spinner.succeedText || '');

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




//****************************TEST********************************/
const commands: CommandConfig[] = [
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
