import { ApplicationState } from '../ApplicationState';
import { UserData } from '../UserData';
import { TREES } from '../../game/situation/trees/Trees';
import { SituationTreeFactory } from '../../game/situation/trees/SituationTreeFactory';
import { Game } from '../Game';

interface MappedGame {
    boyName: string;
    situationId: string;
}

export interface MappedState {
    game: MappedGame,
    userData: UserData
};

export class StateMapper {
    public map(state: ApplicationState): MappedState {
        const mappedGame: MappedGame = state.game?.currentSituation
            ? {
                boyName: state.game.selectedBoyName,
                situationId: state.game.currentSituation.id
            }
            : null;

        const mappedState = {
            ...state,
            game: mappedGame
        };

        return mappedState;
    };

    public unmap(state: any): ApplicationState {
        const mappedGame: MappedGame = state.game;

        let resultGame;

        if (mappedGame) {
            const boyName = mappedGame.boyName;
            const rawTree = TREES[boyName];
            // TODO: Create trees on init?
            const tree = new SituationTreeFactory()
                .createSituationTree(boyName, rawTree, mappedGame.situationId);

            resultGame = {
                currentSituation: tree,
                rootSituation: null,
                selectedBoyName: mappedGame.boyName
            }
        } else {
            resultGame = null;
        }

        const result: ApplicationState = {
            userData: state.userData,
            game: resultGame
        };

        return result;
    }
}