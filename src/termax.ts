import { ExecuteConfig } from "./executor/execute-config.js";
import { Executor } from "./executor/executor.js";
export { Chain } from "./chain/chain.js";

export const tSpawn: Function = (config: ExecuteConfig[], callback?: () => any): Executor => {
  return new Executor('spawn', config, callback);
};
export const tExec: Function = (config: ExecuteConfig[], callback?: () => any): Executor => {
  return new Executor('exec', config, callback);
};
export const tExecFile: Function = (config: ExecuteConfig[], callback?: () => any): Executor => {
  return new Executor('execFile', config, callback);
};
export const tFork: Function = (config: ExecuteConfig[], callback?: () => any): Executor => {
  return new Executor('fork', config, callback);
};


