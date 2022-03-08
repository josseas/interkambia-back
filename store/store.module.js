"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const image_controller_1 = require("./controllers/image.controller");
const publication_controller_1 = require("./controllers/publication.controller");
const image_service_1 = require("./services/image.service");
const publication_service_1 = require("./services/publication.service");
const publication_entity_1 = require("./entities/publication.entity");
const gallery_entity_1 = require("./entities/gallery.entity");
const image_entity_1 = require("./entities/image.entity");
const common_module_1 = require("../common/common.module");
let StoreModule = class StoreModule {
};
StoreModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                publication_entity_1.Publication,
                gallery_entity_1.Gallery,
                image_entity_1.Image
            ]),
            common_module_1.CommonModule
        ],
        controllers: [
            publication_controller_1.PublicationController,
            image_controller_1.ImageController
        ],
        providers: [
            publication_service_1.PublicationService,
            image_service_1.ImageService
        ],
    })
], StoreModule);
exports.StoreModule = StoreModule;
//# sourceMappingURL=store.module.js.map