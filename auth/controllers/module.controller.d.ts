import { CreateModuleDto } from '../dtos/module.dto';
import { MenuModule } from '../entities/menu-module.entity';
import { ModuleService } from '../services/module.service';
export declare class ModuleController {
    private moduleService;
    private logger;
    constructor(moduleService: ModuleService);
    getModules(): Promise<MenuModule[]>;
    create(data: CreateModuleDto): Promise<MenuModule>;
}
