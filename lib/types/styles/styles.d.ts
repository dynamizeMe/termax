import { ExecuteConfig } from "../executor/execute-config.js";
import { Palet } from "./palet.js";
import { StyleConfig } from "./style-config.js";
export declare function styleMaker(data: Partial<ExecuteConfig>): ExecuteConfig;
export declare function customPaletMacker(styleConfig: StyleConfig): Palet;
