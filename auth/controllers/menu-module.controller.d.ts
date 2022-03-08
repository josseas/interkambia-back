import { CreateMenuModuleDto } from '../dtos/menu-module.dto';
import { MenuModule } from '../entities/menu-module.entity';
import { MenuModuleService } from '../services/menu-module.service';
export declare class MenuModuleController {
    private menuModuleService;
    private logger;
    constructor(menuModuleService: MenuModuleService);
    getModules(): Promise<MenuModule[]>;
    create(data: CreateMenuModuleDto): Promise<MenuModule>;
}
