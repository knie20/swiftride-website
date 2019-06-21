export interface IMember {
    email_address: string;
    status: string;
    merge_fields: {
        FNAME: string;
        LNAME: string;
        ADDRESS?: string;
        PHONE?: string;
        BIRTHDAY?: Date;
    };
}

