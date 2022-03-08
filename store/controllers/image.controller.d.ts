import { Publication } from '../entities/publication.entity';
import { ImageService } from '../services/image.service';
export declare class ImageController {
    private imageService;
    private logger;
    constructor(imageService: ImageService);
    create(id: number, file: any): Promise<Publication>;
}
