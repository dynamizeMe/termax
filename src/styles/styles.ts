import chalk from "chalk";
import {
  ExecuteConfig,
  ExecuteConfigFactory,
} from "../executor/execute-config.js";
import { Palet } from "./palet.js";
import { StyleConfig } from "./style-config.js";
import { styleMap } from "./style-map.js";
import { StyleName } from "./style-name.js";
import { SpinnerConfigFactory } from "../spinner/spinner-config.js";
import { DefaultColors } from "./color-sets.js";

export function styleMaker(data: Partial<ExecuteConfig>): ExecuteConfig {
  return applyStyle(data);
}

function paletMaker(style: StyleName, styleConfig?: StyleConfig): Palet {
  return style === "custom" && !!styleConfig
    ? customPaletMacker(styleConfig)
    : (styleMap.get(style) as Palet);
}

export function customPaletMacker(styleConfig: StyleConfig): Palet {
  return {
    errorColor: (styleConfig.errorColor) ? chalk.hex(styleConfig.errorColor) :  chalk.hex(DefaultColors.RED),
    warrningColor: (styleConfig.warrningColor) ? chalk.hex(styleConfig.warrningColor) : chalk.hex(DefaultColors.ORANGE),
    spawnColor: (styleConfig.spawnColor) ? chalk.hex(styleConfig.spawnColor) : chalk.hex(DefaultColors.YELLOW),
    succeedColor: (styleConfig.succeedColor) ? chalk.hex(styleConfig.succeedColor) : chalk.hex(DefaultColors.GREEN),
    pausedcolor: (styleConfig.pausedcolor) ? chalk.hex(styleConfig.pausedcolor) : chalk.hex(DefaultColors.ORANGE),
    messageColor: (styleConfig.messageColor) ? chalk.hex(styleConfig.messageColor) : chalk.hex(DefaultColors.PURPLE),
    textColor: (styleConfig.textColor) ? chalk.hex(styleConfig.textColor) : chalk.hex(DefaultColors.PINK),
  };
}

function applyStyle(data: Partial<ExecuteConfig>): ExecuteConfig {
  const config: ExecuteConfig = ExecuteConfigFactory(data);
  const spinner = SpinnerConfigFactory(config);
  const style = spinner.style;
  const palet = paletMaker(style, data.spinner?.styleConfig);

  spinner.succeedText.accent = palet?.succeedColor(spinner.succeedText.accent);
  spinner.spawnText.text = palet?.textColor(spinner.spawnText?.text);
  spinner.spawnText.accent = palet.spawnColor(spinner.spawnText.accent);
  spinner.succeedText.text = palet.textColor(spinner.succeedText.text);
  spinner.errorText.accent = palet.errorColor(spinner.errorText?.accent);
  spinner.errorText.text = palet.textColor(spinner.errorText.text);
  config.spinner = spinner;

  return config;
}
