import { DB } from 'aplx-hmw-server';
import * as _ from 'lodash';
import { CustomerWishlistMapper } from './mapper';

export class CustomerWishlistAplxController { 

    private mapper:CustomerWishlistMapper = new CustomerWishlistMapper();

    getWishlist(customerId): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select * from css.get_wishlist_products(" + customerId + ");";
                DB.query(sql, null).then((result) => {
                    if(result.length > 0) {
                        return resolve(this.mapper.getWishlistItemListResponseMapper(result));
                    } else {
                        return reject({"data":"No item exists in your wishlist!"});
                    }                    
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }

    addItem(body): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.add_sku_to_wishlist('" + body + "'::json);";
                DB.query(sql, null).then((result) => {
                    if(result[0]["add_sku_to_wishlist"]["status"] == 200) {
                        return resolve(result[0]["add_sku_to_wishlist"]);
                    } else {
                        return reject(result[0]["add_sku_to_wishlist"]);
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
                let sql = "select css.remove_sku_from_wishlist('" + body + "'::json);";
                DB.query(sql, null).then((result) => {
                    if(result[0]["remove_sku_from_wishlist"]["status"] == 200) {
                        return resolve({"status":"done"});
                    } else {
                        return reject(result[0]["remove_sku_from_wishlist"]);
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