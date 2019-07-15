"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aplx_hmw_server_1 = require("aplx-hmw-server");
var CustomerAccountAplxController = /** @class */ (function () {
    function CustomerAccountAplxController() {
    }
    CustomerAccountAplxController.prototype.doCheck = function (req) {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.is_customer_registered('" + req + "');";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["is_customer_registered"]["status"] == 200) {
                        result = result[0]["is_customer_registered"]["data"];
                        return resolve(result);
                    }
                    else {
                        return reject({ "data": result[0]["is_customer_registered"]["data"] });
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
    CustomerAccountAplxController.prototype.doSignup = function (req) {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.customer_signup('" + req + "');";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["customer_signup"]["status"] == 200) {
                        result = result[0]["customer_signup"]["data"];
                        return resolve({ "data": result });
                    }
                    else {
                        return reject({ "data": result[0]["customer_signup"]["data"] });
                    }
                }, function (err) {
                    return reject(err.hint);
                });
            }
            catch (err) {
                return reject(err);
            }
        });
    };
    CustomerAccountAplxController.prototype.doLogin = function (req) {
        return new Promise(function (resolve, reject) {
            try {
                req = JSON.parse(req);
                var email = req["email"];
                var pwd = req["pwd"];
                aplx_hmw_server_1.DB.query("select css.login_authenticate('[\"" + email + "\"]','" + pwd + "');", null).then(function (result) {
                    if (result[0]["login_authenticate"]["status"] == 200) {
                        result = result[0]["login_authenticate"]["data"];
                        result = [
                            {
                                "title": result["title"],
                                "name": result["name"],
                                "lastName": result["lastName"],
                                "email": result["email"][0],
                                "mobile": result["mobile"][0],
                                "gender": result["gender"],
                                "ID": result["ID"],
                                "profilePic": result["profilePic"],
                                "signupOTPVerified": result["signupOTPVerified"]
                            }
                        ];
                        return resolve(result);
                    }
                    else {
                        return reject(result[0]["login_authenticate"]["data"]);
                    }
                }, function (err) {
                    return reject(err.hint);
                });
            }
            catch (err) {
                return reject(err);
            }
        });
    };
    CustomerAccountAplxController.prototype.doChangePassword = function (req) {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.change_password('" + req + "');";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["change_password"]["status"] == 200) {
                        result = result[0]["change_password"]["data"];
                        return resolve({ "data": result });
                    }
                    else {
                        return reject(result[0]["change_password"]["data"]);
                    }
                }, function (err) {
                    return reject(err.hint);
                });
            }
            catch (err) {
                return reject(err);
            }
        });
    };
    CustomerAccountAplxController.prototype.doUpdate = function (req) {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select crm.update_customer('" + req + "');";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["update_customer"]["status"] == 200) {
                        result = result[0]["update_customer"]["data"];
                        return resolve({ "data": result });
                    }
                    else {
                        return reject({ "data": result[0]["update_customer"]["data"] });
                    }
                }, function (err) {
                    return reject(err.hint);
                });
            }
            catch (err) {
                return reject(err);
            }
        });
    };
    CustomerAccountAplxController.prototype.getDetails = function (req) {
        return new Promise(function (resolve, reject) {
        });
    };
    CustomerAccountAplxController.prototype.getDeliveryAddresses = function (Id) {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.get_delivery_addresses(" + Id + ");";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["get_delivery_addresses"]["status"] == 200) {
                        result = result[0]["get_delivery_addresses"]["data"];
                        return resolve(result);
                    }
                    else {
                        return reject({ "data": result[0]["get_delivery_addresses"]["message"] });
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
    CustomerAccountAplxController.prototype.deleteDeliveryAddress = function (body) {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.delete_customer_address('" + body + "');";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["delete_customer_address"]["status"] == 200) {
                        result = result[0]["delete_customer_address"]["data"];
                        return resolve({ "data": result });
                    }
                    else {
                        return reject({ "data": result[0]["delete_customer_address"]["data"] });
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
    CustomerAccountAplxController.prototype.createUpdateDeliveryAddress = function (body) {
        return new Promise(function (resolve, reject) {
            try {
                var sql = "select css.create_update_customer_delivery_address('" + body + "');";
                aplx_hmw_server_1.DB.query(sql, null).then(function (result) {
                    if (result[0]["create_update_customer_delivery_address"]["status"] == 200) {
                        result = result[0]["create_update_customer_delivery_address"]["data"];
                        return resolve({ "data": result });
                    }
                    else {
                        return reject({ "data": result[0]["create_update_customer_delivery_address"]["data"] });
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
    return CustomerAccountAplxController;
}());
exports.CustomerAccountAplxController = CustomerAccountAplxController;
//# sourceMappingURL=aplx-controller.js.map