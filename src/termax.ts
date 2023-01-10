import {
  ExecuteConfig,
} from "./executor/execute-config.js";
import { execute } from "./executor/executor.js";

//****************************TEST********************************/
const tests: ExecuteConfig[] = [
  {
    cmd: "sleep",
    args: ["5"],
    spinner: {
      style: "cold"
    }
  },
];

execute(tests);
