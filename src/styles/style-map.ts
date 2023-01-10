import chalk from "chalk";
import { StyleName } from "./styles.js";
import { Palet } from "./palet.js";
import { DefaultColors, PaleColors, VividColors } from "./color-sets.js";

export const styleMap = new Map<StyleName, Palet>([
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
]);

