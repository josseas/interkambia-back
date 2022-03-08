"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const aws_sdk_1 = require("aws-sdk");
const app_module_1 = require("./app.module");
const app_config_service_1 = require("./common/services/app-config.service");
async function bootstrap() {
    const logger = new common_1.Logger('bootstrap');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const appConfig = app.get(app_config_service_1.AppConfigService);
    const globalPrefix = 'api';
    app.enableCors();
    app.setGlobalPrefix(globalPrefix);
    const configService = app.get(config_1.ConfigService);
    aws_sdk_1.config.update({
        accessKeyId: configService.get('AWS_ACCESS_KEY_ID'),
        secretAccessKey: configService.get('AWS_SECRET_ACCESS_KEY'),
        region: configService.get('AWS_REGION')
    });
    await app.listen(appConfig.appPort, () => {
        logger.log(`App listening on Port: ${appConfig.appPort} in ${appConfig.appEnvironment}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map