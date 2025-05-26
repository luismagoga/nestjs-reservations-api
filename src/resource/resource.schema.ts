import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Resource extends Document {
  @Prop({ required: true })
  tenantId: string;

  @Prop({ required: true })
  identifier: string;

  @Prop({ default: () => new Date() })
  createdAt: Date;
}

export const ResourceSchema = SchemaFactory.createForClass(Resource);

ResourceSchema.index({ tenantId: 1, identifier: 1 }, { unique: true });
