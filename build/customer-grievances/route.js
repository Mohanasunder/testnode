"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var aplx_controller_1 = require("./aplx-controller");
var CustomerGrievancesRoute = /** @class */ (function () {
    function CustomerGrievancesRoute() {
    }
    CustomerGrievancesRoute.prototype.initialize = function (httpServer) {
        var PATH = '/api/css/customer-grievances/';
        httpServer.get(PATH + 'categories', this.getCategories.bind(this));
        httpServer.get(PATH + 'priorities', this.getPriorities.bind(this));
        httpServer.get(PATH + 'flags', this.getFlags.bind(this));
        httpServer.get(PATH + 'tickets/:customerId', this.getGrievances.bind(this));
        httpServer.get(PATH + 'ticket/:grievanceId', this.getGrievanceDetails.bind(this));
        httpServer.post(PATH + 'read', this.readGrievanceResponse.bind(this));
        httpServer.post(PATH + 'close', this.closeGrievanceTicket.bind(this));
        httpServer.post(PATH + 'ticket/create', this.postGrievanceTicket.bind(this));
        httpServer.post(PATH + 'response/create', this.postGrievanceResponse.bind(this));
    };
    CustomerGrievancesRoute.prototype.getCategories = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                new aplx_controller_1.CustomerGrievancesAplxController().getCategories().then(function (result) {
                    res.send(200, result);
                }, function (err) {
                    res.send(400, err);
                });
                return [2 /*return*/];
            });
        });
    };
    CustomerGrievancesRoute.prototype.getPriorities = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                new aplx_controller_1.CustomerGrievancesAplxController().getPriorities().then(function (result) {
                    res.send(200, result);
                }, function (err) {
                    res.send(400, err);
                });
                return [2 /*return*/];
            });
        });
    };
    CustomerGrievancesRoute.prototype.getFlags = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                new aplx_controller_1.CustomerGrievancesAplxController().getFlags().then(function (result) {
                    res.send(200, result);
                }, function (err) {
                    res.send(400, err);
                });
                return [2 /*return*/];
            });
        });
    };
    CustomerGrievancesRoute.prototype.getGrievances = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                new aplx_controller_1.CustomerGrievancesAplxController().getGrievances(req.params["customerId"]).then(function (result) {
                    res.send(200, result);
                }, function (err) {
                    res.send(400, err);
                });
                return [2 /*return*/];
            });
        });
    };
    CustomerGrievancesRoute.prototype.getGrievanceDetails = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                new aplx_controller_1.CustomerGrievancesAplxController().getGrievanceDetails(req.params["grievanceId"]).then(function (result) {
                    res.send(200, result);
                }, function (err) {
                    res.send(400, err);
                });
                return [2 /*return*/];
            });
        });
    };
    CustomerGrievancesRoute.prototype.readGrievanceResponse = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                new aplx_controller_1.CustomerGrievancesAplxController().readGrievanceResponse(req.body).then(function (result) {
                    res.send(200, result);
                }, function (err) {
                    res.send(400, err);
                });
                return [2 /*return*/];
            });
        });
    };
    CustomerGrievancesRoute.prototype.closeGrievanceTicket = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                new aplx_controller_1.CustomerGrievancesAplxController().closeGrievanceTicket(req.body).then(function (result) {
                    res.send(200, result);
                }, function (err) {
                    res.send(400, err);
                });
                return [2 /*return*/];
            });
        });
    };
    CustomerGrievancesRoute.prototype.postGrievanceTicket = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                new aplx_controller_1.CustomerGrievancesAplxController().postGrievanceTicket(req.body).then(function (result) {
                    res.send(200, result);
                }, function (err) {
                    res.send(400, err);
                });
                return [2 /*return*/];
            });
        });
    };
    CustomerGrievancesRoute.prototype.postGrievanceResponse = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                new aplx_controller_1.CustomerGrievancesAplxController().postGrievanceResponse(req.body).then(function (result) {
                    res.send(200, result);
                }, function (err) {
                    res.send(400, err);
                });
                return [2 /*return*/];
            });
        });
    };
    return CustomerGrievancesRoute;
}());
exports.CustomerGrievancesRoute = CustomerGrievancesRoute;
//# sourceMappingURL=route.js.map