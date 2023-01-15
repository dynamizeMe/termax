import ora from 'ora';
export function constructSpinner(spinnerConfig) {
    return ora({
        discardStdin: false,
        text: `${spinnerConfig.spawnText.prefix}: ${spinnerConfig.spawnText.text}` ||
            '',
        spinner: spinnerConfig.spinner || 'dots2',
        color: spinnerConfig.color || 'green',
        indent: spinnerConfig.indent || 0
    });
}
