import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateResourceDto {
  @ApiProperty({
    description: "Identificador único del recurso",
    example: "XXXX",
  })
  @IsString()
  identifier: string;
}
