import {ExecuteConfig} from '../executor/execute-config.js';
import {execute, processName, executeState} from '../executor/executor.js';
import {ChainConfig} from './chain-config.js';

export class Chain {
  private chain: ChainConfig[] = [];
  private _isExecuting: boolean = false;
  constructor(functions?: (Function | processName)[], configs?: ExecuteConfig[][]) {
    if (functions && configs) this.setChain(functions, configs);
  }

  get isExecuting(): boolean {
    return this._isExecuting;
  }

  setChain(functions: (Function | processName)[], configs: ExecuteConfig[][]) {
    functions?.forEach((fun, index) => this.addToChain(fun, configs[index]));
  }

  addToChain(fun: Function | processName, configs: ExecuteConfig[]) {
    if (!this._isExecuting) this.chain.push({fun, configs});
  }

  executeChain() {
    if (!this._isExecuting && this.chain.length) {
      this._isExecuting = true;
      execute(this.chain[0].fun, this.chain[0].configs);
      executeState.on('done', () => {
        this._isExecuting = false;
        this.chain.shift();
        this.executeChain();
      });
    }
  }
}
