import { execute, executeState } from '../executor/executor.js';
export class Chain {
    constructor(functions, configs) {
        this.chain = [];
        this._isExecuting = false;
        if (functions && configs)
            this.setChain(functions, configs);
    }
    get isExecuting() {
        return this._isExecuting;
    }
    setChain(functions, configs) {
        functions === null || functions === void 0 ? void 0 : functions.forEach((fun, index) => this.addToChain(fun, configs[index]));
    }
    addToChain(fun, configs) {
        if (!this._isExecuting)
            this.chain.push({ fun, configs });
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
