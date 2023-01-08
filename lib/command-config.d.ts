import { SpinnerConfig } from "./spinner-config.js";
export type CommandConfig = {
    cmd: string;
    args: string[];
    spinner: SpinnerConfig;
    callback?: Function;
};
