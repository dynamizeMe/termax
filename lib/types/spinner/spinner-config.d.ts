import { Color } from 'ora';
import { SpinnerName } from 'cli-spinners';
import { StyleName } from '../styles/style-name.js';
import { StyleText } from '../styles/style-text.js';
import { StyleConfig } from '../styles/style-config.js';
import { ExecuteConfig } from '../executor/execute-config.js';
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
export declare const SpinnerConfigFactory: (config: ExecuteConfig) => ExecuteConfig;
