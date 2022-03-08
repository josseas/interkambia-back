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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var PublicationController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicationController = void 0;
const common_1 = require("@nestjs/common");
const publication_service_1 = require("../services/publication.service");
const publication_dto_1 = require("../dtos/publication.dto");
let PublicationController = PublicationController_1 = class PublicationController {
    constructor(publicationService) {
        this.publicationService = publicationService;
        this.logger = new common_1.Logger(PublicationController_1.name);
    }
    async getProducts(params) {
        return await this.publicationService.findAll(params);
    }
    async getOne(id) {
        return await this.publicationService.findOne(id);
    }
    async create(data) {
        return await this.publicationService.create(data);
    }
    async update(id, changes) {
        return await this.publicationService.update(id, changes);
    }
    async delete(id) {
        return await this.publicationService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [publication_dto_1.FilterPublicationDto]),
    __metadata("design:returntype", Promise)
], PublicationController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.ACCEPTED),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PublicationController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [publication_dto_1.CreatePublicationDto]),
    __metadata("design:returntype", Promise)
], PublicationController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, publication_dto_1.UpdatePublicationDto]),
    __metadata("design:returntype", Promise)
], PublicationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PublicationController.prototype, "delete", null);
PublicationController = PublicationController_1 = __decorate([
    (0, common_1.Controller)('publication'),
    __metadata("design:paramtypes", [publication_service_1.PublicationService])
], PublicationController);
exports.PublicationController = PublicationController;
//# sourceMappingURL=publication.controller.js.map