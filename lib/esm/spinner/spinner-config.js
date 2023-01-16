export const SpinnerConfigFactory = (config) => {
    try {
        config = config;
        const spinner = config.spinner;
        const defaultConfig = {
            spinner: spinner?.spinner || 'dots',
            style: spinner?.style || 'default',
            spawnText: {
                prefix: spinner?.spawnText?.prefix || 'EXECUTING',
                text: spinner?.spawnText?.text || `${config.cmd} ${config.args?.join(' ')}`
            },
            succeedText: {
                prefix: spinner?.succeedText?.prefix || 'COMPLETED EXECUTING',
                text: spinner?.succeedText?.text || `${config.cmd} ${config.args?.join(' ')}`
            },
            errorText: {
                prefix: spinner?.errorText?.prefix || 'ERROR',
                text: spinner?.errorText?.text || `${config.cmd} ${config.args ? config?.args.join(' ') : ''}`
            },
            color: spinner?.color || 'green',
            indent: spinner?.indent || 0,
            showData: spinner?.showData || false
        };
        return { ...config, spinner: { ...defaultConfig } };
    }
    catch {
        throw new Error('Spinner configuration incorrect.');
    }
};
