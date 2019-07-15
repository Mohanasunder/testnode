"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aplx_hmw_server_1 = require("aplx-hmw-server");
var mapper_1 = require("./mapper");
var CustomerSchedulesAplxController = /** @class */ (function () {
    function CustomerSchedulesAplxController() {
        this.mapper = new mapper_1.CustomerSchedulesMapper();
    }
    CustomerSchedulesAplxController.prototype.getScheduleItems = function (customerId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.get_schedules_list('{\"customer_id\":" + customerId + "}');";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["get_schedules_list"]["status"] == 200) {
                        result = result[0]["get_schedules_list"]["data"];
                        return resolve(_this.mapper.getScheduleItemListResponseMapper(result));
                    }
                    else {
                        return reject(result[0]["get_schedules_list"]);
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
    CustomerSchedulesAplxController.prototype.getScheduleCalendar = function (customerId, myear, mmonth) {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.get_schedules_calendar('{\"customer_id\":" + customerId + ",\"year\":" + myear + ",\"month\":" + mmonth + "}');";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["get_schedules_calendar"]["status"] == 200) {
                        return resolve(result[0]["get_schedules_calendar"]["data"]);
                    }
                    else {
                        return reject(result[0]["get_schedules_calendar"]);
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
    CustomerSchedulesAplxController.prototype.getScheduleDeliveries = function (customerId, mYear, mMonth, mDate) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.get_schedule_deliveries('{\"customer_id\":" + customerId + ",\"year\":" + mYear + ",\"month\":" + mMonth + ",\"day\":" + mDate + "}');";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["get_schedule_deliveries"]["status"] == 200) {
                        result = result[0]["get_schedule_deliveries"]["data"];
                        return resolve(_this.mapper.getScheduleDeliveriesListResponseMapper(result));
                    }
                    else {
                        return reject(result[0]["get_schedule_deliveries"]);
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
    CustomerSchedulesAplxController.prototype.removeScheduleItem = function (body) {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.delete_schedule('" + body + "'::json);";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["delete_schedule"]["status"] == 200) {
                        return resolve(result[0]["delete_schedule"]);
                    }
                    else {
                        return reject(result[0]["delete_schedule"]);
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
    CustomerSchedulesAplxController.prototype.createScheduleItem = function (body) {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.create_schedule_deliveries('" + body + "'::json);";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["create_schedule_deliveries"]["status"] == 200) {
                        return resolve(result[0]["create_schedule_deliveries"]);
                    }
                    else {
                        return reject(result[0]["create_schedule_deliveries"]);
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
    CustomerSchedulesAplxController.prototype.cancelScheduleDeliveries = function (body) {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.cancel_schedule_deliveries('" + body + "'::json);";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["cancel_schedule_deliveries"]["status"] == 200) {
                        return resolve(result[0]["cancel_schedule_deliveries"]);
                    }
                    else {
                        return reject(result[0]["cancel_schedule_deliveries"]);
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
    return CustomerSchedulesAplxController;
}());
exports.CustomerSchedulesAplxController = CustomerSchedulesAplxController;
//# sourceMappingURL=aplx-controller.js.map