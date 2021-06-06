import { Mood } from '../Mood';
export type RawSituation = {
    id: string;
    // boy?: { // TODO: make this structure, instead of the current one
    //     mood: Mood
    // };
    boyMood: Mood | null;
    scene: { image: string };
    dialogue: {
        name: string;
        text: string;
        answers: Array<{
            reputationValue: -1 | 0 | 1;
            text: string;
            followingSituationId: string;
        }>;
    };
}
