import { ExecuteConfig } from "./executor/execute-config.js";
import { processName } from "./executor/executor.js";
export default processName;
export declare const tSpawn: (config: ExecuteConfig[]) => void;
export declare const tExec: (config: ExecuteConfig[]) => void;
export declare const tExecFile: (config: ExecuteConfig[]) => void;
export declare const tFork: (config: ExecuteConfig[]) => void;
