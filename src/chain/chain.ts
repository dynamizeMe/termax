import {ExecuteConfig} from '../executor/execute-config.js';
import {processName, Executor} from '../executor/executor.js';
import {ChainConfig} from './chain-config.js';

export class Chain {
  #chain: ChainConfig[] = [];
  #executor = new Executor();
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

  setChain(functions: (Function | processName)[], configs: ExecuteConfig[][]): void {
    functions?.forEach((fun, index): void => this.addToChain(fun, configs[index]));
  }

  addToChain(fun: Function | processName, configs: ExecuteConfig[], callback?: Function): void {
    if (!this.#isExecuting) this.#chain.push({fun, configs});
    if (callback) this.#callback = callback;
  }

  executeChain() {
    if (!this.#isExecuting && this.#chain.length) {
      this.#isExecuting = true;
      this.#executor.execute(this.#chain[0].fun, this.#chain[0].configs);
      this.#executor.executeState.on('done', (): void => {
        this.#isExecuting = false;
        this.#chain.shift();
        this.executeChain();
      });
    } else if (!this.#isExecuting && !this.#chain.length && this.#callback) {
      this.#callback();
      this.#callback = null;
    }
  }
}
