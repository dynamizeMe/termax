import { SpinnerName } from 'cli-spinners';
import { Color } from 'ora';
import { StyleText } from './styles.js';

export type SpinnerConfig = {
  spinner?: SpinnerName;
  spawnText?: StyleText;
  succeedText?: StyleText;
  color?: Color;
  indent?: number;
};

