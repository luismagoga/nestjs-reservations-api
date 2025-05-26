import { ReservationService } from "./reservations.service";
export declare class ReservationController {
    private readonly reservationService;
    constructor(reservationService: ReservationService);
    create(body: {
        resourceId: string;
        start: string;
        end: string;
        description?: string;
    }, req: any): Promise<import("mongoose").Document<unknown, {}, import("./reservations.schema").Reservation, {}> & import("./reservations.schema").Reservation & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    list(resourceId: string, req: any): Promise<(import("mongoose").Document<unknown, {}, import("./reservations.schema").Reservation, {}> & import("./reservations.schema").Reservation & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
}
//# sourceMappingURL=reservations.controller.d.ts.map