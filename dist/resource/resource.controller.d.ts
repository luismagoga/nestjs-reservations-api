import { ResourceService } from "./resource.service";
export declare class ResourceController {
    private readonly resourceService;
    constructor(resourceService: ResourceService);
    create(body: {
        identifier: string;
    }, req: any): Promise<import("mongoose").Document<unknown, {}, import("./resource.schema").Resource, {}> & import("./resource.schema").Resource & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
//# sourceMappingURL=resource.controller.d.ts.map