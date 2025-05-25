import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth/auth.module";
import { ReservationsModule } from "./reservations/reservations.module";
import { ResourceModule } from "./resource/resource.module";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/reservations"),
    AuthModule,
    ReservationsModule,
    ResourceModule,
  ],
})
export class AppModule {}
