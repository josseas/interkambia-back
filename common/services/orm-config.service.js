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
exports.OrmConfigService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let OrmConfigService = class OrmConfigService {
    constructor(configService) {
        this.configService = configService;
    }
    async createTypeOrmOptions() {
        const options = {
            type: this.configService.get("orm.type"),
            host: this.configService.get("orm.host"),
            username: this.configService.get("orm.username"),
            password: this.configService.get("orm.password"),
            database: this.configService.get("orm.database"),
            port: this.configService.get("orm.port"),
            logging: this.configService.get("orm.logging"),
            entities: this.configService.get("orm.entities"),
            synchronize: this.configService.get("orm.sincronize")
        };
        return options;
    }
};
OrmConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], OrmConfigService);
exports.OrmConfigService = OrmConfigService;
//# sourceMappingURL=orm-config.service.js.map