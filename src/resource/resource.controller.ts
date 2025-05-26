import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiBody,
  ApiConflictResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from "@nestjs/swagger";
import { plainToInstance } from "class-transformer";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CreateResourceDto } from "./dto/resource-input.dto";
import { ResourceResponseDto } from "./dto/resource-output.dto";
import { ResourceService } from "./resource.service";

@Controller("resources")
@ApiTags("Resources")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}

  @Post()
  @ApiBody({
    type: CreateResourceDto,
  })
  @ApiOperation({ summary: "Register a new resource" })
  @ApiResponse({
    status: 201,
    description: "Resource successfully registered",
    type: ResourceResponseDto,
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
  async create(
    @Body() body: CreateResourceDto,
    @Request() req
  ): Promise<ResourceResponseDto> {
    return plainToInstance(
      ResourceResponseDto,
      await this.resourceService.createResource(
        req.user.tenantId,
        body.identifier
      )
    );
  }

  @Get()
  @ApiOperation({ summary: "Get all resources from tenantId" })
  @ApiResponse({
    status: 200,
    description: "Resources list from tenantId",
    type: [ResourceResponseDto],
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
  async getAll(@Request() req): Promise<ResourceResponseDto[]> {
    return plainToInstance(
      ResourceResponseDto,
      await this.resourceService.getAllResourcesByTenantId(req.user.tenantId)
    );
  }
}
