"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aplx_hmw_server_1 = require("aplx-hmw-server");
var customer_account_1 = require("./customer-account");
var stores_products_1 = require("./stores-products");
var customer_wishlist_1 = require("./customer-wishlist");
var customer_cart_1 = require("./customer-cart");
var customer_orders_1 = require("./customer-orders");
var customer_schedules_1 = require("./customer-schedules");
var customer_grievances_1 = require("./customer-grievances");
var devInstance = "postgres://mohan:Welcome@100@192.168.5.221:5432/simpleretail-groceries";
aplx_hmw_server_1.factory.setWebConfig({
    applicationSource: aplx_hmw_server_1.ApplicationSource.APLX,
    DB_URL: devInstance
});
new aplx_hmw_server_1.ApiServer().start(8000, "dev", [
    new customer_account_1.CustomerAccountRoute(),
    new stores_products_1.StoresProductsRoute(),
    new customer_wishlist_1.CustomerWishlistRoute(),
    new customer_cart_1.CustomerCartRoute(),
    new customer_orders_1.CustomerOrdersRoute(),
    new customer_schedules_1.CustomerSchedulesRoute(),
    new customer_grievances_1.CustomerGrievancesRoute(),
], false);
/**
* Export all files
**/
__export(require("./config/index"));
__export(require("./customer-account/index"));
__export(require("./stores-products/index"));
__export(require("./customer-wishlist/index"));
__export(require("./customer-cart/index"));
__export(require("./customer-orders/index"));
__export(require("./customer-schedules/index"));
__export(require("./customer-grievances/index"));
//# sourceMappingURL=index.js.map