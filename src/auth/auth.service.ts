import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Company } from "../company/company.schema";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(Company.name) private companyModel: Model<Company>
  ) {}

  async validateCompany(tenantId: string, apiKey: string, apiSecret: string) {
    const company = await this.companyModel.findOne({
      tenantId,
      apiKey,
      apiSecret,
    });
    if (!company) throw new UnauthorizedException("Invalid credentials");
    return company;
  }

  async login(tenantId: string, apiKey: string, apiSecret: string) {
    const company = await this.validateCompany(tenantId, apiKey, apiSecret);
    const payload = { sub: company._id, tenantId: company.tenantId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
