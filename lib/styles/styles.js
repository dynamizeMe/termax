import { ExecuteConfigFactory, } from "../executor/execute-config.js";
import { styleMap } from './style-map.js';
import { customPaletMacker } from "./palet.js";
export function styleMaker(data) {
    var _a, _b, _c;
    const style = ((_a = data.spinner) === null || _a === void 0 ? void 0 : _a.style) ? (_b = data.spinner) === null || _b === void 0 ? void 0 : _b.style : "default";
    return applyStyle(data, paletMaker(style, (_c = data.spinner) === null || _c === void 0 ? void 0 : _c.styleConfig));
}
function paletMaker(style, styleConfig) {
    return (style === 'custom' && !!styleConfig) ? customPaletMacker(styleConfig) : styleMap.get(style);
}
function applyStyle(data, palet) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
    const config = ExecuteConfigFactory(data);
    if (!!((_b = (_a = config.spinner) === null || _a === void 0 ? void 0 : _a.succeedText) === null || _b === void 0 ? void 0 : _b.accent)) {
        config.spinner.succeedText.accent = palet === null || palet === void 0 ? void 0 : palet.succeedColor(config.spinner.succeedText.accent);
    }
    if (!!((_d = (_c = config.spinner) === null || _c === void 0 ? void 0 : _c.spawnText) === null || _d === void 0 ? void 0 : _d.text)) {
        config.spinner.spawnText.text = palet === null || palet === void 0 ? void 0 : palet.textColor((_e = config.spinner.spawnText) === null || _e === void 0 ? void 0 : _e.text);
    }
    if (!!((_g = (_f = config.spinner) === null || _f === void 0 ? void 0 : _f.spawnText) === null || _g === void 0 ? void 0 : _g.accent)) {
        config.spinner.spawnText.accent = palet.spawnColor(config.spinner.spawnText.accent);
    }
    if (!!((_j = (_h = config.spinner) === null || _h === void 0 ? void 0 : _h.succeedText) === null || _j === void 0 ? void 0 : _j.text)) {
        config.spinner.succeedText.text = palet.textColor(config.spinner.succeedText.text);
    }
    if (!!((_l = (_k = config.spinner) === null || _k === void 0 ? void 0 : _k.disconnectText) === null || _l === void 0 ? void 0 : _l.accent)) {
        config.spinner.disconnectText.accent = palet.warrningColor(config.spinner.disconnectText.accent);
    }
    if (!!((_o = (_m = config.spinner) === null || _m === void 0 ? void 0 : _m.disconnectText) === null || _o === void 0 ? void 0 : _o.text)) {
        config.spinner.disconnectText.text = palet.textColor(config.spinner.disconnectText.text);
    }
    if (!!((_q = (_p = config.spinner) === null || _p === void 0 ? void 0 : _p.errorText) === null || _q === void 0 ? void 0 : _q.accent)) {
        config.spinner.errorText.accent = palet.errorColor((_r = config.spinner.errorText) === null || _r === void 0 ? void 0 : _r.accent);
    }
    if (!!((_t = (_s = config.spinner) === null || _s === void 0 ? void 0 : _s.errorText) === null || _t === void 0 ? void 0 : _t.text)) {
        config.spinner.errorText.text = palet.textColor(config.spinner.errorText.text);
    }
    if (!!((_v = (_u = config.spinner) === null || _u === void 0 ? void 0 : _u.messageText) === null || _v === void 0 ? void 0 : _v.accent)) {
        config.spinner.messageText.accent = palet.messageColor(config.spinner.messageText.accent);
    }
    if (!!((_x = (_w = config.spinner) === null || _w === void 0 ? void 0 : _w.messageText) === null || _x === void 0 ? void 0 : _x.text)) {
        config.spinner.messageText.text = palet.textColor(config.spinner.messageText.text);
    }
    if (!!((_z = (_y = config.spinner) === null || _y === void 0 ? void 0 : _y.pauseText) === null || _z === void 0 ? void 0 : _z.accent)) {
        config.spinner.pauseText.accent = palet.warrningColor(config.spinner.pauseText.accent);
    }
    if (!!((_1 = (_0 = config.spinner) === null || _0 === void 0 ? void 0 : _0.pauseText) === null || _1 === void 0 ? void 0 : _1.text)) {
        config.spinner.pauseText.text = palet.textColor(config.spinner.pauseText.text);
    }
    return config;
}
