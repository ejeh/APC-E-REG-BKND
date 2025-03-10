export declare class UserPublicData {
    userId: string;
    firstname: string;
    lastname: string;
    middlename: string;
    DOB: string;
    phone: number;
    gender: string;
    role: string;
    NIN: number;
    membership_no: string;
    voters_card_no: string;
    polling_unit: string;
    reg_area: string;
    membership_status: string;
    ward: string;
    lga: string;
}
export declare class UpdateProfileDto {
    readonly passportPhoto?: string;
    readonly lastname?: string;
    readonly middlename?: string;
    readonly DOB?: string;
    readonly gender?: string;
    readonly reg_area?: string;
    readonly membership_no?: string;
    readonly polling_unit?: string;
    readonly voters_card_no?: string;
    readonly membership_status?: string;
    readonly lga?: string;
    readonly ward?: string;
}
export declare class UpdateUserRoleDto {
    role: string;
}
