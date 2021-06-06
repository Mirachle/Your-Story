import { Situation } from '@/game/situation/Situation';
export type Game = {
    rootSituation?: Situation;
    currentSituation?: Situation;
    selectedBoyName?: string;
    // score
}
