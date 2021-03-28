import { UserData } from './UserData';
import { Game } from './Game';

export type ApplicationState = Readonly<{
    userData: UserData | null;
    game: Game | null;
}>;

export const EMPTY_APPLICATION_STATE: ApplicationState = {
    userData: null,
    game: null
} as const;
//memento pattern
