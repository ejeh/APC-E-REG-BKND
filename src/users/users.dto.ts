import { IsString, IsOptional, MaxLength, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserPublicData {
  @ApiProperty({})
  userId: string;

  @ApiProperty({})
  firstname: string;

  @ApiProperty({})
  lastname: string;

  @ApiProperty({})
  middlename: string;

  @ApiProperty({})
  DOB: string;

  @ApiProperty({})
  phone: number;

  @ApiProperty({})
  gender: string;

  @ApiProperty({})
  role: string;

  @ApiProperty({})
  NIN: number;

  @ApiProperty({})
  membership_no: string;

  @ApiProperty({})
  voters_card_no: string;

  @ApiProperty({})
  polling_unit: string;

  @ApiProperty({})
  reg_area: string;

  @ApiProperty({})
  membership_status: string;

  @ApiProperty({})
  ward: string;

  @ApiProperty({})
  lga: string;
}

export class UpdateProfileDto {
  @IsString()
  @IsOptional()
  @ApiProperty({})
  readonly passportPhoto?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({})
  readonly lastname?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({})
  readonly middlename?: string;

  // @IsString()
  @IsOptional()
  @ApiProperty({})
  readonly DOB?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({})
  readonly gender?: string;

  @IsOptional()
  @ApiProperty({})
  readonly reg_area?: string;

  @IsOptional()
  @ApiProperty({})
  readonly membership_no?: string;

  @IsOptional()
  @ApiProperty({})
  readonly polling_unit?: string;

  @IsOptional()
  @ApiProperty({})
  readonly voters_card_no?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({})
  readonly membership_status?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({})
  readonly lga?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({})
  readonly ward?: string;
}

export class UpdateUserRoleDto {
  @ApiProperty({})
  @IsString()
  @IsOptional()
  role: string;
}
