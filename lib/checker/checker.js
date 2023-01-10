import { colors } from "./colors.js";
import { spinners } from "./spinners.js";
import { requiredExecuteProperties, requiredSpinnerProperties } from "./required-properties.js";
export function checkConfig(obj) {
    const objProperties = Object.keys(obj);
    const hasAllProperties = objProperties.every((prop) => {
        return requiredExecuteProperties.includes(prop);
    });
    const isSpinnerProper = checkSpinnerConfig(obj === null || obj === void 0 ? void 0 : obj.spinner);
    return (checkCmd(obj === null || obj === void 0 ? void 0 : obj.cmd) &&
        checkAgrumnets(obj === null || obj === void 0 ? void 0 : obj.args) &&
        hasAllProperties &&
        isSpinnerProper);
}
function checkSpinnerConfig(obj) {
    const requiredPropertyTyeps = [
        "string",
        "string",
        "string",
        "string",
        "number",
    ];
    const objProperties = Object.keys(obj);
    const hasAllProperties = objProperties.every((prop) => {
        return requiredSpinnerProperties.includes(prop);
    });
    const isSpinnerProper = spinners.includes(obj === null || obj === void 0 ? void 0 : obj.spinner);
    const isColorProper = colors.includes(obj === null || obj === void 0 ? void 0 : obj.color);
    const hasProperPropTypes = requiredPropertyTyeps.every((type, index) => type === typeof obj[objProperties[index]]);
    return (hasAllProperties && isSpinnerProper && isColorProper //&& hasProperPropTypes
    );
}
function checkAgrumnets(args) {
    return Array.isArray(args)
        ? args.every((arg) => typeof arg === "string")
        : false;
}
function checkCmd(cmd) {
    return cmd ? typeof cmd === "string" : false;
}
