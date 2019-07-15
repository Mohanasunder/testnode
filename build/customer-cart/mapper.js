"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomerCartMapper = /** @class */ (function () {
    function CustomerCartMapper() {
    }
    /**
     * Creates mapper for the reponse of Cart Items list
     * @param data response from sap for Cart Items list
     * @returns mapped response for front end
     */
    CustomerCartMapper.prototype.getCartItemListResponseMapper = function (data) {
        var response = {
            "items": [],
            "coupon": {},
            "shippingAddress": {},
            "billingAddress": {},
            "paymentOption": {},
            "reserveItems": []
        };
        if (data) {
            data.forEach(function (element, i, arr) {
                var off = 0;
                if (parseFloat(element["lp"]) < parseFloat(element["sp"])) {
                    off = 100.0 - ((parseFloat(element["lp"]) / parseFloat(element["sp"])) * 100.0);
                    off = parseFloat(off.toFixed(0));
                }
                var cartitem = {
                    "productID": element["sku"],
                    "name": element["sku_name"],
                    "categoryID": element["category_id"],
                    "categoryName": "",
                    "quantity": 0,
                    "uom": element["uom_name"],
                    "newPrice": parseFloat(element["lp"]),
                    "oldPrice": parseFloat(element["sp"]),
                    "offText": off ? off + "% off" : "",
                    "deliveryOption": parseInt(element["shopping_type"]),
                    "cartQuantity": parseInt(element["quantity"]),
                    "pictureURL": "",
                    "currency": "",
                    "store": {
                        "ID": element["purchase_store_id"],
                        "title": element["store_name"]
                    },
                    "shippingAddress": null
                };
                if (element["images"]) {
                    cartitem["pictureURL"] = element["images"]["quickSaleImage"];
                }
                if (element["currency"]) {
                    cartitem["currency"] = element["currency"]["alpha_3_code"];
                }
                if (element["store"]) {
                    cartitem["store"]["address"] = element["address"]["line1"] + ", " + element["address"]["line2"];
                    cartitem["store"]["city"] = element["address"]["city"];
                    cartitem["store"]["state"] = element["address"]["state"];
                    cartitem["store"]["country"] = element["address"]["country"];
                    cartitem["store"]["pincode"] = element["address"]["zipcode"];
                }
                if (element["geo_location"]) {
                    cartitem["store"]["latitude"] = element["geo_location"]["latitude"];
                    cartitem["store"]["longitude"] = element["geo_location"]["longitude"];
                }
                if (element["shipping_address"]) {
                    cartitem["shippingAddress"] = {};
                    cartitem["shippingAddress"]["ID"] = element["shipping_address_id"];
                    cartitem["shippingAddress"]["title"] = "";
                    cartitem["shippingAddress"]["firstName"] = "";
                    cartitem["shippingAddress"]["lastName"] = "";
                    cartitem["shippingAddress"]["mobile"] = "";
                    cartitem["shippingAddress"]["pincode"] = element["shipping_address"]["zip_postalcode"];
                    cartitem["shippingAddress"]["address"] = element["shipping_address"]["line_1"] + ", " + element["shipping_address"]["line_2"];
                    cartitem["shippingAddress"]["landmark"] = element["shipping_address"]["line_3"];
                    cartitem["shippingAddress"]["city"] = element["shipping_address"]["city"];
                    cartitem["shippingAddress"]["state"] = element["shipping_address"]["state_name"];
                    cartitem["shippingAddress"]["isDefault"] = element["shipping_address"]["is_default"];
                }
                if (parseInt(element["shopping_type"]) == 4) {
                    response["reserveItems"].push(cartitem);
                }
                else {
                    response["items"].push(cartitem);
                }
            });
        }
        return response;
    };
    return CustomerCartMapper;
}());
exports.CustomerCartMapper = CustomerCartMapper;
//# sourceMappingURL=mapper.js.map