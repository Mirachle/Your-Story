export interface Authentication {
    login(username: string, password: string) : Promise<void>;
    register(username: string, password: string) : Promise<void>;
    logout() : Promise<void>;
}
