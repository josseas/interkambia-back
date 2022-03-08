import { BaseEntity } from "typeorm/repository/BaseEntity";
import { MenuModule } from "./menu-module.entity";
export declare class Menu extends BaseEntity {
    id: number;
    name: string;
    url: string;
    icon: string;
    permitted: boolean;
    module: MenuModule;
}
