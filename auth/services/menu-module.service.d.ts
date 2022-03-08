import { Repository } from 'typeorm';
import { CreateMenuModuleDto } from '../dtos/menu-module.dto';
import { MenuModule } from '../entities/menu-module.entity';
export declare class MenuModuleService {
    private repo;
    constructor(repo: Repository<MenuModule>);
    findAll(): Promise<MenuModule[]>;
    create(data: CreateMenuModuleDto): Promise<MenuModule>;
}
