export interface LoginMain {
    loading?: boolean;
    error?: boolean;
    isLogin?: boolean;
    userDetail?: UserDetails;
    AllUserData?:  UserDetails[];
}


export interface UserLogin {
    email?: string;
    password?: string;
}
export interface UserDetails{
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
    id?: number;
}