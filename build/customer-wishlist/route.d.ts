import { Routes, HttpServer } from "aplx-hmw-server";
import { Request, Response, Next } from "restify";
export declare class CustomerWishlistRoute implements Routes {
    initialize(httpServer: HttpServer): void;
    getWishlist(req: Request, res: Response, next: Next): Promise<void>;
    addItem(req: Request, res: Response, next: Next): Promise<void>;
    removeItem(req: Request, res: Response, next: Next): Promise<void>;
}
