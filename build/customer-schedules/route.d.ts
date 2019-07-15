import { Routes, HttpServer } from "aplx-hmw-server";
import { Request, Response, Next } from "restify";
export declare class CustomerSchedulesRoute implements Routes {
    initialize(httpServer: HttpServer): void;
    getScheduleItems(req: Request, res: Response, next: Next): Promise<void>;
    getScheduleCalendar(req: Request, res: Response, next: Next): Promise<void>;
    getScheduleDeliveries(req: Request, res: Response, next: Next): Promise<void>;
    removeScheduleItem(req: Request, res: Response, next: Next): Promise<void>;
    createScheduleItem(req: Request, res: Response, next: Next): Promise<void>;
    cancelScheduleDeliveries(req: Request, res: Response, next: Next): Promise<void>;
}
