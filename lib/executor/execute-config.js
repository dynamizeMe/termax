//TODO unnecessary code to be removed
export const ExecuteConfigFactory = (config) => {
    try {
        const { cmd, args, handleErrors, spinner, callback } = config;
        return {
            cmd: cmd || "",
            args: args || [],
            handleErrors: handleErrors || false,
            spinner: spinner,
            callback: callback,
        };
    }
    catch (_a) {
        throw new Error(!config.cmd ? "Command is required." : "Arguments are requierd.");
    }
};
