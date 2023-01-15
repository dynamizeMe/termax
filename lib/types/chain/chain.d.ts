import { ExecuteConfig } from '../executor/execute-config.js';
import { processName } from '../executor/executor.js';
export declare class Chain {
    #private;
    constructor(functions?: (Function | processName)[], configs?: ExecuteConfig[][], callback?: Function);
    get isExecuting(): boolean;
    set callback(call: () => any);
    setChain(functions: (Function | processName)[], configs: ExecuteConfig[][]): void;
    addToChain(fun: Function | processName, configs: ExecuteConfig[], callback?: Function): void;
    executeChain(): void;
}
