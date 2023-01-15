var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Chain_chain, _Chain_executor, _Chain_isExecuting, _Chain_callback;
import { Executor } from '../executor/executor.js';
export class Chain {
    constructor(functions, configs, callback) {
        _Chain_chain.set(this, []);
        _Chain_executor.set(this, new Executor());
        _Chain_isExecuting.set(this, false);
        _Chain_callback.set(this, null);
        if (functions && configs)
            this.setChain(functions, configs);
        if (callback)
            __classPrivateFieldSet(this, _Chain_callback, callback, "f");
    }
    get isExecuting() {
        return __classPrivateFieldGet(this, _Chain_isExecuting, "f");
    }
    set callback(call) {
        __classPrivateFieldSet(this, _Chain_callback, call, "f");
    }
    setChain(functions, configs) {
        functions?.forEach((fun, index) => this.addToChain(fun, configs[index]));
    }
    addToChain(fun, configs, callback) {
        if (!__classPrivateFieldGet(this, _Chain_isExecuting, "f"))
            __classPrivateFieldGet(this, _Chain_chain, "f").push({ fun, configs });
        if (callback)
            __classPrivateFieldSet(this, _Chain_callback, callback, "f");
    }
    executeChain() {
        if (!__classPrivateFieldGet(this, _Chain_isExecuting, "f") && __classPrivateFieldGet(this, _Chain_chain, "f").length) {
            __classPrivateFieldSet(this, _Chain_isExecuting, true, "f");
            __classPrivateFieldGet(this, _Chain_executor, "f").execute(__classPrivateFieldGet(this, _Chain_chain, "f")[0].fun, __classPrivateFieldGet(this, _Chain_chain, "f")[0].configs);
            __classPrivateFieldGet(this, _Chain_executor, "f").executeState.on('done', () => {
                __classPrivateFieldSet(this, _Chain_isExecuting, false, "f");
                __classPrivateFieldGet(this, _Chain_chain, "f").shift();
                this.executeChain();
            });
        }
        else if (!__classPrivateFieldGet(this, _Chain_isExecuting, "f") && !__classPrivateFieldGet(this, _Chain_chain, "f").length && __classPrivateFieldGet(this, _Chain_callback, "f")) {
            __classPrivateFieldGet(this, _Chain_callback, "f").call(this);
            __classPrivateFieldSet(this, _Chain_callback, null, "f");
        }
    }
}
_Chain_chain = new WeakMap(), _Chain_executor = new WeakMap(), _Chain_isExecuting = new WeakMap(), _Chain_callback = new WeakMap();
