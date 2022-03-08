import { PublicationService } from '../services/publication.service';
import { CreatePublicationDto, FilterPublicationDto, UpdatePublicationDto } from '../dtos/publication.dto';
import { Publication } from '../entities/publication.entity';
import { IPagination } from '../interfaces/pagination.interface';
export declare class PublicationController {
    private publicationService;
    private logger;
    constructor(publicationService: PublicationService);
    getProducts(params: FilterPublicationDto): Promise<IPagination>;
    getOne(id: number): Promise<Publication>;
    create(data: CreatePublicationDto): Promise<Publication>;
    update(id: number, changes: UpdatePublicationDto): Promise<Publication>;
    delete(id: number): Promise<any>;
}
