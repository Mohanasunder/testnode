import { Routes, HttpServer } from "aplx-hmw-server";
import { Request, Response, Next } from "restify";
import path from "path";
import { CustomerCartAplxController } from "./aplx-controller";

export class CustomerCartRoute implements Routes{

    initialize(httpServer: HttpServer): void {
        const PATH = '/api/css/customer-cart/';

        httpServer.post(PATH + 'items/add', this.addItem.bind(this));
        httpServer.post(PATH + 'items/update', this.updateItem.bind(this));
        httpServer.post(PATH + 'items/remove', this.removeItem.bind(this));
        httpServer.get(PATH + 'items/:storeId/:customerId', this.getItems.bind(this));
    }

    async addItem(req: Request, res: Response, next: Next) {
        new CustomerCartAplxController().addItem(req.body).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async updateItem(req: Request, res: Response, next: Next) {
        new CustomerCartAplxController().updateItem(req.body).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async removeItem(req: Request, res: Response, next: Next) {
        new CustomerCartAplxController().removeItem(req.body).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async getItems(req: Request, res: Response, next: Next) {
        new CustomerCartAplxController().getItems(req.params["storeId"], req.params["customerId"]).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }
    
}