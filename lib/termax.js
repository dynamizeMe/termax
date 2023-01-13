import { GetExecute } from "./executor/executor.js";
export const tSpawn = (config) => GetExecute('spawn', config);
export const tExec = (config) => GetExecute('exec', config);
export const tExecFile = (config) => GetExecute('execFile', config);
export const tFork = (config) => GetExecute('fork', config);
