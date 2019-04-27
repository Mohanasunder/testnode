"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Factory = /** @class */ (function () {
    function Factory() {
        // TODO :-
        this.customConfig = {};
    }
    /**
        * Store set of all web url end points which will accessed while communicating to the server
        * @param config set all web urls in which dataware webservice needs to be called
        */
    Factory.prototype.setWebConfig = function (config) {
        this.config = config;
    };
    /**
     * Get all web url configurations
     */
    Factory.prototype.getWebConfig = function () {
        return this.config;
    };
    /**
     * To store the custom configurations. Don't forget to add this configuration in readme file.
     * @param data any data which needs to be set in configuration
     * @param key unique key to retrieve the data
     */
    Factory.prototype.syncConfig = function (data, key) {
        this.customConfig[key] = data;
    };
    /**
     *
     * @param key unique key to retrieve the data
     */
    Factory.prototype.getConfig = function (key) {
        return this.customConfig[key];
    };
    return Factory;
}());
exports.Factory = Factory;
exports.factory = new Factory();
//# sourceMappingURL=factory.js.map