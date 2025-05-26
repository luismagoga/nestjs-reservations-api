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
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const resource_input_dto_1 = require("./dto/resource-input.dto");
const resource_output_dto_1 = require("./dto/resource-output.dto");
const resource_service_1 = require("./resource.service");
let ResourceController = class ResourceController {
    constructor(resourceService) {
        this.resourceService = resourceService;
    }
    async create(body, req) {
        return (0, class_transformer_1.plainToInstance)(resource_output_dto_1.ResourceResponseDto, await this.resourceService.createResource(req.user.tenantId, body.identifier));
    }
    async getAll(req) {
        return (0, class_transformer_1.plainToInstance)(resource_output_dto_1.ResourceResponseDto, await this.resourceService.getAllResourcesByTenantId(req.user.tenantId));
    }
};
exports.ResourceController = ResourceController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({
        type: resource_input_dto_1.CreateResourceDto,
    }),
    (0, swagger_1.ApiOperation)({ summary: "Register a new resource" }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: "Resource successfully registered",
        type: resource_output_dto_1.ResourceResponseDto,
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
    __metadata("design:paramtypes", [resource_input_dto_1.CreateResourceDto, Object]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Get all resources from tenantId" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Resources list from tenantId",
        type: [resource_output_dto_1.ResourceResponseDto],
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
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "getAll", null);
exports.ResourceController = ResourceController = __decorate([
    (0, common_1.Controller)("resources"),
    (0, swagger_1.ApiTags)("Resources"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [resource_service_1.ResourceService])
], ResourceController);
//# sourceMappingURL=resource.controller.js.map