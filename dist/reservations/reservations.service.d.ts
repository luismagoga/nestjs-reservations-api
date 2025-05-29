import { Model } from "mongoose";
import { Reservation } from "./reservations.schema";
import { Resource } from "../resource/resource.schema";
export declare class ReservationService {
    private readonly reservationModel;
    private readonly resourceModel;
    constructor(reservationModel: Model<Reservation>, resourceModel: Model<Resource>);
    createReservation(tenantId: string, resourceId: string, start: string, end: string, user?: string, description?: string): Promise<Reservation>;
    listReservations(tenantId: string, resourceId: string): Promise<Reservation[]>;
    deleteByTenantIdAndResourceIdAndId(tenantId: string, resourceId: string, reservationId: string): Promise<void>;
}
//# sourceMappingURL=reservations.service.d.ts.map