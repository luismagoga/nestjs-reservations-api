import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ReservationService } from "./reservations.service";
import { ReservationController } from "./reservations.controller";
import { Reservation, ReservationSchema } from "./reservations.schema";
import { Resource, ResourceSchema } from "../resource/resource.schema";
import { AuthModule } from "src/auth/auth.module";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Reservation.name, schema: ReservationSchema },
      { name: Resource.name, schema: ResourceSchema },
    ]),
    AuthModule,
  ],
  providers: [ReservationService],
  controllers: [ReservationController],
})
export class ReservationsModule {}
