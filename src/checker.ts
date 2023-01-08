import { colors } from "./colors.js";
import { spinners } from "./spinners.js";

export function checkCommandConfig(obj: any) {
  const requiredProperties = ['cmd', 'args', 'spinner'];
  const objProperties = Object.keys(obj);
  const hasAllProperties: boolean = objProperties.every((prop): boolean | void => {
    return prop === 'callback' ? true : requiredProperties.includes(prop);
  });
  const isSpinnerProper = checkSpinnerConfig(obj?.spinner);
  return hasAllProperties && isSpinnerProper;
}

export function checkSpinnerConfig(obj: any) {
  const requiredProperties = [ 'spinner', 'spawnText', 'succeedText', 'color', 'indent' ];
  const objProperties = Object.keys(obj);
  const hasAllProperties: boolean = objProperties.every((prop): boolean => {return requiredProperties.includes(prop)});
  const isSpinnerProper = spinners.includes(obj?.spinner);
  const isColorProper = colors.includes(obj?.color);
  return hasAllProperties && isSpinnerProper && isColorProper;
}
