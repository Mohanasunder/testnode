export declare class CustomerSchedulesMapper {
    /**
     * Creates mapper for the reponse of Schedule Items list
     * @param data response from sap for Schedule Items list
     * @returns mapped response for front end
     */
    getScheduleItemListResponseMapper(data: JSON[]): any[];
    /**
     * Creates mapper for the reponse of Schedule Deliveries list
     * @param data response from sap for Schedule Deliveries list
     * @returns mapped response for front end
     */
    getScheduleDeliveriesListResponseMapper(data: JSON[]): any[];
}
