export interface Authentication {
    login(username: string, password: string) : Promise<void>;
    register(username: string, password: string) : Promise<void>;
    logout() : Promise<void>;
    isLoggedIn(): boolean;

    // TODO: remove when we'll have session-handler
    getUsername(): string;
}
