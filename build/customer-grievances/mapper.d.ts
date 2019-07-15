export declare class CustomerGrievancesMapper {
    /**
     * Creates mapper for the reponse of Grievances list
     * @param data response from sap for Grievances list
     * @returns mapped response for front end
     */
    getGrievancesListResponseMapper(data: JSON[]): any;
    /**
     * Creates mapper for the reponse of Grievance Details
     * @param data response from sap for Grievance Details
     * @returns mapped response for front end
     */
    getGrievanceDetailsResponseMapper(data: JSON): any[];
}
