export const SpinnerConfigFactory = (config) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    try {
        config = config;
        const spinner = config.spinner;
        const defaulrConfig = {
            spinner: (spinner === null || spinner === void 0 ? void 0 : spinner.spinner) || 'dots',
            style: (spinner === null || spinner === void 0 ? void 0 : spinner.style) || 'default',
            spawnText: {
                accent: ((_a = spinner === null || spinner === void 0 ? void 0 : spinner.spawnText) === null || _a === void 0 ? void 0 : _a.accent) || 'EXECUTING',
                text: ((_b = spinner === null || spinner === void 0 ? void 0 : spinner.spawnText) === null || _b === void 0 ? void 0 : _b.text) || `${config.cmd} ${(_c = config.args) === null || _c === void 0 ? void 0 : _c.join(' ')}`
            },
            succeedText: {
                accent: ((_d = spinner === null || spinner === void 0 ? void 0 : spinner.succeedText) === null || _d === void 0 ? void 0 : _d.accent) || 'COMPLETED EXECUTING',
                text: ((_e = spinner === null || spinner === void 0 ? void 0 : spinner.succeedText) === null || _e === void 0 ? void 0 : _e.text) || `${config.cmd} ${(_f = config.args) === null || _f === void 0 ? void 0 : _f.join(' ')}`
            },
            errorText: {
                accent: ((_g = spinner === null || spinner === void 0 ? void 0 : spinner.errorText) === null || _g === void 0 ? void 0 : _g.accent) || 'ERROR',
                text: ((_h = spinner === null || spinner === void 0 ? void 0 : spinner.errorText) === null || _h === void 0 ? void 0 : _h.text) || `${config.cmd} ${config.args ? config === null || config === void 0 ? void 0 : config.args.join(' ') : ''}`
            },
            color: (spinner === null || spinner === void 0 ? void 0 : spinner.color) || 'green',
            indent: (spinner === null || spinner === void 0 ? void 0 : spinner.indent) || 0,
            showData: (spinner === null || spinner === void 0 ? void 0 : spinner.showData) || false
        };
        return Object.assign(Object.assign({}, config), defaulrConfig);
    }
    catch (_j) {
        throw new Error('Spinner configuration incorrect.');
    }
};
