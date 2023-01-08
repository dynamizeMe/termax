import ora from 'ora';
import { spawn } from "child_process";
import process from 'process';
import { CommandConfig } from './command-config';

function test(cmds: CommandConfig[]) {
    if(cmds.length === 0) {
        console.log('All Done.');
        return;
    }
    else {
        const spinner = ora({
            discardStdin: false,
            text: cmds[0].text,
            spinner: 'dots',
        }).start();    
    
        let cmd = spawn(cmds[0].cmd, cmds[0].args);

        cmd.on('spawn', () => {
            cmds.shift();
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
            spinner.succeed('done');
            if(cmds[0].newDir) {
                process.chdir(cmds[0].newDir);
            }
            if(cmds.length > 0 && !spinner.isSpinning) {
                test(cmds);
            }
        });
    }
}

const commands: CommandConfig[] = [
    {
        cmd: 'ng',
        args: ['new', 'ccms', '--create-application=false'],
        text: 'Workspace',
        newDir: 'ccms'
    },
    {
        cmd: 'ng',
        args: ['generate', 'application', 'host'],
        text: "App",
    }
]

test(commands);