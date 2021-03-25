import { Mood } from '../Mood';
export type RawSituation = {
    id: string;
    boyMood: Mood;
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
