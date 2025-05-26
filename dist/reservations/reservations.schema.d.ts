import { Document } from "mongoose";
export declare class Reservation extends Document {
    resourceId: string;
    start: string;
    end: string;
    description?: string;
}
export declare const ReservationSchema: import("mongoose").Schema<Reservation, import("mongoose").Model<Reservation, any, any, any, Document<unknown, any, Reservation, any> & Reservation & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Reservation, Document<unknown, {}, import("mongoose").FlatRecord<Reservation>, {}> & import("mongoose").FlatRecord<Reservation> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
//# sourceMappingURL=reservations.schema.d.ts.map