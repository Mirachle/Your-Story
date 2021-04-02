import { ApplicationState } from "@/state/ApplicationState";
import { UserData } from '../../state/UserData';
import { EMPTY_APPLICATION_STATE } from '../../state/ApplicationState';
import { Serializer } from '../../state/serialization/Serializer';
import { StateMapper, MappedState } from '../../state/serialization/StateMapper';
import { MemoryApplicationStateHolder } from '../../state/MemoryApplicationStateHolder';
import { Game } from '@/state/Game'

type ApplicationStatesByUserName = Record<UserData['username'], ApplicationState>;
type MappedApplicationStatesByUserName = Record<UserData['username'], MappedState>;

export class ApplicationStatePersister {
    private static readonly CURRENT_USERNAME_KEY = 'current_username';
    private static readonly SAVED_APPLICATION_STATES_KEY = 'application_states';

    private storage: Storage;
    private serializer: Serializer;
    private mapper: StateMapper;

    constructor(storage: Storage, serializer: Serializer, mapper: StateMapper) {
        this.storage = storage;
        this.serializer = serializer;
        this.mapper = mapper;
    }

    public persistState(applicationState: ApplicationState): void {
        const username = applicationState.userData?.username;

        if (username) {
            this.persistStateWithUser(username, applicationState);
        } else {
            this.clearCurrentUsername();
        }
    }

    public loadState(username?: string): ApplicationState {
        username = username || this.storage.getItem(ApplicationStatePersister.CURRENT_USERNAME_KEY);
        const savedStates = this.getSavedStates();

        return savedStates[username] || EMPTY_APPLICATION_STATE;
    }

    private persistStateWithUser(username: string, applicationState: Readonly<{ userData: UserData; game: Game; }>) {
        const states = this.getSavedStates();
        states[username] = applicationState;
        this.persistSavedStates(states);
        this.persistCurrentUsername(username);
    }

    private clearCurrentUsername(): void {
        this.storage.removeItem(ApplicationStatePersister.CURRENT_USERNAME_KEY);
    }

    private persistCurrentUsername(username: string): void {
        this.storage.setItem(ApplicationStatePersister.CURRENT_USERNAME_KEY, username);
    }

    private getSavedStates(): ApplicationStatesByUserName {
        const rawStates = this.storage.getItem(ApplicationStatePersister.SAVED_APPLICATION_STATES_KEY);
        if (!rawStates) return {};

        const mappedStates =
            this.serializer.deserialize<MappedApplicationStatesByUserName>(rawStates);

        return Object.entries(mappedStates)
            .map(mappedEntry => ({
                username: mappedEntry[0], state: this.mapper.unmap(mappedEntry[1])
            }))
            .reduce((accumulator, entry) => ({...accumulator, [entry.username]: entry.state}), {} as ApplicationStatesByUserName);
    }

    private persistSavedStates(states: ApplicationStatesByUserName): void {
        const mappedStates = Object.entries(states)
            .map(([username, state]) => ({ username, mappedState: this.mapper.map(state) }))
            .reduce((accumulator, entry) => ({...accumulator, [entry.username]: entry.mappedState}), {} as MappedApplicationStatesByUserName);

        const serializedStates = this.serializer.serialize(mappedStates);
        this.storage.setItem(ApplicationStatePersister.SAVED_APPLICATION_STATES_KEY, serializedStates);
    }
}