import { SpinnerName } from 'cli-spinners';
import { Color } from 'ora';

export type SpinnerConfig = {
  spinner: SpinnerName;
  spawnText: string;
  succeedText: string;
  color: Color;
  indent: number;
};

