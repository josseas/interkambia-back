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
var MenuModuleController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuModuleController = void 0;
const common_1 = require("@nestjs/common");
const menu_module_dto_1 = require("../dtos/menu-module.dto");
const menu_module_service_1 = require("../services/menu-module.service");
let MenuModuleController = MenuModuleController_1 = class MenuModuleController {
    constructor(menuModuleService) {
        this.menuModuleService = menuModuleService;
        this.logger = new common_1.Logger(MenuModuleController_1.name);
    }
    async getModules() {
        return await this.menuModuleService.findAll();
    }
    async create(data) {
        return await this.menuModuleService.create(data);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MenuModuleController.prototype, "getModules", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [menu_module_dto_1.CreateMenuModuleDto]),
    __metadata("design:returntype", Promise)
], MenuModuleController.prototype, "create", null);
MenuModuleController = MenuModuleController_1 = __decorate([
    (0, common_1.Controller)('menu-module'),
    __metadata("design:paramtypes", [menu_module_service_1.MenuModuleService])
], MenuModuleController);
exports.MenuModuleController = MenuModuleController;
//# sourceMappingURL=menu-module.controller.js.map