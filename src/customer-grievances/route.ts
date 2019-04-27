import { Routes, HttpServer } from "aplx-hmw-server";
import { Request, Response, Next } from "restify";
import { CustomerGrievancesAplxController } from "./aplx-controller";

export class CustomerGrievancesRoute implements Routes{
    initialize(httpServer: HttpServer): void {
        const PATH = '/api/css/customer-grievances/';
        
        httpServer.get(PATH + 'categories', this.getCategories.bind(this));
        httpServer.get(PATH + 'priorities', this.getPriorities.bind(this));
        httpServer.get(PATH + 'flags', this.getFlags.bind(this));
        httpServer.get(PATH + 'tickets/:customerId', this.getGrievances.bind(this));
        httpServer.get(PATH + 'ticket/:grievanceId', this.getGrievanceDetails.bind(this));
        httpServer.post(PATH + 'read', this.readGrievanceResponse.bind(this));
        httpServer.post(PATH + 'close', this.closeGrievanceTicket.bind(this));
        httpServer.post(PATH + 'ticket/create', this.postGrievanceTicket.bind(this));
        httpServer.post(PATH + 'response/create', this.postGrievanceResponse.bind(this));
    }

    async getCategories(req: Request, res: Response, next: Next) {
        new CustomerGrievancesAplxController().getCategories().then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async getPriorities(req: Request, res: Response, next: Next) {
        new CustomerGrievancesAplxController().getPriorities().then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async getFlags(req: Request, res: Response, next: Next) {
        new CustomerGrievancesAplxController().getFlags().then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }
    
    async getGrievances(req: Request, res: Response, next: Next) {
        new CustomerGrievancesAplxController().getGrievances(req.params["customerId"]).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async getGrievanceDetails(req: Request, res: Response, next: Next) {
        new CustomerGrievancesAplxController().getGrievanceDetails(req.params["grievanceId"]).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async readGrievanceResponse(req: Request, res: Response, next: Next) {
        new CustomerGrievancesAplxController().readGrievanceResponse(req.body).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async closeGrievanceTicket(req: Request, res: Response, next: Next) {
        new CustomerGrievancesAplxController().closeGrievanceTicket(req.body).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async postGrievanceTicket(req: Request, res: Response, next: Next) {
        new CustomerGrievancesAplxController().postGrievanceTicket(req.body).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }

    async postGrievanceResponse(req: Request, res: Response, next: Next) {
        new CustomerGrievancesAplxController().postGrievanceResponse(req.body).then((result) => {
            res.send(200,result);
        }, (err) => {
            res.send(400,err);
        });
    }
}