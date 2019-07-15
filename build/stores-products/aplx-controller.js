"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aplx_hmw_server_1 = require("aplx-hmw-server");
var mapper_1 = require("./mapper");
var StoresProductsAplxController = /** @class */ (function () {
    function StoresProductsAplxController() {
        this.mapper = new mapper_1.StoresProductsMapper();
    }
    StoresProductsAplxController.prototype.getStores = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select mdm.get_stores();";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["get_stores"]["status"] == 200) {
                        result = _this.mapper.getStoresListResponseMapper(result[0]["get_stores"]["data"]);
                        return resolve(result);
                    }
                    else {
                        return reject({ "data": result[0]["get_stores"]["data"] });
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
    StoresProductsAplxController.prototype.getCategories = function (parentCatID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.get_categories();";
                if (parentCatID) {
                    sql = "select css.get_categories('{\"parent_category_id\":" + parentCatID + "}');";
                }
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["get_categories"]["status"] == 200) {
                        result = _this.mapper.getCategoriesListResponseMapper(result[0]["get_categories"]["data"]);
                        return resolve(result);
                    }
                    else {
                        return reject({ "data": result[0]["get_categories"]["data"] });
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
    StoresProductsAplxController.prototype.getCategoryItems = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var inp = { "store_id": params.storeId };
                if (params.skuId) {
                    inp["sku"] = params.skuId;
                }
                else if (params.barcode) {
                    inp["barcode"] = params.barcode;
                }
                else if (params.catId) {
                    inp["category_id"] = params.catId;
                }
                var sql = "select * from css.get_store_products('" + JSON.stringify(inp) + "');";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result.length > 0) {
                        return resolve(_this.mapper.getCategoryItemListResponseMapper(result));
                    }
                    else {
                        return reject({ "data": "No item exists in this category!" });
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
    StoresProductsAplxController.prototype.getInventory = function (body) {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.get_inventory_lookup('" + body + "');";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["get_inventory_lookup"]["status"] == 200) {
                        return resolve(result[0]["get_inventory_lookup"]["data"]);
                    }
                    else {
                        return reject({ "data": result[0]["get_inventory_lookup"]["data"] });
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
    return StoresProductsAplxController;
}());
exports.StoresProductsAplxController = StoresProductsAplxController;
//# sourceMappingURL=aplx-controller.js.map