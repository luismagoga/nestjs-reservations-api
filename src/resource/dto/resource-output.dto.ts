import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";

@Exclude()
export class ResourceResponseDto {
  @ApiProperty({
    description: "ID del recurso",
    example: "6833977686004527398b6b90",
  })
  @Expose({ name: "_id" })
  resourceId: string;

  @ApiProperty({
    description: "Identificador del tenant",
    example: "tenant-123",
  })
  @Expose()
  tenantId: string;

  @ApiProperty({
    description: "Identificador único del recurso",
    example: "XXXX",
  })
  @Expose()
  identifier: string;
}
