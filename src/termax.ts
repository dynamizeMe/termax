import {
  ExecuteConfig,
} from "./executor/execute-config.js";
import { execute } from "./executor/executor.js";

//****************************TEST********************************/
const tests: ExecuteConfig[] = [
  {
    cmd: "sleep",
    args: ["5"]
  },
  {
    cmd: "sleep",
    args: ["5"],
    spinner: {
      style: "pale",
      spinner: "dots6",
      color: 'blue',
      spawnText: {
        accent: "Prc",
        text: "Milojka",
      },
      succeedText:
      {
        text: "Succusefully added application"
      },
    },
  },
  {
    cmd: "sleep",
    args: ["5"],
    spinner: {
      style: "vivid",
    },
  },
  {
    cmd: "sleep",
    args: ["5"],
    spinner: {
      style: "custom",
      styleConfig: {
        spawnColor: '#fc003f',
        succeedColor: '#0800fc',
        textColor: '#b5fc00'
      }
    },
  },
];

execute(tests);
