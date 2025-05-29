import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";

@Exclude()
export class ReservationResponseDto {
  @ApiProperty({
    description: "ID de la reserva",
    example: "6833977686004527398b6b90",
  })
  @Expose({ name: "_id" })
  reservationId: string;

  @ApiProperty({
    description: "ID del recurso reservado",
    example: "68339e2e8b5549f2f06863cf",
  })
  @Expose()
  resourceId: string;

  @ApiProperty({
    description: "Fecha de inicio de la reserva",
    example: "2025-05-25T00:00:00Z",
  })
  @Expose()
  start: string;

  @ApiProperty({
    description: "Fecha de fin de la reserva",
    example: "2025-05-25T23:59:59Z",
  })
  @Expose()
  end: string;

  @ApiProperty({
    description: "Descripción de la reserva",
    example: "Registro vacaciones",
  })
  @Expose()
  description: string;

  @ApiProperty({
    description: "Email de usuario de la reserva",
    example: "manuel@gmail.com",
  })
  @Expose()
  user: string;
}
