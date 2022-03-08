import { BaseEntity } from "typeorm/repository/BaseEntity";
import { Gallery } from "./gallery.entity";
export declare class Image extends BaseEntity {
    id: number;
    url: string;
    key: string;
    alias: string;
    folder: string;
    gallery: Gallery;
}
