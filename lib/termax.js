import { Executor } from "./executor/executor.js";
export { Chain } from "./chain/chain.js";
export const tSpawn = (config, callback) => {
    return new Executor('spawn', config, callback);
};
export const tExec = (config, callback) => {
    return new Executor('exec', config, callback);
};
export const tExecFile = (config, callback) => {
    return new Executor('execFile', config, callback);
};
export const tFork = (config, callback) => {
    return new Executor('fork', config, callback);
};
