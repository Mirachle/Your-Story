import { PersistingApplicationStateHolderDecorator } from './state/PersistingApplicationStateHolderDecorator';
import { MemoryApplicationStateHolder } from './state/MemoryApplicationStateHolder';
import { ApplicationStatePersister } from './services/ApplicationStateReadWriter/ApplicationStatePersister';
import { ApplicationStateHolder } from './state/ApplicationStateHolder';

export const getApplicationStateHolder = (applicationStatePersister: ApplicationStatePersister): ApplicationStateHolder => {
    const initialState = applicationStatePersister.loadState();
    // TODO: create a singleton pattern, as we'll have only one application state
    const applicationStateHolder = new PersistingApplicationStateHolderDecorator(
        new MemoryApplicationStateHolder(initialState),
        applicationStatePersister
    );
    return applicationStateHolder;
};