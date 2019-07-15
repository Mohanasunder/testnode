"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aplx_hmw_server_1 = require("aplx-hmw-server");
var mapper_1 = require("./mapper");
var CustomerCartAplxController = /** @class */ (function () {
    function CustomerCartAplxController() {
        this.mapper = new mapper_1.CustomerCartMapper();
    }
    CustomerCartAplxController.prototype.addItem = function (body) {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.add_item_to_cart('" + body + "'::json);";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["add_item_to_cart"]["status"] == 200) {
                        return resolve(result[0]["add_item_to_cart"]);
                    }
                    else {
                        return reject(result[0]["add_item_to_cart"]);
                    }
                }, function (err) {
                    return reject(err);
                });
            }
            catch (err) {
                return reject(err);
            }
        });
    };
    CustomerCartAplxController.prototype.updateItem = function (body) {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.update_item_in_cart('" + body + "'::json);";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["update_item_in_cart"]["status"] == 200) {
                        return resolve(result[0]["update_item_in_cart"]);
                    }
                    else {
                        return reject(result[0]["update_item_in_cart"]);
                    }
                }, function (err) {
                    return reject(err);
                });
            }
            catch (err) {
                return reject(err);
            }
        });
    };
    CustomerCartAplxController.prototype.removeItem = function (body) {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.remove_cart_item('" + body + "'::json);";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["remove_cart_item"]["status"] == 200) {
                        return resolve(result[0]["remove_cart_item"]);
                    }
                    else {
                        return reject(result[0]["remove_cart_item"]);
                    }
                }, function (err) {
                    return reject(err);
                });
            }
            catch (err) {
                return reject(err);
            }
        });
    };
    CustomerCartAplxController.prototype.getItems = function (storeId, customerId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select * from css.get_customer_cart_items('{\"store_id\":" + storeId + ",\"customer_id\":" + customerId + "}');";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result.length > 0) {
                        return resolve(_this.mapper.getCartItemListResponseMapper(result));
                    }
                    else {
                        return reject({ "data": "No item exists in your cart!" });
                    }
                }, function (err) {
                    return reject(err);
                });
            }
            catch (err) {
                return reject(err);
            }
        });
    };
    return CustomerCartAplxController;
}());
exports.CustomerCartAplxController = CustomerCartAplxController;
//# sourceMappingURL=aplx-controller.js.map