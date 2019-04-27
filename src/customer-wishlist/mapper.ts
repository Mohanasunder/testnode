export class CustomerWishlistMapper { 

    /**
     * Creates mapper for the reponse of Wishlist Items list
     * @param data response from sap for Wishlist Items list
     * @returns mapped response for front end
     */
    getWishlistItemListResponseMapper(data: JSON[]): any[] {
        var response: any[] = [];
        if(data) {
            data.forEach((element,i,arr) => {
                let off = 0;
                if(parseFloat(element["new_price"]) < parseFloat(element["old_price"])) {
                    off = 100.0 - ((parseFloat(element["new_price"]) / parseFloat(element["old_price"])) * 100.0);
                    off = parseFloat(off.toFixed(0));
                }
                response.push({
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