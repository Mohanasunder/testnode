import { WebConfig } from "./webconfig.interface";

export class Factory {
    // TODO :-

    config: WebConfig;
    customConfig = {};

 /**
     * Store set of all web url end points which will accessed while communicating to the server
     * @param config set all web urls in which dataware webservice needs to be called
     */
    setWebConfig(config: WebConfig) {
        this.config = config;
    }

    /**
     * Get all web url configurations 
     */
    getWebConfig(): WebConfig {
        return this.config;
    }
    /**
     * To store the custom configurations. Don't forget to add this configuration in readme file.
     * @param data any data which needs to be set in configuration
     * @param key unique key to retrieve the data
     */
    syncConfig(data: any, key: string) {
        this.customConfig[key] = data;
    }

    /**
     * 
     * @param key unique key to retrieve the data
     */
    getConfig(key: string): any {
        return this.customConfig[key];
    }

}

export const factory = new Factory();