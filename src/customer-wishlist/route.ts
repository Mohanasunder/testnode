import { Routes, HttpServer } from "aplx-hmw-server";
import { Request, Response, Next } from "restify";
import path from "path";
import { CustomerWishlistAplxController } from "./aplx-controller";

export class CustomerWishlistRoute implements Routes{
    initialize(httpServer: HttpServer): void {
        const PATH = '/api/css/customer-wishlist/';

        httpServer.get(PATH + 'items/:customerId', this.getWishlist.bind(this));
        httpServer.post(PATH + 'items/add', this.addItem.bind(this));
        httpServer.post(PATH + 'items/remove', this.removeItem.bind(this));
    }

    async getWishlist(req: Request, res: Response, next: Next) {
        new CustomerWishlistAplxController().getWishlist(req.params["customerId"]).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async addItem(req: Request, res: Response, next: Next) {
        new CustomerWishlistAplxController().addItem(req.body).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async removeItem(req: Request, res: Response, next: Next) {
        new CustomerWishlistAplxController().removeItem(req.body).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }
}