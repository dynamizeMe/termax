import {Color} from 'ora';
import {SpinnerName} from 'cli-spinners';
import {StyleName} from '../styles/style-name.js';
import {StyleText} from '../styles/style-text.js';
import {StyleConfig} from '../styles/style-config.js';
import {ExecuteConfig} from '../executor/execute-config.js';

export type SpinnerConfig = {
  spinner: SpinnerName;
  style: StyleName;
  spawnText: StyleText;
  succeedText: StyleText;
  showMessage: boolean;
  showDisconnect: boolean;
  showData: boolean;
  messageText: StyleText;
  disconnectText: StyleText;
  pauseText: StyleText;
  errorText: StyleText;
  color: Color;
  indent: number;
  styleConfig?: StyleConfig;
};

export const SpinnerConfigFactory = (
  config: Partial<ExecuteConfig>
): SpinnerConfig => {
  try {
    const defaulrConfig: SpinnerConfig = {
      spinner: 'dots',
      style: 'default',
      spawnText: {
        accent: 'EXECUTING',
        text: `${config.cmd} ${config.args?.join(' ')}`
      },
      succeedText: {
        accent: 'COMPLETED EXECUTING',
        text: `${config.cmd} ${config.args?.join(' ')}`
      },
      messageText: {
        accent: 'MESSAGE',
        text: `${config.cmd} ${config.args ? config?.args.join(' ') : ''}:`
      },
      disconnectText: {
        accent: 'DISCONNECT',
        text: `${config.cmd} ${config.args ? config?.args.join(' ') : ''}`
      },
      pauseText: {
        accent: 'PAUSED',
        text: `${config.cmd} ${config.args ? config?.args.join(' ') : ''}`
      },
      errorText: {
        accent: 'ERROR',
        text: `${config.cmd} ${config.args ? config?.args.join(' ') : ''}`
      },
      color: 'green',
      indent: 0,
      showMessage: false,
      showDisconnect: false,
      showData: false
    };
    return {...config, ...defaulrConfig};
  } catch {
    throw new Error('Spinner configuration incorrect.');
  }
};
