"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_config_service_1 = require("./services/app-config.service");
const orm_config_service_1 = require("./services/orm-config.service");
const config_validation_1 = require("./validations/config.validation");
const app_1 = require("./config/app");
const orm_1 = require("./config/orm");
const aws_upload_service_1 = require("./services/aws-upload.service");
let CommonModule = class CommonModule {
};
CommonModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: ['.env'],
                isGlobal: true,
                load: [app_1.default, orm_1.default],
                validationSchema: config_validation_1.validationSchema
            })
        ],
        providers: [
            config_1.ConfigService,
            app_config_service_1.AppConfigService,
            orm_config_service_1.OrmConfigService,
            aws_upload_service_1.AwsUploadService
        ],
        exports: [
            config_1.ConfigService,
            app_config_service_1.AppConfigService,
            orm_config_service_1.OrmConfigService,
            aws_upload_service_1.AwsUploadService
        ]
    })
], CommonModule);
exports.CommonModule = CommonModule;
//# sourceMappingURL=common.module.js.map