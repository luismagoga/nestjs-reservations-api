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
const reservation_input_dto_1 = require("./dto/reservation-input.dto");
const reservation_output_dto_1 = require("./dto/reservation-output.dto");
const class_transformer_1 = require("class-transformer");
let ReservationController = class ReservationController {
    constructor(reservationService) {
        this.reservationService = reservationService;
    }
    async create(body, req) {
        return (0, class_transformer_1.plainToInstance)(reservation_output_dto_1.ReservationResponseDto, await this.reservationService.createReservation(req.user.tenantId, body.resourceId, body.start, body.end, body.user, body.description));
    }
    async list(resourceId, req) {
        return (0, class_transformer_1.plainToInstance)(reservation_output_dto_1.ReservationResponseDto, await this.reservationService.listReservations(req.user.tenantId, resourceId));
    }
    async delete(resourceId, reservationId, req) {
        await this.reservationService.deleteByTenantIdAndResourceIdAndId(req.user.tenantId, resourceId, reservationId);
    }
};
exports.ReservationController = ReservationController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({
        type: reservation_input_dto_1.CreateReservationDto,
    }),
    (0, swagger_1.ApiOperation)({ summary: "Register a reservation" }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: "Reservation successfully registered",
        type: reservation_output_dto_1.ReservationResponseDto,
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
    __metadata("design:paramtypes", [reservation_input_dto_1.CreateReservationDto, Object]),
    __metadata("design:returntype", Promise)
], ReservationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(":resourceId"),
    (0, swagger_1.ApiOperation)({ summary: "Get all reservations by resourceId and tenantId" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Get reservation by resourceId and tenantId",
        type: [reservation_output_dto_1.ReservationResponseDto],
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
    __metadata("design:returntype", Promise)
], ReservationController.prototype, "list", null);
__decorate([
    (0, common_1.Delete)(":resourceId/:reservationId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: "Delete reservation" }),
    (0, swagger_1.ApiResponse)({
        status: 204,
        description: "Reservation successfully deleted",
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
    __param(0, (0, common_1.Param)("resourceId")),
    __param(1, (0, common_1.Param)("reservationId")),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], ReservationController.prototype, "delete", null);
exports.ReservationController = ReservationController = __decorate([
    (0, common_1.Controller)("reservations"),
    (0, swagger_1.ApiTags)("Reservations"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [reservations_service_1.ReservationService])
], ReservationController);
//# sourceMappingURL=reservations.controller.js.map