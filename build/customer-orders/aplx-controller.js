"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aplx_hmw_server_1 = require("aplx-hmw-server");
var mapper_1 = require("./mapper");
var CustomerOrdersAplxController = /** @class */ (function () {
    function CustomerOrdersAplxController() {
        this.mapper = new mapper_1.CustomerOrdersMapper();
    }
    CustomerOrdersAplxController.prototype.createReservation = function (body) {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.create_reserve_order('" + body + "');";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["create_reserve_order"]["status"] == 200) {
                        return resolve(result[0]["create_reserve_order"]);
                    }
                    else {
                        return reject(result[0]["create_reserve_order"]);
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
    CustomerOrdersAplxController.prototype.getReservations = function (customerId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.get_reserve_orders_list('{\"customer_id\":" + customerId + "}'::json);";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["get_reserve_orders_list"]) {
                        if (result[0]["get_reserve_orders_list"]["status"] == 200) {
                            return resolve(_this.mapper.getReservationsListResponseMapper(result[0]["get_reserve_orders_list"]["data"]));
                        }
                        else {
                            return reject(result[0]["get_reserve_orders_list"]);
                        }
                    }
                    else {
                        reject({ "data": "No reservations available!" });
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
    CustomerOrdersAplxController.prototype.getReservationDetails = function (reservationId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.get_reserve_order_details('{\"order_id\":" + reservationId + "}');";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["get_reserve_order_details"]) {
                        if (result[0]["get_reserve_order_details"]["status"] == 200) {
                            return resolve(_this.mapper.getReservationDetailsResponseMapper(result[0]["get_reserve_order_details"]["data"]));
                        }
                        else {
                            return reject(result[0]["get_reserve_order_details"]);
                        }
                    }
                    else {
                        reject({ "data": "No reservation available!" });
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
    CustomerOrdersAplxController.prototype.getOrders = function (customerId) {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.get_sale_order_list('{\"customer_id\":" + customerId + "}'::json);";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["get_sale_order_list"]) {
                        if (result[0]["get_sale_order_list"]["status"] == 200) {
                            return resolve(result[0]["get_sale_order_list"]["data"]);
                        }
                        else {
                            return reject(result[0]["get_sale_order_list"]);
                        }
                    }
                    else {
                        reject({ "data": "No orders available!" });
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
    CustomerOrdersAplxController.prototype.getOrderDetails = function (orderId) {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.get_sale_order_details('{\"order_id\":" + orderId + "}');";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["get_sale_order_details"]) {
                        if (result[0]["get_sale_order_details"]["status"] == 200) {
                            return resolve(result[0]["get_sale_order_details"]["data"]);
                        }
                        else {
                            return reject(result[0]["get_sale_order_details"]);
                        }
                    }
                    else {
                        reject({ "data": "No order available!" });
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
    return CustomerOrdersAplxController;
}());
exports.CustomerOrdersAplxController = CustomerOrdersAplxController;
//# sourceMappingURL=aplx-controller.js.map