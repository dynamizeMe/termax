import { Color } from "ora";
import { SpinnerName } from "cli-spinners";
import { StyleName } from "../styles/styles.js";
import { StyleText } from "../styles/style-text.js";
import { StyleConfig } from "../styles/style-config.js";

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
  styleConfig?: StyleConfig;
};
