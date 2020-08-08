export interface registrationMain{
    loading?: boolean;
    intermdeate_data?: IntermideateData;
    error: boolean;
}
export interface IntermideateData{
    email?: String;
    first_name?: string;
    last_name?: string;
    password?: string;
}

export interface userSignUp{
    email?: String;
    first_name?: string;
    last_name?: string;
    password?: string;
    present_address?: string;
    present_city?: string;
    present_country?: string;
    present_pin?: number;
    parmanent_address?: string;
    parmanent_city?: string;
    parmanent_country?: string;
    parmanent_pin?: number;
}