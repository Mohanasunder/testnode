import { Routes, HttpServer } from "aplx-hmw-server";
import { Request, Response, Next } from "restify";
import path from "path";
import { StoresProductsAplxController } from "./aplx-controller";

export class StoresProductsRoute implements Routes{
    initialize(httpServer: HttpServer): void {
        const PATH = '/api/css/stores-products/';

        httpServer.get(PATH + 'get-stores', this.getStores.bind(this));
        httpServer.get(PATH + 'get-categories', this.getCategories.bind(this));
        httpServer.get(PATH + 'get-categories/:catId', this.getCategories.bind(this));
        httpServer.get(PATH + 'stores/:storeId/categories/:catId/items', this.getCategoryItems.bind(this));
        httpServer.get(PATH + 'stores/:storeId/item-by-sku/:skuId', this.getCategoryItems.bind(this));
        httpServer.get(PATH + 'stores/:storeId/item-by-barcode/:barcode', this.getCategoryItems.bind(this));
        httpServer.post(PATH + 'get-inventory', this.getInventory.bind(this));
    }

    async getStores(req: Request, res: Response, next: Next) {
        new StoresProductsAplxController().getStores().then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async getCategories(req: Request, res: Response, next: Next) {
        new StoresProductsAplxController().getCategories(req.params.catId).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async getCategoryItems(req: Request, res: Response, next: Next) {
        new StoresProductsAplxController().getCategoryItems(req.params).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async getInventory(req: Request, res: Response, next: Next) {
        new StoresProductsAplxController().getInventory(req.body).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }
}