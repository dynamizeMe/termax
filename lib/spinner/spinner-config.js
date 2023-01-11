export const SpinnerConfigFactory = (config) => {
    var _a, _b;
    try {
        const defaulrConfig = {
            spinner: 'dots',
            style: 'default',
            spawnText: {
                accent: 'EXECUTING',
                text: `${config.cmd} ${(_a = config.args) === null || _a === void 0 ? void 0 : _a.join(' ')}`
            },
            succeedText: {
                accent: 'COMPLETED EXECUTING',
                text: `${config.cmd} ${(_b = config.args) === null || _b === void 0 ? void 0 : _b.join(' ')}`
            },
            messageText: {
                accent: 'MESSAGE',
                text: `${config.cmd} ${config.args ? config === null || config === void 0 ? void 0 : config.args.join(' ') : ''}:`
            },
            disconnectText: {
                accent: 'DISCONNECT',
                text: `${config.cmd} ${config.args ? config === null || config === void 0 ? void 0 : config.args.join(' ') : ''}`
            },
            pauseText: {
                accent: 'PAUSED',
                text: `${config.cmd} ${config.args ? config === null || config === void 0 ? void 0 : config.args.join(' ') : ''}`
            },
            errorText: {
                accent: 'ERROR',
                text: `${config.cmd} ${config.args ? config === null || config === void 0 ? void 0 : config.args.join(' ') : ''}`
            },
            color: 'green',
            indent: 0,
            showMessage: false,
            showDisconnect: false,
            showData: false
        };
        return Object.assign(Object.assign({}, config), defaulrConfig);
    }
    catch (_c) {
        throw new Error('Spinner configuration incorrect.');
    }
};
