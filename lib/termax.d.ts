import { ExecuteConfig } from "./executor/execute-config.js";
export { Chain } from "./chain/chain.js";
export declare const tSpawn: (config: ExecuteConfig[], callback?: () => any) => void;
export declare const tExec: (config: ExecuteConfig[], callback?: () => any) => void;
export declare const tExecFile: (config: ExecuteConfig[], callback?: () => any) => void;
export declare const tFork: (config: ExecuteConfig[], callback?: () => any) => void;
