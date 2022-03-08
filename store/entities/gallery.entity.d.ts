import { BaseEntity } from "typeorm/repository/BaseEntity";
import { Publication } from "./publication.entity";
import { Image } from "./image.entity";
export declare class Gallery extends BaseEntity {
    id: number;
    folder: string;
    publication: Publication;
    images: Image[];
}
