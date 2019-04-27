export class StoresProductsMapper { 

    /**
     * Creates mapper for the reponse of Store list
     * @param data response from sap for Store list
     * @returns mapped response for front end
     */
    getStoresListResponseMapper(data: JSON[]): any[] {
        var response: any[] = [];
        var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789~!@#$%^&*=+"
        if(data) {
            data.forEach((element,i,arr) => {
                response.push({
                    "ID"            : element["code"],
                    "title"         : element["name"],
                    "label"         : labels.charAt(i),
                    "latitude"      : element["geo_location"]["latitude"] || 0,
                    "longitude"     : element["geo_location"]["longitude"] || 0,
                    "address"       : element["address"]["line1"] + ", " + element["address"]["line2"],
                    "city"          : element["address"]["city"],
                    "state"         : element["address"]["state"],
                    "country"       : element["address"]["country"],
                    "pincode"       : element["address"]["zipcode"]
                });
            });
        }
        return response;
    }

    /**
     * Creates mapper for the reponse of Categories list
     * @param data response from sap for Categories list
     * @returns mapped response for front end
     */
    getCategoriesListResponseMapper(data: JSON[]): any[] {
        var response: any[] = [];
        if(data) {
            data.forEach((element,i,arr) => {
                response.push({
                    "ID"            : element["id"],
                    "name"          : element["name"],
                    "description"   : element["description"],
                    "imgUrl"        : element["imgUrl"],
                });
            });
        }
        return response;
    }

    /**
     * Creates mapper for the reponse of Category Items list
     * @param data response from sap for Category Items list
     * @returns mapped response for front end
     */
    getCategoryItemListResponseMapper(data: JSON[]): any[] {
        var response: any[] = [];
        if(data) {
            response = [
                {
                    BestSellers: [],
                    AllProducts: []
                }
            ];
            data.forEach((element,i,arr) => {
                let off = 0;
                if(parseFloat(element["new_price"]) < parseFloat(element["old_price"])) {
                    off = 100.0 - ((parseFloat(element["new_price"]) / parseFloat(element["old_price"])) * 100.0);
                    off = parseFloat(off.toFixed(0));
                }
                response[0].AllProducts.push({
                    "productID"     : element["sku"],
                    "name"          : element["sku_name"],
                    "categoryID"    : element["category_id"],
                    "categoryName"  : element["category_name"],
                    "quantity"      : 0,
                    "uom"           : element["uom_name"],
                    "newPrice"      : parseFloat(element["new_price"]),
                    "oldPrice"      : parseFloat(element["old_price"]),
                    "offText"       : off ? off + "% off" : "",
                    "currency"      : element["currency"]["alpha_3_code"],
                    "stock"         : element["stock"],
                    "rating"        : 3.8,
                    "noofRatings"   : 248,
                    "pictureURL"    : element["images"]["quickSaleImage"],
                });
            });
        }
        return response;
    }

}