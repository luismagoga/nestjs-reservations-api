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
exports.ReservationResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
let ReservationResponseDto = class ReservationResponseDto {
};
exports.ReservationResponseDto = ReservationResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "ID de la reserva",
        example: "6833977686004527398b6b90",
    }),
    (0, class_transformer_1.Expose)({ name: "_id" }),
    __metadata("design:type", String)
], ReservationResponseDto.prototype, "reservationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "ID del recurso reservado",
        example: "68339e2e8b5549f2f06863cf",
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ReservationResponseDto.prototype, "resourceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Fecha de inicio de la reserva",
        example: "2025-05-25T00:00:00Z",
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ReservationResponseDto.prototype, "start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Fecha de fin de la reserva",
        example: "2025-05-25T23:59:59Z",
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ReservationResponseDto.prototype, "end", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Descripción de la reserva",
        example: "Registro vacaciones",
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ReservationResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Email de usuario de la reserva",
        example: "manuel@gmail.com",
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ReservationResponseDto.prototype, "user", void 0);
exports.ReservationResponseDto = ReservationResponseDto = __decorate([
    (0, class_transformer_1.Exclude)()
], ReservationResponseDto);
//# sourceMappingURL=reservation-output.dto.js.map