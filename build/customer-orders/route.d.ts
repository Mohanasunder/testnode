import { Routes, HttpServer } from "aplx-hmw-server";
import { Request, Response, Next } from "restify";
export declare class CustomerOrdersRoute implements Routes {
    initialize(httpServer: HttpServer): void;
    createReservation(req: Request, res: Response, next: Next): Promise<void>;
    getReservations(req: Request, res: Response, next: Next): Promise<void>;
    getReservationDetails(req: Request, res: Response, next: Next): Promise<void>;
    getOrders(req: Request, res: Response, next: Next): Promise<void>;
    getOrderDetails(req: Request, res: Response, next: Next): Promise<void>;
}
