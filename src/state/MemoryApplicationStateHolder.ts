import { ApplicationStateHolder } from './ApplicationStateHolder';
import { ApplicationState } from './ApplicationState';
import { Observer } from '@/observer/Observer';
import { SetObservable } from '@/observer/SetObservable';

export class MemoryApplicationStateHolder implements ApplicationStateHolder {
    private observable: SetObservable<ApplicationState> = new SetObservable();
    private applicationState: ApplicationState;

    constructor(applicationState: ApplicationState) {
        this.applicationState = applicationState;
    }

    attach(observer: Observer<ApplicationState>): void {
        this.observable.attach(observer);
    }

    detach(observer: Observer<ApplicationState>): void {
        this.observable.detach(observer);
    }

    get(): ApplicationState {
        return this.applicationState;
    }

    set(applicationState: ApplicationState): void {
        this.observable.notify(applicationState);
        this.applicationState = applicationState;
    }
}
