import chalk from "chalk";
import { ExecuteConfigFactory } from "./execute-config.js";
var DefaultColors;
(function (DefaultColors) {
    DefaultColors["GREEN"] = "#03fcd7";
    DefaultColors["RED"] = "#fc038c";
    DefaultColors["ORANGE"] = "#fc9803";
    DefaultColors["BLUE"] = "#03a9fc";
    DefaultColors["YELLOW"] = "#f5d36e";
    DefaultColors["PURPLE"] = "#a46ef5";
    DefaultColors["PINK"] = "#e889cf";
})(DefaultColors || (DefaultColors = {}));
const styleMap = new Map([
    [
        "default",
        {
            errorColor: chalk.hex(DefaultColors.RED),
            warrningColor: chalk.hex(DefaultColors.ORANGE),
            spawnColor: chalk.hex(DefaultColors.YELLOW),
            succeedColor: chalk.hex(DefaultColors.GREEN),
            pausedcolor: chalk.hex(DefaultColors.ORANGE),
            messageColor: chalk.hex(DefaultColors.PURPLE),
            textColor: chalk.hex(DefaultColors.PINK),
        },
    ],
]);
export function styleMaker(data) {
    var _a, _b;
    const style = ((_a = data.spinner) === null || _a === void 0 ? void 0 : _a.style) ? (_b = data.spinner) === null || _b === void 0 ? void 0 : _b.style : "default";
    return applyStyle(data, paletMaker(style));
}
function paletMaker(style) {
    return styleMap.get(style);
}
function applyStyle(data, palet) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    const config = ExecuteConfigFactory(data);
    if (!!((_a = config.spinner.succeedText) === null || _a === void 0 ? void 0 : _a.accent)) {
        config.spinner.succeedText.accent = palet === null || palet === void 0 ? void 0 : palet.succeedColor(config.spinner.succeedText.accent);
    }
    if (!!((_b = config.spinner.spawnText) === null || _b === void 0 ? void 0 : _b.text)) {
        config.spinner.spawnText.text = palet === null || palet === void 0 ? void 0 : palet.textColor((_c = config.spinner.spawnText) === null || _c === void 0 ? void 0 : _c.text);
    }
    if (!!((_d = config.spinner.spawnText) === null || _d === void 0 ? void 0 : _d.accent)) {
        config.spinner.spawnText.accent = palet.spawnColor(config.spinner.spawnText.accent);
    }
    if (!!((_e = config.spinner.succeedText) === null || _e === void 0 ? void 0 : _e.text)) {
        config.spinner.succeedText.text = palet.textColor(config.spinner.succeedText.text);
    }
    if (!!((_f = config.spinner.disconnectText) === null || _f === void 0 ? void 0 : _f.accent)) {
        config.spinner.disconnectText.accent = palet.warrningColor(config.spinner.disconnectText.accent);
    }
    if (!!((_g = config.spinner.disconnectText) === null || _g === void 0 ? void 0 : _g.text)) {
        config.spinner.disconnectText.text = palet.textColor(config.spinner.disconnectText.text);
    }
    if (!!((_h = config.spinner.errorText) === null || _h === void 0 ? void 0 : _h.accent)) {
        config.spinner.errorText.accent = palet.errorColor((_j = config.spinner.errorText) === null || _j === void 0 ? void 0 : _j.accent);
    }
    if ((_k = config.spinner.errorText) === null || _k === void 0 ? void 0 : _k.text) {
        config.spinner.errorText.text = palet.textColor(config.spinner.errorText.text);
    }
    if (!!((_l = config.spinner.messageText) === null || _l === void 0 ? void 0 : _l.accent)) {
        config.spinner.messageText.accent = palet.messageColor(config.spinner.messageText.accent);
    }
    if (!!((_m = config.spinner.messageText) === null || _m === void 0 ? void 0 : _m.text)) {
        config.spinner.messageText.text = palet.textColor(config.spinner.messageText.text);
    }
    if (!!((_o = config.spinner.pauseText) === null || _o === void 0 ? void 0 : _o.accent)) {
        config.spinner.pauseText.accent = palet.warrningColor(config.spinner.pauseText.accent);
    }
    if (!!((_p = config.spinner.pauseText) === null || _p === void 0 ? void 0 : _p.text)) {
        config.spinner.pauseText.text = palet.textColor(config.spinner.pauseText.text);
    }
    return config;
}
