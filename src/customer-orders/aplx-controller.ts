import { DB } from 'aplx-hmw-server';
import * as _ from 'lodash';
import { CustomerOrdersMapper } from './mapper';

export class CustomerOrdersAplxController { 

    private mapper:CustomerOrdersMapper = new CustomerOrdersMapper();

    createReservation(body): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.create_reserve_order('" + body + "');";
                DB.query(sql, null).then((result) => {
                    if(result[0]["create_reserve_order"]["status"] == 200) {
                        return resolve(result[0]["create_reserve_order"]);
                    } else {
                        return reject(result[0]["create_reserve_order"]);
                    }                    
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }

    getReservations(customerId): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.get_reserve_orders_list('{\"customer_id\":" + customerId + "}'::json);";
                DB.query(sql, null).then((result) => {
                    if(result[0]["get_reserve_orders_list"]) {
                        if(result[0]["get_reserve_orders_list"]["status"] == 200) {
                            return resolve(this.mapper.getReservationsListResponseMapper(result[0]["get_reserve_orders_list"]["data"]));
                        } else {
                            return reject(result[0]["get_reserve_orders_list"]);
                        }
                    } else {
                        reject({"data":"No reservations available!"})
                    }
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }

    getReservationDetails(reservationId): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.get_reserve_order_details('{\"order_id\":" + reservationId + "}');";
                DB.query(sql, null).then((result) => {
                    if(result[0]["get_reserve_order_details"]) {
                        
                        if(result[0]["get_reserve_order_details"]["status"] == 200) {
                            return resolve(this.mapper.getReservationDetailsResponseMapper(result[0]["get_reserve_order_details"]["data"]));
                        } else {
                            return reject(result[0]["get_reserve_order_details"]);
                        }
                    } else {
                        reject({"data":"No reservation available!"})
                    }
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }

    getOrders(customerId): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.get_sale_order_list('{\"customer_id\":" + customerId + "}'::json);";
                DB.query(sql, null).then((result) => {
                    if(result[0]["get_sale_order_list"]) {
                        if(result[0]["get_sale_order_list"]["status"] == 200) {
                            return resolve(result[0]["get_sale_order_list"]["data"]);
                        } else {
                            return reject(result[0]["get_sale_order_list"]);
                        }
                    } else {
                        reject({"data":"No orders available!"})
                    }
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }

    getOrderDetails(orderId): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.get_sale_order_details('{\"order_id\":" + orderId + "}');";
                DB.query(sql, null).then((result) => {
                    if(result[0]["get_sale_order_details"]) {
                        
                        if(result[0]["get_sale_order_details"]["status"] == 200) {
                            return resolve(result[0]["get_sale_order_details"]["data"]);
                        } else {
                            return reject(result[0]["get_sale_order_details"]);
                        }
                    } else {
                        reject({"data":"No order available!"})
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