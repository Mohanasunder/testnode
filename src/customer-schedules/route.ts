import { Routes, HttpServer } from "aplx-hmw-server";
import { Request, Response, Next } from "restify";
import { CustomerSchedulesAplxController } from "./aplx-controller";

export class CustomerSchedulesRoute implements Routes{
    initialize(httpServer: HttpServer): void {
        const PATH = '/api/css/customer-schedules/';
        
        httpServer.get(PATH + 'items/:customerId', this.getScheduleItems.bind(this));
        httpServer.get(PATH + 'calendar/:customerId/:year/:month', this.getScheduleCalendar.bind(this));
        httpServer.get(PATH + 'deliveries/:customerId/:year/:month/:date', this.getScheduleDeliveries.bind(this));
        httpServer.post(PATH + 'items/remove', this.removeScheduleItem.bind(this));
        httpServer.post(PATH + 'item/create', this.createScheduleItem.bind(this));
        httpServer.post(PATH + 'deliveries/cancel', this.cancelScheduleDeliveries.bind(this));
    }

    async getScheduleItems(req: Request, res: Response, next: Next) {
        new CustomerSchedulesAplxController().getScheduleItems(req.params["customerId"]).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async getScheduleCalendar(req: Request, res: Response, next: Next) {
        new CustomerSchedulesAplxController().getScheduleCalendar(req.params["customerId"],req.params["year"],req.params["month"]).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async getScheduleDeliveries(req: Request, res: Response, next: Next) {
        new CustomerSchedulesAplxController().getScheduleDeliveries(req.params["customerId"],req.params["year"],req.params["month"],req.params["date"]).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async removeScheduleItem(req: Request, res: Response, next: Next) {
        new CustomerSchedulesAplxController().removeScheduleItem(req.body).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async createScheduleItem(req: Request, res: Response, next: Next) {
        new CustomerSchedulesAplxController().createScheduleItem(req.body).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async cancelScheduleDeliveries(req: Request, res: Response, next: Next) {
        new CustomerSchedulesAplxController().cancelScheduleDeliveries(req.body).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }


}