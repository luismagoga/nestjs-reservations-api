import {
  Controller,
  Post,
  Get,
  Body,
  Request,
  UseGuards,
  Param,
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

@Controller("reservations")
@ApiTags("Reservations")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        resourceId: { type: "string" },
        start: { type: "string" },
        end: { type: "string" },
        description: { type: "string" },
      },
      required: ["identifier", "start", "end", "description"],
    },
  })
  @ApiOperation({ summary: "Register a reservation" })
  @ApiResponse({
    status: 201,
    description: "User successfully registered",
    schema: {
      type: "object",
      properties: {
        _id: { type: "string", example: "6833977686004527398b6b90" },
        resourceId: { type: "string", example: "68339e2e8b5549f2f06863cf" },
        start: { type: "string", example: "2025-05-25T00:00:00.000Z" },
        end: { type: "string", example: "2025-05-25T23:59:59.999Z" },
        description: { type: "string", example: "Registro vacaciones" },
      },
    },
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
  create(
    @Body()
    body: {
      resourceId: string;
      start: string;
      end: string;
      description?: string;
    },
    @Request() req
  ) {
    const tenantId = req.user.tenantId;
    return this.reservationService.createReservation(
      tenantId,
      body.resourceId,
      new Date(body.start),
      new Date(body.end),
      body.description
    );
  }

  @Get(":resourceId")
  @ApiOperation({ summary: "Get all reservations by resourceId and tenantId" })
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
  list(@Param("resourceId") resourceId: string, @Request() req) {
    const tenantId = req.user.tenantId;
    return this.reservationService.listReservations(tenantId, resourceId);
  }
}
