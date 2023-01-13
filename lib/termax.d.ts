import { ExecuteConfig } from "./executor/execute-config.js";
declare class Termax {
    spawn: (config: ExecuteConfig[]) => void;
    exec: (config: ExecuteConfig[]) => void;
    execFile: (config: ExecuteConfig[]) => void;
    fork: (config: ExecuteConfig[]) => void;
}
export default Termax;
