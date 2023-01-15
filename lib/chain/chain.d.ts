import { ExecuteConfig } from "../executor/execute-config.js";
import { processName } from "../executor/executor.js";
import { ChainConfig } from "./chain-config.js";
export declare class Chain {
    chain: ChainConfig[];
    functions: Function[];
    constructor(functions?: (Function | processName)[], configs?: (ExecuteConfig[])[]);
    setChain(functions: (Function | processName)[], configs: (ExecuteConfig[])[]): void;
    addToChain(fun: Function | processName, configs: ExecuteConfig[]): void;
    executeChain(): void;
}
