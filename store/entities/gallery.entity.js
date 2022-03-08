"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gallery = void 0;
const typeorm_1 = require("typeorm");
const Entity_1 = require("typeorm/decorator/entity/Entity");
const BaseEntity_1 = require("typeorm/repository/BaseEntity");
const publication_entity_1 = require("./publication.entity");
const image_entity_1 = require("./image.entity");
let Gallery = class Gallery extends BaseEntity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Gallery.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Gallery.prototype, "folder", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => publication_entity_1.Publication, (publication) => publication.gallery),
    __metadata("design:type", publication_entity_1.Publication)
], Gallery.prototype, "publication", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => image_entity_1.Image, (image) => image.gallery, { eager: true, cascade: true }),
    __metadata("design:type", Array)
], Gallery.prototype, "images", void 0);
Gallery = __decorate([
    (0, Entity_1.Entity)()
], Gallery);
exports.Gallery = Gallery;
//# sourceMappingURL=gallery.entity.js.map