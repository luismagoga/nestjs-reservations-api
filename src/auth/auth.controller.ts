import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiTags, ApiBody, ApiBearerAuth } from "@nestjs/swagger";

@Controller("auth")
@ApiTags("Auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("login")
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        tenantId: { type: "string", example: "tenant-123" },
        apiKey: { type: "string", example: "api-key-123" },
        apiSecret: { type: "string", example: "secret-123" },
      },
      required: ["tenantId", "apiKey", "apiSecret"],
    },
  })
  login(@Body() body: any) {
    const { tenantId, apiKey, apiSecret } = body;
    return this.authService.login(tenantId, apiKey, apiSecret);
  }
}
