import { Question } from "./question.js";
export declare class ErrorHandler {
    #private;
    handleError(callback?: Function, fun?: Function, config?: any): any;
    get error(): any;
    set error(err: any);
    errorPrompt(question: Question[], callback?: Function, fun?: Function, config?: any): any;
    printErrorData(callback?: Function, fun?: Function, config?: any): void;
}
