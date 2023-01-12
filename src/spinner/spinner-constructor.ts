import ora, {Ora} from 'ora';
import { SpinnerConfig } from "./spinner-config.js";

export function constructSpinner(spinnerConfig: SpinnerConfig): Ora {
  return ora({
    discardStdin: false,
    text:
      `${spinnerConfig.spawnText.accent}: ${spinnerConfig.spawnText.text}` ||
      '',
    spinner: spinnerConfig.spinner || 'dots2',
    color: spinnerConfig.color || 'green',
    indent: spinnerConfig.indent || 0
  });
}
