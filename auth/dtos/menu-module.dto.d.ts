import { Menu } from "../entities/menu.entity";
export declare class CreateMenuModuleDto {
    name: string;
    url: string;
    permitted: boolean;
    index: number;
    menus?: Menu[];
}
