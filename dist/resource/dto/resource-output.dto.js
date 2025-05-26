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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
let ResourceResponseDto = class ResourceResponseDto {
};
exports.ResourceResponseDto = ResourceResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "ID del recurso",
        example: "6833977686004527398b6b90",
    }),
    (0, class_transformer_1.Expose)({ name: "_id" }),
    __metadata("design:type", String)
], ResourceResponseDto.prototype, "resourceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Identificador del tenant",
        example: "tenant-123",
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ResourceResponseDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Identificador único del recurso",
        example: "XXXX",
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ResourceResponseDto.prototype, "identifier", void 0);
exports.ResourceResponseDto = ResourceResponseDto = __decorate([
    (0, class_transformer_1.Exclude)()
], ResourceResponseDto);
//# sourceMappingURL=resource-output.dto.js.map