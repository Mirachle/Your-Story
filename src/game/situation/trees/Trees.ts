import { aidenTree } from './Aiden';
import { aegonTree } from './Aegon';
import { RawSituation } from './RawSituation';
import { athemTree } from './Athem';
type BoyName = 'athem' | 'aegon' | 'aiden';

export const TREES: Record<BoyName, RawSituation[]> = {
    aiden: aidenTree,
    athem: athemTree,
    aegon: aegonTree
}
