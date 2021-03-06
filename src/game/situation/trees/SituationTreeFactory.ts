import { RawSituation } from './RawSituation';
import { Situation } from '../Situation';
import { Mood } from '../Mood';
import { Boy } from '../Boy';

// TODO: rename pictures
export class SituationTreeFactory {
    private static readonly ROOT_ID_SUFFIX = '-0';
    public createSituationTree(boyName: string, rawSituations: RawSituation[], id?: string): Situation {
        const situationHashedById: Record<string, Situation> = {};
        for (const rawSituation of rawSituations) {
            const boy: Boy | undefined = rawSituation.boyMood ? {
                image: this.getImageForBoy(boyName, rawSituation.boyMood),
                mood: rawSituation.boyMood,
                name: boyName
            } : undefined;

            situationHashedById[rawSituation.id] = {
                id: rawSituation.id,
                boy,
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
        const entryNode = situationHashedById[id] || situationHashedById[boyName + SituationTreeFactory.ROOT_ID_SUFFIX];
        return  entryNode
    }

    private getImageForBoy(boyName: string, mood: Mood) {
        return `${boyName}/${boyName}_${mood}.png`;
    }
}
