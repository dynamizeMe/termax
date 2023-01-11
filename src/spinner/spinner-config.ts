import { Color } from "ora";
import { SpinnerName } from "cli-spinners";
import { StyleName } from "../styles/style-name.js";
import { StyleText } from "../styles/style-text.js";
import { StyleConfig } from "../styles/style-config.js";
import { ExecuteConfig } from "../executor/execute-config.js";

export type SpinnerConfig = {
  spinner: SpinnerName;
  style: StyleName;
  spawnText: StyleText;
  succeedText: StyleText;
  showMessage: boolean;
  showDisconnect: boolean;
  showData: boolean;
  messageText: StyleText;
  disconnectText: StyleText;
  pauseText: StyleText;
  errorText: StyleText;
  color: Color;
  indent: number;
  styleConfig?: StyleConfig;
};

export const SpinnerConfigFactory  = (config: Partial<ExecuteConfig>): SpinnerConfig => {
  try {
    return {
        spinner: config.spinner?.spinner || "dots",
        style: config.spinner?.style || "default",
        spawnText: {
          accent: config.spinner?.spawnText?.accent || "EXECUTING",
          text:
            config.spinner?.spawnText?.text ||
            `${config.cmd} ${config.args?.join(" ")}`,
        },
        succeedText: {
          accent: config.spinner?.succeedText?.accent || "COMPLETED EXECUTING",
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
      }
  }
  catch {
    throw new Error("Spinner configuration incorrect.");
  }
};
