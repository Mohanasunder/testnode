import { ApplicationSource, Config } from "aplx-hmw-server";

/**
* include all required keys which needs from client configuration
*/

export interface WebConfig {
    /**
     * Specify the source of application. 
     */
    APPLICATION_SOURCE: ApplicationSource
    USERNAME_PASSWORD: Config;
}