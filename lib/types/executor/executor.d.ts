/// <reference types="node" />
import { ExecuteConfig } from './execute-config.js';
import EventEmitter from 'events';
export type processName = 'exec' | 'execFile' | 'fork' | 'spawn';
export type executorStates = 'done' | 'start';
export declare class Executor {
    #private;
    executeState: EventEmitter;
    constructor(option?: processName | Function, configs?: ExecuteConfig[] | string, callback?: () => any);
    execute(option: processName | Function, configs: ExecuteConfig[] | string, callback?: () => any): void;
}
