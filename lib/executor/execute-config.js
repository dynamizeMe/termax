export const ExecuteConfigFactory = (config) => {
    try {
        return {
            cmd: (config === null || config === void 0 ? void 0 : config.cmd) || "",
            args: (config === null || config === void 0 ? void 0 : config.args) || [],
            spinner: config.spinner,
            callback: config.callback,
        };
    }
    catch (_a) {
        throw new Error(!config.cmd ? "Command is required." : "Arguments are requierd.");
    }
};
