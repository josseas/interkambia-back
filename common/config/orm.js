"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const entitiesPath = process.env.ORM_ENTITIES ? `${process.env.ORM_ENTITIES}` : "dist/**/*.entity.js";
exports.default = (0, config_1.registerAs)('orm', () => ({
    type: process.env.ORM_CONNECTION,
    host: process.env.ORM_HOST,
    username: process.env.ORM_USERNAME,
    password: process.env.ORM_PASSWORD,
    database: process.env.ORM_DATABASE,
    logging: process.env.ORM_LOGGING === "true",
    sincronize: process.env.ORM_SYNCHRONIZE === "true",
    port: Number.parseInt(process.env.ORM_PORT, 10),
    entities: [entitiesPath]
}));
//# sourceMappingURL=orm.js.map