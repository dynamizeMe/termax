export const ExecuteConfigFactory = (config) => {
    const { cmd, args, handleErrors, spinner } = config;
    return {
        cmd: cmd || "",
        args: args || [],
        handleErrors: handleErrors || false,
        spinner: spinner,
    };
};
