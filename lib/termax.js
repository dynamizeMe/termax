import ora from 'ora';
import { spawn } from "child_process";
import process from 'process';
function test(cmds) {
    if (cmds.length === 0) {
        console.log('All Done.');
        return;
    }
    else {
        const spinner = ora({
            discardStdin: false,
            text: cmds[0].spinner.spawnText,
            spinner: cmds[0].spinner.spinner,
            color: cmds[0].spinner.color,
            indent: cmds[0].spinner.indent
        }).start();
        const cmd = spawn(cmds[0].cmd, cmds[0].args);
        const succeedText = cmds[0].spinner.succeedText;
        const callback = cmds[0].callback;
        cmd.on('spawn', () => {
            cmds.shift();
        });
        cmd.on('error', (err) => {
            spinner.fail(err.name);
        });
        cmd.stdout.on('data', (data) => {
            // console.log(`\nstdout: ${data}`);
        });
        cmd.on('disconnect', () => {
            console.log('Disconnect');
        });
        cmd.on('message', () => {
            console.log('Message');
        });
        cmd.on('close', () => {
            spinner.succeed(succeedText ? succeedText : '');
            if (callback) {
                callback();
            }
            if (cmds.length > 0 && !spinner.isSpinning) {
                test(cmds);
            }
        });
    }
}
const commands = [
    {
        cmd: 'ng',
        args: ['new', 'ccms', '--create-application=false'],
        spinner: {
            spinner: 'dots',
            spawnText: 'Initializing Workspace',
            succeedText: 'Succusefully initiated workspace',
            color: 'yellow',
            indent: 0
        },
        callback: function () {
            process.chdir('./ccms');
        }
    },
    {
        cmd: 'ng',
        args: ['generate', 'application', 'host'],
        spinner: {
            spinner: 'arrow',
            spawnText: 'Adding application',
            succeedText: 'Succusefully added application',
            color: 'blue',
            indent: 2
        },
    }
];
test(commands);
