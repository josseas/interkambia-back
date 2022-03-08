/// <reference types="node" />
import { ConfigService } from "@nestjs/config";
export declare class AwsUploadService {
    private readonly config;
    constructor(config: ConfigService);
    UploadFile(buffer: Buffer, fileName: string): Promise<IS3File>;
}
