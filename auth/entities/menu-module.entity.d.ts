import { BaseEntity } from "typeorm/repository/BaseEntity";
import { Menu } from "./menu.entity";
export declare class MenuModule extends BaseEntity {
    id: number;
    name: string;
    url: string;
    permitted: boolean;
    index: number;
    menus: Menu[];
}
