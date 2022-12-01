export type registerUserData = {
    username : string;
    email: string;
    password : string
}

export type registerUserPayload = {
    data: registerUserData;
    callback: () => void;
}