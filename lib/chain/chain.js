import { execute, executeState } from "../executor/executor.js";
export class Chain {
    constructor(functions, configs) {
        this.chain = [];
        if (functions && configs)
            this.setChain(functions, configs);
    }
    setChain(functions, configs) {
        functions === null || functions === void 0 ? void 0 : functions.forEach((fun, index) => this.chain.push({ fun, configs: configs[index] }));
    }
    addToChain(fun, configs) {
        this.chain.push({ fun, configs });
    }
    executeChain() {
        if (this.chain.length > 0) {
            execute(this.chain[0].fun, this.chain[0].configs);
            executeState.on('done', () => {
                this.chain.shift();
                this.executeChain();
            });
        }
    }
}
