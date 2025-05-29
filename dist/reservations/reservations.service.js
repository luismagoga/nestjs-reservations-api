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
exports.ReservationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const reservations_schema_1 = require("./reservations.schema");
const resource_schema_1 = require("../resource/resource.schema");
let ReservationService = class ReservationService {
    constructor(reservationModel, resourceModel) {
        this.reservationModel = reservationModel;
        this.resourceModel = resourceModel;
    }
    async createReservation(tenantId, resourceId, start, end, user, description) {
        const resource = await this.resourceModel.findOne({
            tenantId,
            _id: resourceId,
        });
        if (!resource)
            throw new common_1.NotFoundException("Resource not found");
        const query = {
            resourceId,
            $or: [
                {
                    start: { $lte: end },
                    end: { $gte: start },
                },
            ],
        };
        const overlapExists = await this.reservationModel.find(query);
        if (overlapExists?.length)
            throw new common_1.ConflictException("Reservation already exists");
        return this.reservationModel.create({
            resourceId: resource._id,
            start,
            end,
            user,
            description,
        });
    }
    async listReservations(tenantId, resourceId) {
        const resource = await this.resourceModel.findOne({
            tenantId,
            _id: resourceId,
        });
        if (!resource)
            throw new common_1.NotFoundException("Resource not found");
        return this.reservationModel.find({ resourceId: resource._id }).lean();
    }
    async deleteByTenantIdAndResourceIdAndId(tenantId, resourceId, reservationId) {
        const resource = await this.resourceModel.findOne({
            tenantId,
            _id: resourceId,
        });
        if (!resource)
            throw new common_1.NotFoundException("Resource not found");
        const result = await this.reservationModel.findByIdAndDelete({
            _id: new mongoose_2.Types.ObjectId(reservationId),
        });
        if (!result) {
            throw new common_1.NotFoundException(`reservationID ${reservationId} not found`);
        }
    }
};
exports.ReservationService = ReservationService;
exports.ReservationService = ReservationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(reservations_schema_1.Reservation.name)),
    __param(1, (0, mongoose_1.InjectModel)(resource_schema_1.Resource.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], ReservationService);
//# sourceMappingURL=reservations.service.js.map