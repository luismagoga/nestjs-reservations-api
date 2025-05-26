import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Company extends Document {
  @Prop({ required: true, unique: true })
  tenantId: string;

  @Prop({ required: true })
  apiKey: string;

  @Prop({ required: true })
  apiSecret: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
CompanySchema.index({ tenantId: 1, apiKey: 1, apiSecret: 1 }, { unique: true });
