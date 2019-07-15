import { Routes, HttpServer } from "aplx-hmw-server";
import { Request, Response, Next } from "restify";
export declare class StoresProductsRoute implements Routes {
    initialize(httpServer: HttpServer): void;
    getStores(req: Request, res: Response, next: Next): Promise<void>;
    getCategories(req: Request, res: Response, next: Next): Promise<void>;
    getCategoryItems(req: Request, res: Response, next: Next): Promise<void>;
    getInventory(req: Request, res: Response, next: Next): Promise<void>;
}
