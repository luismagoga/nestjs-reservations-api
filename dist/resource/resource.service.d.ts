import { Model } from "mongoose";
import { Resource } from "./resource.schema";
import { Company } from "../company/company.schema";
export declare class ResourceService {
    private resourceModel;
    private companyModel;
    constructor(resourceModel: Model<Resource>, companyModel: Model<Company>);
    createResource(tenantId: string, identifier: string): Promise<import("mongoose").Document<unknown, {}, Resource, {}> & Resource & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
//# sourceMappingURL=resource.service.d.ts.map