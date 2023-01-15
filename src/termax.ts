import { ExecuteConfig } from "./executor/execute-config.js";
import { execute } from "./executor/executor.js";
export { Chain } from "./chain/chain.js";

export const tSpawn = (config: ExecuteConfig[], callback?: () => any): void => execute('spawn', config, callback);
export const tExec = (config: ExecuteConfig[], callback?: () => any): void => execute('exec', config, callback);
export const tExecFile = (config: ExecuteConfig[], callback?: () => any): void => execute('execFile', config, callback);
export const tFork = (config: ExecuteConfig[], callback?: () => any): void => execute('fork', config, callback);


