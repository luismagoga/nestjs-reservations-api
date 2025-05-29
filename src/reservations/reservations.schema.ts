import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Reservation extends Document {
  @Prop({ required: true })
  resourceId: string;

  @Prop({ required: true })
  start: string;

  @Prop({ required: true })
  end: string;

  @Prop()
  description?: string;

  @Prop()
  user?: string;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);
