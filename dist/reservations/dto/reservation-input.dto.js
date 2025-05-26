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
exports.CreateReservationDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateReservationDto {
}
exports.CreateReservationDto = CreateReservationDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Identificador del recurso",
        example: "resource-123",
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateReservationDto.prototype, "resourceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Fecha de inicio de la reserva (formato ISO8601)",
        example: "2025-05-26T10:00:00Z",
    }),
    __metadata("design:type", String)
], CreateReservationDto.prototype, "start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Fecha de fin de la reserva (formato ISO8601)",
        example: "2025-05-26T12:00:00Z",
    }),
    __metadata("design:type", String)
], CreateReservationDto.prototype, "end", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Descripción opcional de la reserva",
        example: "Reunión de equipo",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateReservationDto.prototype, "description", void 0);
//# sourceMappingURL=reservation-input.dto.js.map