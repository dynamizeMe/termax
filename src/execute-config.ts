import { SpinnerConfig } from "./spinner-config.js";

export type executeConfig = {
    cmd: string;
    args: string[];
    spinner: SpinnerConfig;
    showMessage?: boolean,
    showDisconnect?: boolean;
    showData?: boolean;
    messageText?: string;
    disconnectText?: string;
    pauseText?: string;
    errorText?: string;
    callback?: Function;
}

export const ExecuteConfigFactory = (config: Partial<executeConfig>): executeConfig => {
  try {
    return {
      cmd: config?.cmd || '',
      args: config?.args || [],
      spinner: {
        spinner: config.spinner?.spinner || 'dots',
        spawnText: config.spinner?.spawnText || `Executing: ${config.cmd} ${config.args?.join(' ')}`,
        succeedText: config.spinner?.succeedText || `Success executing: ${config.cmd} ${config.args?.join(' ')}`,
        color: config.spinner?.color || 'green',
        indent: config.spinner?.indent || 0
      },
      showMessage: config.showMessage || false,
      showDisconnect: config.showDisconnect || false,
      showData: config.showData || false,
      messageText: config.messageText || ` Message - ${config.cmd} ${config.args ? config?.args.join(" ") : ''}:`,
      disconnectText: config.messageText || `Disconnect - ${config.cmd} ${config.args ? config?.args.join(" ") : ''}`,
      pauseText: config.pauseText || `PAUSED - ${config.cmd} ${config.args ? config?.args.join(" ") : ''}`,
      errorText: config.errorText || `ERROR - ${config.cmd} ${config.args ? config?.args.join(" ") : ''}`
    }
  }
  catch {
    throw new Error(!config.cmd ? 'Command is required.' : 'Arguments are requierd.')
  }
}
