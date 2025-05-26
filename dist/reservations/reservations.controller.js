"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationController = void 0;
const common_1 = require("@nestjs/common");
const reservations_service_1 = require("./reservations.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
let ReservationController = class ReservationController {
    constructor(reservationService) {
        this.reservationService = reservationService;
    }
    create(body, req) {
        const tenantId = req.user.tenantId;
        return this.reservationService.createReservation(tenantId, body.resourceId, new Date(body.start), new Date(body.end), body.description);
    }
    list(resourceId, req) {
        const tenantId = req.user.tenantId;
        return this.reservationService.listReservations(tenantId, resourceId);
    }
};
exports.ReservationController = ReservationController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({
        schema: {
            type: "object",
            properties: {
                resourceId: { type: "string" },
                start: { type: "string" },
                end: { type: "string" },
                description: { type: "string" },
            },
            required: ["identifier", "start", "end", "description"],
        },
    }),
    (0, swagger_1.ApiOperation)({ summary: "Register a reservation" }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: "User successfully registered",
        schema: {
            type: "object",
            properties: {
                _id: { type: "string", example: "6833977686004527398b6b90" },
                resourceId: { type: "string", example: "68339e2e8b5549f2f06863cf" },
                start: { type: "string", example: "2025-05-25T00:00:00.000Z" },
                end: { type: "string", example: "2025-05-25T23:59:59.999Z" },
                description: { type: "string", example: "Registro vacaciones" },
            },
        },
    }),
    (0, swagger_1.ApiConflictResponse)({
        description: "Resource already exists",
        schema: {
            type: "object",
            properties: {
                message: { type: "string", example: "Resource already exists" },
                error: { type: "string", example: "Conflict" },
                statusCode: { type: "number", example: 409 },
            },
        },
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: "Unauthorized",
        schema: {
            type: "object",
            properties: {
                message: { type: "string", example: "Unauthorized" },
                statusCode: { type: "number", example: 401 },
            },
        },
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found",
        schema: {
            type: "object",
            properties: {
                message: { type: "string", example: "Not found" },
                statusCode: { type: "number", example: 404 },
            },
        },
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ReservationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(":resourceId"),
    (0, swagger_1.ApiOperation)({ summary: "Get all reservations by resourceId and tenantId" }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: "Unauthorized",
        schema: {
            type: "object",
            properties: {
                message: { type: "string", example: "Unauthorized" },
                statusCode: { type: "number", example: 401 },
            },
        },
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found",
        schema: {
            type: "object",
            properties: {
                message: { type: "string", example: "Resource not found" },
                error: { type: "string", example: "Not Found" },
                statusCode: { type: "number", example: 404 },
            },
        },
    }),
    __param(0, (0, common_1.Param)("resourceId")),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReservationController.prototype, "list", null);
exports.ReservationController = ReservationController = __decorate([
    (0, common_1.Controller)("reservations"),
    (0, swagger_1.ApiTags)("Reservations"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reservations_service_1.ReservationService])
], ReservationController);
//# sourceMappingURL=reservations.controller.js.map