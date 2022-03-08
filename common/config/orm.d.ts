declare const _default: (() => {
    type: string;
    host: string;
    username: string;
    password: string;
    database: string;
    logging: boolean;
    sincronize: boolean;
    port: number;
    entities: string[];
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    host: string;
    username: string;
    password: string;
    database: string;
    logging: boolean;
    sincronize: boolean;
    port: number;
    entities: string[];
}>;
export default _default;
