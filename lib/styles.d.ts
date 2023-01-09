import { ExecuteConfig } from './execute-config.js';
export type StyleText = {
    text: string;
    accent?: string;
};
export declare enum DefaultColors {
    GREEN = "#03fcd7",
    RED = "#fc038c",
    ORANGE = "#fc9803",
    BLUE = "#03a9fc",
    YELLOW = "#f5d36e",
    PURPLE = "#a46ef5"
}
export declare const defaultWarrning: import("chalk").ChalkInstance;
export declare const defaultError: import("chalk").ChalkInstance;
export declare const defaultMessage: import("chalk").ChalkInstance;
export declare const defaultSucess: import("chalk").ChalkInstance;
export declare const defaultData: import("chalk").ChalkInstance;
export declare const defaultStart: import("chalk").ChalkInstance;
export declare function styleMaker(style: string, data: ExecuteConfig): ExecuteConfig;
