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
exports.Publication = void 0;
const typeorm_1 = require("typeorm");
const Entity_1 = require("typeorm/decorator/entity/Entity");
const BaseEntity_1 = require("typeorm/repository/BaseEntity");
const gallery_entity_1 = require("./gallery.entity");
let Publication = class Publication extends BaseEntity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Publication.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Publication.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Publication.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Publication.prototype, "additional_feature", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Publication.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Publication.prototype, "operation_type", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => gallery_entity_1.Gallery, { eager: true, cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", gallery_entity_1.Gallery)
], Publication.prototype, "gallery", void 0);
Publication = __decorate([
    (0, Entity_1.Entity)()
], Publication);
exports.Publication = Publication;
//# sourceMappingURL=publication.entity.js.map