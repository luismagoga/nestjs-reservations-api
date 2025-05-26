import { Model } from "mongoose";
import { Reservation } from "./reservations.schema";
import { Resource } from "../resource/resource.schema";
export declare class ReservationService {
    private reservationModel;
    private resourceModel;
    constructor(reservationModel: Model<Reservation>, resourceModel: Model<Resource>);
    createReservation(tenantId: string, resourceId: string, start: Date, end: Date, description?: string): Promise<import("mongoose").Document<unknown, {}, Reservation, {}> & Reservation & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    listReservations(tenantId: string, resourceId: string): Promise<(import("mongoose").Document<unknown, {}, Reservation, {}> & Reservation & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
}
//# sourceMappingURL=reservations.service.d.ts.map