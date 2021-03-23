// TODO: teszteljük majd úgy, hogy TestAuthentication class extend-el ebből
export interface Authentication {
    login(username: string, password: string) : Promise<void>;
    register(username: string, password: string) : Promise<void>;
    logout() : Promise<void>;
    isLoggedIn(): boolean;
}
