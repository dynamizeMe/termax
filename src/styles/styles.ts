import {
  ExecuteConfig,
  ExecuteConfigFactory,
} from "../executor/execute-config.js";
import { Palet } from "./palet.js";
import { StyleConfig } from "./style-config.js";
import { styleMap } from './style-map.js'
import { customPaletMacker } from "./palet.js";

export type StyleName = "default" | "custom" | "none" | "pale" | "vivid";


export function styleMaker(data: ExecuteConfig): ExecuteConfig {
  const style = data.spinner?.style ? data.spinner?.style : "default";
  return applyStyle(data, paletMaker(style, data.spinner?.styleConfig));
}

function paletMaker(style: StyleName, styleConfig?: StyleConfig): Palet {
  return (style === 'custom' && !!styleConfig) ? customPaletMacker(styleConfig) : styleMap.get(style) as Palet;
}

function applyStyle(data: ExecuteConfig, palet: Palet): ExecuteConfig {
  const config = ExecuteConfigFactory(data);

  if (!!config.spinner?.succeedText?.accent) {
    config.spinner.succeedText.accent = palet?.succeedColor(
      config.spinner.succeedText.accent
    );
  }

  if (!!config.spinner?.spawnText?.text) {
    config.spinner.spawnText.text = palet?.textColor(
      config.spinner.spawnText?.text
    );
  }

  if (!!config.spinner?.spawnText?.accent) {
    config.spinner.spawnText.accent = palet.spawnColor(
      config.spinner.spawnText.accent
    );
  }

  if (!!config.spinner?.succeedText?.text) {
    config.spinner.succeedText.text = palet.textColor(
      config.spinner.succeedText.text
    );
  }

  if (!!config.spinner?.disconnectText?.accent) {
    config.spinner.disconnectText.accent = palet.warrningColor(
      config.spinner.disconnectText.accent
    );
  }

  if (!!config.spinner?.disconnectText?.text) {
    config.spinner.disconnectText.text = palet.textColor(
      config.spinner.disconnectText.text
    );
  }

  if (!!config.spinner?.errorText?.accent) {
    config.spinner.errorText.accent = palet.errorColor(
      config.spinner.errorText?.accent
    );
  }

  if (!!config.spinner?.errorText?.text) {
    config.spinner.errorText.text = palet.textColor(
      config.spinner.errorText.text
    );
  }

  if (!!config.spinner?.messageText?.accent) {
    config.spinner.messageText.accent = palet.messageColor(
      config.spinner.messageText.accent
    );
  }

  if (!!config.spinner?.messageText?.text) {
    config.spinner.messageText.text = palet.textColor(
      config.spinner.messageText.text
    );
  }

  if (!!config.spinner?.pauseText?.accent) {
    config.spinner.pauseText.accent = palet.warrningColor(
      config.spinner.pauseText.accent
    );
  }

  if (!!config.spinner?.pauseText?.text) {
    config.spinner.pauseText.text = palet.textColor(
      config.spinner.pauseText.text
    );
  }

  return config;
}


