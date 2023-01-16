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
var _ErrorHandler_errorColor, _ErrorHandler_exitColor, _ErrorHandler_errorMarkColor, _ErrorHandler_error, _ErrorHandler_executor;
import chalk from 'chalk';
import inquirer from 'inquirer';
import { DefaultColors } from '../styles/color-sets.js';
import { errorQuestion } from './error-question.js';
import logSymbols from 'log-symbols';
export class ErrorHandler {
    constructor(executor) {
        _ErrorHandler_errorColor.set(this, chalk.hex(DefaultColors.PURPLE));
        _ErrorHandler_exitColor.set(this, chalk.hex(DefaultColors.RED));
        _ErrorHandler_errorMarkColor.set(this, chalk.hex(DefaultColors.YELLOW));
        _ErrorHandler_error.set(this, void 0);
        _ErrorHandler_executor.set(this, void 0);
        __classPrivateFieldSet(this, _ErrorHandler_executor, executor, "f");
    }
    handleError(fun, config) {
        return this.errorPrompt(fun, config);
    }
    get error() {
        return __classPrivateFieldGet(this, _ErrorHandler_error, "f");
    }
    set error(err) {
        __classPrivateFieldSet(this, _ErrorHandler_error, err, "f");
    }
    errorPrompt(fun, config) {
        inquirer.prompt(errorQuestion).then((answer) => {
            if (answer.choice === 'See Error') {
                this.printErrorData(fun, config);
            }
            else if (answer.choice === 'Continue' && fun && config && config.length > 0) {
                console.log(__classPrivateFieldGet(this, _ErrorHandler_errorMarkColor, "f").call(this, logSymbols.warning), __classPrivateFieldGet(this, _ErrorHandler_errorColor, "f").call(this, 'Continued execution with the failed call.'));
                __classPrivateFieldGet(this, _ErrorHandler_executor, "f").execute(fun, config);
            }
            else {
                console.log(__classPrivateFieldGet(this, _ErrorHandler_errorMarkColor, "f").call(this, logSymbols.error), __classPrivateFieldGet(this, _ErrorHandler_exitColor, "f").call(this, 'Exited with incomplete execution.'));
                return 1;
            }
        });
    }
    printErrorData(fun, config) {
        console.log(__classPrivateFieldGet(this, _ErrorHandler_errorMarkColor, "f").call(this, logSymbols.warning), __classPrivateFieldGet(this, _ErrorHandler_errorColor, "f").call(this, this.error ? `${this.error}` : `Couldn't retrieve data for this error.`));
        this.errorPrompt(fun, config);
    }
}
_ErrorHandler_errorColor = new WeakMap(), _ErrorHandler_exitColor = new WeakMap(), _ErrorHandler_errorMarkColor = new WeakMap(), _ErrorHandler_error = new WeakMap(), _ErrorHandler_executor = new WeakMap();
