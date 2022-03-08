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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const publication_entity_1 = require("../entities/publication.entity");
const typeorm_2 = require("typeorm");
let PublicationService = class PublicationService {
    constructor(repo) {
        this.repo = repo;
    }
    async findAll(params) {
        if (params) {
            const where = {};
            const { limit, offset, title } = params;
            if (title) {
                where.title = (0, typeorm_2.Like)(`%${title}%`);
            }
            const [publications, count] = await this.repo.findAndCount({
                where, take: limit, skip: offset
            });
            return { rows: publications, count: count };
        }
        else {
            const [publications, count] = await this.repo.findAndCount({
                take: 100, skip: 0
            });
            return { rows: publications, count: count };
        }
    }
    async findOne(id) {
        const publication = await this.repo.findOne(id);
        if (!publication) {
            throw new common_1.NotFoundException(`El registro con id: ${id} no fue encontrado.`);
        }
        return publication;
    }
    async create(data) {
        const publication = this.repo.create(data);
        return await this.repo.save(publication);
    }
    async update(id, changes) {
        const publication = await this.findOne(id);
        this.repo.merge(publication, changes);
        return await this.repo.save(publication);
    }
    async delete(id) {
        return await this.repo.delete(id);
    }
};
PublicationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(publication_entity_1.Publication)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PublicationService);
exports.PublicationService = PublicationService;
//# sourceMappingURL=publication.service.js.map