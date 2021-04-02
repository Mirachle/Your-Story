import { PersistingApplicationStateHolderDecorator } from './state/PersistingApplicationStateHolderDecorator';
import { MemoryApplicationStateHolder } from './state/MemoryApplicationStateHolder';
import { ApplicationStatePersister } from './services/ApplicationStateReadWriter/ApplicationStatePersister';
import { ApplicationStateHolder } from './state/ApplicationStateHolder';
import { JSONStateSerializer } from './state/serialization/JSONStateSerializer';
import { StateMapper } from './state/serialization/StateMapper';


const serializer = new JSONStateSerializer();
const stateMapper = new StateMapper();
const applicationStatePersister = new ApplicationStatePersister(localStorage, serializer, stateMapper);
const initialState = applicationStatePersister.loadState();
// TODO: create a singleton pattern, as we'll have only one application state
const applicationStateHolder = new PersistingApplicationStateHolderDecorator(
    new MemoryApplicationStateHolder(initialState),
    applicationStatePersister
);

export const getApplicationStateHolder = (): ApplicationStateHolder => applicationStateHolder;