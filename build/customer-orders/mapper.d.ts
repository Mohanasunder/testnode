export declare class CustomerOrdersMapper {
    /**
     * Creates mapper for the reponse of Reservations list
     * @param data response from sap for Reservations list
     * @returns mapped response for front end
     */
    getReservationsListResponseMapper(data: JSON[]): any[];
    /**
     * Creates mapper for the reponse of Reservation Details
     * @param data response from sap for Reservation Details
     * @returns mapped response for front end
     */
    getReservationDetailsResponseMapper(data: any): any;
}
