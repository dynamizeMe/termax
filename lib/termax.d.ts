import { ExecuteConfig } from "./executor/execute-config.js";
import { Chain } from "./chain/chain.js";
export default Chain;
export declare const tSpawn: (config: ExecuteConfig[]) => void;
export declare const tExec: (config: ExecuteConfig[]) => void;
export declare const tExecFile: (config: ExecuteConfig[]) => void;
export declare const tFork: (config: ExecuteConfig[]) => void;
