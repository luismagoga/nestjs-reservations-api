import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Reservation } from "./reservations.schema";
import { Resource } from "../resource/resource.schema";

@Injectable()
export class ReservationService {
  constructor(
    @InjectModel(Reservation.name) private reservationModel: Model<Reservation>,
    @InjectModel(Resource.name) private resourceModel: Model<Resource>
  ) {}

  async createReservation(
    tenantId: string,
    resourceId: string,
    start: Date,
    end: Date,
    description?: string
  ) {
    const resource = await this.resourceModel.findOne({
      tenantId,
      _id: resourceId,
    });
    if (!resource) throw new NotFoundException("Resource not found");

    return this.reservationModel.create({
      resourceId: resource._id,
      start,
      end,
      description,
    });
  }

  async listReservations(tenantId: string, resourceId: string) {
    const resource = await this.resourceModel.findOne({
      tenantId,
      _id: resourceId,
    });
    if (!resource) throw new NotFoundException("Resource not found");

    return this.reservationModel.find({ resourceId: resource._id });
  }
}
