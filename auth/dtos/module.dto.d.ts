import { Menu } from "../entities/menu.entity";
export declare class CreateModuleDto {
    name: string;
    url: string;
    permitted: boolean;
    index: number;
    menus?: Menu[];
}
