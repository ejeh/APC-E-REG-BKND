"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedAdmin = seedAdmin;
const users_role_enum_1 = require("./users/users.role.enum");
const auth_1 = require("./auth/auth");
async function seedAdmin(usersService) {
    const existingAdmin = await usersService.findAdminByEmail('ejehgodfrey@gmail.com');
    const password = 'magickiss17A#';
    const activationToken = null;
    const userId = '';
    const activationUrl = `http://localhost:5000/api/auth/activate/${userId}/${activationToken}\n`;
    if (!existingAdmin) {
        const hashedPassword = await (0, auth_1.hashPassword)(password);
        await usersService.create('Admin', 'User', 'ejehgodfrey@gmail.com', hashedPassword, 1234567890, 123456789, users_role_enum_1.UserRole.SUPER_ADMIN, activationUrl);
        console.log('Admin account created');
    }
}
//# sourceMappingURL=seed-admin.js.map