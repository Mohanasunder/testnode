import { Routes, HttpServer } from "aplx-hmw-server";
import { Request, Response, Next } from "restify";
export declare class CustomerCartRoute implements Routes {
    initialize(httpServer: HttpServer): void;
    addItem(req: Request, res: Response, next: Next): Promise<void>;
    updateItem(req: Request, res: Response, next: Next): Promise<void>;
    removeItem(req: Request, res: Response, next: Next): Promise<void>;
    getItems(req: Request, res: Response, next: Next): Promise<void>;
}
