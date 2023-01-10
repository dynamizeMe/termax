import { SpinnerConfig } from "../spinner/spinner-config.js";

export type ExecuteConfig = {
  cmd: string;
  args: string[];
  spinner?: SpinnerConfig;
  callback?: Function;
};

export const ExecuteConfigFactory = (config: ExecuteConfig): ExecuteConfig => {
  try {
    return {
      cmd: config?.cmd || "",
      args: config?.args || [],
      spinner: {
        spinner: config.spinner?.spinner || "dots",
        spawnText: {
          accent: config.spinner?.spawnText?.accent || "Executing",
          text:
            config.spinner?.spawnText?.text ||
            `${config.cmd} ${config.args?.join(" ")}`,
        },
        succeedText: {
          accent: config.spinner?.succeedText?.accent || "Success executing",
          text:
            config.spinner?.succeedText?.text ||
            `${config.cmd} ${config.args?.join(" ")}`,
        },
        messageText: {
          accent: config.spinner?.messageText?.accent || "MESSAGE",
          text:
            config.spinner?.messageText?.text ||
            `${config.cmd} ${config.args ? config?.args.join(" ") : ""}:`,
        },
        disconnectText: {
          accent: config.spinner?.messageText?.accent || "DISCONNECT",
          text:
            config.spinner?.messageText?.text ||
            `${config.cmd} ${config.args ? config?.args.join(" ") : ""}`,
        },
        pauseText: {
          accent: config.spinner?.pauseText?.accent || "PAUSED",
          text:
            config.spinner?.pauseText?.text ||
            `${config.cmd} ${config.args ? config?.args.join(" ") : ""}`,
        },
        errorText: {
          accent: config.spinner?.errorText?.accent || "ERROR",
          text:
            config.spinner?.errorText?.text ||
            `${config.cmd} ${config.args ? config?.args.join(" ") : ""}`,
        },
        color: config.spinner?.color || "green",
        indent: config.spinner?.indent || 0,
        showMessage: config.spinner?.showMessage || false,
        showDisconnect: config.spinner?.showDisconnect || false,
        showData: config.spinner?.showData || false,
      },

      callback: config.callback,
    };
  } catch {
    throw new Error(
      !config.cmd ? "Command is required." : "Arguments are requierd."
    );
  }
};
