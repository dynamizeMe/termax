import { ExecuteConfig } from "./execute-config.js";
export type StyleName = "default" | "custom" | "none";
export type StyleText = {
    text: string;
    accent?: string;
};
export declare function styleMaker(data: ExecuteConfig): ExecuteConfig;
