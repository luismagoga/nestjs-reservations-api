import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Reservation extends Document {
  @Prop({ required: true })
  resourceId: string;

  @Prop({ required: true })
  start: Date;

  @Prop({ required: true })
  end: Date;

  @Prop()
  description?: string;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);
