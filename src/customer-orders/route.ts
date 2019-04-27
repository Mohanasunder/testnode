import { Routes, HttpServer } from "aplx-hmw-server";
import { Request, Response, Next } from "restify";
import path from "path";
import { CustomerOrdersAplxController } from "./aplx-controller";


export class CustomerOrdersRoute implements Routes{

    initialize(httpServer: HttpServer): void {
        const PATH = '/api/css/customer-orders/';

        httpServer.post(PATH + 'reservation/create', this.createReservation.bind(this));
        httpServer.get(PATH + 'reservations/:customerId', this.getReservations.bind(this));
        httpServer.get(PATH + 'reservation/:reservationId', this.getReservationDetails.bind(this));
        httpServer.get(PATH + 'orders/:customerId', this.getOrders.bind(this));
        httpServer.get(PATH + 'order/:orderId', this.getOrderDetails.bind(this));
    }

    async createReservation(req: Request, res: Response, next: Next) {
        new CustomerOrdersAplxController().createReservation(req.body).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async getReservations(req: Request, res: Response, next: Next) {
        new CustomerOrdersAplxController().getReservations(req.params["customerId"]).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async getReservationDetails(req: Request, res: Response, next: Next) {
        new CustomerOrdersAplxController().getReservationDetails(req.params["reservationId"]).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async getOrders(req: Request, res: Response, next: Next) {
        new CustomerOrdersAplxController().getOrders(req.params["customerId"]).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async getOrderDetails(req: Request, res: Response, next: Next) {
        new CustomerOrdersAplxController().getOrderDetails(req.params["orderId"]).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

}