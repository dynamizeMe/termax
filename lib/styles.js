import chalk from 'chalk';
import { ExecuteConfigFactory } from './execute-config.js';
export var DefaultColors;
(function (DefaultColors) {
    DefaultColors["GREEN"] = "#03fcd7";
    DefaultColors["RED"] = "#fc038c";
    DefaultColors["ORANGE"] = "#fc9803";
    DefaultColors["BLUE"] = "#03a9fc";
    DefaultColors["YELLOW"] = "#f5d36e";
    DefaultColors["PURPLE"] = "#a46ef5";
})(DefaultColors = DefaultColors || (DefaultColors = {}));
export const defaultWarrning = chalk.hex(DefaultColors.ORANGE);
export const defaultError = chalk.hex(DefaultColors.RED);
export const defaultMessage = chalk.hex(DefaultColors.PURPLE);
export const defaultSucess = chalk.hex(DefaultColors.GREEN);
export const defaultData = chalk.hex(DefaultColors.BLUE);
export const defaultStart = chalk.hex(DefaultColors.YELLOW);
export function styleMaker(style, data) {
    switch (style) {
        case 'default': {
            return applyDefaut(data);
        }
        // case constant_expression2: {
        //    //statements;
        //    break;
        // }
        default: {
            return applyDefaut(data);
        }
    }
}
function applyDefaut(data) {
    var _a, _b, _c, _d, _e, _f, _g;
    const config = ExecuteConfigFactory(data);
    if ((_a = config.spinner.succeedText) === null || _a === void 0 ? void 0 : _a.accent) {
        config.spinner.succeedText.accent = defaultSucess(config.spinner.succeedText.accent);
    }
    if ((_b = config.spinner.spawnText) === null || _b === void 0 ? void 0 : _b.accent) {
        config.spinner.spawnText.accent = defaultStart(config.spinner.spawnText.accent);
    }
    if ((_c = config.disconnectText) === null || _c === void 0 ? void 0 : _c.accent) {
        config.disconnectText.accent = defaultWarrning(config.disconnectText.accent);
    }
    if ((_d = config.errorText) === null || _d === void 0 ? void 0 : _d.accent) {
        config.errorText.accent = defaultError((_e = config.errorText) === null || _e === void 0 ? void 0 : _e.accent);
    }
    if ((_f = config.messageText) === null || _f === void 0 ? void 0 : _f.accent) {
        config.messageText.accent = defaultMessage(config.messageText.accent);
    }
    if ((_g = config.pauseText) === null || _g === void 0 ? void 0 : _g.accent) {
        config.pauseText.accent = defaultWarrning(config.pauseText.accent);
    }
    return config;
}
