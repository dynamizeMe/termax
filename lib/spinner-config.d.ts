import { SpinnerName } from 'cli-spinners';
import { Color } from 'ora';
import { StyleName, StyleText } from './styles.js';
export type SpinnerConfig = {
    spinner?: SpinnerName;
    style?: StyleName;
    spawnText?: StyleText;
    succeedText?: StyleText;
    showMessage?: boolean;
    showDisconnect?: boolean;
    showData?: boolean;
    messageText?: StyleText;
    disconnectText?: StyleText;
    pauseText?: StyleText;
    errorText?: StyleText;
    color?: Color;
    indent?: number;
};
