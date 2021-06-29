import { Mood } from '../Mood';
import { RawSituation } from './RawSituation';

export const aegonTree: RawSituation[] =
[
    {
        "id": "aegon-0",
        'boyMood': null,
        "scene": { "image": "scenes/pub_aegon.png" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Ez életem első vakrandija és nagyon izgulok. Még nincs meg a sztori, így Athem szövegét kapja.",
                    "followingSituationId": "aegon-1"
                }
            ]
        }
    },
    {
        "id": "aegon-1",
        'boyMood': null,
        "scene": { "image": "scenes/pub_aegon.png" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Valójában az alkalmazásban ahol egymásra bukkantunk láttam egy képet róla és egy rövid bemutatkozást, így szigorúan véve nem igazi vakrandi.",
                    "followingSituationId": "aegon-2"
                }
            ]
        }
    },
    {
        "id": "aegon-2",
        'boyMood': null,
        "scene": { "image": "scenes/pub_aegon.png" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Mivel Aegon is és én is szeretjük a videójátékokat, ezért egy gamerek számára kialakított szórakozóhelyre beszéltük meg a találkozót.",
                    "followingSituationId": "aegon-3"
                }
            ]
        }
    },
    {
        "id": "aegon-3",
        'boyMood': null,
        "scene": { "image": "scenes/pub_aegon.png" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "A helyiségbe belépve egyből megpillantottam őt a bárpultnál.",
                    "followingSituationId": "aegon-4"
                }
            ]
        }
    },
    {
        "id": "aegon-4",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub_aegon.png" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Szia, @{username} vagyok!",    //TODO username
                    "followingSituationId": "aegon-5"
                }
            ]
        }
    },
    {
        "id": "aegon-5",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub_aegon.png" },
        "dialogue": {
            "name": "Aegon",
            "text": "Szia, én pedig Aegon. Mit iszol?",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Egy vodka narancsot.",
                    "followingSituationId": "aegon-6"
                },
                {
                    "reputationValue": 1,
                    "text": "Egy Bloody Mary-t.",
                    "followingSituationId": "aegon-7"
                },
                {
                    "reputationValue": -1,
                    "text": "Egy kólát.",
                    "followingSituationId": "aegon-8"
                }
            ]
        }
    },
    {
        "id": "aegon-6",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub_aegon.png" },
        "dialogue": {
            "name": "Aegon",
            "text": "Oké.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Aegon kikérte az italainkat, majd leültünk a pult mellé és kicsit feszengve nézelődtünk más-más irányba.",
                    "followingSituationId": "aegon-9"
                }
            ]
        }
    },
    {
        "id": "aegon-7",
        "boyMood": Mood.HAPPY,
        "scene": { "image": "scenes/pub_aegon.png" },
        "dialogue": {
            "name": "Aegon",
            "text": "Szuper!",
            "answers": [
                {
                    "reputationValue": +1,
                    "text": "Aegon kikérte az italainkat, majd leültünk a pult mellé és kicsit feszengve nézelődtünk más-más irányba.",
                    "followingSituationId": "aegon-9"
                }
            ]
        }
    },
    {
        "id": "aegon-8",
        "boyMood": Mood.SAD,
        "scene": { "image": "scenes/pub_aegon.png" },
        "dialogue": {
            "name": "Aegon",
            "text": "Hát jó.",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Aegon kikérte az italainkat, majd leültünk a pult mellé és kicsit feszengve nézelődtünk más-más irányba.",
                    "followingSituationId": "aegon-9"
                }
            ]
        }
    },
    {
        "id": "aegon-9",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "scenes/pub_aegon.png" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": +1,
                    "text": "Megtöröm a csendet.",
                    "followingSituationId": "aegon-10"
                },
                {
                    "reputationValue": 0,
                    "text": "Várok, hogy ő kezdeményezzen.",
                    "followingSituationId": "aegon-12"
                }
            ]
        }
    },
    {
        "id": "aegon-10",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub_aegon.png" },
        "dialogue": {
            "name": "Aegon",
            "text": "És amúgy te..?",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Egyébként...",
                    "followingSituationId": "aegon-11"
                }
            ]
        }
    },
    {
        "id": "aegon-11",
        "boyMood": Mood.HAPPY,
        "scene": { "image": "scenes/pub_aegon.png" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Pont egyszerre próbáltunk beszélgetést kezdeményezni, így halkan összenevettünk.",
                    "followingSituationId": "aegon-12"
                }
            ]
        }
    },
    {
        "id": "aegon-12",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub_aegon.png" },
        "dialogue": {
            "name": "Aegon",
            "text": "És amúgy te itt laksz a városban?",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Igen, pár utcányira innen. És te?",
                    "followingSituationId": "aegon-13"
                }
            ]
        }
    },
    {
        "id": "aegon-13",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub_aegon.png" },
        "dialogue": {
            "name": "Aegon",
            "text": "Én csak kollégista vagyok itt, egy pár száz kilométerre lévő kisvárosban nőttem fel.",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Több száz kilométerre? Minek jöttél ilyen messze?",
                    "followingSituationId": "aegon-14"
                },
                {
                    "reputationValue": 0,
                    "text": "Kollégista? Akkor még tanulsz?",
                    "followingSituationId": "aegon-18"
                },
                {
                    "reputationValue": -1,
                    "text": "Kollégista? Melyik egyetemre jársz?",
                    "followingSituationId": "aegon-19"
                }
            ]
        }
    },
    {
        "id": "aegon-14",
        "boyMood": Mood.ANGRY,
        "scene": { "image": "scenes/pub_aegon.png" },
        "dialogue": {
            "name": "Aegon",
            "text": "Ne haragudj, hogy csak ilyen messze a szülővárosomtól indították azt a képzést amire jelentkezni szerettem volna.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Jól van már, nem kell egyből felkapni a vizet, nem bunkóságból kérdeztem.",
                    "followingSituationId": "aegon-15"
                },
                {
                    "reputationValue": -1,
                    "text": "Na mert mi olyan különleges, hogy sehol máshol nem tanítják?",
                    "followingSituationId": "aegon-16"
                }
            ]
        }
    },
    {
        "id": "aegon-15",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub_aegon.png" },
        "dialogue": {
            "name": "Aegon",
            "text": "Oké, rendben. Csak sokak nem értik, hogy nem minden városban van annyi lehetőség mint itt. Kevés helynek van ilyen jó hírneve webfejlesztés terén",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Webfejlesztés? Akkor fel tudod törni az emberek facebook fiókját meg ilyenek?",
                    "followingSituationId": "aegon-20"
                },
                {
                    "reputationValue": 0,
                    "text": "Webfejlesztés? Így ránézésre ez valóban illik hozzád.",
                    "followingSituationId": "aegon-21"
                }
            ]
        }
    },
    {
        "id": "aegon-16",
        "boyMood": Mood.ANGRY,
        "scene": { "image": "scenes/pub_aegon.png" },
        "dialogue": {
            "name": "Aegon",
            "text": "Figyelj, szerintem hagyjuk az egészet. Itt van a pia ára, csók.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Ezzel a lendülettel felállt az asztaltól és faképnél hagyott.",
                    "followingSituationId": "aegon-17"
                }
            ]
        }
    },
    {
        "id": "aegon-17",
        "boyMood": null,
        "scene": { "image": "scenes/pub_aegon.png" },
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
        "id": "aegon-18",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub_aegon.png" },
        "dialogue": {
            "name": "Aegon",
            "text": "Igen, egy OKJ-s webfejlesztői képzésen veszek részt.",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Webfejlesztés? Akkor fel tudod törni az emberek facebook fiókját meg ilyenek?",
                    "followingSituationId": "aegon-20"
                },
                {
                    "reputationValue": 0,
                    "text": "Webfejlesztés? Így ránézésre ez valóban illik hozzád.",
                    "followingSituationId": "aegon-21"
                }
            ]
        }
    },
    {
        "id": "aegon-19",
        "boyMood": Mood.ANGRY,
        "scene": { "image": "scenes/pub_aegon.png" },
        "dialogue": {
            "name": "Aegon",
            "text": "Attól még, hogy kollégista vagyok nem kell egyből egyetemre járnom. OKJ-s webfejlesztői képzésen veszek részt.",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Webfejlesztés? Akkor fel tudod törni az emberek facebook fiókját meg ilyenek?",
                    "followingSituationId": "aegon-20"
                },
                {
                    "reputationValue": 0,
                    "text": "Webfejlesztés? Így ránézésre ez valóban illik hozzád.",
                    "followingSituationId": "aegon-21"
                }
            ]
        }
    },
    {
        "id": "aegon-20",
        "boyMood": Mood.SAD,
        "scene": { "image": "scenes/pub_aegon.png" },
        "dialogue": {
            "name": "Aegon",
            "text": "Hát nem pont ez lenne a lényege...",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Beszélgettünk még pár dologról, majd elköszöntünk egymástól.",
                    "followingSituationId": "aegon-17"
                }
            ]
        }
    },
    {
        "id": "aegon-21",
        "boyMood": Mood.HAPPY,
        "scene": { "image": "scenes/pub_aegon.png" },
        "dialogue": {
            "name": "Aegon",
            "text": "Igen, már mások is mondták.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Beszélgettünk még pár dologról, majd felajánlotta, hogy hazakísér.",
                    "followingSituationId": "aegon-22"
                }
            ]
        }
    },
    {
        "id": "aegon-22",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/street.jpg" },
        "dialogue": {
            "name": "Aegon",
            "text": "És egyébként, hogy hogy online ismerkedsz? Nem tűnik úgy, mint ha rászorulnál erre. Remélem nem érted félre..",
            "answers": [
                {
                    "reputationValue": 1,
                    "text": "Sajnos a srácok a valóságban nem annyira kezdeményezőek, mint az interneten.",
                    "followingSituationId": "aegon-24"
                },
                {
                    "reputationValue": 0,
                    "text": "Nem igazán van szerencsém a férfiak terén.. Sosem tudom mit kéne mondanom.",
                    "followingSituationId": "aegon-24"
                },
                {
                    "reputationValue": -1,
                    "text": "Így egyszerűbb több sráccal egyszerre ismerkedni. Remélem nem érted félre ;).",
                    "followingSituationId": "aegon-23"
                }
            ]
        }
    },
    {
        "id": "aegon-23",
        "boyMood": Mood.SAD,
        "scene": { "image": "scenes/street.jpg" },
        "dialogue": {
            "name": "Aegon",
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
        "id": "aegon-24",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/street.jpg" },
        "dialogue": {
            "name": "Aegon",
            "text": "Remélem velem nem érzed magad zavarban. Jobban szereted, ha a srác kezdeményez?",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Igen, én nem igazán vagyok jó benne. Nem azért, mert nem érdekelne a srác, csak túl zavarbaejtőnek érzem kimondani amit szeretnék.",
                    "followingSituationId": "aegon-25"
                },
                {
                    "reputationValue": 1,
                    "text": "Nem. Ha akarok valamit, akkor megszerzem.",
                    "followingSituationId": "aegon-25"
                }
            ]
        }
    },
    {
        "id": "aegon-25",
        "boyMood": null,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Közben a házunk elé értünk, így eljött a búcsú ideje. Aegon olyan közel állt hozzám, hogy szinte éreztem a lehelletét a bőrömön.",
                    "followingSituationId": "aegon-26"
                }
            ]
        }
    },
    {
        "id": "aegon-26",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "Aegon",
            "text": "Nagyon szépek a szemeid.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Köszönöm...",
                    "followingSituationId": "aegon-27"
                },
                {
                    "reputationValue": 1,
                    "text": "(halkan még közelebb léptem felé)",
                    "followingSituationId": "aegon-29"
                }
            ]
        }
    },
    {
        "id": "aegon-27",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Aegon óvatosan kisimít egy tincset az arcomból.",
                    "followingSituationId": "aegon-28"
                }
            ]
        }
    },
    {
        "id": "aegon-28",
        "boyMood": Mood.SAD,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "Aegon",
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
        "id": "aegon-29",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Aegon halkan kisimít egy tincset az arcomból, és egy puha csókot nyom az ajkaimra.",
                    "followingSituationId": "aegon-30"
                }
            ]
        }
    },
    {
        "id": "aegon-30",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "Aegon",
            "text": "Jó éjszakát, remélem minél előbb újra találkozunk.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Gratulálok! Teljesen elcsavartad Aegon fejét!",
                    "followingSituationId": null
                }
            ]
        }
    }
]