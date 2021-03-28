import { Mood } from '../Mood';
import { RawSituation } from './RawSituation';

export const athemTree: RawSituation[] =
[
    {
        "id": "athem-0",
        'boyMood': null,
        "scene": { "image": "scenes/pub_athem.png" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Ez életem első vakrandija és nagyon izgulok.",
                    "followingSituationId": "athem-1"
                }
            ]
        }
    },
    {
        "id": "athem-1",
        'boyMood': null,
        "scene": { "image": "scenes/pub_athem.png" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Valójában az alkalmazásban ahol egymásra bukkantunk láttam egy képet róla és egy rövid bemutatkozást, így szigorúan véve nem igazi vakrandi.",
                    "followingSituationId": "athem-2"
                }
            ]
        }
    },
    {
        "id": "athem-2",
        'boyMood': null,
        "scene": { "image": "scenes/pub_athem.png" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Mivel Athem is és én is szeretjük a videójátékokat, ezért egy gamerek számára kialakított szórakozóhelyre beszéltük meg a találkozót.",
                    "followingSituationId": "athem-3"
                }
            ]
        }
    },
    {
        "id": "athem-3",
        'boyMood': null,
        "scene": { "image": "scenes/pub_athem.png" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "A helyiségbe belépve egyből megpillantottam őt a bárpultnál.",
                    "followingSituationId": "athem-4"
                }
            ]
        }
    },
    {
        "id": "athem-4",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub_athem.png" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Szia, @{username} vagyok!",    //TODO username
                    "followingSituationId": "athem-5"
                }
            ]
        }
    },
    {
        "id": "athem-5",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub_athem.png" },
        "dialogue": {
            "name": "Athem",
            "text": "Szia, én pedig Athem. Mit iszol?",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Egy vodka narancsot.",
                    "followingSituationId": "athem-6"
                },
                {
                    "reputationValue": 1,
                    "text": "Egy Bloody Mary-t.",
                    "followingSituationId": "athem-7"
                },
                {
                    "reputationValue": -1,
                    "text": "Egy kólát.",
                    "followingSituationId": "athem-8"
                }
            ]
        }
    },
    {
        "id": "athem-6",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub_athem.png" },
        "dialogue": {
            "name": "Athem",
            "text": "Oké.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Athem kikérte az italainkat, majd leültünk a pult mellé és kicsit feszengve nézelődtünk más-más irányba.",
                    "followingSituationId": "athem-9"
                }
            ]
        }
    },
    {
        "id": "athem-7",
        "boyMood": Mood.HAPPY,
        "scene": { "image": "scenes/pub_athem.png" },
        "dialogue": {
            "name": "Athem",
            "text": "Szuper!",
            "answers": [
                {
                    "reputationValue": +1,
                    "text": "Athem kikérte az italainkat, majd leültünk a pult mellé és kicsit feszengve nézelődtünk más-más irányba.",
                    "followingSituationId": "athem-9"
                }
            ]
        }
    },
    {
        "id": "athem-8",
        "boyMood": Mood.SAD,
        "scene": { "image": "scenes/pub_athem.png" },
        "dialogue": {
            "name": "Athem",
            "text": "Hát jó.",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Athem kikérte az italainkat, majd leültünk a pult mellé és kicsit feszengve nézelődtünk más-más irányba.",
                    "followingSituationId": "athem-9"
                }
            ]
        }
    },
    {
        "id": "athem-9",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "scenes/pub_athem.png" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": +1,
                    "text": "Megtöröm a csendet.",
                    "followingSituationId": "athem-10"
                },
                {
                    "reputationValue": 0,
                    "text": "Várok, hogy ő kezdeményezzen.",
                    "followingSituationId": "athem-12"
                }
            ]
        }
    },
    {
        "id": "athem-10",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub_athem.png" },
        "dialogue": {
            "name": "Athem",
            "text": "És amúgy te..?",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Egyébként...",
                    "followingSituationId": "athem-11"
                }
            ]
        }
    },
    {
        "id": "athem-11",
        "boyMood": Mood.HAPPY,
        "scene": { "image": "scenes/pub_athem.png" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Pont egyszerre próbáltunk beszélgetést kezdeményezni, így halkan összenevettünk.",
                    "followingSituationId": "athem-12"
                }
            ]
        }
    },
    {
        "id": "athem-12",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub_athem.png" },
        "dialogue": {
            "name": "Athem",
            "text": "És amúgy te itt laksz a városban?",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Igen, pár utcányira innen. És te?",
                    "followingSituationId": "athem-13"
                }
            ]
        }
    },
    {
        "id": "athem-13",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub_athem.png" },
        "dialogue": {
            "name": "Athem",
            "text": "Én csak kollégista vagyok itt, egy pár száz kilométerre lévő kisvárosban nőttem fel.",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Több száz kilométerre? Minek jöttél ilyen messze?",
                    "followingSituationId": "athem-14"
                },
                {
                    "reputationValue": 0,
                    "text": "Kollégista? Akkor még tanulsz?",
                    "followingSituationId": "athem-18"
                },
                {
                    "reputationValue": -1,
                    "text": "Kollégista? Melyik egyetemre jársz?",
                    "followingSituationId": "athem-19"
                }
            ]
        }
    },
    {
        "id": "athem-14",
        "boyMood": Mood.ANGRY,
        "scene": { "image": "scenes/pub_athem.png" },
        "dialogue": {
            "name": "Athem",
            "text": "Ne haragudj, hogy csak ilyen messze a szülővárosomtól indították azt a képzést amire jelentkezni szerettem volna.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Jól van már, nem kell egyből felkapni a vizet, nem bunkóságból kérdeztem.",
                    "followingSituationId": "athem-15"
                },
                {
                    "reputationValue": -1,
                    "text": "Na mert mi olyan különleges, hogy sehol máshol nem tanítják?",
                    "followingSituationId": "athem-16"
                }
            ]
        }
    },
    {
        "id": "athem-15",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub_athem.png" },
        "dialogue": {
            "name": "Athem",
            "text": "Oké, rendben. Csak sokak nem értik, hogy nem minden városban van annyi lehetőség mint itt. Kevés helynek van ilyen jó hírneve webfejlesztés terén",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Webfejlesztés? Akkor fel tudod törni az emberek facebook fiókját meg ilyenek?",
                    "followingSituationId": "athem-20"
                },
                {
                    "reputationValue": 0,
                    "text": "Webfejlesztés? Így ránézésre ez valóban illik hozzád.",
                    "followingSituationId": "athem-21"
                }
            ]
        }
    },
    {
        "id": "athem-16",
        "boyMood": Mood.ANGRY,
        "scene": { "image": "scenes/pub_athem.png" },
        "dialogue": {
            "name": "Athem",
            "text": "Figyelj, szerintem hagyjuk az egészet. Itt van a pia ára, csók.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Ezzel a lendülettel felállt az asztaltól és faképnél hagyott.",
                    "followingSituationId": "athem-17"
                }
            ]
        }
    },
    {
        "id": "athem-17",
        "boyMood": null,
        "scene": { "image": "scenes/pub_athem.png" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Sajnos nem sikerült a randid! Próbáld meg újra, vagy próbálkozz egy másik sráccal.",
                    "followingSituationId": null
                }
            ]
        }
    },
    {
        "id": "athem-18",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub_athem.png" },
        "dialogue": {
            "name": "Athem",
            "text": "Igen, egy OKJ-s webfejlesztői képzésen veszek részt.",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Webfejlesztés? Akkor fel tudod törni az emberek facebook fiókját meg ilyenek?",
                    "followingSituationId": "athem-20"
                },
                {
                    "reputationValue": 0,
                    "text": "Webfejlesztés? Így ránézésre ez valóban illik hozzád.",
                    "followingSituationId": "athem-21"
                }
            ]
        }
    },
    {
        "id": "athem-19",
        "boyMood": Mood.ANGRY,
        "scene": { "image": "scenes/pub_athem.png" },
        "dialogue": {
            "name": "Athem",
            "text": "Attól még, hogy kollégista vagyok nem kell egyből egyetemre járnom. OKJ-s webfejlesztői képzésen veszek részt.",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Webfejlesztés? Akkor fel tudod törni az emberek facebook fiókját meg ilyenek?",
                    "followingSituationId": "athem-20"
                },
                {
                    "reputationValue": 0,
                    "text": "Webfejlesztés? Így ránézésre ez valóban illik hozzád.",
                    "followingSituationId": "athem-21"
                }
            ]
        }
    },
    {
        "id": "athem-20",
        "boyMood": Mood.SAD,
        "scene": { "image": "scenes/pub_athem.png" },
        "dialogue": {
            "name": "Athem",
            "text": "Hát nem pont ez lenne a lényege...",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Beszélgettünk még pár dologról, majd elköszöntünk egymástól.",
                    "followingSituationId": "athem-17"
                }
            ]
        }
    },
    {
        "id": "athem-21",
        "boyMood": Mood.HAPPY,
        "scene": { "image": "scenes/pub_athem.png" },
        "dialogue": {
            "name": "Athem",
            "text": "Igen, már mások is mondták.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Beszélgettünk még pár dologról, majd felajánlotta, hogy hazakísér.",
                    "followingSituationId": "athem-22"
                }
            ]
        }
    },
    {
        "id": "athem-22",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/street.jpg" },
        "dialogue": {
            "name": "Athem",
            "text": "És egyébként, hogy hogy online ismerkedsz? Nem tűnik úgy, mint ha rászorulnál erre. Remélem nem érted félre..",
            "answers": [
                {
                    "reputationValue": 1,
                    "text": "Sajnos a srácok a valóságban nem annyira kezdeményezőek, mint az interneten.",
                    "followingSituationId": "athem-24"
                },
                {
                    "reputationValue": 0,
                    "text": "Nem igazán van szerencsém a férfiak terén.. Sosem tudom mit kéne mondanom.",
                    "followingSituationId": "athem-24"
                },
                {
                    "reputationValue": -1,
                    "text": "Így egyszerűbb több sráccal egyszerre ismerkedni. Remélem nem érted félre ;).",
                    "followingSituationId": "athem-23"
                }
            ]
        }
    },
    {
        "id": "athem-23",
        "boyMood": Mood.SAD,
        "scene": { "image": "scenes/street.jpg" },
        "dialogue": {
            "name": "Athem",
            "text": "Persze, megértem. Viszont én sajnos nem egyéjszakást keresek. Sok sikert neked, szia!",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Sajnos nem sikerült a randid! Próbáld meg újra, vagy próbálkozz egy másik sráccal.",
                    "followingSituationId": null
                }
            ]
        }
    },
    {
        "id": "athem-24",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/street.jpg" },
        "dialogue": {
            "name": "Athem",
            "text": "Remélem velem nem érzed magad zavarban. Jobban szereted, ha a srác kezdeményez?",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Igen, én nem igazán vagyok jó benne. Nem azért, mert nem érdekelne a srác, csak túl zavarbaejtőnek érzem kimondani amit szeretnék.",
                    "followingSituationId": "athem-25"
                },
                {
                    "reputationValue": 1,
                    "text": "Nem. Ha akarok valamit, akkor megszerzem.",
                    "followingSituationId": "athem-25"
                }
            ]
        }
    },
    {
        "id": "athem-25",
        "boyMood": null,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Közben a házunk elé értünk, így eljött a búcsú ideje. Athem olyan közel állt hozzám, hogy szinte éreztem a lehelletét a bőrömön.",
                    "followingSituationId": "athem-26"
                }
            ]
        }
    },
    {
        "id": "athem-26",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "Athem",
            "text": "Nagyon szépek a szemeid.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Köszönöm...",
                    "followingSituationId": "athem-27"
                },
                {
                    "reputationValue": 1,
                    "text": "(halkan még közelebb léptem felé)",
                    "followingSituationId": "athem-29"
                }
            ]
        }
    },
    {
        "id": "athem-27",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Athem óvatosan kisimít egy tincset az arcomból.",
                    "followingSituationId": "athem-28"
                }
            ]
        }
    },
    {
        "id": "athem-28",
        "boyMood": Mood.SAD,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "Athem",
            "text": "Mennem kell. Egyszer még találkozunk.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Sajnos nem sikerült a randid! Próbáld meg újra, vagy próbálkozz egy másik sráccal.",
                    "followingSituationId": null
                }
            ]
        }
    },
    {
        "id": "athem-29",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Athem halkan kisimít egy tincset az arcomból, és egy puha csókot nyom az ajkaimra.",
                    "followingSituationId": "athem-30"
                }
            ]
        }
    },
    {
        "id": "athem-30",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "Athem",
            "text": "Jó éjszakát, remélem minél előbb újra találkozunk.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Gratulálok! Teljesen elcsavartad Athem fejét!",
                    "followingSituationId": null
                }
            ]
        }
    }
]