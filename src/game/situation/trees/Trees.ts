import { agostonTree } from './Agoston';
import { belaTree } from './Bela';
import { RawSituation } from './RawSituation';
import { athemTree } from './Athem';
type BoyName = 'athem' | 'bela' | 'agoston';

export const TREES: Record<BoyName, RawSituation[]> = {
    agoston: agostonTree,
    athem: athemTree,
    bela: belaTree
}
