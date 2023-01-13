import { 
// Execute,
// Execute2,
// Execute3,
// Execute4,
GetExecute } from "./executor/executor.js";
class Termax {
    constructor() {
        // execute = Execute;
        // execute2 = Execute2;
        // execute3 = Execute3;
        // execute4 = Execute4;
        this.spawn = (config) => GetExecute('spawn', config);
        this.exec = (config) => GetExecute('exec', config);
        this.execFile = (config) => GetExecute('execFile', config);
        this.fork = (config) => GetExecute('fork', config);
    }
}
export default Termax;
