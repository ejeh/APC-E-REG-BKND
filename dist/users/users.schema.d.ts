import * as mongoose from 'mongoose';
import { UserPublicData } from './users.dto';
import { Document } from 'mongoose';
import { UserRole } from './users.role.enum';
export type UserMethods = {
    getPublicData: () => UserPublicData;
};
export type UserDocument = User & Document & UserMethods;
export declare class User {
    email: string;
    firstname: string;
    middlename?: string;
    phone: string;
    lastname: string;
    isActive: boolean;
    DOB?: Date;
    gender?: string;
    passportPhoto?: string;
    NIN: string;
    role?: UserRole;
    password: string;
    isVerified: boolean;
    passwordResetToken: string;
    voters_card_no?: string;
    polling_unit?: string;
    reg_area?: string;
    membership_no?: string;
    membership_status?: string;
    lga?: string;
    ward?: string;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, mongoose.Document<unknown, any, User> & User & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, mongoose.FlatRecord<User>> & mongoose.FlatRecord<User> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
