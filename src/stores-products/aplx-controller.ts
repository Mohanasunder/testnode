import { DB } from 'aplx-hmw-server';
import * as _ from 'lodash';
import { StoresProductsMapper } from './mapper';

export class StoresProductsAplxController { 
    private mapper:StoresProductsMapper = new StoresProductsMapper();

    getStores(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select mdm.get_stores();";
                DB.query(sql, null).then((result) => {
                    if(result[0]["get_stores"]["status"] == 200) {
                        result = this.mapper.getStoresListResponseMapper(result[0]["get_stores"]["data"]);
                        return resolve(result);
                    } else {
                        return reject({"data":result[0]["get_stores"]["data"]});
                    }                    
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }

    
    getCategories(parentCatID): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.get_categories();";
                if(parentCatID){
                    sql = "select css.get_categories('{\"parent_category_id\":" + parentCatID + "}');";
                }
                DB.query(sql, null).then((result) => {
                    if(result[0]["get_categories"]["status"] == 200) {
                        result = this.mapper.getCategoriesListResponseMapper(result[0]["get_categories"]["data"]);
                        return resolve(result);
                    } else {
                        return reject({"data":result[0]["get_categories"]["data"]});
                    }                    
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }

    getCategoryItems(params): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let inp: any = {"store_id":params.storeId};
                if(params.skuId) {
                    inp["sku"] =  params.skuId;
                } else if(params.barcode) {
                    inp["barcode"] = params.barcode;
                } else if(params.catId) {
                    inp["category_id"] = params.catId;
                }
                let sql = "select * from css.get_store_products('" + JSON.stringify(inp) + "');";
                DB.query(sql, null).then((result) => {
                    if(result.length > 0) {
                        return resolve(this.mapper.getCategoryItemListResponseMapper(result));
                    } else {
                        return reject({"data":"No item exists in this category!"});
                    }                    
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }

    getInventory(body): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.get_inventory_lookup('" + body + "');";
                DB.query(sql, null).then((result) => {
                    if(result[0]["get_inventory_lookup"]["status"] == 200) {
                        return resolve(result[0]["get_inventory_lookup"]["data"]);
                    } else {
                        return reject({"data":result[0]["get_inventory_lookup"]["data"]});
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