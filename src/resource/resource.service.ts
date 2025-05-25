import { Injectable, ConflictException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Resource } from "./resource.schema";
import { Company } from "../company/company.schema";

@Injectable()
export class ResourceService {
  constructor(
    @InjectModel(Resource.name) private resourceModel: Model<Resource>,
    @InjectModel(Company.name) private companyModel: Model<Company>
  ) {}

  async createResource(tenantId: string, identifier: string) {
    const companyExists = await this.companyModel.findOne({ tenantId });
    if (!companyExists) throw new ConflictException("Invalid tenantId");

    const existing = await this.resourceModel.findOne({ tenantId, identifier });
    if (existing) throw new ConflictException("Resource already exists");

    return this.resourceModel.create({ tenantId, identifier });
  }
}
