import { Injectable, ConflictException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Resource } from "./resource.schema";
import { Company } from "../company/company.schema";

@Injectable()
export class ResourceService {
  constructor(
    @InjectModel(Resource.name) private readonly resourceModel: Model<Resource>,
    @InjectModel(Company.name) private readonly companyModel: Model<Company>
  ) {}

  async createResource(
    tenantId: string,
    identifier: string
  ): Promise<Resource> {
    const companyExists = await this.companyModel.findOne({ tenantId });
    if (!companyExists) throw new ConflictException("Invalid tenantId");

    const existing = await this.resourceModel.findOne({ tenantId, identifier });
    if (existing) throw new ConflictException("Resource already exists");

    return this.resourceModel.create({ tenantId, identifier });
  }

  async getAllResourcesByTenantId(tenantId: string): Promise<Resource[]> {
    const companyExists = await this.companyModel.findOne({ tenantId });
    if (!companyExists) throw new ConflictException("Invalid tenantId");

    return this.resourceModel.find({ tenantId }).lean();
  }
}
