/// <reference types="node" resolution-mode="require"/>
import { ExecuteConfig } from './execute-config.js';
import EventEmitter from 'events';
export declare const executeState: EventEmitter;
export type processName = 'exec' | 'execFile' | 'fork' | 'spawn';
export declare function execute(option: processName | Function, configs: ExecuteConfig[] | string): void;
