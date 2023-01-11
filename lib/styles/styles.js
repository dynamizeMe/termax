import { ExecuteConfigFactory, } from "../executor/execute-config.js";
import { styleMap } from './style-map.js';
import { customPaletMacker } from "./palet.js";
import { SpinnerConfigFactory } from "../spinner/spinner-config.js";
export function styleMaker(data) {
    return applyStyle(data);
}
function paletMaker(style, styleConfig) {
    return (style === 'custom' && !!styleConfig) ? customPaletMacker(styleConfig) : styleMap.get(style);
}
function applyStyle(data) {
    var _a, _b, _c;
    const config = ExecuteConfigFactory(data);
    const spinner = SpinnerConfigFactory(config);
    const style = spinner.style;
    const palet = paletMaker(style, (_a = data.spinner) === null || _a === void 0 ? void 0 : _a.styleConfig);
    spinner.succeedText.accent = palet === null || palet === void 0 ? void 0 : palet.succeedColor(spinner.succeedText.accent);
    spinner.spawnText.text = palet === null || palet === void 0 ? void 0 : palet.textColor((_b = spinner.spawnText) === null || _b === void 0 ? void 0 : _b.text);
    spinner.spawnText.accent = palet.spawnColor(spinner.spawnText.accent);
    spinner.succeedText.text = palet.textColor(spinner.succeedText.text);
    spinner.disconnectText.accent = palet.warrningColor(spinner.disconnectText.accent);
    spinner.disconnectText.text = palet.textColor(spinner.disconnectText.text);
    spinner.errorText.accent = palet.errorColor((_c = spinner.errorText) === null || _c === void 0 ? void 0 : _c.accent);
    spinner.errorText.text = palet.textColor(spinner.errorText.text);
    spinner.messageText.accent = palet.messageColor(spinner.messageText.accent);
    spinner.messageText.text = palet.textColor(spinner.messageText.text);
    spinner.pauseText.accent = palet.warrningColor(spinner.pauseText.accent);
    spinner.pauseText.text = palet.textColor(spinner.pauseText.text);
    config.spinner = spinner;
    return config;
}
