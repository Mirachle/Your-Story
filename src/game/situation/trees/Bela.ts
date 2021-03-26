import { Mood } from '../Mood';
import { RawSituation } from './RawSituation';

export const belaTree: RawSituation[] =
[
    {
        "id": "bela-0",
        'boyMood': null,
        "scene": { "image": "scenes/pub.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Ez életem első vakrandija és nagyon izgulok.",
                    "followingSituationId": "bela-1"
                }
            ]
        }
    },
    {
        "id": "bela-1",
        'boyMood': null,
        "scene": { "image": "scenes/pub.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Valójában az alkalmazásban ahol egymásra bukkantunk láttam egy képet róla és egy rövid bemutatkozást, így szigorúan véve nem igazi vakrandi.",
                    "followingSituationId": "bela-2"
                }
            ]
        }
    },
    {
        "id": "bela-2",
        'boyMood': null,
        "scene": { "image": "scenes/pub.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Mivel Bela is és én is szeretjük a videójátékokat, ezért egy gamerek számára kialakított szórakozóhelyre beszéltük meg a találkozót.",
                    "followingSituationId": "bela-3"
                }
            ]
        }
    },
    {
        "id": "bela-3",
        'boyMood': null,
        "scene": { "image": "scenes/pub.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "A helyiségbe belépve egyből megpillantottam őt a bárpultnál.",
                    "followingSituationId": "bela-4"
                }
            ]
        }
    },
    {
        "id": "bela-4",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Szia, @{username} vagyok!",    //TODO username
                    "followingSituationId": "bela-5"
                }
            ]
        }
    },
    {
        "id": "bela-5",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub.jpg" },
        "dialogue": {
            "name": "Bela",
            "text": "Szia, én pedig Bela. Mit iszol?",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Egy vodka narancsot.",
                    "followingSituationId": "bela-6"
                },
                {
                    "reputationValue": 1,
                    "text": "Egy Bloody Mary-t.",
                    "followingSituationId": "bela-7"
                },
                {
                    "reputationValue": -1,
                    "text": "Egy kólát.",
                    "followingSituationId": "bela-8"
                }
            ]
        }
    },
    {
        "id": "bela-6",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub.jpg" },
        "dialogue": {
            "name": "Bela",
            "text": "Oké.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Bela kikérte az italainkat, majd leültünk a pult mellé és kicsit feszengve nézelődtünk más-más irányba.",
                    "followingSituationId": "bela-9"
                }
            ]
        }
    },
    {
        "id": "bela-7",
        "boyMood": Mood.HAPPY,
        "scene": { "image": "scenes/pub.jpg" },
        "dialogue": {
            "name": "Bela",
            "text": "Szuper!",
            "answers": [
                {
                    "reputationValue": +1,
                    "text": "Bela kikérte az italainkat, majd leültünk a pult mellé és kicsit feszengve nézelődtünk más-más irányba.",
                    "followingSituationId": "bela-9"
                }
            ]
        }
    },
    {
        "id": "bela-8",
        "boyMood": Mood.SAD,
        "scene": { "image": "scenes/pub.jpg" },
        "dialogue": {
            "name": "Bela",
            "text": "Hát jó.",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Bela kikérte az italainkat, majd leültünk a pult mellé és kicsit feszengve nézelődtünk más-más irányba.",
                    "followingSituationId": "bela-9"
                }
            ]
        }
    },
    {
        "id": "bela-9",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "scenes/pub.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": +1,
                    "text": "Megtöröm a csendet.",
                    "followingSituationId": "bela-10"
                },
                {
                    "reputationValue": 0,
                    "text": "Várok, hogy ő kezdeményezzen.",
                    "followingSituationId": "bela-12"
                }
            ]
        }
    },
    {
        "id": "bela-10",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub.jpg" },
        "dialogue": {
            "name": "Bela",
            "text": "És amúgy te..?",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Egyébként...",
                    "followingSituationId": "bela-11"
                }
            ]
        }
    },
    {
        "id": "bela-11",
        "boyMood": Mood.HAPPY,
        "scene": { "image": "scenes/pub.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Pont egyszerre próbáltunk beszélgetést kezdeményezni, így halkan összenevettünk.",
                    "followingSituationId": "bela-12"
                }
            ]
        }
    },
    {
        "id": "bela-12",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub.jpg" },
        "dialogue": {
            "name": "Bela",
            "text": "És amúgy te itt laksz a városban?",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Igen, pár utcányira innen. És te?",
                    "followingSituationId": "bela-13"
                }
            ]
        }
    },
    {
        "id": "bela-13",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub.jpg" },
        "dialogue": {
            "name": "Bela",
            "text": "Én csak kollégista vagyok itt, egy pár száz kilométerre lévő kisvárosban nőttem fel.",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Több száz kilométerre? Minek jöttél ilyen messze?",
                    "followingSituationId": "bela-14"
                },
                {
                    "reputationValue": 0,
                    "text": "Kollégista? Akkor még tanulsz?",
                    "followingSituationId": "bela-18"
                },
                {
                    "reputationValue": -1,
                    "text": "Kollégista? Melyik egyetemre jársz?",
                    "followingSituationId": "bela-19"
                }
            ]
        }
    },
    {
        "id": "bela-14",
        "boyMood": Mood.ANGRY,
        "scene": { "image": "scenes/pub.jpg" },
        "dialogue": {
            "name": "Bela",
            "text": "Ne haragudj, hogy csak ilyen messze a szülővárosomtól indították azt a képzést amire jelentkezni szerettem volna.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Jól van már, nem kell egyből felkapni a vizet, nem bunkóságból kérdeztem.",
                    "followingSituationId": "bela-15"
                },
                {
                    "reputationValue": -1,
                    "text": "Na mert mi olyan különleges, hogy sehol máshol nem tanítják?",
                    "followingSituationId": "bela-16"
                }
            ]
        }
    },
    {
        "id": "bela-15",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub.jpg" },
        "dialogue": {
            "name": "Bela",
            "text": "Oké, rendben. Csak sokak nem értik, hogy nem minden városban van annyi lehetőség mint itt. Kevés helynek van ilyen jó hírneve webfejlesztés terén",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Webfejlesztés? Akkor fel tudod törni az emberek facebook fiókját meg ilyenek?",
                    "followingSituationId": "bela-20"
                },
                {
                    "reputationValue": 0,
                    "text": "Webfejlesztés? Így ránézésre ez valóban illik hozzád.",
                    "followingSituationId": "bela-21"
                }
            ]
        }
    },
    {
        "id": "bela-16",
        "boyMood": Mood.ANGRY,
        "scene": { "image": "scenes/pub.jpg" },
        "dialogue": {
            "name": "Bela",
            "text": "Figyelj, szerintem hagyjuk az egészet. Itt van a pia ára, csók.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Ezzel a lendülettel felállt az asztaltól és faképnél hagyott.",
                    "followingSituationId": "bela-17"
                }
            ]
        }
    },
    {
        "id": "bela-17",
        "boyMood": null,
        "scene": { "image": "scenes/pub.jpg" },
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
        "id": "bela-18",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub.jpg" },
        "dialogue": {
            "name": "Bela",
            "text": "Igen, egy OKJ-s webfejlesztői képzésen veszek részt.",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Webfejlesztés? Akkor fel tudod törni az emberek facebook fiókját meg ilyenek?",
                    "followingSituationId": "bela-20"
                },
                {
                    "reputationValue": 0,
                    "text": "Webfejlesztés? Így ránézésre ez valóban illik hozzád.",
                    "followingSituationId": "bela-21"
                }
            ]
        }
    },
    {
        "id": "bela-19",
        "boyMood": Mood.ANGRY,
        "scene": { "image": "scenes/pub.jpg" },
        "dialogue": {
            "name": "Bela",
            "text": "Attól még, hogy kollégista vagyok nem kell egyből egyetemre járnom. OKJ-s webfejlesztői képzésen veszek részt.",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Webfejlesztés? Akkor fel tudod törni az emberek facebook fiókját meg ilyenek?",
                    "followingSituationId": "bela-20"
                },
                {
                    "reputationValue": 0,
                    "text": "Webfejlesztés? Így ránézésre ez valóban illik hozzád.",
                    "followingSituationId": "bela-21"
                }
            ]
        }
    },
    {
        "id": "bela-20",
        "boyMood": Mood.SAD,
        "scene": { "image": "scenes/pub.jpg" },
        "dialogue": {
            "name": "Bela",
            "text": "Hát nem pont ez lenne a lényege...",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Beszélgettünk még pár dologról, majd elköszöntünk egymástól.",
                    "followingSituationId": "bela-17"
                }
            ]
        }
    },
    {
        "id": "bela-21",
        "boyMood": Mood.HAPPY,
        "scene": { "image": "scenes/pub.jpg" },
        "dialogue": {
            "name": "Bela",
            "text": "Igen, már mások is mondták.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Beszélgettünk még pár dologról, majd felajánlotta, hogy hazakísér.",
                    "followingSituationId": "bela-22"
                }
            ]
        }
    },
    {
        "id": "bela-22",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/street.jpg" },
        "dialogue": {
            "name": "Bela",
            "text": "És egyébként, hogy hogy online ismerkedsz? Nem tűnik úgy, mint ha rászorulnál erre. Remélem nem érted félre..",
            "answers": [
                {
                    "reputationValue": 1,
                    "text": "Sajnos a srácok a valóságban nem annyira kezdeményezőek, mint az interneten.",
                    "followingSituationId": "bela-24"
                },
                {
                    "reputationValue": 0,
                    "text": "Nem igazán van szerencsém a férfiak terén.. Sosem tudom mit kéne mondanom.",
                    "followingSituationId": "bela-24"
                },
                {
                    "reputationValue": -1,
                    "text": "Így egyszerűbb több sráccal egyszerre ismerkedni. Remélem nem érted félre ;).",
                    "followingSituationId": "bela-23"
                }
            ]
        }
    },
    {
        "id": "bela-23",
        "boyMood": Mood.SAD,
        "scene": { "image": "scenes/street.jpg" },
        "dialogue": {
            "name": "Bela",
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
        "id": "bela-24",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/street.jpg" },
        "dialogue": {
            "name": "Bela",
            "text": "Remélem velem nem érzed magad zavarban. Jobban szereted, ha a srác kezdeményez?",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Igen, én nem igazán vagyok jó benne. Nem azért, mert nem érdekelne a srác, csak túl zavarbaejtőnek érzem kimondani amit szeretnék.",
                    "followingSituationId": "bela-25"
                },
                {
                    "reputationValue": 1,
                    "text": "Nem. Ha akarok valamit, akkor megszerzem.",
                    "followingSituationId": "bela-25"
                }
            ]
        }
    },
    {
        "id": "bela-25",
        "boyMood": null,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Közben a házunk elé értünk, így eljött a búcsú ideje. Bela olyan közel állt hozzám, hogy szinte éreztem a lehelletét a bőrömön.",
                    "followingSituationId": "bela-26"
                }
            ]
        }
    },
    {
        "id": "bela-26",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "Bela",
            "text": "Nagyon szépek a szemeid.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Köszönöm...",
                    "followingSituationId": "bela-27"
                },
                {
                    "reputationValue": 1,
                    "text": "(halkan még közelebb léptem felé)",
                    "followingSituationId": "bela-29"
                }
            ]
        }
    },
    {
        "id": "bela-27",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Bela óvatosan kisimít egy tincset az arcomból.",
                    "followingSituationId": "bela-28"
                }
            ]
        }
    },
    {
        "id": "bela-28",
        "boyMood": Mood.SAD,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "Bela",
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
        "id": "bela-29",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Bela halkan kisimít egy tincset az arcomból, és egy puha csókot nyom az ajkaimra.",
                    "followingSituationId": "bela-30"
                }
            ]
        }
    },
    {
        "id": "bela-30",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "Bela",
            "text": "Jó éjszakát, remélem minél előbb újra találkozunk.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Gratulálok! Teljesen elcsavartad Bela fejét!",
                    "followingSituationId": null
                }
            ]
        }
    }
]