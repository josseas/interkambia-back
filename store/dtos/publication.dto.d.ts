import { Gallery } from "../entities/gallery.entity";
export declare class CreatePublicationDto {
    title: string;
    description: string;
    additional_feature: string;
    price: number;
    operation_type: string;
    gallery?: Gallery;
}
export declare class UpdatePublicationDto {
    title: string;
    description: string;
    additional_feature: string;
    price: number;
    operation_type: string;
    gallery?: Gallery;
}
export declare class FilterPublicationDto {
    title: string;
    description: string;
    additional_feature: string;
    min_price: number;
    max_price: number;
    limit: number;
    offset: number;
}
