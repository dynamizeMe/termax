//TODO unnecessary code to be removed
export const ExecuteConfigFactory = (config) => {
    try {
        const { cmd, args, spinner, callback } = config;
        return {
            cmd: cmd || "",
            args: args || [],
            spinner: spinner,
            callback: callback,
        };
    }
    catch (_a) {
        throw new Error(!config.cmd ? "Command is required." : "Arguments are requierd.");
    }
};
