export interface IAppConfig {
    env: {
        name: string;
    };

    api: {
            name: string;
            url: string;
            secret?: string;
    }
}