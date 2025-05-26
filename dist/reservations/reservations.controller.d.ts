import { ReservationService } from "./reservations.service";
import { CreateReservationDto } from "./dto/reservation-input.dto";
import { ReservationResponseDto } from "./dto/reservation-output.dto";
export declare class ReservationController {
    private readonly reservationService;
    constructor(reservationService: ReservationService);
    create(body: CreateReservationDto, req: any): Promise<ReservationResponseDto>;
    list(resourceId: string, req: any): Promise<ReservationResponseDto[]>;
    delete(resourceId: string, reservationId: string, req: any): Promise<void>;
}
//# sourceMappingURL=reservations.controller.d.ts.map