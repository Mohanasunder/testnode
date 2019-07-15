"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomerOrdersMapper = /** @class */ (function () {
    function CustomerOrdersMapper() {
    }
    /**
     * Creates mapper for the reponse of Reservations list
     * @param data response from sap for Reservations list
     * @returns mapped response for front end
     */
    CustomerOrdersMapper.prototype.getReservationsListResponseMapper = function (data) {
        var response = [];
        if (data) {
            data.forEach(function (element, i, arr) {
                var reservation = {
                    "orderNo": element["order_id"],
                    "storeId": element["store_id"],
                    "customerId": element["customer_id"],
                    "orderDate": element["created_on"],
                    "expiresOn": element["expires_on"],
                    "price": parseFloat(element["order_price"]["total"]),
                    "currency": element["order_price"]["currency"]["alpha_3_code"],
                    "secondsLeft": element["exp_diff"] > 0 ? element["exp_diff"] : 0,
                    "reserveItems": []
                };
                if (element["item_imgs"]) {
                    element["item_imgs"].forEach(function (img) {
                        reservation["reserveItems"].push({ "pictureURL": img["quickSaleImage"] });
                    });
                }
                response.push(reservation);
            });
        }
        return response;
    };
    /**
     * Creates mapper for the reponse of Reservation Details
     * @param data response from sap for Reservation Details
     * @returns mapped response for front end
     */
    CustomerOrdersMapper.prototype.getReservationDetailsResponseMapper = function (data) {
        var response = {};
        var totalAmt = 0;
        var totalMRP = 0;
        if (data) {
            response = {
                "header": {
                    "orderNo": data["order_id"],
                    "storeId": data["store_id"],
                    "customerId": data["customer_id"],
                    "date": data["created_on"],
                    "expiresOn": data["expires_on"],
                    "price": 0,
                    "currency": "",
                    "secondsLeft": data["exp_diff"] > 0 ? data["exp_diff"] : 0
                },
                "items": [],
                "pricing": {}
            };
            var currencytxt_1 = "";
            if (data["order_items"]) {
                data["order_items"].forEach(function (mROI) {
                    var roi = {
                        "roi": mROI["roi_id"],
                        "productID": mROI["sku"],
                        "name": mROI["sku_name"],
                        "quantity": 0,
                        "uom": mROI["uom"],
                        "newPrice": mROI["lp"],
                        "oldPrice": mROI["sp"],
                        "offText": "",
                        "currency": mROI["currency"]["alpha_3_code"],
                        "orderQuantity": mROI["quantity"],
                        "pictureURL": mROI["images"]["quickSaleImage"],
                        "store": {
                            "ID": mROI["pickup_store_id"],
                            "address": mROI["address"]["line1"] + ", " + mROI["address"]["line2"],
                            "city": mROI["address"]["city"],
                            "country": mROI["address"]["country"],
                            "pincode": mROI["address"]["zipcode"],
                            "state": mROI["address"]["state"],
                            "title": mROI["store_name"]
                        }
                    };
                    response["items"].push(roi);
                    currencytxt_1 = mROI["currency"]["alpha_3_code"];
                    totalAmt = totalAmt + parseFloat(mROI["order_price"].toString());
                    totalMRP = totalMRP + (parseFloat(mROI["sp"].toString()) * parseInt(mROI["quantity"].toString()));
                });
            }
            response["pricing"] = {
                "TotalMRP": totalMRP,
                "MRPSavings": totalMRP - totalAmt,
                "SubTotal": totalAmt,
                "Shipping": "Free",
                "Discounts": "0.00",
                "SavingsDiscounts": "0.00",
                "OrderTotal": totalAmt,
                "Currency": currencytxt_1
            };
            response["header"]["price"] = totalAmt;
            response["header"]["currency"] = currencytxt_1;
        }
        return response;
    };
    return CustomerOrdersMapper;
}());
exports.CustomerOrdersMapper = CustomerOrdersMapper;
//# sourceMappingURL=mapper.js.map