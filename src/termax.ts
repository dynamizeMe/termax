import { ExecuteConfig } from "./executor/execute-config.js";
import { GetExecute } from "./executor/executor.js";
import { processName } from "./executor/executor.js";

export default processName;
export const tSpawn = (config: ExecuteConfig[]) => GetExecute('spawn', config);
export const tExec = (config: ExecuteConfig[]) => GetExecute('exec', config);
export const tExecFile = (config: ExecuteConfig[]) => GetExecute('execFile', config);
export const tFork = (config: ExecuteConfig[]) => GetExecute('fork', config);


