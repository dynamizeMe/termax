import { execute } from "./executor/executor.js";
export { Chain } from "./chain/chain.js";
export const tSpawn = (config, callback) => execute('spawn', config, callback);
export const tExec = (config, callback) => execute('exec', config, callback);
export const tExecFile = (config, callback) => execute('execFile', config, callback);
export const tFork = (config, callback) => execute('fork', config, callback);
