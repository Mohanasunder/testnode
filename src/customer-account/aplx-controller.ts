import { DB } from 'aplx-hmw-server';
import * as _ from 'lodash';

export class CustomerAccountAplxController { 

    doCheck(req): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.is_customer_registered('" + req + "');";
                DB.query(sql, null).then((result) => {
                    if(result[0]["is_customer_registered"]["status"] == 200) {
                        result = result[0]["is_customer_registered"]["data"];
                        return resolve(result);
                    } else {
                        return reject({"data":result[0]["is_customer_registered"]["data"]});
                    }                    
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }
    
    doSignup(req): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.customer_signup('" + req + "');";
                DB.query(sql, null).then((result) => {
                    if(result[0]["customer_signup"]["status"] == 200) {
                        result = result[0]["customer_signup"]["data"];
                        return resolve({"data":result});
                    } else {
                        return reject({"data":result[0]["customer_signup"]["data"]});
                    }                    
                }, (err) => {
                    return reject(err.hint);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }

    doLogin(req): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                req = JSON.parse(req);
                let email = req["email"];
                let pwd = req["pwd"];

                DB.query("select css.login_authenticate('[\"" + email + "\"]','" + pwd + "');", null).then((result) => {
                    if(result[0]["login_authenticate"]["status"] == 200) {
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
                    } else {
                        return reject(result[0]["login_authenticate"]["data"]);
                    }                    
                }, (err) => {
                    return reject(err.hint);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }

    doChangePassword(req): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.change_password('" + req + "');";
                DB.query(sql, null).then((result) => {
                    if(result[0]["change_password"]["status"] == 200) {
                        result = result[0]["change_password"]["data"];
                        return resolve({"data":result});
                    } else {
                        return reject(result[0]["change_password"]["data"]);
                    }                    
                }, (err) => {
                    return reject(err.hint);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }

    doUpdate(req): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select crm.update_customer('" + req + "');";
                DB.query(sql, null).then((result) => {
                    if(result[0]["update_customer"]["status"] == 200) {
                        result = result[0]["update_customer"]["data"];
                        return resolve({"data":result});
                    } else {
                        return reject({"data":result[0]["update_customer"]["data"]});
                    }                    
                }, (err) => {
                    return reject(err.hint);
                });
            } catch(err) {
                return reject(err);
            }            
        });
    }

    getDetails(req): Promise<any> {
        return new Promise((resolve, reject) => {
            
        });
    }

    getDeliveryAddresses(Id): Promise<any[]> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.get_delivery_addresses(" + Id + ");";
                DB.query(sql, null).then((result) => {
                    if(result[0]["get_delivery_addresses"]["status"] == 200) {
                        result = result[0]["get_delivery_addresses"]["data"];
                        return resolve(result);
                    } else {
                        return reject({"data":result[0]["get_delivery_addresses"]["message"]});
                    }                    
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }

    deleteDeliveryAddress(body): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.delete_customer_address('" + body + "');";
                DB.query(sql, null).then((result) => {
                    if(result[0]["delete_customer_address"]["status"] == 200) {
                        result = result[0]["delete_customer_address"]["data"];
                        return resolve({"data":result});
                    } else {
                        return reject({"data":result[0]["delete_customer_address"]["data"]});
                    }                    
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }            
        });
    }

    createUpdateDeliveryAddress(body): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.create_update_customer_delivery_address('" + body + "');";
                DB.query(sql, null).then((result) => {
                    if(result[0]["create_update_customer_delivery_address"]["status"] == 200) {
                        result = result[0]["create_update_customer_delivery_address"]["data"];
                        return resolve({"data":result});
                    } else {
                        return reject({"data":result[0]["create_update_customer_delivery_address"]["data"]});
                    }                    
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }            
        });
    }
}