import { Authentication } from '../Authentication';
import { ApplicationStateHolder } from '../../state/ApplicationStateHolder';
import { ApplicationState } from '@/state/ApplicationState';
import { EMPTY_APPLICATION_STATE } from '../../state/ApplicationState';

export class AccountService implements Authentication {
    private authentication: Authentication;
    private applicationStateHolder: ApplicationStateHolder;

    constructor(authentication: Authentication, applicationStateHolder: ApplicationStateHolder) {
        this.authentication = authentication;
        this.applicationStateHolder = applicationStateHolder;
    }

    public async login(username: string, password: string): Promise<void> {
        await this.authentication.login(username, password);

        const oldState = this.applicationStateHolder.get();
        const newState: ApplicationState = {
            ...oldState,
            userData: {username}
        };

        this.applicationStateHolder.set(newState);
    }

    public isLoggedIn(): boolean {
        return Boolean(this.applicationStateHolder.get().userData);
    }

    public async register(username: string, password: string): Promise<void> {
        await this.authentication.register(username, password);
    }

    public async logout(): Promise<void> {
        await this.authentication.logout();
        this.applicationStateHolder.set(EMPTY_APPLICATION_STATE);
    }
}