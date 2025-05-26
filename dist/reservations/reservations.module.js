"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const reservations_service_1 = require("./reservations.service");
const reservations_controller_1 = require("./reservations.controller");
const reservations_schema_1 = require("./reservations.schema");
const resource_schema_1 = require("../resource/resource.schema");
const auth_module_1 = require("../auth/auth.module");
let ReservationsModule = class ReservationsModule {
};
exports.ReservationsModule = ReservationsModule;
exports.ReservationsModule = ReservationsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: reservations_schema_1.Reservation.name, schema: reservations_schema_1.ReservationSchema },
                { name: resource_schema_1.Resource.name, schema: resource_schema_1.ResourceSchema },
            ]),
            auth_module_1.AuthModule,
        ],
        providers: [reservations_service_1.ReservationService],
        controllers: [reservations_controller_1.ReservationController],
    })
], ReservationsModule);
//# sourceMappingURL=reservations.module.js.map