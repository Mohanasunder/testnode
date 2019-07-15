export declare class CustomerSchedulesAplxController {
    private mapper;
    getScheduleItems(customerId: any): Promise<any>;
    getScheduleCalendar(customerId: any, myear: any, mmonth: any): Promise<any>;
    getScheduleDeliveries(customerId: any, mYear: any, mMonth: any, mDate: any): Promise<any>;
    removeScheduleItem(body: any): Promise<any>;
    createScheduleItem(body: any): Promise<any>;
    cancelScheduleDeliveries(body: any): Promise<any>;
}
