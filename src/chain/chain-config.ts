import { ExecuteConfig } from '../executor/execute-config.js';
import { processName } from '../executor/executor.js';

export type ChainConfig = {
  fun: Function | processName;
  configs: ExecuteConfig[];
};
