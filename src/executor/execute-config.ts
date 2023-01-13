import { SpinnerConfig } from "../spinner/spinner-config.js";

export type ExecuteConfig = {
  cmd: string;
  args: string[];
  handleErrors: boolean;
  spinner?: Partial<SpinnerConfig>;
  callback?: Function;
};

export const ExecuteConfigFactory = (config: Partial<ExecuteConfig>): ExecuteConfig => {
  const {cmd, args, handleErrors, spinner, callback } = config;
  return {
    cmd: cmd || "",
    args: args || [],
    handleErrors: handleErrors || false,
    spinner: spinner,
    callback: callback,
  };
};
