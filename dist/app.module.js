"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const nest_morgan_1 = require("nest-morgan");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("./config");
const passport_1 = require("@nestjs/passport");
const mailer_1 = require("@nest-modules/mailer");
const serve_static_1 = require("@nest-middlewares/serve-static");
const path = require("path");
const logger_1 = require("./common/middleware/logger");
const auth_module_1 = require("./auth/auth.module");
const indigene_certificate_module_1 = require("./indigene-certificate/indigene-certificate.module");
const idcard_module_1 = require("./idcard/idcard.module");
const serve_static_2 = require("@nestjs/serve-static");
const path_1 = require("path");
const DEV_TRANSPORTER = {
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    auth: {
        user: 'developercircus@gmail.com',
        pass: 'CR2bIMjv3XZkrTEL',
    },
};
let AppModule = class AppModule {
    configure(consumer) {
        serve_static_1.ServeStaticMiddleware.configure(path.resolve(__dirname, '..', '..', 'public'), config_1.default.static);
        consumer.apply(serve_static_1.ServeStaticMiddleware).forRoutes('public');
        if (!config_1.default.isTest()) {
            consumer.apply(logger_1.LoggerMiddleware).forRoutes('api');
        }
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            nest_morgan_1.MorganModule,
            mongoose_1.MongooseModule.forRoot(config_1.dbUrl),
            serve_static_2.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'uploads'),
                serveRoot: '/uploads',
            }),
            jwt_1.JwtModule.register({
                secret: 'secret',
                signOptions: { expiresIn: config_1.default.auth.jwtTokenExpireInSec },
            }),
            passport_1.PassportModule,
            mailer_1.MailerModule.forRootAsync({
                useFactory: () => ({
                    transport: DEV_TRANSPORTER,
                    defaults: {
                        from: config_1.default.mail.from,
                    },
                    template: {
                        dir: __dirname + '/../templates',
                        adapter: new mailer_1.HandlebarsAdapter(),
                        options: {
                            strict: true,
                        },
                    },
                    options: {
                        partials: {
                            dir: path.join(__dirname, 'templates/partials'),
                            options: {
                                strict: true,
                            },
                        },
                    },
                }),
            }),
            auth_module_1.AuthModule,
            indigene_certificate_module_1.IndigeneCertificateModule,
            idcard_module_1.IdcardModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map