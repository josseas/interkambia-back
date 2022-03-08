/// <reference types="node" />
import { Image } from '../entities/image.entity';
import { Repository } from 'typeorm';
import { AwsUploadService } from 'src/common/services/aws-upload.service';
export declare class ImageService {
    private repo;
    private readonly awsUpload;
    constructor(repo: Repository<Image>, awsUpload: AwsUploadService);
    uploadFileS3(id: number, buffer: Buffer, fileName: string): Promise<any>;
}
