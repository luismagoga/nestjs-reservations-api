"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const resource_service_1 = require("./resource.service");
const resource_controller_1 = require("./resource.controller");
const resource_schema_1 = require("./resource.schema");
const company_schema_1 = require("../company/company.schema");
const auth_module_1 = require("../auth/auth.module");
let ResourceModule = class ResourceModule {
};
exports.ResourceModule = ResourceModule;
exports.ResourceModule = ResourceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: resource_schema_1.Resource.name, schema: resource_schema_1.ResourceSchema },
                { name: company_schema_1.Company.name, schema: company_schema_1.CompanySchema },
            ]),
            auth_module_1.AuthModule,
        ],
        providers: [resource_service_1.ResourceService],
        controllers: [resource_controller_1.ResourceController],
    })
], ResourceModule);
//# sourceMappingURL=resource.module.js.map