import { colors } from "./colors.js";
import { spinners } from "./spinners.js";
import { requiredExecuteProperties, requiredSpinnerProperties } from "./required-properties.js";

export function checkConfig(obj: any): boolean {
  const objProperties = Object.keys(obj);
  const hasAllProperties: boolean = objProperties.every(
    (prop): boolean | void => {
      return requiredExecuteProperties.includes(prop);
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
  const requiredPropertyTyeps = [
    "string",
    "string",
    "string",
    "string",
    "number",
  ];
  const objProperties = Object.keys(obj);
  const hasAllProperties: boolean = objProperties.every((prop): boolean => {
    return requiredSpinnerProperties.includes(prop);
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
