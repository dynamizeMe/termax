import { ExecuteConfig } from '../executor/execute-config.js';
import { processName } from '../executor/executor.js';
export declare class Chain {
    private chain;
    private _isExecuting;
    constructor(functions?: (Function | processName)[], configs?: ExecuteConfig[][]);
    get isExecuting(): boolean;
    setChain(functions: (Function | processName)[], configs: ExecuteConfig[][]): void;
    addToChain(fun: Function | processName, configs: ExecuteConfig[]): void;
    executeChain(): void;
}
