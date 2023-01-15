import {ExecuteConfig} from '../executor/execute-config.js';
import {execute, processName, executeState} from '../executor/executor.js';
import {ChainConfig} from './chain-config.js';

export class Chain {
  private chain: ChainConfig[] = [];
  #isExecuting: boolean = false;
  #callback: Function | null = null;
  constructor(functions?: (Function | processName)[], configs?: ExecuteConfig[][], callback?: Function) {
    if (functions && configs) this.setChain(functions, configs);
    if (callback) this.#callback = callback;
  }

  get isExecuting(): boolean {
    return this.#isExecuting;
  }

  set callback(call: () => any) {
    this.#callback = call;
  }

  setChain(functions: (Function | processName)[], configs: ExecuteConfig[][]) {
    functions?.forEach((fun, index) => this.addToChain(fun, configs[index]));
  }

  addToChain(fun: Function | processName, configs: ExecuteConfig[], callback?: Function) {
    if (!this.#isExecuting) this.chain.push({fun, configs});
    if (callback) this.#callback = callback;
  }

  executeChain() {
    if (!this.#isExecuting && this.chain.length) {
      this.#isExecuting = true;
      execute(this.chain[0].fun, this.chain[0].configs);
      executeState.on('done', () => {
        this.#isExecuting = false;
        this.chain.shift();
        this.executeChain();
      });
    } else if (!this.#isExecuting && !this.chain.length && this.#callback) {
      this.#callback();
      this.#callback = null;
    }
  }
}
