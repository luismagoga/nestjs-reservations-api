import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { Reservation } from "./reservations.schema";
import { Resource } from "../resource/resource.schema";

@Injectable()
export class ReservationService {
  constructor(
    @InjectModel(Reservation.name)
    private readonly reservationModel: Model<Reservation>,
    @InjectModel(Resource.name) private readonly resourceModel: Model<Resource>
  ) {}

  async createReservation(
    tenantId: string,
    resourceId: string,
    start: string,
    end: string,
    description?: string
  ): Promise<Reservation> {
    const resource = await this.resourceModel.findOne({
      tenantId,
      _id: resourceId,
    });
    if (!resource) throw new NotFoundException("Resource not found");
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
      throw new ConflictException("Reservation already exists");

    return this.reservationModel.create({
      resourceId: resource._id,
      start,
      end,
      description,
    });
  }

  async listReservations(
    tenantId: string,
    resourceId: string
  ): Promise<Reservation[]> {
    const resource = await this.resourceModel.findOne({
      tenantId,
      _id: resourceId,
    });
    if (!resource) throw new NotFoundException("Resource not found");

    return this.reservationModel.find({ resourceId: resource._id }).lean();
  }

  async deleteByTenantIdAndResourceIdAndId(
    tenantId: string,
    resourceId: string,
    reservationId: string
  ): Promise<void> {
    const resource = await this.resourceModel.findOne({
      tenantId,
      _id: resourceId,
    });
    if (!resource) throw new NotFoundException("Resource not found");

    const result = await this.reservationModel.findByIdAndDelete({
      _id: new Types.ObjectId(reservationId),
    });
    if (!result) {
      throw new NotFoundException(`reservationID ${reservationId} not found`);
    }
  }
}
