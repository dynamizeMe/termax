import { SpinnerConfig, SpinnerConfigFactory } from "../spinner/spinner-config.js";

export type ExecuteConfig = {
  cmd: string;
  args: string[];
  spinner?: Partial<SpinnerConfig>;
  callback?: Function;
};

export const ExecuteConfigFactory = (config: Partial<ExecuteConfig>): ExecuteConfig => {
  const {cmd, args, spinner, callback } = config;
  try {
    return {
      cmd: cmd || "",
      args: args || [],
      spinner: spinner,
      callback: callback,
    };
  } catch {
    throw new Error(
      !config.cmd ? "Command is required." : "Arguments are requierd."
    );
  }
};
