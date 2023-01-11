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
  const {
    spinner,
    style,
    spawnText,
    succeedText,
    messageText,
    disconnectText,
    pauseText,
    errorText,
    color,
    indent,
    showMessage,
    showDisconnect,
    showData
  } = config.spinner as SpinnerConfig;
  try {
    return {
      spinner: spinner || 'dots',
      style: style || 'default',
      spawnText: {
        accent: spawnText?.accent || 'EXECUTING',
        text: spawnText?.text || `${config.cmd} ${config.args?.join(' ')}`
      },
      succeedText: {
        accent: succeedText?.accent || 'COMPLETED EXECUTING',
        text: succeedText?.text || `${config.cmd} ${config.args?.join(' ')}`
      },
      messageText: {
        accent: messageText?.accent || 'MESSAGE',
        text:
          messageText?.text ||
          `${config.cmd} ${config.args ? config?.args.join(' ') : ''}:`
      },
      disconnectText: {
        accent: disconnectText?.accent || 'DISCONNECT',
        text:
          disconnectText?.text ||
          `${config.cmd} ${config.args ? config?.args.join(' ') : ''}`
      },
      pauseText: {
        accent: pauseText?.accent || 'PAUSED',
        text:
          pauseText?.text ||
          `${config.cmd} ${config.args ? config?.args.join(' ') : ''}`
      },
      errorText: {
        accent: errorText?.accent || 'ERROR',
        text:
          errorText?.text ||
          `${config.cmd} ${config.args ? config?.args.join(' ') : ''}`
      },
      color: color || 'green',
      indent: indent || 0,
      showMessage: showMessage || false,
      showDisconnect: showDisconnect || false,
      showData: showData || false
    };
  } catch {
    throw new Error('Spinner configuration incorrect.');
  }
};
