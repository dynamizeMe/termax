import { ExecuteConfig } from "./executor/execute-config.js";
import { GetExecute } from "./executor/executor.js";

class Termax {
  spawn = (config: ExecuteConfig[]) => GetExecute('spawn', config);
  exec = (config: ExecuteConfig[]) => GetExecute('exec', config);
  execFile = (config: ExecuteConfig[]) => GetExecute('execFile', config);
  fork = (config: ExecuteConfig[]) => GetExecute('fork', config);
}

export default Termax;
