import { IsString, IsOptional, IsISO8601 } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateReservationDto {
  @ApiProperty({
    description: "Identificador del recurso",
    example: "resource-123",
  })
  @IsString()
  resourceId: string;

  @ApiProperty({
    description: "Fecha de inicio de la reserva (formato ISO8601)",
    example: "2025-05-26T10:00:00Z",
  })
  start: string;

  @ApiProperty({
    description: "Fecha de fin de la reserva (formato ISO8601)",
    example: "2025-05-26T12:00:00Z",
  })
  end: string;

  @ApiPropertyOptional({
    description: "Descripción opcional de la reserva",
    example: "Reunión de equipo",
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: "Email de usuario para confirmación de reserva.",
    example: "manuel@gmail.com",
  })
  @IsOptional()
  @IsString()
  user?: string;
}
