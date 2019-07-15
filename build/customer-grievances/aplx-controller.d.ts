export declare class CustomerGrievancesAplxController {
    private mapper;
    getCategories(): Promise<any[]>;
    getPriorities(): Promise<any[]>;
    getFlags(): Promise<any[]>;
    getGrievances(customerId: any): Promise<any>;
    getGrievanceDetails(grievanceId: any): Promise<any>;
    readGrievanceResponse(body: any): Promise<any>;
    closeGrievanceTicket(body: any): Promise<any>;
    postGrievanceTicket(body: any): Promise<any>;
    postGrievanceResponse(body: any): Promise<any>;
}
