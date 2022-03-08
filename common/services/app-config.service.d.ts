import { ConfigService } from '@nestjs/config';
export declare class AppConfigService {
    private configService;
    constructor(configService: ConfigService);
    get appEnvironment(): string;
    get appName(): string;
    get appPort(): number;
}
