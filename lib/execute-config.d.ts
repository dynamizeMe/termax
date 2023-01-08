import { SpinnerConfig } from "./spinner-config.js";
export type executeConfig = {
    cmd: string;
    args: string[];
    spinner: SpinnerConfig;
    showMessage?: boolean;
    showDisconnect?: boolean;
    showData?: boolean;
    messageText?: string;
    disconnectText?: string;
    pauseText?: string;
    errorText?: string;
    callback?: Function;
};
export declare const ExecuteConfigFactory: (config: Partial<executeConfig>) => executeConfig;
