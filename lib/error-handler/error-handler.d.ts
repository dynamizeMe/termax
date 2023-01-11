import { Question } from "./question.js";
export declare class ErrorHandler {
    #private;
    handleError(callback?: Function, arg?: any): any;
    get hasError(): boolean;
    set hasError(val: boolean);
    get error(): any;
    set error(err: any);
    errorPrompt(question: Question[], callback?: Function, arg?: any): any;
    printStack(): void;
}
