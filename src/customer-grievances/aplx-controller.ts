import { DB } from 'aplx-hmw-server';
import * as _ from 'lodash';
import { CustomerGrievancesMapper } from './mapper';

export class CustomerGrievancesAplxController { 

    private mapper:CustomerGrievancesMapper = new CustomerGrievancesMapper();

    getCategories(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.get_grievance_categories();";
                DB.query(sql, null).then((result) => {
                    if(result[0]["get_grievance_categories"]["status"] == 200) {
                        result = result[0]["get_grievance_categories"]["data"];
                        return resolve(result);
                    } else {
                        return reject(result[0]["get_grievance_categories"]);
                    }
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }

    getPriorities(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.get_grievance_priorities();";
                DB.query(sql, null).then((result) => {
                    if(result[0]["get_grievance_priorities"]["status"] == 200) {
                        result = result[0]["get_grievance_priorities"]["data"];
                        return resolve(result);
                    } else {
                        return reject(result[0]["get_grievance_priorities"]);
                    }
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }

    getFlags(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.get_grievance_flags();";
                DB.query(sql, null).then((result) => {
                    if(result[0]["get_grievance_flags"]["status"] == 200) {
                        result = result[0]["get_grievance_flags"]["data"];
                        return resolve(result);
                    } else {
                        return reject(result[0]["get_grievance_flags"]);
                    }
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }
    
    getGrievances(customerId): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.get_grievances_list('{\"customer_id\":" + customerId + "}');";
                DB.query(sql, null).then((result) => {
                    if(result[0]["get_grievances_list"]["status"] == 200) {
                        result = result[0]["get_grievances_list"]["data"];
                        return resolve(this.mapper.getGrievancesListResponseMapper(result));
                    } else {
                        return reject(result[0]["get_grievances_list"]);
                    }
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }

    getGrievanceDetails(grievanceId): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.get_grievances_details('{\"grievance_id\":" + grievanceId + "}');";
                DB.query(sql, null).then((result) => {
                    if(result[0]["get_grievances_details"]["status"] == 200) {
                        result = result[0]["get_grievances_details"]["data"];
                        return resolve(this.mapper.getGrievanceDetailsResponseMapper(result));
                    } else {
                        return reject(result[0]["get_grievances_details"]);
                    }
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }

    readGrievanceResponse(body:any): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.read_grievances_response('" + body + "'::json);";
                DB.query(sql, null).then((result) => {
                    if(result[0]["read_grievances_response"]["status"] == 200) {
                        return resolve(result[0]["read_grievances_response"]);
                    } else {
                        return reject(result[0]["read_grievances_response"]);
                    }                    
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }

    closeGrievanceTicket(body:any): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.close_grievances_ticket('" + body + "'::json);";
                DB.query(sql, null).then((result) => {
                    if(result[0]["close_grievances_ticket"]["status"] == 200) {
                        return resolve(result[0]["close_grievances_ticket"]);
                    } else {
                        return reject(result[0]["close_grievances_ticket"]);
                    }                    
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }

    postGrievanceTicket(body:any): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.post_grievances_ticket('" + body + "'::json);";
                DB.query(sql, null).then((result) => {
                    if(result[0]["post_grievances_ticket"]["status"] == 200) {
                        return resolve(result[0]["post_grievances_ticket"]);
                    } else {
                        return reject(result[0]["post_grievances_ticket"]);
                    }                    
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }

    postGrievanceResponse(body:any): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.post_grievances_response('" + body + "'::json);";
                DB.query(sql, null).then((result) => {
                    if(result[0]["post_grievances_response"]["status"] == 200) {
                        return resolve(result[0]["post_grievances_response"]);
                    } else {
                        return reject(result[0]["post_grievances_response"]);
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