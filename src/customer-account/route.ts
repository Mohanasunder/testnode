import { Routes, HttpServer } from "aplx-hmw-server";
import { Request, Response, Next } from "restify";
import path from "path";
import { CustomerAccountAplxController } from "./aplx-controller";

export class CustomerAccountRoute implements Routes{
    initialize(httpServer: HttpServer): void {
        const PATH = '/api/css/customer-account/';

        httpServer.post(PATH + 'check', this.doCheck.bind(this));
        httpServer.post(PATH + 'signup', this.doSignUp.bind(this));
        httpServer.post(PATH + 'login', this.doLogin.bind(this));
        httpServer.post(PATH + 'change-password', this.doChangePassword.bind(this));
        httpServer.post(PATH + 'update', this.doUpdate.bind(this));
        httpServer.get(PATH + 'details/:Id', this.getDetails.bind(this));
        httpServer.get(PATH + ':Id/delivery-addresses', this.getDeliveryAddresses.bind(this));
        httpServer.post(PATH + 'delivery-address/delete', this.deleteDeliveryAddress.bind(this));
        httpServer.post(PATH + 'delivery-address/create-update', this.createUpdateDeliveryAddress.bind(this));
    }

    async doCheck(req: Request, res: Response, next: Next) {
        new CustomerAccountAplxController().doCheck(req.body).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }
    
    async doSignUp(req: Request, res: Response, next: Next) {
        new CustomerAccountAplxController().doSignup(req.body).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async doLogin(req: Request, res: Response, next: Next) {
        new CustomerAccountAplxController().doLogin(req.body).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async doChangePassword(req: Request, res: Response, next: Next) {
        new CustomerAccountAplxController().doChangePassword(req.body).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async doUpdate(req: Request, res: Response, next: Next) {
        new CustomerAccountAplxController().doUpdate(req.body).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async getDetails(req: Request, res: Response, next: Next) {
        new CustomerAccountAplxController().getDetails(req).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async getDeliveryAddresses(req: Request, res: Response, next: Next) {
        new CustomerAccountAplxController().getDeliveryAddresses(req.params["Id"]).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async deleteDeliveryAddress(req: Request, res: Response, next: Next) {
        new CustomerAccountAplxController().deleteDeliveryAddress(req.body).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async createUpdateDeliveryAddress(req: Request, res: Response, next: Next) {
        new CustomerAccountAplxController().createUpdateDeliveryAddress(req.body).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }


}