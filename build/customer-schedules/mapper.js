"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomerSchedulesMapper = /** @class */ (function () {
    function CustomerSchedulesMapper() {
    }
    /**
     * Creates mapper for the reponse of Schedule Items list
     * @param data response from sap for Schedule Items list
     * @returns mapped response for front end
     */
    CustomerSchedulesMapper.prototype.getScheduleItemListResponseMapper = function (data) {
        var response = [];
        if (data) {
            data.forEach(function (element, i, arr) {
                var off = 0;
                if (parseFloat(element["lp"]) < parseFloat(element["sp"])) {
                    off = 100.0 - ((parseFloat(element["lp"]) / parseFloat(element["sp"])) * 100.0);
                    off = parseFloat(off.toFixed(0));
                }
                var scheduleItem = {
                    "productID": element["sku"],
                    "name": element["sku_name"],
                    "categoryID": 0,
                    "categoryName": "",
                    "quantity": 0,
                    "uom": element["uom_name"],
                    "newPrice": parseFloat(element["lp"]),
                    "oldPrice": parseFloat(element["sp"]),
                    "offText": off ? off + "% off" : "",
                    "cartQuantity": parseInt(element["schedule_qty"]),
                    "pictureURL": "",
                    "currency": "",
                    "store": {
                        "ID": element["store_id"],
                        "title": element["store_name"]
                    },
                    "shippingAddress": null,
                    "schedule": {
                        "activeSchedule": element['frequency'],
                        "every": element["frequency_duration"],
                        "days": element["month_days"],
                        "weekDays": element["week_days"],
                        "firstWeekDays": element["first_week_days"],
                        "secondWeekDays": element["second_week_days"],
                        "thirdWeekDays": element["third_week_days"],
                        "fourthWeekDays": element["fourth_week_days"],
                        "lastWeekDays": element["last_week_days"],
                        "deliverOn": element["deliver_on"],
                        "deliverFrom": element["deliver_from"],
                        "deliverTill": element["deliver_till"],
                        "deliverTime": element["prefered_time"],
                        "notes": element["notes"]
                    },
                    "isCODPayment": element["is_cod_payment"],
                    "paymentCard": element["payment_card_details"],
                };
                if (element["images"]) {
                    scheduleItem["pictureURL"] = element["images"]["quickSaleImage"];
                }
                if (element["currency"]) {
                    scheduleItem["currency"] = element["currency"]["alpha_3_code"];
                }
                if (element["address"]) {
                    scheduleItem["store"]["address"] = element["address"]["line1"] + ", " + element["address"]["line2"];
                    scheduleItem["store"]["city"] = element["address"]["city"];
                    scheduleItem["store"]["state"] = element["address"]["state"];
                    scheduleItem["store"]["country"] = element["address"]["country"];
                    scheduleItem["store"]["pincode"] = element["address"]["zipcode"];
                }
                if (element["geo_location"]) {
                    scheduleItem["store"]["latitude"] = element["geo_location"]["latitude"];
                    scheduleItem["store"]["longitude"] = element["geo_location"]["longitude"];
                }
                if (element["shipping_address"]) {
                    scheduleItem["shippingAddress"] = {};
                    scheduleItem["shippingAddress"]["ID"] = element["shipping_address_id"];
                    scheduleItem["shippingAddress"]["title"] = "";
                    scheduleItem["shippingAddress"]["firstName"] = "";
                    scheduleItem["shippingAddress"]["lastName"] = "";
                    scheduleItem["shippingAddress"]["mobile"] = "";
                    scheduleItem["shippingAddress"]["pincode"] = element["shipping_address"]["zip_postalcode"];
                    scheduleItem["shippingAddress"]["address"] = element["shipping_address"]["line_1"] + ", " + element["shipping_address"]["line_2"];
                    scheduleItem["shippingAddress"]["landmark"] = element["shipping_address"]["line_3"];
                    scheduleItem["shippingAddress"]["city"] = element["shipping_address"]["city"];
                    scheduleItem["shippingAddress"]["state"] = element["shipping_address"]["state"];
                    scheduleItem["shippingAddress"]["isDefault"] = element["shipping_address"]["is_default"];
                }
                response.push(scheduleItem);
            });
        }
        return response;
    };
    /**
     * Creates mapper for the reponse of Schedule Deliveries list
     * @param data response from sap for Schedule Deliveries list
     * @returns mapped response for front end
     */
    CustomerSchedulesMapper.prototype.getScheduleDeliveriesListResponseMapper = function (data) {
        var response = [];
        if (data) {
            data.forEach(function (element, i, arr) {
                var scheduleItem = {
                    "productID": element["sku"],
                    "name": element["sku_name"],
                    "categoryID": 0,
                    "categoryName": "",
                    "quantity": 0,
                    "uom": element["uom_name"],
                    "newPrice": parseFloat(element["lp"]),
                    "oldPrice": 0,
                    "offText": "",
                    "cartQuantity": parseInt(element["schedule_qty"]),
                    "pictureURL": "",
                    "currency": "",
                    "store": {
                        "ID": element["store_id"],
                        "title": element["store_name"]
                    },
                    "shippingAddress": null,
                    "deliveryStatus": element["status_text"]
                };
                if (element["images"]) {
                    scheduleItem["pictureURL"] = element["images"]["quickSaleImage"];
                }
                if (element["currency"]) {
                    scheduleItem["currency"] = element["currency"]["alpha_3_code"];
                }
                if (element["address"]) {
                    scheduleItem["store"]["address"] = element["address"]["line1"] + ", " + element["address"]["line2"];
                    scheduleItem["store"]["city"] = element["address"]["city"];
                    scheduleItem["store"]["state"] = element["address"]["state"];
                    scheduleItem["store"]["country"] = element["address"]["country"];
                    scheduleItem["store"]["pincode"] = element["address"]["zipcode"];
                }
                if (element["geo_location"]) {
                    scheduleItem["store"]["latitude"] = element["geo_location"]["latitude"];
                    scheduleItem["store"]["longitude"] = element["geo_location"]["longitude"];
                }
                if (element["shipping_address"]) {
                    scheduleItem["shippingAddress"] = {};
                    scheduleItem["shippingAddress"]["ID"] = element["shipping_address_id"];
                    scheduleItem["shippingAddress"]["title"] = "";
                    scheduleItem["shippingAddress"]["firstName"] = "";
                    scheduleItem["shippingAddress"]["lastName"] = "";
                    scheduleItem["shippingAddress"]["mobile"] = "";
                    scheduleItem["shippingAddress"]["pincode"] = element["shipping_address"]["zip_postalcode"];
                    scheduleItem["shippingAddress"]["address"] = element["shipping_address"]["line_1"] + ", " + element["shipping_address"]["line_2"];
                    scheduleItem["shippingAddress"]["landmark"] = element["shipping_address"]["line_3"];
                    scheduleItem["shippingAddress"]["city"] = element["shipping_address"]["city"];
                    scheduleItem["shippingAddress"]["state"] = element["shipping_address"]["state"];
                    scheduleItem["shippingAddress"]["isDefault"] = element["shipping_address"]["is_default"];
                }
                response.push(scheduleItem);
            });
        }
        return response;
    };
    return CustomerSchedulesMapper;
}());
exports.CustomerSchedulesMapper = CustomerSchedulesMapper;
//# sourceMappingURL=mapper.js.map