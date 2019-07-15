import { WebConfig } from "./webconfig.interface";
export declare class Factory {
    config: WebConfig;
    customConfig: {};
    /**
        * Store set of all web url end points which will accessed while communicating to the server
        * @param config set all web urls in which dataware webservice needs to be called
        */
    setWebConfig(config: WebConfig): void;
    /**
     * Get all web url configurations
     */
    getWebConfig(): WebConfig;
    /**
     * To store the custom configurations. Don't forget to add this configuration in readme file.
     * @param data any data which needs to be set in configuration
     * @param key unique key to retrieve the data
     */
    syncConfig(data: any, key: string): void;
    /**
     *
     * @param key unique key to retrieve the data
     */
    getConfig(key: string): any;
}
export declare const factory: Factory;
