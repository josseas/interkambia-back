import { CreatePublicationDto, FilterPublicationDto, UpdatePublicationDto } from '../dtos/publication.dto';
import { Publication } from '../entities/publication.entity';
import { Repository } from 'typeorm';
import { IPagination } from '../interfaces/pagination.interface';
export declare class PublicationService {
    private repo;
    constructor(repo: Repository<Publication>);
    findAll(params?: FilterPublicationDto): Promise<IPagination>;
    findOne(id: number): Promise<Publication>;
    create(data: CreatePublicationDto): Promise<Publication>;
    update(id: number, changes: UpdatePublicationDto): Promise<Publication>;
    delete(id: number): Promise<any>;
}
