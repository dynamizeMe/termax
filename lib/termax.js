import { execute } from "./executor/executor.js";
import { Chain } from "./chain/chain.js";
export default Chain;
export const tSpawn = (config) => execute('spawn', config);
export const tExec = (config) => execute('exec', config);
export const tExecFile = (config) => execute('execFile', config);
export const tFork = (config) => execute('fork', config);
