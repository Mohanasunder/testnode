import { Routes, HttpServer } from "aplx-hmw-server";
import { Request, Response, Next } from "restify";
export declare class CustomerGrievancesRoute implements Routes {
    initialize(httpServer: HttpServer): void;
    getCategories(req: Request, res: Response, next: Next): Promise<void>;
    getPriorities(req: Request, res: Response, next: Next): Promise<void>;
    getFlags(req: Request, res: Response, next: Next): Promise<void>;
    getGrievances(req: Request, res: Response, next: Next): Promise<void>;
    getGrievanceDetails(req: Request, res: Response, next: Next): Promise<void>;
    readGrievanceResponse(req: Request, res: Response, next: Next): Promise<void>;
    closeGrievanceTicket(req: Request, res: Response, next: Next): Promise<void>;
    postGrievanceTicket(req: Request, res: Response, next: Next): Promise<void>;
    postGrievanceResponse(req: Request, res: Response, next: Next): Promise<void>;
}
