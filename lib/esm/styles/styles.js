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
    const config = ExecuteConfigFactory(data);
    const spinner = SpinnerConfigFactory(config).spinner;
    const style = spinner.style;
    const palet = paletMaker(style, data.spinner?.styleConfig);
    spinner.succeedText.prefix = palet?.succeedColor(spinner.succeedText.prefix);
    spinner.spawnText.text = palet?.textColor(spinner.spawnText?.text);
    spinner.spawnText.prefix = palet.spawnColor(spinner.spawnText.prefix);
    spinner.succeedText.text = palet.textColor(spinner.succeedText.text);
    spinner.errorText.prefix = palet.errorColor(spinner.errorText?.prefix);
    spinner.errorText.text = palet.textColor(spinner.errorText.text);
    config.spinner = spinner;
    return config;
}
