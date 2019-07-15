"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aplx_hmw_server_1 = require("aplx-hmw-server");
var mapper_1 = require("./mapper");
var CustomerWishlistAplxController = /** @class */ (function () {
    function CustomerWishlistAplxController() {
        this.mapper = new mapper_1.CustomerWishlistMapper();
    }
    CustomerWishlistAplxController.prototype.getWishlist = function (customerId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select * from css.get_wishlist_products(" + customerId + ");";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result.length > 0) {
                        return resolve(_this.mapper.getWishlistItemListResponseMapper(result));
                    }
                    else {
                        return reject({ "data": "No item exists in your wishlist!" });
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
    CustomerWishlistAplxController.prototype.addItem = function (body) {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.add_sku_to_wishlist('" + body + "'::json);";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["add_sku_to_wishlist"]["status"] == 200) {
                        return resolve(result[0]["add_sku_to_wishlist"]);
                    }
                    else {
                        return reject(result[0]["add_sku_to_wishlist"]);
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
    CustomerWishlistAplxController.prototype.removeItem = function (body) {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.remove_sku_from_wishlist('" + body + "'::json);";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["remove_sku_from_wishlist"]["status"] == 200) {
                        return resolve({ "status": "done" });
                    }
                    else {
                        return reject(result[0]["remove_sku_from_wishlist"]);
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
    return CustomerWishlistAplxController;
}());
exports.CustomerWishlistAplxController = CustomerWishlistAplxController;
//# sourceMappingURL=aplx-controller.js.map