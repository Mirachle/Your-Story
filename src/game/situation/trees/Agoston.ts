import { Mood } from '../Mood';
import { RawSituation } from './RawSituation';

export const agostonTree: RawSituation[] =
[
    {
        "id": "agoston-0",
        'boyMood': null,
        "scene": { "image": "@/assets/scenes/pub.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Ez életem első vakrandija és nagyon izgulok.",
                    "followingSituationId": "agoston-1"
                }
            ]
        }
    },
    {
        "id": "agoston-1",
        'boyMood': null,
        "scene": { "image": "@/assets/scenes/pub.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Valójában az alkalmazásban ahol egymásra bukkantunk láttam egy képet róla és egy rövid bemutatkozást, így szigorúan véve nem igazi vakrandi.",
                    "followingSituationId": "agoston-2"
                }
            ]
        }
    },
    {
        "id": "agoston-2",
        'boyMood': null,
        "scene": { "image": "@/assets/scenes/pub.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Mivel Agoston is és én is szeretjük a videójátékokat, ezért egy gamerek számára kialakított szórakozóhelyre beszéltük meg a találkozót.",
                    "followingSituationId": "agoston-3"
                }
            ]
        }
    },
    {
        "id": "agoston-3",
        'boyMood': null,
        "scene": { "image": "@/assets/scenes/pub.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "A helyiségbe belépve egyből megpillantottam őt a bárpultnál.",
                    "followingSituationId": "agoston-4"
                }
            ]
        }
    },
    {
        "id": "agoston-4",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "@/assets/scenes/pub.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Szia, @{username} vagyok!",    //TODO username
                    "followingSituationId": "agoston-5"
                }
            ]
        }
    },
    {
        "id": "agoston-5",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "@/assets/scenes/pub.jpg" },
        "dialogue": {
            "name": "Agoston",
            "text": "Szia, én pedig Agoston. Mit iszol?",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Egy vodka narancsot.",
                    "followingSituationId": "agoston-6"
                },
                {
                    "reputationValue": 1,
                    "text": "Egy Bloody Mary-t.",
                    "followingSituationId": "agoston-7"
                },
                {
                    "reputationValue": -1,
                    "text": "Egy kólát.",
                    "followingSituationId": "agoston-8"
                }
            ]
        }
    },
    {
        "id": "agoston-6",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "@/assets/scenes/pub.jpg" },
        "dialogue": {
            "name": "Agoston",
            "text": "Oké.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Agoston kikérte az italainkat, majd leültünk a pult mellé és kicsit feszengve nézelődtünk más-más irányba.",
                    "followingSituationId": "agoston-9"
                }
            ]
        }
    },
    {
        "id": "agoston-7",
        "boyMood": Mood.HAPPY,
        "scene": { "image": "@/assets/scenes/pub.jpg" },
        "dialogue": {
            "name": "Agoston",
            "text": "Szuper!",
            "answers": [
                {
                    "reputationValue": +1,
                    "text": "Agoston kikérte az italainkat, majd leültünk a pult mellé és kicsit feszengve nézelődtünk más-más irányba.",
                    "followingSituationId": "agoston-9"
                }
            ]
        }
    },
    {
        "id": "agoston-8",
        "boyMood": Mood.SAD,
        "scene": { "image": "@/assets/scenes/pub.jpg" },
        "dialogue": {
            "name": "Agoston",
            "text": "Hát jó.",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Agoston kikérte az italainkat, majd leültünk a pult mellé és kicsit feszengve nézelődtünk más-más irányba.",
                    "followingSituationId": "agoston-9"
                }
            ]
        }
    },
    {
        "id": "agoston-9",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "@/assets/scenes/pub.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": +1,
                    "text": "Megtöröm a csendet.",
                    "followingSituationId": "agoston-10"
                },
                {
                    "reputationValue": 0,
                    "text": "Várok, hogy ő kezdeményezzen.",
                    "followingSituationId": "agoston-12"
                }
            ]
        }
    },
    {
        "id": "agoston-10",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "@/assets/scenes/pub.jpg" },
        "dialogue": {
            "name": "Agoston",
            "text": "És amúgy te..?",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Egyébként...",
                    "followingSituationId": "agoston-11"
                }
            ]
        }
    },
    {
        "id": "agoston-11",
        "boyMood": Mood.HAPPY,
        "scene": { "image": "@/assets/scenes/pub.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Pont egyszerre próbáltunk beszélgetést kezdeményezni, így halkan összenevettünk.",
                    "followingSituationId": "agoston-12"
                }
            ]
        }
    },
    {
        "id": "agoston-12",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "@/assets/scenes/pub.jpg" },
        "dialogue": {
            "name": "Agoston",
            "text": "És amúgy te itt laksz a városban?",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Igen, pár utcányira innen. És te?",
                    "followingSituationId": "agoston-13"
                }
            ]
        }
    },
    {
        "id": "agoston-13",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "@/assets/scenes/pub.jpg" },
        "dialogue": {
            "name": "Agoston",
            "text": "Én csak kollégista vagyok itt, egy pár száz kilométerre lévő kisvárosban nőttem fel.",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Több száz kilométerre? Minek jöttél ilyen messze?",
                    "followingSituationId": "agoston-14"
                },
                {
                    "reputationValue": 0,
                    "text": "Kollégista? Akkor még tanulsz?",
                    "followingSituationId": "agoston-18"
                },
                {
                    "reputationValue": -1,
                    "text": "Kollégista? Melyik egyetemre jársz?",
                    "followingSituationId": "agoston-19"
                }
            ]
        }
    },
    {
        "id": "agoston-14",
        "boyMood": Mood.ANGRY,
        "scene": { "image": "@/assets/scenes/pub.jpg" },
        "dialogue": {
            "name": "Agoston",
            "text": "Ne haragudj, hogy csak ilyen messze a szülővárosomtól indították azt a képzést amire jelentkezni szerettem volna.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Jól van már, nem kell egyből felkapni a vizet, nem bunkóságból kérdeztem.",
                    "followingSituationId": "agoston-15"
                },
                {
                    "reputationValue": -1,
                    "text": "Na mert mi olyan különleges, hogy sehol máshol nem tanítják?",
                    "followingSituationId": "agoston-16"
                }
            ]
        }
    },
    {
        "id": "agoston-15",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "@/assets/scenes/pub.jpg" },
        "dialogue": {
            "name": "Agoston",
            "text": "Oké, rendben. Csak sokak nem értik, hogy nem minden városban van annyi lehetőség mint itt. Kevés helynek van ilyen jó hírneve webfejlesztés terén",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Webfejlesztés? Akkor fel tudod törni az emberek facebook fiókját meg ilyenek?",
                    "followingSituationId": "agoston-20"
                },
                {
                    "reputationValue": 0,
                    "text": "Webfejlesztés? Így ránézésre ez valóban illik hozzád.",
                    "followingSituationId": "agoston-21"
                }
            ]
        }
    },
    {
        "id": "agoston-16",
        "boyMood": Mood.ANGRY,
        "scene": { "image": "@/assets/scenes/pub.jpg" },
        "dialogue": {
            "name": "Agoston",
            "text": "Figyelj, szerintem hagyjuk az egészet. Itt van a pia ára, csók.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Ezzel a lendülettel felállt az asztaltól és faképnél hagyott.",
                    "followingSituationId": "agoston-17"
                }
            ]
        }
    },
    {
        "id": "agoston-17",
        "boyMood": null,
        "scene": { "image": "@/assets/scenes/pub.jpg" },
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
        "id": "agoston-18",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "@/assets/scenes/pub.jpg" },
        "dialogue": {
            "name": "Agoston",
            "text": "Igen, egy OKJ-s webfejlesztői képzésen veszek részt.",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Webfejlesztés? Akkor fel tudod törni az emberek facebook fiókját meg ilyenek?",
                    "followingSituationId": "agoston-20"
                },
                {
                    "reputationValue": 0,
                    "text": "Webfejlesztés? Így ránézésre ez valóban illik hozzád.",
                    "followingSituationId": "agoston-21"
                }
            ]
        }
    },
    {
        "id": "agoston-19",
        "boyMood": Mood.ANGRY,
        "scene": { "image": "@/assets/scenes/pub.jpg" },
        "dialogue": {
            "name": "Agoston",
            "text": "Attól még, hogy kollégista vagyok nem kell egyből egyetemre járnom. OKJ-s webfejlesztői képzésen veszek részt.",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Webfejlesztés? Akkor fel tudod törni az emberek facebook fiókját meg ilyenek?",
                    "followingSituationId": "agoston-20"
                },
                {
                    "reputationValue": 0,
                    "text": "Webfejlesztés? Így ránézésre ez valóban illik hozzád.",
                    "followingSituationId": "agoston-21"
                }
            ]
        }
    },
    {
        "id": "agoston-20",
        "boyMood": Mood.SAD,
        "scene": { "image": "@/assets/scenes/pub.jpg" },
        "dialogue": {
            "name": "Agoston",
            "text": "Hát nem pont ez lenne a lényege...",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Beszélgettünk még pár dologról, majd elköszöntünk egymástól.",
                    "followingSituationId": "agoston-17"
                }
            ]
        }
    },
    {
        "id": "agoston-21",
        "boyMood": Mood.HAPPY,
        "scene": { "image": "@/assets/scenes/pub.jpg" },
        "dialogue": {
            "name": "Agoston",
            "text": "Igen, már mások is mondták.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Beszélgettünk még pár dologról, majd felajánlotta, hogy hazakísér.",
                    "followingSituationId": "agoston-22"
                }
            ]
        }
    },
    {
        "id": "agoston-22",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "@/assets/scenes/street.jpg" },
        "dialogue": {
            "name": "Agoston",
            "text": "És egyébként, hogy hogy online ismerkedsz? Nem tűnik úgy, mint ha rászorulnál erre. Remélem nem érted félre..",
            "answers": [
                {
                    "reputationValue": 1,
                    "text": "Sajnos a srácok a valóságban nem annyira kezdeményezőek, mint az interneten.",
                    "followingSituationId": "agoston-24"
                },
                {
                    "reputationValue": 0,
                    "text": "Nem igazán van szerencsém a férfiak terén.. Sosem tudom mit kéne mondanom.",
                    "followingSituationId": "agoston-24"
                },
                {
                    "reputationValue": -1,
                    "text": "Így egyszerűbb több sráccal egyszerre ismerkedni. Remélem nem érted félre ;).",
                    "followingSituationId": "agoston-23"
                }
            ]
        }
    },
    {
        "id": "agoston-23",
        "boyMood": Mood.SAD,
        "scene": { "image": "@/assets/scenes/street.jpg" },
        "dialogue": {
            "name": "Agoston",
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
        "id": "agoston-24",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "@/assets/scenes/street.jpg" },
        "dialogue": {
            "name": "Agoston",
            "text": "Remélem velem nem érzed magad zavarban. Jobban szereted, ha a srác kezdeményez?",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Igen, én nem igazán vagyok jó benne. Nem azért, mert nem érdekelne a srác, csak túl zavarbaejtőnek érzem kimondani amit szeretnék.",
                    "followingSituationId": "agoston-25"
                },
                {
                    "reputationValue": 1,
                    "text": "Nem. Ha akarok valamit, akkor megszerzem.",
                    "followingSituationId": "agoston-25"
                }
            ]
        }
    },
    {
        "id": "agoston-25",
        "boyMood": null,
        "scene": { "image": "@/assets/scenes/house.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Közben a házunk elé értünk, így eljött a búcsú ideje. Agoston olyan közel állt hozzám, hogy szinte éreztem a lehelletét a bőrömön.",
                    "followingSituationId": "agoston-26"
                }
            ]
        }
    },
    {
        "id": "agoston-26",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "@/assets/scenes/house.jpg" },
        "dialogue": {
            "name": "Agoston",
            "text": "Nagyon szépek a szemeid.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Köszönöm...",
                    "followingSituationId": "agoston-27"
                },
                {
                    "reputationValue": 1,
                    "text": "(halkan még közelebb léptem felé)",
                    "followingSituationId": "agoston-29"
                }
            ]
        }
    },
    {
        "id": "agoston-27",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "@/assets/scenes/house.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Agoston óvatosan kisimít egy tincset az arcomból.",
                    "followingSituationId": "agoston-28"
                }
            ]
        }
    },
    {
        "id": "agoston-28",
        "boyMood": Mood.SAD,
        "scene": { "image": "@/assets/scenes/house.jpg" },
        "dialogue": {
            "name": "Agoston",
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
        "id": "agoston-29",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "@/assets/scenes/house.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Agoston halkan kisimít egy tincset az arcomból, és egy puha csókot nyom az ajkaimra.",
                    "followingSituationId": "agoston-30"
                }
            ]
        }
    },
    {
        "id": "agoston-30",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "@/assets/scenes/house.jpg" },
        "dialogue": {
            "name": "Agoston",
            "text": "Jó éjszakát, remélem minél előbb újra találkozunk.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Gratulálok! Teljesen elcsavartad Agoston fejét!",
                    "followingSituationId": null
                }
            ]
        }
    }
]