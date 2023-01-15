import { ExecuteConfig } from "../executor/execute-config.js";
import { execute, processName, executeState } from "../executor/executor.js";
import { ChainConfig } from "./chain-config.js";

export class Chain {
  chain: ChainConfig[] = [];
  functions!: Function[];
  constructor(functions?: (Function | processName)[], configs?: (ExecuteConfig[])[]) {
    if(functions && configs) this.setChain(functions, configs);
  }

  setChain(functions: (Function | processName)[], configs: (ExecuteConfig[])[]) {
    functions?.forEach((fun, index) => this.chain.push({fun, configs: configs[index]}));
  }

  addToChain(fun: Function | processName, configs: ExecuteConfig[]) {
    this.chain.push({fun, configs})
  }

  executeChain() {
    if(this.chain.length > 0) {
      execute(this.chain[0].fun, this.chain[0].configs);
      executeState.on('done', () => {
        this.chain.shift();
        this.executeChain();
      });
    }
  }
}
