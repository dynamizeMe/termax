export const ExecuteConfigFactory = (config) => {
    var _a, _b, _c, _d, _e, _f, _g;
    try {
        return {
            cmd: (config === null || config === void 0 ? void 0 : config.cmd) || '',
            args: (config === null || config === void 0 ? void 0 : config.args) || [],
            spinner: {
                spinner: ((_a = config.spinner) === null || _a === void 0 ? void 0 : _a.spinner) || 'dots',
                spawnText: ((_b = config.spinner) === null || _b === void 0 ? void 0 : _b.spawnText) || `Executing: ${config.cmd} ${(_c = config.args) === null || _c === void 0 ? void 0 : _c.join(' ')}`,
                succeedText: ((_d = config.spinner) === null || _d === void 0 ? void 0 : _d.succeedText) || `Success executing: ${config.cmd} ${(_e = config.args) === null || _e === void 0 ? void 0 : _e.join(' ')}`,
                color: ((_f = config.spinner) === null || _f === void 0 ? void 0 : _f.color) || 'green',
                indent: ((_g = config.spinner) === null || _g === void 0 ? void 0 : _g.indent) || 0
            },
            showMessage: config.showMessage || false,
            showDisconnect: config.showDisconnect || false,
            showData: config.showData || false,
            messageText: config.messageText || ` Message - ${config.cmd} ${config.args ? config === null || config === void 0 ? void 0 : config.args.join(" ") : ''}:`,
            disconnectText: config.messageText || `Disconnect - ${config.cmd} ${config.args ? config === null || config === void 0 ? void 0 : config.args.join(" ") : ''}`,
            pauseText: config.pauseText || `PAUSED - ${config.cmd} ${config.args ? config === null || config === void 0 ? void 0 : config.args.join(" ") : ''}`,
            errorText: config.errorText || `ERROR - ${config.cmd} ${config.args ? config === null || config === void 0 ? void 0 : config.args.join(" ") : ''}`
        };
    }
    catch (_h) {
        throw new Error(!config.cmd ? 'Command is required.' : 'Arguments are requierd.');
    }
};
