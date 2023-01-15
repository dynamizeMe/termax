/// <reference types="node" resolution-mode="require"/>
import { ExecuteConfig } from './execute-config.js';
import EventEmitter from 'events';
export type processName = 'exec' | 'execFile' | 'fork' | 'spawn';
export type executorStates = 'done' | 'start';
export declare class Executor {
    #private;
    functionMap: Map<string, Function>;
    executeState: EventEmitter;
    constructor(option?: processName | Function, configs?: ExecuteConfig[] | string, callback?: () => any);
    execute(option: processName | Function, configs: ExecuteConfig[] | string, callback?: () => any): void;
    constructAtribute(cmd: string, args?: string[]): (string | string[])[];
    checkLength(fun: Function, configs: ExecuteConfig[]): void;
    executeWrapper(fun: Function, args: any[], configs: ExecuteConfig[]): void;
}
