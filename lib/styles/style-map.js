import chalk from "chalk";
import { DefaultColors, PaleColors, VividColors, SystemColors, ModestyColors, SunriseColors, ColdColors } from "./color-sets.js";
export const styleMap = new Map([
    [
        "none",
        {
            errorColor: chalk.hex(SystemColors.SILVER),
            warrningColor: chalk.hex(SystemColors.SILVER),
            spawnColor: chalk.hex(SystemColors.SILVER),
            succeedColor: chalk.hex(SystemColors.SILVER),
            pausedcolor: chalk.hex(SystemColors.SILVER),
            messageColor: chalk.hex(SystemColors.SILVER),
            textColor: chalk.hex(SystemColors.SILVER),
        },
    ],
    [
        "default",
        {
            errorColor: chalk.hex(DefaultColors.RED),
            warrningColor: chalk.hex(DefaultColors.ORANGE),
            spawnColor: chalk.hex(DefaultColors.YELLOW),
            succeedColor: chalk.hex(DefaultColors.GREEN),
            pausedcolor: chalk.hex(DefaultColors.ORANGE),
            messageColor: chalk.hex(DefaultColors.PURPLE),
            textColor: chalk.hex(DefaultColors.PINK),
        },
    ],
    [
        "pale",
        {
            errorColor: chalk.hex(PaleColors.RED),
            warrningColor: chalk.hex(PaleColors.ORANGE),
            spawnColor: chalk.hex(PaleColors.YELLOW),
            succeedColor: chalk.hex(PaleColors.GREEN),
            pausedcolor: chalk.hex(PaleColors.ORANGE),
            messageColor: chalk.hex(PaleColors.PURPLE),
            textColor: chalk.hex(PaleColors.PINK),
        },
    ],
    [
        "vivid",
        {
            errorColor: chalk.hex(VividColors.RED),
            warrningColor: chalk.hex(VividColors.ORANGE),
            spawnColor: chalk.hex(VividColors.YELLOW),
            succeedColor: chalk.hex(VividColors.GREEN),
            pausedcolor: chalk.hex(VividColors.ORANGE),
            messageColor: chalk.hex(VividColors.PURPLE),
            textColor: chalk.hex(VividColors.PINK),
        },
    ],
    [
        "system",
        {
            errorColor: chalk.hex(SystemColors.RED),
            warrningColor: chalk.hex(SystemColors.YELLOW),
            spawnColor: chalk.hex(SystemColors.FUCHSIA),
            succeedColor: chalk.hex(SystemColors.GREEN),
            pausedcolor: chalk.hex(SystemColors.YELLOW),
            messageColor: chalk.hex(SystemColors.PURPLE),
            textColor: chalk.hex(SystemColors.SILVER),
        },
    ],
    [
        "modesty",
        {
            errorColor: chalk.hex(ModestyColors.SALMON),
            warrningColor: chalk.hex(ModestyColors.SALMON),
            spawnColor: chalk.hex(ModestyColors.AQUA),
            succeedColor: chalk.hex(ModestyColors.AQUA_LIGHT),
            pausedcolor: chalk.hex(ModestyColors.SALMON),
            messageColor: chalk.hex(ModestyColors.AQUA),
            textColor: chalk.hex(SystemColors.SILVER),
        },
    ],
    [
        "sunrise",
        {
            errorColor: chalk.hex(SunriseColors.RED),
            warrningColor: chalk.hex(SunriseColors.DARK_ORANGE),
            spawnColor: chalk.hex(SunriseColors.LIGHT_YELLOW),
            succeedColor: chalk.hex(SunriseColors.YELLOW),
            pausedcolor: chalk.hex(SunriseColors.MID_ORAGE),
            messageColor: chalk.hex(SunriseColors.LIGHT_ORANGE),
            textColor: chalk.hex(SunriseColors.CREAM),
        },
    ],
    [
        "cold",
        {
            errorColor: chalk.hex(ColdColors.OLIVE_DARK),
            warrningColor: chalk.hex(ColdColors.MID_OLIVE),
            spawnColor: chalk.hex(ColdColors.MID_AQUA),
            succeedColor: chalk.hex(ColdColors.LIGHT_AQUA),
            pausedcolor: chalk.hex(ColdColors.LIGHT_AQUA),
            messageColor: chalk.hex(ColdColors.MINT),
            textColor: chalk.hex(ColdColors.LIGHT_MINT),
        },
    ],
]);
