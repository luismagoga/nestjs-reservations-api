import {
  Controller,
  Post,
  Get,
  Body,
  Request,
  UseGuards,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { ReservationService } from "./reservations.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import {
  ApiBearerAuth,
  ApiBody,
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from "@nestjs/swagger";
import { CreateReservationDto } from "./dto/reservation-input.dto";
import { ReservationResponseDto } from "./dto/reservation-output.dto";
import { plainToInstance } from "class-transformer";

@Controller("reservations")
@ApiTags("Reservations")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  @ApiBody({
    type: CreateReservationDto,
  })
  @ApiOperation({ summary: "Register a reservation" })
  @ApiResponse({
    status: 201,
    description: "Reservation successfully registered",
    type: ReservationResponseDto,
  })
  @ApiConflictResponse({
    description: "Resource already exists",
    schema: {
      type: "object",
      properties: {
        message: { type: "string", example: "Resource already exists" },
        error: { type: "string", example: "Conflict" },
        statusCode: { type: "number", example: 409 },
      },
    },
  })
  @ApiUnauthorizedResponse({
    description: "Unauthorized",
    schema: {
      type: "object",
      properties: {
        message: { type: "string", example: "Unauthorized" },
        statusCode: { type: "number", example: 401 },
      },
    },
  })
  @ApiNotFoundResponse({
    description: "Not Found",
    schema: {
      type: "object",
      properties: {
        message: { type: "string", example: "Not found" },
        statusCode: { type: "number", example: 404 },
      },
    },
  })
  async create(
    @Body() body: CreateReservationDto,
    @Request() req
  ): Promise<ReservationResponseDto> {
    return plainToInstance(
      ReservationResponseDto,
      await this.reservationService.createReservation(
        req.user.tenantId,
        body.resourceId,
        body.start,
        body.end,
        body.user,
        body.description
      )
    );
  }

  @Get(":resourceId")
  @ApiOperation({ summary: "Get all reservations by resourceId and tenantId" })
  @ApiResponse({
    status: 200,
    description: "Get reservation by resourceId and tenantId",
    type: [ReservationResponseDto],
  })
  @ApiUnauthorizedResponse({
    description: "Unauthorized",
    schema: {
      type: "object",
      properties: {
        message: { type: "string", example: "Unauthorized" },
        statusCode: { type: "number", example: 401 },
      },
    },
  })
  @ApiNotFoundResponse({
    description: "Not Found",
    schema: {
      type: "object",
      properties: {
        message: { type: "string", example: "Resource not found" },
        error: { type: "string", example: "Not Found" },
        statusCode: { type: "number", example: 404 },
      },
    },
  })
  async list(
    @Param("resourceId") resourceId: string,
    @Request() req
  ): Promise<ReservationResponseDto[]> {
    return plainToInstance(
      ReservationResponseDto,
      await this.reservationService.listReservations(
        req.user.tenantId,
        resourceId
      )
    );
  }

  @Delete(":resourceId/:reservationId")
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: "Delete reservation" })
  @ApiResponse({
    status: 204,
    description: "Reservation successfully deleted",
  })
  @ApiUnauthorizedResponse({
    description: "Unauthorized",
    schema: {
      type: "object",
      properties: {
        message: { type: "string", example: "Unauthorized" },
        statusCode: { type: "number", example: 401 },
      },
    },
  })
  @ApiNotFoundResponse({
    description: "Not Found",
    schema: {
      type: "object",
      properties: {
        message: { type: "string", example: "Not found" },
        statusCode: { type: "number", example: 404 },
      },
    },
  })
  async delete(
    @Param("resourceId") resourceId: string,
    @Param("reservationId") reservationId: string,
    @Request() req
  ): Promise<void> {
    await this.reservationService.deleteByTenantIdAndResourceIdAndId(
      req.user.tenantId,
      resourceId,
      reservationId
    );
  }
}
