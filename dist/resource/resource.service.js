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
exports.ResourceService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const resource_schema_1 = require("./resource.schema");
const company_schema_1 = require("../company/company.schema");
let ResourceService = class ResourceService {
    constructor(resourceModel, companyModel) {
        this.resourceModel = resourceModel;
        this.companyModel = companyModel;
    }
    async createResource(tenantId, identifier) {
        const companyExists = await this.companyModel.findOne({ tenantId });
        if (!companyExists)
            throw new common_1.ConflictException("Invalid tenantId");
        const existing = await this.resourceModel.findOne({ tenantId, identifier });
        if (existing)
            throw new common_1.ConflictException("Resource already exists");
        return this.resourceModel.create({ tenantId, identifier });
    }
    async getAllResourcesByTenantId(tenantId) {
        const companyExists = await this.companyModel.findOne({ tenantId });
        if (!companyExists)
            throw new common_1.ConflictException("Invalid tenantId");
        return this.resourceModel.find({ tenantId }).lean();
    }
};
exports.ResourceService = ResourceService;
exports.ResourceService = ResourceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(resource_schema_1.Resource.name)),
    __param(1, (0, mongoose_1.InjectModel)(company_schema_1.Company.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], ResourceService);
//# sourceMappingURL=resource.service.js.map