"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aplx_hmw_server_1 = require("aplx-hmw-server");
var mapper_1 = require("./mapper");
var CustomerGrievancesAplxController = /** @class */ (function () {
    function CustomerGrievancesAplxController() {
        this.mapper = new mapper_1.CustomerGrievancesMapper();
    }
    CustomerGrievancesAplxController.prototype.getCategories = function () {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.get_grievance_categories();";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["get_grievance_categories"]["status"] == 200) {
                        result = result[0]["get_grievance_categories"]["data"];
                        return resolve(result);
                    }
                    else {
                        return reject(result[0]["get_grievance_categories"]);
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
    CustomerGrievancesAplxController.prototype.getPriorities = function () {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.get_grievance_priorities();";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["get_grievance_priorities"]["status"] == 200) {
                        result = result[0]["get_grievance_priorities"]["data"];
                        return resolve(result);
                    }
                    else {
                        return reject(result[0]["get_grievance_priorities"]);
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
    CustomerGrievancesAplxController.prototype.getFlags = function () {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.get_grievance_flags();";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["get_grievance_flags"]["status"] == 200) {
                        result = result[0]["get_grievance_flags"]["data"];
                        return resolve(result);
                    }
                    else {
                        return reject(result[0]["get_grievance_flags"]);
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
    CustomerGrievancesAplxController.prototype.getGrievances = function (customerId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.get_grievances_list('{\"customer_id\":" + customerId + "}');";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["get_grievances_list"]["status"] == 200) {
                        result = result[0]["get_grievances_list"]["data"];
                        return resolve(_this.mapper.getGrievancesListResponseMapper(result));
                    }
                    else {
                        return reject(result[0]["get_grievances_list"]);
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
    CustomerGrievancesAplxController.prototype.getGrievanceDetails = function (grievanceId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.get_grievances_details('{\"grievance_id\":" + grievanceId + "}');";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["get_grievances_details"]["status"] == 200) {
                        result = result[0]["get_grievances_details"]["data"];
                        return resolve(_this.mapper.getGrievanceDetailsResponseMapper(result));
                    }
                    else {
                        return reject(result[0]["get_grievances_details"]);
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
    CustomerGrievancesAplxController.prototype.readGrievanceResponse = function (body) {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.read_grievances_response('" + body + "'::json);";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["read_grievances_response"]["status"] == 200) {
                        return resolve(result[0]["read_grievances_response"]);
                    }
                    else {
                        return reject(result[0]["read_grievances_response"]);
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
    CustomerGrievancesAplxController.prototype.closeGrievanceTicket = function (body) {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.close_grievances_ticket('" + body + "'::json);";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["close_grievances_ticket"]["status"] == 200) {
                        return resolve(result[0]["close_grievances_ticket"]);
                    }
                    else {
                        return reject(result[0]["close_grievances_ticket"]);
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
    CustomerGrievancesAplxController.prototype.postGrievanceTicket = function (body) {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.post_grievances_ticket('" + body + "'::json);";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["post_grievances_ticket"]["status"] == 200) {
                        return resolve(result[0]["post_grievances_ticket"]);
                    }
                    else {
                        return reject(result[0]["post_grievances_ticket"]);
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
    CustomerGrievancesAplxController.prototype.postGrievanceResponse = function (body) {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.post_grievances_response('" + body + "'::json);";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["post_grievances_response"]["status"] == 200) {
                        return resolve(result[0]["post_grievances_response"]);
                    }
                    else {
                        return reject(result[0]["post_grievances_response"]);
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
    return CustomerGrievancesAplxController;
}());
exports.CustomerGrievancesAplxController = CustomerGrievancesAplxController;
//# sourceMappingURL=aplx-controller.js.map