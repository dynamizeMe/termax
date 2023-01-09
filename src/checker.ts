import { colors } from "./colors.js";
import { spinners } from "./spinners.js";

export function checkConfig(obj: any): boolean {
  const requiredProperties = [
    "cmd",
    "args",
    "spinner",
    "callback",
  ];
  const objProperties = Object.keys(obj);
  const hasAllProperties: boolean = objProperties.every(
    (prop): boolean | void => {
      return requiredProperties.includes(prop);
    }
  );
  const isSpinnerProper = checkSpinnerConfig(obj?.spinner);
  return (
    checkCmd(obj?.cmd) &&
    checkAgrumnets(obj?.args) &&
    hasAllProperties &&
    isSpinnerProper
  );
}

function checkSpinnerConfig(obj: any) {
  const requiredProperties = [
    "spinner",
    "style",
    "spawnText",
    "succeedText",
    "showMessage",
    "showDisconnect",
    "showData",
    "messageText",
    "disconnectText",
    "pauseText",
    "errorText",
    "color",
    "indent",
  ];
  const requiredPropertyTyeps = [
    "string",
    "string",
    "string",
    "string",
    "number",
  ];
  const objProperties = Object.keys(obj);
  const hasAllProperties: boolean = objProperties.every((prop): boolean => {
    return requiredProperties.includes(prop);
  });
  const isSpinnerProper = spinners.includes(obj?.spinner);
  const isColorProper = colors.includes(obj?.color);
  const hasProperPropTypes = requiredPropertyTyeps.every(
    (type, index): boolean => type === typeof obj[objProperties[index]]
  );
  return (
    hasAllProperties && isSpinnerProper && isColorProper //&& hasProperPropTypes
  );
}

function checkAgrumnets(args: any): boolean {
  return Array.isArray(args)
    ? args.every((arg) => typeof arg === "string")
    : false;
}

function checkCmd(cmd: any): boolean {
  return cmd ? typeof cmd === "string" : false;
}

