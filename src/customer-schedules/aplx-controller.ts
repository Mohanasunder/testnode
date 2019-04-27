import { DB } from 'aplx-hmw-server';
import * as _ from 'lodash';
import { CustomerSchedulesMapper } from './mapper';

export class CustomerSchedulesAplxController { 

    private mapper:CustomerSchedulesMapper = new CustomerSchedulesMapper();

    getScheduleItems(customerId): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.get_schedules_list('{\"customer_id\":" + customerId + "}');";
                DB.query(sql, null).then((result) => {
                    if(result[0]["get_schedules_list"]["status"] == 200) {
                        result = result[0]["get_schedules_list"]["data"];
                        return resolve(this.mapper.getScheduleItemListResponseMapper(result));
                    } else {
                        return reject(result[0]["get_schedules_list"]);
                    }
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }

    getScheduleCalendar(customerId, myear, mmonth): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.get_schedules_calendar('{\"customer_id\":" + customerId + ",\"year\":" + myear + ",\"month\":" + mmonth + "}');";
                DB.query(sql, null).then((result) => {
                    if(result[0]["get_schedules_calendar"]["status"] == 200) {
                        return resolve(result[0]["get_schedules_calendar"]["data"]);
                    } else {
                        return reject(result[0]["get_schedules_calendar"]);
                    }
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }

    getScheduleDeliveries(customerId, mYear, mMonth, mDate): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.get_schedule_deliveries('{\"customer_id\":" + customerId + ",\"year\":" + mYear + ",\"month\":" + mMonth + ",\"day\":" + mDate + "}');";
                DB.query(sql, null).then((result) => {
                    if(result[0]["get_schedule_deliveries"]["status"] == 200) {
                        result = result[0]["get_schedule_deliveries"]["data"];
                        return resolve(this.mapper.getScheduleDeliveriesListResponseMapper(result));
                    } else {
                        return reject(result[0]["get_schedule_deliveries"]);
                    }
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }

    removeScheduleItem(body): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.delete_schedule('" + body + "'::json);";
                DB.query(sql, null).then((result) => {
                    if(result[0]["delete_schedule"]["status"] == 200) {
                        return resolve(result[0]["delete_schedule"]);
                    } else {
                        return reject(result[0]["delete_schedule"]);
                    }                    
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }

    createScheduleItem(body): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.create_schedule_deliveries('" + body + "'::json);";
                DB.query(sql, null).then((result) => {
                    if(result[0]["create_schedule_deliveries"]["status"] == 200) {
                        return resolve(result[0]["create_schedule_deliveries"]);
                    } else {
                        return reject(result[0]["create_schedule_deliveries"]);
                    }                    
                }, (err) => {
                    return reject(err);
                });
            } catch(err) {
                return reject(err);
            }
        });
    }

    cancelScheduleDeliveries(body): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let sql = "select css.cancel_schedule_deliveries('" + body + "'::json);";
                DB.query(sql, null).then((result) => {
                    if(result[0]["cancel_schedule_deliveries"]["status"] == 200) {
                        return resolve(result[0]["cancel_schedule_deliveries"]);
                    } else {
                        return reject(result[0]["cancel_schedule_deliveries"]);
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