interface AuthUserDetails {
    username: string,
    name: string
}

export interface Auth {
    token: string,
    user: AuthUserDetails
}
