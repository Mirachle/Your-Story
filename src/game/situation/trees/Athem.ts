import { Mood } from '../Mood';
import { RawSituation } from './RawSituation';

export const athemTree: RawSituation[] =
[
    {
        "id": "athem-0",
        'boyMood': Mood.NORMAL,
        "scene": { "image": "assets/..." },
        "dialogue": {
            "name": "Athem",
            "text": "mit mond",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Hello bogyóka",
                    "followingSituationId": "athem-1"
                },
                {
                    "reputationValue": 1,
                    "text": "csao maria",
                    "followingSituationId": "athem-3"
                }
            ]
        }
    },
    {
        "id": "athem-1",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "assets/..." },
        "dialogue": {
            "name": "Athem",
            "text": "mit mond",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Hello bogyóka",
                    "followingSituationId": null
                }
            ]
        }
    }
]