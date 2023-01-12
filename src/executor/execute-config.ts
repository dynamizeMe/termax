import { SpinnerConfig } from "../spinner/spinner-config.js";

export type ExecuteConfig = {
  cmd: string;
  args: string[];
  handleErrors: boolean;
  spinner?: Partial<SpinnerConfig>;
  callback?: Function;
};

//TODO unnecessary code to be removed
export const ExecuteConfigFactory = (config: Partial<ExecuteConfig>): ExecuteConfig => {

  try {
    const {cmd, args, handleErrors, spinner, callback } = config;
    return {
      cmd: cmd || "",
      args: args || [],
      handleErrors: handleErrors || false,
      spinner: spinner,
      callback: callback,
    };
  } catch {
    throw new Error(
      !config.cmd ? "Command is required." : "Arguments are requierd."
    );
  }
};
