import { RawSituation } from './RawSituation';
import { Situation } from '../Situation';
import { Mood } from '../Mood';

// TODO: rename pictures
export class SituationTreeFactory {
    private static readonly ROOT_ID_SUFFIX = '-0';
    public createSituationTree(boyName: string, rawSituations: RawSituation[]): Situation {
        const situationHashedById: Record<string, Situation> = {};
        for (const rawSituation of rawSituations) {
            situationHashedById[rawSituation.id] = {
                boy: {
                    image: this.getImageForBoy(boyName, rawSituation.boyMood),
                    mood: rawSituation.boyMood,
                    name: boyName
                },
                scene: {
                    image: rawSituation.scene.image
                },
                dialogue: {
                    name: rawSituation.dialogue.name,
                    text: rawSituation.dialogue.text,
                    answers: rawSituation.dialogue.answers.map(answer => {
                        return {
                         ...answer,
                         followingSituation: null
                        }
                    })
                }
            }
        }
        const allIds = Object.keys(situationHashedById);
        for (const id of allIds) {
            const currentSituation = situationHashedById[id];
            for(const answer of currentSituation.dialogue.answers) {
                answer.followingSituation =  situationHashedById[answer.followingSituationId];
            }
        }
        return situationHashedById[boyName + SituationTreeFactory.ROOT_ID_SUFFIX];
    }

    private getImageForBoy(boyName: string, mood: Mood) {
        return `@/assets/${boyName}/${boyName}_${mood}.png`;
    }
}
