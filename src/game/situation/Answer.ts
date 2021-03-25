import { Situation } from './Situation';

export type Answer = {
    reputationValue: -1 | 0 | 1;
    text: string;
    followingSituation: Situation;
    followingSituationId: string;
}
