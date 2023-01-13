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
  showData: boolean;
  errorText: StyleText;
  color: Color;
  indent: number;
  styleConfig?: StyleConfig;
};

export const SpinnerConfigFactory = (
  config: Partial<ExecuteConfig>
): SpinnerConfig => {
  try {
    config = config as ExecuteConfig;
    const spinner = config.spinner as SpinnerConfig | undefined;
    const defaulrConfig = {
      spinner: spinner?.spinner ||'dots',
      style: spinner?.style || 'default',
      spawnText: {
        prefix: spinner?.spawnText?.prefix || 'EXECUTING',
        text: spinner?.spawnText?.text || `${config.cmd} ${config.args?.join(' ')}`
      },
      succeedText: {
        prefix: spinner?.succeedText?.prefix || 'COMPLETED EXECUTING',
        text: spinner?.succeedText?.text || `${config.cmd} ${config.args?.join(' ')}`
      },
      errorText: {
        prefix: spinner?.errorText?.prefix || 'ERROR',
        text: spinner?.errorText?.text ||`${config.cmd} ${config.args ? config?.args.join(' ') : ''}`
      },
      color: spinner?.color || 'green',
      indent: spinner?.indent || 0,
      showData: spinner?.showData || false
    };
    return {...config, ...defaulrConfig};
  } catch {
    throw new Error('Spinner configuration incorrect.');
  }
};
