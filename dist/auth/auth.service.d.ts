import { JwtService } from "@nestjs/jwt";
import { Model } from "mongoose";
import { Company } from "../company/company.schema";
export declare class AuthService {
    private jwtService;
    private companyModel;
    constructor(jwtService: JwtService, companyModel: Model<Company>);
    validateCompany(tenantId: string, apiKey: string, apiSecret: string): Promise<import("mongoose").Document<unknown, {}, Company, {}> & Company & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    login(tenantId: string, apiKey: string, apiSecret: string): Promise<{
        access_token: string;
    }>;
}
//# sourceMappingURL=auth.service.d.ts.map