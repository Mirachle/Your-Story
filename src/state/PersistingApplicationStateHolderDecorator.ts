import { ApplicationState } from './ApplicationState';
import { ApplicationStateHolder } from './ApplicationStateHolder';
import { ApplicationStatePersister } from '../services/ApplicationStateReadWriter/ApplicationStatePersister';
import { Observer } from '@/observer/Observer';

export class PersistingApplicationStateHolderDecorator implements ApplicationStateHolder {
    private applicationStateHolder: ApplicationStateHolder;
    private applicationStatePersister: ApplicationStatePersister;

    constructor(applicationStateHolder: ApplicationStateHolder, applicationStatePersister: ApplicationStatePersister) {
        this.applicationStateHolder = applicationStateHolder;
        this.applicationStatePersister = applicationStatePersister;
    }

    attach(observer: Observer<ApplicationState>): void {
        this.applicationStateHolder.attach(observer);
    }

    detach(observer: Observer<ApplicationState>): void {
        this.applicationStateHolder.detach(observer);
    }

    get(): ApplicationState {
        return this.applicationStateHolder.get();
    }
    
    set(applicationState: ApplicationState): void {
        this.applicationStateHolder.set(applicationState);
        this.applicationStatePersister.persistState(applicationState);
    }
}