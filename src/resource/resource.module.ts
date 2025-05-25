import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ResourceService } from "./resource.service";
import { ResourceController } from "./resource.controller";
import { Resource, ResourceSchema } from "./resource.schema";
import { Company, CompanySchema } from "../company/company.schema";
import { AuthModule } from "src/auth/auth.module";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Resource.name, schema: ResourceSchema },
      { name: Company.name, schema: CompanySchema },
    ]),
    AuthModule,
  ],
  providers: [ResourceService],
  controllers: [ResourceController],
})
export class ResourceModule {}
