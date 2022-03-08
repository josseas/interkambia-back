import { BaseEntity } from "typeorm/repository/BaseEntity";
import { Gallery } from "./gallery.entity";
export declare class Publication extends BaseEntity {
    id: number;
    title: string;
    description: string;
    additional_feature: string;
    price: number;
    operation_type: string;
    gallery: Gallery;
}
