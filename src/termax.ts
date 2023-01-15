import { ExecuteConfig } from "./executor/execute-config.js";
import { execute } from "./executor/executor.js";
import { Chain } from "./chain/chain.js";

export default Chain;
export const tSpawn = (config: ExecuteConfig[]): void => execute('spawn', config);
export const tExec = (config: ExecuteConfig[]): void => execute('exec', config);
export const tExecFile = (config: ExecuteConfig[]): void => execute('execFile', config);
export const tFork = (config: ExecuteConfig[]): void => execute('fork', config);


