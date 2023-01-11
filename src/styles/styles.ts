import {
  ExecuteConfig,
  ExecuteConfigFactory,
} from "../executor/execute-config.js";
import { Palet } from "./palet.js";
import { StyleConfig } from "./style-config.js";
import { styleMap } from "./style-map.js";
import { customPaletMacker } from "./palet.js";
import { StyleName } from "./style-name.js";
import { SpinnerConfigFactory } from "../spinner/spinner-config.js";

export function styleMaker(data: ExecuteConfig): ExecuteConfig {
  return applyStyle(data);
}

function paletMaker(style: StyleName, styleConfig?: StyleConfig): Palet {
  return style === "custom" && !!styleConfig
    ? customPaletMacker(styleConfig)
    : (styleMap.get(style) as Palet);
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
  spinner.disconnectText.accent = palet.warrningColor(spinner.disconnectText.accent);
  spinner.disconnectText.text = palet.textColor(spinner.disconnectText.text);
  spinner.errorText.accent = palet.errorColor(spinner.errorText?.accent);
  spinner.errorText.text = palet.textColor(spinner.errorText.text);
  spinner.messageText.accent = palet.messageColor(spinner.messageText.accent);
  spinner.messageText.text = palet.textColor(spinner.messageText.text);
  spinner.pauseText.accent = palet.warrningColor(spinner.pauseText.accent);
  spinner.pauseText.text = palet.textColor(spinner.pauseText.text);
  config.spinner = spinner;

  return config;
}
