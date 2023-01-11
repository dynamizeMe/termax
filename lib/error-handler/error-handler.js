var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ErrorHandler_errorColor, _ErrorHandler_exitColor, _ErrorHandler_errorMarkColor, _ErrorHandler_hasError, _ErrorHandler_error;
import chalk from "chalk";
import inquirer from "inquirer";
import { DefaultColors } from "../styles/color-sets.js";
import { errorQuestion } from "./error-question.js";
import { failMark } from "../marks/marks.js";
export class ErrorHandler {
    constructor() {
        _ErrorHandler_errorColor.set(this, chalk.hex(DefaultColors.PURPLE));
        _ErrorHandler_exitColor.set(this, chalk.hex(DefaultColors.RED));
        _ErrorHandler_errorMarkColor.set(this, chalk.hex(DefaultColors.YELLOW));
        _ErrorHandler_hasError.set(this, false);
        _ErrorHandler_error.set(this, void 0);
    }
    handleError(callback, arg) {
        return this.errorPrompt(errorQuestion, callback, arg);
    }
    get hasError() {
        return __classPrivateFieldGet(this, _ErrorHandler_hasError, "f");
    }
    set hasError(val) {
        __classPrivateFieldSet(this, _ErrorHandler_hasError, val, "f");
    }
    get error() {
        return __classPrivateFieldGet(this, _ErrorHandler_error, "f");
    }
    set error(err) {
        __classPrivateFieldSet(this, _ErrorHandler_error, err, "f");
    }
    errorPrompt(question, callback, arg) {
        inquirer.prompt(question).then((answer) => {
            if (answer.error === "See Error") {
                this.printErrorData(callback, arg);
            }
            else if (answer.error === "Continue" &&
                callback &&
                arg &&
                arg.length > 0) {
                callback(arg);
            }
            else {
                console.log(__classPrivateFieldGet(this, _ErrorHandler_errorMarkColor, "f").call(this, failMark), __classPrivateFieldGet(this, _ErrorHandler_exitColor, "f").call(this, "Exited with incomplete execution."));
                return 1;
            }
        });
    }
    printErrorData(callback, arg) {
        console.log(__classPrivateFieldGet(this, _ErrorHandler_errorMarkColor, "f").call(this, failMark), __classPrivateFieldGet(this, _ErrorHandler_errorColor, "f").call(this, `${this.error}` || `This error has no data.`));
        this.errorPrompt(errorQuestion, callback, arg);
    }
}
_ErrorHandler_errorColor = new WeakMap(), _ErrorHandler_exitColor = new WeakMap(), _ErrorHandler_errorMarkColor = new WeakMap(), _ErrorHandler_hasError = new WeakMap(), _ErrorHandler_error = new WeakMap();