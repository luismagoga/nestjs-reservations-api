import { CreateResourceDto } from "./dto/resource-input.dto";
import { ResourceResponseDto } from "./dto/resource-output.dto";
import { ResourceService } from "./resource.service";
export declare class ResourceController {
    private readonly resourceService;
    constructor(resourceService: ResourceService);
    create(body: CreateResourceDto, req: any): Promise<ResourceResponseDto>;
    getAll(req: any): Promise<ResourceResponseDto[]>;
}
//# sourceMappingURL=resource.controller.d.ts.map