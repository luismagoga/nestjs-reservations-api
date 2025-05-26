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
exports.ResourceController = void 0;
const common_1 = require("@nestjs/common");
const resource_service_1 = require("./resource.service");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ResourceController = class ResourceController {
    constructor(resourceService) {
        this.resourceService = resourceService;
    }
    create(body, req) {
        const tenantId = req.user.tenantId;
        return this.resourceService.createResource(tenantId, body.identifier);
    }
};
exports.ResourceController = ResourceController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({
        schema: {
            type: "object",
            properties: {
                identifier: { type: "string", example: "XXXX" },
            },
            required: ["identifier"],
        },
    }),
    (0, swagger_1.ApiOperation)({ summary: "Register a new resource" }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: "User successfully registered",
        schema: {
            type: "object",
            properties: {
                tenantId: { type: "string", example: "tenant-123" },
                identifier: { type: "string", example: "XXXX" },
                _id: { type: "number", example: "6833977686004527398b6b90" },
                createdAt: { type: "string", example: "2025-05-25T22:19:34.226Z" },
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
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ResourceController.prototype, "create", null);
exports.ResourceController = ResourceController = __decorate([
    (0, common_1.Controller)("resources"),
    (0, swagger_1.ApiTags)("Resources"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [resource_service_1.ResourceService])
], ResourceController);
//# sourceMappingURL=resource.controller.js.map