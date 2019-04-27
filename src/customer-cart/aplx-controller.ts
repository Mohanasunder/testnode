import { DB } from 'aplx-hmw-server';
import * as _ from 'lodash';
import { CustomerCartMapper } from './mapper';

export class CustomerCartAplxController { 

    private mapper:CustomerCartMapper = new CustomerCartMapper();

    addItem(body): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.add_item_to_cart('" + body + "'::json);";
                DB.query(sql, null).then((result) => {
                    if(result[0]["add_item_to_cart"]["status"] == 200) {
                        return resolve(result[0]["add_item_to_cart"]);
                    } else {
                        return reject(result[0]["add_item_to_cart"]);
                    }                    
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }

    updateItem(body): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.update_item_in_cart('" + body + "'::json);";
                DB.query(sql, null).then((result) => {
                    if(result[0]["update_item_in_cart"]["status"] == 200) {
                        return resolve(result[0]["update_item_in_cart"]);
                    } else {
                        return reject(result[0]["update_item_in_cart"]);
                    }                    
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }

    removeItem(body): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.remove_cart_item('" + body + "'::json);";
                DB.query(sql, null).then((result) => {
                    if(result[0]["remove_cart_item"]["status"] == 200) {
                        return resolve(result[0]["remove_cart_item"]);
                    } else {
                        return reject(result[0]["remove_cart_item"]);
                    }                    
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }
    
    getItems(storeId, customerId): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select * from css.get_customer_cart_items('{\"store_id\":" + storeId + ",\"customer_id\":" + customerId + "}');";
                DB.query(sql, null).then((result) => {
                    if(result.length > 0) {
                        return resolve(this.mapper.getCartItemListResponseMapper(result));
                    } else {
                        return reject({"data":"No item exists in your cart!"});
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