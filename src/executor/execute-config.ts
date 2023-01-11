import { SpinnerConfig, SpinnerConfigFactory } from "../spinner/spinner-config.js";

export type ExecuteConfig = {
  cmd: string;
  args: string[];
  spinner?: Partial<SpinnerConfig>;
  callback?: Function;
};

export const ExecuteConfigFactory = (config: Partial<ExecuteConfig>): ExecuteConfig => {
  try {
    return {
      cmd: config?.cmd || "",
      args: config?.args || [],
      spinner: config.spinner,
      callback: config.callback,
    };
  } catch {
    throw new Error(
      !config.cmd ? "Command is required." : "Arguments are requierd."
    );
  }
};
