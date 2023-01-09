import { SpinnerConfig } from "./spinner-config.js";
import { DefaultColors, defaultData, defaultError, defaultMessage, defaultStart, defaultSucess, defaultWarrning, StyleText } from "./styles.js";

export type ExecuteConfig = {
    cmd: string;
    args: string[];
    spinner: SpinnerConfig;
    showMessage?: boolean,
    showDisconnect?: boolean;
    showData?: boolean;
    messageText?: StyleText;
    disconnectText?: StyleText;
    pauseText?: StyleText;
    errorText?: StyleText;
    callback?: Function;
}

export const ExecuteConfigFactory = (config: Partial<ExecuteConfig>): ExecuteConfig => {
  try {
    return {
      cmd: config?.cmd || '',
      args: config?.args || [],
      spinner: {
        spinner: config.spinner?.spinner || 'dots',
        spawnText: {
          accent: config.spinner?.spawnText?.accent || 'Executing',
          text: config.spinner?.spawnText?.text || `${config.cmd} ${config.args?.join(' ')}`
        },
        succeedText: {
          accent: config.spinner?.succeedText?.accent || 'Success executing',
          text: config.spinner?.succeedText?.text || `${config.cmd} ${config.args?.join(' ')}`
        },
        color: config.spinner?.color || 'green',
        indent: config.spinner?.indent || 0
      },
      showMessage: config.showMessage || false,
      showDisconnect: config.showDisconnect || false,
      showData: config.showData || false,
      messageText: {
        accent: config.messageText?.accent || 'MESSAGE',
        text: config.messageText?.text || `${config.cmd} ${config.args ? config?.args.join(" ") : ''}:`
      },
      disconnectText: {
        accent: config.messageText?.accent || 'DISCONNECT',
        text: config.messageText?.text || `${config.cmd} ${config.args ? config?.args.join(" ") : ''}`
      },
      pauseText: {
        accent: config.pauseText?.accent || 'PAUSED',
        text: config.pauseText?.text || `${config.cmd} ${config.args ? config?.args.join(" ") : ''}`
      },
      errorText: {
        accent: config.errorText?.accent || 'ERROR',
        text: config.errorText?.text || `${config.cmd} ${config.args ? config?.args.join(" ") : ''}`
      },
      callback: config.callback
    }
  }
  catch {
    throw new Error(!config.cmd ? 'Command is required.' : 'Arguments are requierd.')
  }
}
