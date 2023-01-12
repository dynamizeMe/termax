import chalk from "chalk";
import { ExecuteConfigFactory, } from "../executor/execute-config.js";
import { styleMap } from "./style-map.js";
import { SpinnerConfigFactory } from "../spinner/spinner-config.js";
import { DefaultColors } from "./color-sets.js";
export function styleMaker(data) {
    return applyStyle(data);
}
function paletMaker(style, styleConfig) {
    return style === "custom" && !!styleConfig
        ? customPaletMacker(styleConfig)
        : styleMap.get(style);
}
export function customPaletMacker(styleConfig) {
    return {
        errorColor: (styleConfig.errorColor) ? chalk.hex(styleConfig.errorColor) : chalk.hex(DefaultColors.RED),
        warrningColor: (styleConfig.warrningColor) ? chalk.hex(styleConfig.warrningColor) : chalk.hex(DefaultColors.ORANGE),
        spawnColor: (styleConfig.spawnColor) ? chalk.hex(styleConfig.spawnColor) : chalk.hex(DefaultColors.YELLOW),
        succeedColor: (styleConfig.succeedColor) ? chalk.hex(styleConfig.succeedColor) : chalk.hex(DefaultColors.GREEN),
        pausedcolor: (styleConfig.pausedcolor) ? chalk.hex(styleConfig.pausedcolor) : chalk.hex(DefaultColors.ORANGE),
        messageColor: (styleConfig.messageColor) ? chalk.hex(styleConfig.messageColor) : chalk.hex(DefaultColors.PURPLE),
        textColor: (styleConfig.textColor) ? chalk.hex(styleConfig.textColor) : chalk.hex(DefaultColors.PINK),
    };
}
function applyStyle(data) {
    var _a, _b, _c;
    const config = ExecuteConfigFactory(data);
    const spinner = SpinnerConfigFactory(config);
    const style = spinner.style;
    const palet = paletMaker(style, (_a = data.spinner) === null || _a === void 0 ? void 0 : _a.styleConfig);
    spinner.succeedText.accent = palet === null || palet === void 0 ? void 0 : palet.succeedColor(spinner.succeedText.accent);
    spinner.spawnText.text = palet === null || palet === void 0 ? void 0 : palet.textColor((_b = spinner.spawnText) === null || _b === void 0 ? void 0 : _b.text);
    spinner.spawnText.accent = palet.spawnColor(spinner.spawnText.accent);
    spinner.succeedText.text = palet.textColor(spinner.succeedText.text);
    spinner.errorText.accent = palet.errorColor((_c = spinner.errorText) === null || _c === void 0 ? void 0 : _c.accent);
    spinner.errorText.text = palet.textColor(spinner.errorText.text);
    config.spinner = spinner;
    return config;
}
