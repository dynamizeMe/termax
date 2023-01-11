export const SpinnerConfigFactory = (config) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8;
    try {
        return {
            spinner: ((_a = config.spinner) === null || _a === void 0 ? void 0 : _a.spinner) || "dots",
            style: ((_b = config.spinner) === null || _b === void 0 ? void 0 : _b.style) || "default",
            spawnText: {
                accent: ((_d = (_c = config.spinner) === null || _c === void 0 ? void 0 : _c.spawnText) === null || _d === void 0 ? void 0 : _d.accent) || "EXECUTING",
                text: ((_f = (_e = config.spinner) === null || _e === void 0 ? void 0 : _e.spawnText) === null || _f === void 0 ? void 0 : _f.text) ||
                    `${config.cmd} ${(_g = config.args) === null || _g === void 0 ? void 0 : _g.join(" ")}`,
            },
            succeedText: {
                accent: ((_j = (_h = config.spinner) === null || _h === void 0 ? void 0 : _h.succeedText) === null || _j === void 0 ? void 0 : _j.accent) || "COMPLETED EXECUTING",
                text: ((_l = (_k = config.spinner) === null || _k === void 0 ? void 0 : _k.succeedText) === null || _l === void 0 ? void 0 : _l.text) ||
                    `${config.cmd} ${(_m = config.args) === null || _m === void 0 ? void 0 : _m.join(" ")}`,
            },
            messageText: {
                accent: ((_p = (_o = config.spinner) === null || _o === void 0 ? void 0 : _o.messageText) === null || _p === void 0 ? void 0 : _p.accent) || "MESSAGE",
                text: ((_r = (_q = config.spinner) === null || _q === void 0 ? void 0 : _q.messageText) === null || _r === void 0 ? void 0 : _r.text) ||
                    `${config.cmd} ${config.args ? config === null || config === void 0 ? void 0 : config.args.join(" ") : ""}:`,
            },
            disconnectText: {
                accent: ((_t = (_s = config.spinner) === null || _s === void 0 ? void 0 : _s.messageText) === null || _t === void 0 ? void 0 : _t.accent) || "DISCONNECT",
                text: ((_v = (_u = config.spinner) === null || _u === void 0 ? void 0 : _u.messageText) === null || _v === void 0 ? void 0 : _v.text) ||
                    `${config.cmd} ${config.args ? config === null || config === void 0 ? void 0 : config.args.join(" ") : ""}`,
            },
            pauseText: {
                accent: ((_x = (_w = config.spinner) === null || _w === void 0 ? void 0 : _w.pauseText) === null || _x === void 0 ? void 0 : _x.accent) || "PAUSED",
                text: ((_z = (_y = config.spinner) === null || _y === void 0 ? void 0 : _y.pauseText) === null || _z === void 0 ? void 0 : _z.text) ||
                    `${config.cmd} ${config.args ? config === null || config === void 0 ? void 0 : config.args.join(" ") : ""}`,
            },
            errorText: {
                accent: ((_1 = (_0 = config.spinner) === null || _0 === void 0 ? void 0 : _0.errorText) === null || _1 === void 0 ? void 0 : _1.accent) || "ERROR",
                text: ((_3 = (_2 = config.spinner) === null || _2 === void 0 ? void 0 : _2.errorText) === null || _3 === void 0 ? void 0 : _3.text) ||
                    `${config.cmd} ${config.args ? config === null || config === void 0 ? void 0 : config.args.join(" ") : ""}`,
            },
            color: ((_4 = config.spinner) === null || _4 === void 0 ? void 0 : _4.color) || "green",
            indent: ((_5 = config.spinner) === null || _5 === void 0 ? void 0 : _5.indent) || 0,
            showMessage: ((_6 = config.spinner) === null || _6 === void 0 ? void 0 : _6.showMessage) || false,
            showDisconnect: ((_7 = config.spinner) === null || _7 === void 0 ? void 0 : _7.showDisconnect) || false,
            showData: ((_8 = config.spinner) === null || _8 === void 0 ? void 0 : _8.showData) || false,
        };
    }
    catch (_9) {
        throw new Error("Spinner configuration incorrect.");
    }
};
// export const DefaultSpinnerConfigFactory  = (config: Partial<ExecuteConfig>): SpinnerConfig => {
//   return {
//     spinner: "dots",
//     style: "default",
//     spawnText: {
//       accent: "EXECUTING",
//       text:
//         config.spinner?.spawnText?.text ||
//         `${config.cmd} ${config.args?.join(" ")}`,
//     },
//     succeedText: {
//       accent: config.spinner?.succeedText?.accent || "COMPLETED EXECUTING",
//       text:
//         config.spinner?.succeedText?.text ||
//         `${config.cmd} ${config.args?.join(" ")}`,
//     },
//     messageText: {
//       accent: config.spinner?.messageText?.accent || "MESSAGE",
//       text:
//         config.spinner?.messageText?.text ||
//         `${config.cmd} ${config.args ? config?.args.join(" ") : ""}:`,
//     },
//     disconnectText: {
//       accent: config.spinner?.messageText?.accent || "DISCONNECT",
//       text:
//         config.spinner?.messageText?.text ||
//         `${config.cmd} ${config.args ? config?.args.join(" ") : ""}`,
//     },
//     pauseText: {
//       accent: config.spinner?.pauseText?.accent || "PAUSED",
//       text:
//         config.spinner?.pauseText?.text ||
//         `${config.cmd} ${config.args ? config?.args.join(" ") : ""}`,
//     },
//     errorText: {
//       accent: config.spinner?.errorText?.accent || "ERROR",
//       text:
//         config.spinner?.errorText?.text ||
//         `${config.cmd} ${config.args ? config?.args.join(" ") : ""}`,
//     },
//     color: config.spinner?.color || "green",
//     indent: config.spinner?.indent || 0,
//     showMessage: config.spinner?.showMessage || false,
//     showDisconnect: config.spinner?.showDisconnect || false,
//     showData: config.spinner?.showData || false,
//   }
// }
