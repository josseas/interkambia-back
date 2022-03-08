"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('app', () => ({
    environment: process.env.NODE_ENV,
    name: process.env.APP_NAME,
    port: parseInt(process.env.PORT, 10)
}));
//# sourceMappingURL=app.js.map