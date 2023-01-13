import { GetExecute } from "./executor/executor.js";
class Termax {
    constructor() {
        this.spawn = (config) => GetExecute('spawn', config);
        this.exec = (config) => GetExecute('exec', config);
        this.execFile = (config) => GetExecute('execFile', config);
        this.fork = (config) => GetExecute('fork', config);
    }
}
export default Termax;
