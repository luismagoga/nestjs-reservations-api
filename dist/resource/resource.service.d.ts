import { Model } from "mongoose";
import { Resource } from "./resource.schema";
import { Company } from "../company/company.schema";
export declare class ResourceService {
    private readonly resourceModel;
    private readonly companyModel;
    constructor(resourceModel: Model<Resource>, companyModel: Model<Company>);
    createResource(tenantId: string, identifier: string): Promise<Resource>;
    getAllResourcesByTenantId(tenantId: string): Promise<Resource[]>;
}
//# sourceMappingURL=resource.service.d.ts.map