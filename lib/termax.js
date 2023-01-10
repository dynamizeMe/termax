import { execute } from "./executor/executor.js";
//****************************TEST********************************/
const tests = [
    {
        cmd: "sleep",
        args: ["5"],
        spinner: {
            style: "cold"
        }
    },
];
execute(tests);
