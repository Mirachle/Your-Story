import { Authentication } from '../Authentication';
import { ApplicationStateHolder } from '../../state/ApplicationStateHolder';
import { ApplicationState } from '@/state/ApplicationState';
import { EMPTY_APPLICATION_STATE } from '../../state/ApplicationState';
import { ApplicationStatePersister } from '../ApplicationStateReadWriter/ApplicationStatePersister'

export class AccountService implements Authentication {
    private authentication: Authentication;
    private applicationStateHolder: ApplicationStateHolder;
    private applicationStatePersister: ApplicationStatePersister;

    constructor(authentication: Authentication, applicationStateHolder: ApplicationStateHolder, applicationStatePersister: ApplicationStatePersister) {
        this.authentication = authentication;
        this.applicationStateHolder = applicationStateHolder;
        this.applicationStatePersister = applicationStatePersister
    }

    public async login(username: string, password: string): Promise<void> {
        await this.authentication.login(username, password);

        const stateBeforeLogin = this.applicationStateHolder.get();
        const loadedState = this.applicationStatePersister.loadState(username);
        const newState: ApplicationState = {
            ...stateBeforeLogin,
            ...loadedState,
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