import { Routes, HttpServer } from "aplx-hmw-server";
import { Request, Response, Next } from "restify";
export declare class CustomerAccountRoute implements Routes {
    initialize(httpServer: HttpServer): void;
    doCheck(req: Request, res: Response, next: Next): Promise<void>;
    doSignUp(req: Request, res: Response, next: Next): Promise<void>;
    doLogin(req: Request, res: Response, next: Next): Promise<void>;
    doChangePassword(req: Request, res: Response, next: Next): Promise<void>;
    doUpdate(req: Request, res: Response, next: Next): Promise<void>;
    getDetails(req: Request, res: Response, next: Next): Promise<void>;
    getDeliveryAddresses(req: Request, res: Response, next: Next): Promise<void>;
    deleteDeliveryAddress(req: Request, res: Response, next: Next): Promise<void>;
    createUpdateDeliveryAddress(req: Request, res: Response, next: Next): Promise<void>;
}
