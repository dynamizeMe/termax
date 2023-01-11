export const SpinnerConfigFactory = (config) => {
    var _a, _b;
    const { spinner, style, spawnText, succeedText, messageText, disconnectText, pauseText, errorText, color, indent, showMessage, showDisconnect, showData } = config.spinner;
    try {
        return {
            spinner: spinner || 'dots',
            style: style || 'default',
            spawnText: {
                accent: (spawnText === null || spawnText === void 0 ? void 0 : spawnText.accent) || 'EXECUTING',
                text: (spawnText === null || spawnText === void 0 ? void 0 : spawnText.text) || `${config.cmd} ${(_a = config.args) === null || _a === void 0 ? void 0 : _a.join(' ')}`
            },
            succeedText: {
                accent: (succeedText === null || succeedText === void 0 ? void 0 : succeedText.accent) || 'COMPLETED EXECUTING',
                text: (succeedText === null || succeedText === void 0 ? void 0 : succeedText.text) ||
                    `${config.cmd} ${(_b = config.args) === null || _b === void 0 ? void 0 : _b.join(' ')}`
            },
            messageText: {
                accent: (messageText === null || messageText === void 0 ? void 0 : messageText.accent) || 'MESSAGE',
                text: (messageText === null || messageText === void 0 ? void 0 : messageText.text) ||
                    `${config.cmd} ${config.args ? config === null || config === void 0 ? void 0 : config.args.join(' ') : ''}:`
            },
            disconnectText: {
                accent: (disconnectText === null || disconnectText === void 0 ? void 0 : disconnectText.accent) || 'DISCONNECT',
                text: (disconnectText === null || disconnectText === void 0 ? void 0 : disconnectText.text) ||
                    `${config.cmd} ${config.args ? config === null || config === void 0 ? void 0 : config.args.join(' ') : ''}`
            },
            pauseText: {
                accent: (pauseText === null || pauseText === void 0 ? void 0 : pauseText.accent) || 'PAUSED',
                text: (pauseText === null || pauseText === void 0 ? void 0 : pauseText.text) ||
                    `${config.cmd} ${config.args ? config === null || config === void 0 ? void 0 : config.args.join(' ') : ''}`
            },
            errorText: {
                accent: (errorText === null || errorText === void 0 ? void 0 : errorText.accent) || 'ERROR',
                text: (errorText === null || errorText === void 0 ? void 0 : errorText.text) ||
                    `${config.cmd} ${config.args ? config === null || config === void 0 ? void 0 : config.args.join(' ') : ''}`
            },
            color: color || 'green',
            indent: indent || 0,
            showMessage: showMessage || false,
            showDisconnect: showDisconnect || false,
            showData: showData || false
        };
    }
    catch (_c) {
        throw new Error('Spinner configuration incorrect.');
    }
};
