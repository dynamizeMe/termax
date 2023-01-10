import chalk from "chalk";
import { DefaultColors } from "./color-sets.js";
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
