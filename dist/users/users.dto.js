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
exports.UpdateUserRoleDto = exports.UpdateProfileDto = exports.UserPublicData = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UserPublicData {
}
exports.UserPublicData = UserPublicData;
__decorate([
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", String)
], UserPublicData.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", String)
], UserPublicData.prototype, "firstname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", String)
], UserPublicData.prototype, "lastname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", String)
], UserPublicData.prototype, "middlename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", String)
], UserPublicData.prototype, "DOB", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", Number)
], UserPublicData.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", String)
], UserPublicData.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", String)
], UserPublicData.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", Number)
], UserPublicData.prototype, "NIN", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", String)
], UserPublicData.prototype, "membership_no", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", String)
], UserPublicData.prototype, "voters_card_no", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", String)
], UserPublicData.prototype, "polling_unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", String)
], UserPublicData.prototype, "reg_area", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", String)
], UserPublicData.prototype, "membership_status", void 0);
class UpdateProfileDto {
}
exports.UpdateProfileDto = UpdateProfileDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "passportPhoto", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "lastname", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "middlename", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "DOB", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "reg_area", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "membership_no", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "polling_unit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "voters_card_no", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({}),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "membership_status", void 0);
class UpdateUserRoleDto {
}
exports.UpdateUserRoleDto = UpdateUserRoleDto;
__decorate([
    (0, swagger_1.ApiProperty)({}),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserRoleDto.prototype, "role", void 0);
//# sourceMappingURL=users.dto.js.map