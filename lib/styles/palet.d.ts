import { ChalkInstance } from "chalk";
import { StyleConfig } from "./style-config.js";
export type Palet = {
    errorColor: ChalkInstance;
    warrningColor: ChalkInstance;
    spawnColor: ChalkInstance;
    succeedColor: ChalkInstance;
    pausedcolor: ChalkInstance;
    messageColor: ChalkInstance;
    textColor: ChalkInstance;
};
export declare function customPaletMacker(styleConfig: StyleConfig): Palet;
