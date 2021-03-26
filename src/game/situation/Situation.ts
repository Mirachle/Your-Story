import { Boy } from './Boy';
import { Scene } from './Scene';
import { Dialogue } from './Dialogue';

export type Situation = {
    boy?: Boy;
    scene: Scene;
    dialogue: Dialogue;
}
