import { SpinnerConfig } from "./spinner-config.js";
export type ExecuteConfig = {
    cmd: string;
    args: string[];
    spinner: SpinnerConfig;
    callback?: Function;
};
export declare const ExecuteConfigFactory: (config: ExecuteConfig) => ExecuteConfig;
