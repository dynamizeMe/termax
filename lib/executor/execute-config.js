export const ExecuteConfigFactory = (config) => {
    const { cmd, args, spinner, callback } = config;
    try {
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
