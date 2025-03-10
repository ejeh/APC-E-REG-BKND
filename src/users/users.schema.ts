import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { UserPublicData } from './users.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { UserRole } from './users.role.enum';

export type UserMethods = {
  getPublicData: () => UserPublicData;
};

export type UserDocument = User & Document & UserMethods;

@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class User {
  @ApiProperty()
  @Prop({ type: mongoose.SchemaTypes.String, required: true, unique: true })
  email: string;

  @ApiProperty()
  @Prop({ type: mongoose.SchemaTypes.String, required: true })
  firstname: string;

  @ApiProperty()
  @Prop({ type: mongoose.SchemaTypes.String, required: false, default: null })
  middlename?: string;

  @ApiProperty()
  @Prop({
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  })
  phone: string;

  @ApiProperty()
  @Prop({ type: mongoose.SchemaTypes.String, required: true })
  lastname: string;

  @ApiProperty()
  @Prop({ default: false })
  isActive: boolean;

  @ApiProperty()
  @Prop({ type: mongoose.SchemaTypes.Date, required: false, default: null })
  DOB?: Date;

  @ApiProperty()
  @Prop({ type: mongoose.SchemaTypes.String, required: false, default: null })
  gender?: string;

  @ApiProperty()
  @Prop({ required: false })
  passportPhoto?: string; // File path or URL

  @ApiProperty()
  @Prop({ type: mongoose.SchemaTypes.String, required: true, unique: true })
  NIN: string;

  @ApiProperty()
  @Prop({
    type: mongoose.SchemaTypes.String,
    default: UserRole.USER,
  })
  role?: UserRole;

  @ApiProperty()
  @Prop({ type: mongoose.SchemaTypes.String, required: true })
  password: string;

  @ApiProperty()
  @Prop({ type: mongoose.SchemaTypes.Boolean, default: false })
  isVerified: boolean;

  @ApiProperty()
  @Prop({ type: mongoose.SchemaTypes.String })
  passwordResetToken: string;

  // @ApiProperty()
  // @Prop({ type: mongoose.SchemaTypes.String })
  // activationToken: string;

  // @ApiProperty()
  // @Prop({ type: mongoose.SchemaTypes.String })
  // activationExpires: Date;

  @ApiProperty()
  @Prop({ type: mongoose.SchemaTypes.String, required: false, default: null })
  voters_card_no?: string;

  @ApiProperty()
  @Prop({ type: mongoose.SchemaTypes.String, required: false, default: null })
  polling_unit?: string;

  @Prop({ required: false, default: null })
  reg_area?: string; // URL for the QR code

  @Prop({ required: false, default: null })
  membership_no?: string; // URL for the QR code

  @Prop({ required: false, default: null })
  membership_status?: string; // URL for the QR code

  @Prop({ required: false, default: null })
  lga?: string; // URL for the QR code

  @Prop({ required: false, default: null })
  ward?: string; // URL for the QR code
}

export const UserSchema = SchemaFactory.createForClass(User);

/**
 * Methods.
 */
UserSchema.methods.getPublicData = function () {
  const {
    id,
    email,
    firstname,
    lastname,
    role,
    LGA,
    address,
    phone,
    DOB,
    gender,
    nationality,
    stateOfOrigin,
    middlename,
  } = this;
  return {
    id,
    email,
    firstname,
    lastname,
    role,
    middlename,
    stateOfOrigin,
    gender,
    DOB,
    nationality,
    phone,
    LGA,
    address,
  };
};
