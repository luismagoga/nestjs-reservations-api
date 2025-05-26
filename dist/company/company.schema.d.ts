import { Document } from "mongoose";
export declare class Company extends Document {
    tenantId: string;
    apiKey: string;
    apiSecret: string;
}
export declare const CompanySchema: import("mongoose").Schema<Company, import("mongoose").Model<Company, any, any, any, Document<unknown, any, Company, any> & Company & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Company, Document<unknown, {}, import("mongoose").FlatRecord<Company>, {}> & import("mongoose").FlatRecord<Company> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
//# sourceMappingURL=company.schema.d.ts.map