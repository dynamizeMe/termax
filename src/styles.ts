import chalk from 'chalk';
import { ExecuteConfig, ExecuteConfigFactory } from './execute-config.js';

export type StyleText = {
  text: string;
  accent?: string;
}

export enum DefaultColors {
  GREEN = '#03fcd7',
  RED = '#fc038c',
  ORANGE = '#fc9803',
  BLUE = '#03a9fc',
  YELLOW = '#f5d36e',
  PURPLE = '#a46ef5'
}

export const defaultWarrning = chalk.hex(DefaultColors.ORANGE);
export const defaultError = chalk.hex(DefaultColors.RED);
export const defaultMessage = chalk.hex(DefaultColors.PURPLE);
export const defaultSucess = chalk.hex(DefaultColors.GREEN);
export const defaultData = chalk.hex(DefaultColors.BLUE);
export const defaultStart = chalk.hex(DefaultColors.YELLOW);

export function styleMaker(style: string, data: ExecuteConfig): ExecuteConfig {
  switch(style) {
    case 'default': {
       return applyDefaut(data);
    }
    // case constant_expression2: {
    //    //statements;
    //    break;
    // }
    default: {
      return applyDefaut(data);
    }
 }
}

function applyDefaut(data: ExecuteConfig): ExecuteConfig {
  const config = ExecuteConfigFactory(data);
  if(config.spinner.succeedText?.accent) {
    config.spinner.succeedText.accent = defaultSucess(config.spinner.succeedText.accent);
  }
  if(config.spinner.spawnText?.accent) {
    config.spinner.spawnText.accent = defaultStart(config.spinner.spawnText.accent);
  }
  if(config.disconnectText?.accent) {
    config.disconnectText.accent = defaultWarrning(config.disconnectText.accent);
  }
  if(config.errorText?.accent) {
    config.errorText.accent = defaultError(config.errorText?.accent);
  }
  if(config.messageText?.accent) {
    config.messageText.accent = defaultMessage(config.messageText.accent);
  }
  if(config.pauseText?.accent) {
    config.pauseText.accent = defaultWarrning(config.pauseText.accent);
  }
  return config;
}
