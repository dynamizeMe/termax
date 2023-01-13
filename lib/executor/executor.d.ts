import { ExecuteConfig } from './execute-config.js';
export type processName = 'exec' | 'execFile' | 'fork' | 'spawn';
export declare function GetExecute(option: processName | Function, configs: ExecuteConfig[]): void;
