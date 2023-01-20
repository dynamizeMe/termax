import { Executor } from '../executor/executor.js';
export declare class ErrorHandler {
    #private;
    constructor(executor: Executor);
    handleError(fun?: Function, config?: any): void;
    get error(): Error;
    set error(err: any);
    errorPrompt(fun?: Function, config?: any): any;
    printErrorData(fun?: Function, config?: any): void;
}
