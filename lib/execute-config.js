export const ExecuteConfigFactory = (config) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
    try {
        return {
            cmd: (config === null || config === void 0 ? void 0 : config.cmd) || '',
            args: (config === null || config === void 0 ? void 0 : config.args) || [],
            spinner: {
                spinner: ((_a = config.spinner) === null || _a === void 0 ? void 0 : _a.spinner) || 'dots',
                spawnText: {
                    accent: ((_c = (_b = config.spinner) === null || _b === void 0 ? void 0 : _b.spawnText) === null || _c === void 0 ? void 0 : _c.accent) || 'Executing',
                    text: ((_e = (_d = config.spinner) === null || _d === void 0 ? void 0 : _d.spawnText) === null || _e === void 0 ? void 0 : _e.text) || `${config.cmd} ${(_f = config.args) === null || _f === void 0 ? void 0 : _f.join(' ')}`
                },
                succeedText: {
                    accent: ((_h = (_g = config.spinner) === null || _g === void 0 ? void 0 : _g.succeedText) === null || _h === void 0 ? void 0 : _h.accent) || 'Success executing',
                    text: ((_k = (_j = config.spinner) === null || _j === void 0 ? void 0 : _j.succeedText) === null || _k === void 0 ? void 0 : _k.text) || `${config.cmd} ${(_l = config.args) === null || _l === void 0 ? void 0 : _l.join(' ')}`
                },
                color: ((_m = config.spinner) === null || _m === void 0 ? void 0 : _m.color) || 'green',
                indent: ((_o = config.spinner) === null || _o === void 0 ? void 0 : _o.indent) || 0
            },
            showMessage: config.showMessage || false,
            showDisconnect: config.showDisconnect || false,
            showData: config.showData || false,
            messageText: {
                accent: ((_p = config.messageText) === null || _p === void 0 ? void 0 : _p.accent) || 'MESSAGE',
                text: ((_q = config.messageText) === null || _q === void 0 ? void 0 : _q.text) || `${config.cmd} ${config.args ? config === null || config === void 0 ? void 0 : config.args.join(" ") : ''}:`
            },
            disconnectText: {
                accent: ((_r = config.messageText) === null || _r === void 0 ? void 0 : _r.accent) || 'DISCONNECT',
                text: ((_s = config.messageText) === null || _s === void 0 ? void 0 : _s.text) || `${config.cmd} ${config.args ? config === null || config === void 0 ? void 0 : config.args.join(" ") : ''}`
            },
            pauseText: {
                accent: ((_t = config.pauseText) === null || _t === void 0 ? void 0 : _t.accent) || 'PAUSED',
                text: ((_u = config.pauseText) === null || _u === void 0 ? void 0 : _u.text) || `${config.cmd} ${config.args ? config === null || config === void 0 ? void 0 : config.args.join(" ") : ''}`
            },
            errorText: {
                accent: ((_v = config.errorText) === null || _v === void 0 ? void 0 : _v.accent) || 'ERROR',
                text: ((_w = config.errorText) === null || _w === void 0 ? void 0 : _w.text) || `${config.cmd} ${config.args ? config === null || config === void 0 ? void 0 : config.args.join(" ") : ''}`
            },
            callback: config.callback
        };
    }
    catch (_x) {
        throw new Error(!config.cmd ? 'Command is required.' : 'Arguments are requierd.');
    }
};
