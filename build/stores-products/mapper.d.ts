export declare class StoresProductsMapper {
    /**
     * Creates mapper for the reponse of Store list
     * @param data response from sap for Store list
     * @returns mapped response for front end
     */
    getStoresListResponseMapper(data: JSON[]): any[];
    /**
     * Creates mapper for the reponse of Categories list
     * @param data response from sap for Categories list
     * @returns mapped response for front end
     */
    getCategoriesListResponseMapper(data: JSON[]): any[];
    /**
     * Creates mapper for the reponse of Category Items list
     * @param data response from sap for Category Items list
     * @returns mapped response for front end
     */
    getCategoryItemListResponseMapper(data: JSON[]): any[];
}
