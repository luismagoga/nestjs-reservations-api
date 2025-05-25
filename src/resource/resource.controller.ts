import { Controller, Post, Body, UseGuards, Request } from "@nestjs/common";
import { ResourceService } from "./resource.service";
import {
  ApiBearerAuth,
  ApiBody,
  ApiConflictResponse,
  ApiForbiddenResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller("resources")
@ApiTags("Resources")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}

  @Post()
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        identifier: { type: "string", example: "XXXX" },
      },
      required: ["identifier"],
    },
  })
  @ApiOperation({ summary: "Register a new resource" })
  @ApiResponse({
    status: 201,
    description: "User successfully registered",
    schema: {
      type: "object",
      properties: {
        tenantId: { type: "string", example: "tenant-123" },
        identifier: { type: "string", example: "XXXX" },
        _id: { type: "number", example: "6833977686004527398b6b90" },
        createdAt: { type: "string", example: "2025-05-25T22:19:34.226Z" },
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
  create(@Body() body: { identifier: string }, @Request() req) {
    const tenantId = req.user.tenantId;
    return this.resourceService.createResource(tenantId, body.identifier);
  }
}
