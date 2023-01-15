import { Executor } from '../executor/executor.js';
export class Chain {
    #chain = [];
    #executor = new Executor();
    #isExecuting = false;
    #callback = null;
    constructor(functions, configs, callback) {
        if (functions && configs)
            this.setChain(functions, configs);
        if (callback)
            this.#callback = callback;
    }
    get isExecuting() {
        return this.#isExecuting;
    }
    set callback(call) {
        this.#callback = call;
    }
    setChain(functions, configs) {
        functions?.forEach((fun, index) => this.addToChain(fun, configs[index]));
    }
    addToChain(fun, configs, callback) {
        if (!this.#isExecuting)
            this.#chain.push({ fun, configs });
        if (callback)
            this.#callback = callback;
    }
    executeChain() {
        if (!this.#isExecuting && this.#chain.length) {
            this.#isExecuting = true;
            this.#executor.execute(this.#chain[0].fun, this.#chain[0].configs);
            this.#executor.executeState.on('done', () => {
                this.#isExecuting = false;
                this.#chain.shift();
                this.executeChain();
            });
        }
        else if (!this.#isExecuting && !this.#chain.length && this.#callback) {
            this.#callback();
            this.#callback = null;
        }
    }
}
