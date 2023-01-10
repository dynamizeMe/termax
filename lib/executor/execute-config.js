export const ExecuteConfigFactory = (config) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;
    try {
        return {
            cmd: (config === null || config === void 0 ? void 0 : config.cmd) || "",
            args: (config === null || config === void 0 ? void 0 : config.args) || [],
            spinner: {
                spinner: ((_a = config.spinner) === null || _a === void 0 ? void 0 : _a.spinner) || "dots",
                spawnText: {
                    accent: ((_c = (_b = config.spinner) === null || _b === void 0 ? void 0 : _b.spawnText) === null || _c === void 0 ? void 0 : _c.accent) || "Executing",
                    text: ((_e = (_d = config.spinner) === null || _d === void 0 ? void 0 : _d.spawnText) === null || _e === void 0 ? void 0 : _e.text) ||
                        `${config.cmd} ${(_f = config.args) === null || _f === void 0 ? void 0 : _f.join(" ")}`,
                },
                succeedText: {
                    accent: ((_h = (_g = config.spinner) === null || _g === void 0 ? void 0 : _g.succeedText) === null || _h === void 0 ? void 0 : _h.accent) || "Success executing",
                    text: ((_k = (_j = config.spinner) === null || _j === void 0 ? void 0 : _j.succeedText) === null || _k === void 0 ? void 0 : _k.text) ||
                        `${config.cmd} ${(_l = config.args) === null || _l === void 0 ? void 0 : _l.join(" ")}`,
                },
                messageText: {
                    accent: ((_o = (_m = config.spinner) === null || _m === void 0 ? void 0 : _m.messageText) === null || _o === void 0 ? void 0 : _o.accent) || "MESSAGE",
                    text: ((_q = (_p = config.spinner) === null || _p === void 0 ? void 0 : _p.messageText) === null || _q === void 0 ? void 0 : _q.text) ||
                        `${config.cmd} ${config.args ? config === null || config === void 0 ? void 0 : config.args.join(" ") : ""}:`,
                },
                disconnectText: {
                    accent: ((_s = (_r = config.spinner) === null || _r === void 0 ? void 0 : _r.messageText) === null || _s === void 0 ? void 0 : _s.accent) || "DISCONNECT",
                    text: ((_u = (_t = config.spinner) === null || _t === void 0 ? void 0 : _t.messageText) === null || _u === void 0 ? void 0 : _u.text) ||
                        `${config.cmd} ${config.args ? config === null || config === void 0 ? void 0 : config.args.join(" ") : ""}`,
                },
                pauseText: {
                    accent: ((_w = (_v = config.spinner) === null || _v === void 0 ? void 0 : _v.pauseText) === null || _w === void 0 ? void 0 : _w.accent) || "PAUSED",
                    text: ((_y = (_x = config.spinner) === null || _x === void 0 ? void 0 : _x.pauseText) === null || _y === void 0 ? void 0 : _y.text) ||
                        `${config.cmd} ${config.args ? config === null || config === void 0 ? void 0 : config.args.join(" ") : ""}`,
                },
                errorText: {
                    accent: ((_0 = (_z = config.spinner) === null || _z === void 0 ? void 0 : _z.errorText) === null || _0 === void 0 ? void 0 : _0.accent) || "ERROR",
                    text: ((_2 = (_1 = config.spinner) === null || _1 === void 0 ? void 0 : _1.errorText) === null || _2 === void 0 ? void 0 : _2.text) ||
                        `${config.cmd} ${config.args ? config === null || config === void 0 ? void 0 : config.args.join(" ") : ""}`,
                },
                color: ((_3 = config.spinner) === null || _3 === void 0 ? void 0 : _3.color) || "green",
                indent: ((_4 = config.spinner) === null || _4 === void 0 ? void 0 : _4.indent) || 0,
                showMessage: ((_5 = config.spinner) === null || _5 === void 0 ? void 0 : _5.showMessage) || false,
                showDisconnect: ((_6 = config.spinner) === null || _6 === void 0 ? void 0 : _6.showDisconnect) || false,
                showData: ((_7 = config.spinner) === null || _7 === void 0 ? void 0 : _7.showData) || false,
            },
            callback: config.callback,
        };
    }
    catch (_8) {
        throw new Error(!config.cmd ? "Command is required." : "Arguments are requierd.");
    }
};
