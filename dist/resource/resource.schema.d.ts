import { Document } from "mongoose";
export declare class Resource extends Document {
    tenantId: string;
    identifier: string;
    createdAt: Date;
}
export declare const ResourceSchema: import("mongoose").Schema<Resource, import("mongoose").Model<Resource, any, any, any, Document<unknown, any, Resource, any> & Resource & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Resource, Document<unknown, {}, import("mongoose").FlatRecord<Resource>, {}> & import("mongoose").FlatRecord<Resource> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
//# sourceMappingURL=resource.schema.d.ts.map