"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomerGrievancesMapper = /** @class */ (function () {
    function CustomerGrievancesMapper() {
    }
    /**
     * Creates mapper for the reponse of Grievances list
     * @param data response from sap for Grievances list
     * @returns mapped response for front end
     */
    CustomerGrievancesMapper.prototype.getGrievancesListResponseMapper = function (data) {
        var response = { "array": [] };
        if (data) {
            data.forEach(function (element, i, arr) {
                var ticketItem = {
                    "messageId": element["grievance_id"],
                    "userId": element["customer_id"],
                    "ticketId": element["ticket_no"],
                    "userName": "",
                    "userImgUrl": "./assets/imgs/user.jpg",
                    "toUserId": element["assigned_to"],
                    "toUserName": "support",
                    "userAvatar": "./assets/imgs/to-user.jpg",
                    "time": (new Date(element["created_on"])).getTime(),
                    "subject": element["subject"],
                    "message": element["grievance_text"],
                    "status": element["status_name"],
                    "store_id": element["store_id"],
                    "category_id": element["category_id"],
                    "category_name": element["category_name"],
                    "attachments": element["attachments"],
                    "resolved_date": element["resolved_date"],
                    "closing_remarks": element["closing_remarks"],
                    "priority_id": element["priority_id"],
                    "priority_name": element["priority_name"],
                    "flag_id": element["flag_id"],
                    "flag_name": element["flag_name"],
                    "created_by": element["created_by"],
                    "other_info": element["other_info"],
                    "reply_count": element["reply_count"],
                    "reopen_count": element["reopen_count"],
                    "array": []
                };
                response["array"].push(ticketItem);
            });
        }
        return response;
    };
    /**
     * Creates mapper for the reponse of Grievance Details
     * @param data response from sap for Grievance Details
     * @returns mapped response for front end
     */
    CustomerGrievancesMapper.prototype.getGrievanceDetailsResponseMapper = function (data) {
        var response = [];
        if (data) {
            if (data["responses"]) {
                data["responses"].forEach(function (element, i, arr) {
                    var ticketItem = {
                        "messageId": element["response_id"],
                        "userId": element["customer_id"],
                        "ticketId": element["grievance_id"],
                        "category_id": element["category_id"],
                        "userName": "",
                        "userImgUrl": "./assets/imgs/user.jpg",
                        "toUserId": element["assigned_to"],
                        "toUserName": "support",
                        "userAvatar": "./assets/imgs/to-user.jpg",
                        "time": (new Date(element["created_on"])).getTime(),
                        "subject": "",
                        "message": element["response_text"],
                        "status": element["status_name"],
                        "flag_id": element["flag_id"],
                        "msg_read": element["msg_read"],
                        "created_by": element["created_by"],
                        "priority_id": element["priority_id"],
                        "parent_response_id": element["parent_response_id"]
                    };
                    response.push(ticketItem);
                });
            }
        }
        return response;
    };
    return CustomerGrievancesMapper;
}());
exports.CustomerGrievancesMapper = CustomerGrievancesMapper;
//# sourceMappingURL=mapper.js.map