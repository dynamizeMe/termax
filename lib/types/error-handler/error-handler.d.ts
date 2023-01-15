import { Question } from './question.js';
import { Executor } from '../executor/executor.js';
export declare class ErrorHandler {
    #private;
    executor: Executor;
    constructor(executor: Executor);
    handleError(fun?: Function, config?: any): any;
    get error(): any;
    set error(err: any);
    errorPrompt(question: Question[], fun?: Function, config?: any): any;
    printErrorData(fun?: Function, config?: any): void;
}
