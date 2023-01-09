import { SpinnerConfig } from "./spinner-config.js";
import { StyleText } from "./styles.js";
export type ExecuteConfig = {
    cmd: string;
    args: string[];
    spinner: SpinnerConfig;
    showMessage?: boolean;
    showDisconnect?: boolean;
    showData?: boolean;
    messageText?: StyleText;
    disconnectText?: StyleText;
    pauseText?: StyleText;
    errorText?: StyleText;
    callback?: Function;
};
export declare const ExecuteConfigFactory: (config: Partial<ExecuteConfig>) => ExecuteConfig;
