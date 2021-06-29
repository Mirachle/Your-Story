import { Mood } from '../Mood';
import { RawSituation } from './RawSituation';

export const aidenTree: RawSituation[] =
[
    {
        "id": "aiden-0",
        'boyMood': null,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Ez életem első vakrandija és nagyon izgulok.",
                    "followingSituationId": "aiden-1"
                }
            ]
        }
    },
    {
        "id": "aiden-1",
        'boyMood': null,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Valójában az alkalmazásban ahol egymásra bukkantunk láttam egy képet róla és egy rövid bemutatkozást, így szigorúan véve nem igazi vakrandi.",
                    "followingSituationId": "aiden-2"
                }
            ]
        }
    },
    {
        "id": "aiden-2",
        'boyMood': null,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Mivel Aiden is koránkelő típus, így egy kora reggeli találkozót beszéltünk meg a parton.",
                    "followingSituationId": "aiden-3"
                }
            ]
        }
    },
    {
        "id": "aiden-3",
        'boyMood': null,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "A szórakozóhelyre érve egyből megpillantottam egy kávéval a kezében.",
                    "followingSituationId": "aiden-4"
                }
            ]
        }
    },
    {
        "id": "aiden-4",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Szia, biztos te vagy Aiden. @{username} vagyok az alkalmazásból!",
                    "followingSituationId": "aiden-5"
                }
            ]
        }
    },
    {
        "id": "aiden-5",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "Aiden",
            "text": "Szia @{username}! Ne haragudj, hogy nem vártalak meg az italrendeléssel, de a reggeli kávém előtt nincs belőlem semmi. Te kérsz valamit?",
            "answers": [
                {
                    "reputationValue": +1,
                    "text": "Nem gond. Hát egy erős fekete most nekem is jól esne.",
                    "followingSituationId": "aiden-6"
                },
                {
                    "reputationValue": -1,
                    "text": "Semmi baj. Igen, egy energiaital jól esne.",
                    "followingSituationId": "aiden-7"
                },
                {
                    "reputationValue": 0,
                    "text": "Csak egy pohár vizet. Reggelente ez adja a legtöbb energiát.",
                    "followingSituationId": "aiden-8"
                }
            ]
        }
    },
    {
        "id": "aiden-6",
        "boyMood": Mood.HAPPY,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "Aiden",
            "text": "Kérésed számomra parancs.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Aiden kikérte az italomat, majd miután megkaptam hálásan mosolyogtam rá.",
                    "followingSituationId": "aiden-9"
                }
            ]
        }
    },
    {
        "id": "aiden-7",
        "boyMood": Mood.SAD,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "Aiden",
            "text": "Az nem valami egészséges, de ha téged ez pörget fel.",
            "answers": [
                {
                    "reputationValue": +1,
                    "text": "Aiden kikérte az italomat, majd miután megkaptam hálásan mosolyogtam rá.",
                    "followingSituationId": "aiden-9"
                }
            ]
        }
    },
    {
        "id": "aiden-8",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "Aiden",
            "text": "Igen, ezt egyszer én is kipróbáltam, csak nekem nem vált be.",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Aiden kikérte az italomat, majd miután megkaptam hálásan mosolyogtam rá.",
                    "followingSituationId": "aiden-9"
                }
            ]
        }
    },
    {
        "id": "aiden-9",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "Aiden",
            "text": "És egyébként mi járatban erre? Nem láttalak ezelőtt a környéken. Nyaralsz vagy iskola?",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Nyaralok igen, jöttem szórakozni kicsit. Tudod nyár van, fiatalok vagyunk, ilyenek.",
                    "followingSituationId": "aiden-10"
                },
                {
                    "reputationValue": 0,
                    "text": "Egyik sem. Munka miatt költöztem ide.",
                    "followingSituationId": "aiden-13"
                },
                {
                    "reputationValue": +1,
                    "text": "Ide vettek fel egyetemre, úgyhogy pár utcára innen bérlek egy lakást.",
                    "followingSituationId": "aiden-27"
                }
            ]
        }
    },
    {
        "id": "aiden-10",
        "boyMood": Mood.SAD,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "Aiden",
            "text": "Aha, meg ilyenek. Szóval te alkalmi kapcsolatokat keresel ezen az alkalmazáson?",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Még szép! Ennyi idősen minek elköteleződni?",
                    "followingSituationId": "aiden-11"
                },
                {
                    "reputationValue": -1,
                    "text": "Dehogy is! Nem erre gondoltam. Úgy értem itt a lehetőség ismerkedni, ha már nyár van.",
                    "followingSituationId": "aiden-17"
                }
            ]
        }
    },
    {
        "id": "aiden-11",
        "boyMood": Mood.SAD,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "Aiden",
            "text": "Sajnálom, hogy így gondolod, pedig szimpatikus lány voltál. Azt hiszem én most megyek.",
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
        "id": "aiden-12",
        "boyMood": Mood.HAPPY,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "Aiden",
            "text": "Igen.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Beszélgettünk még pár dologról, majd elindultunk az egyetem irányába, ami egy ideig megegyezett a lakásom irányával, így egy ideig még együtt folytattuk az utunkat.",
                    "followingSituationId": "aiden-29"
                }
            ]
        }
    },
    {
        "id": "aiden-13",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "Aiden",
            "text": "Ó, és mit dolgozol?",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Takarítom az apartmanokat.",
                    "followingSituationId": "aiden-14"
                },
                {
                    "reputationValue": +1,
                    "text": "Orvosasszisztens vagyok.",
                    "followingSituationId": "aiden-19"
                },
                {
                    "reputationValue": 0,
                    "text": "Tanár vagyok.",
                    "followingSituationId": "aiden-21"
                }
            ]
        }
    },
    {
        "id": "aiden-14",
        "boyMood": Mood.HAPPY,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "Aiden",
            "text": "Haha! Végül is igen, kisebb városokban mit takaríthatnál? A kerti pottyantóst?",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Rendkívül poénos vagy.",
                    "followingSituationId": "aiden-15"
                },
                {
                    "reputationValue": -1,
                    "text": "De paraszt vagy.",
                    "followingSituationId": "aiden-18"
                }
            ]
        }
    },
    {
        "id": "aiden-15",
        "boyMood": Mood.SAD,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "Aiden",
            "text": "Jól van már, nem kell felkapni a vizet, rossz vicc volt.",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Hát az. (faképnél hagyom)",
                    "followingSituationId": "aiden-16"
                },
                {
                    "reputationValue": 0,
                    "text": "Mindegy, már hozzászoktam ehhez a reakcióhoz.",
                    "followingSituationId": "aiden-17"
                }
            ]
        }
    },
    {
        "id": "aiden-16",
        "boyMood": null,
        "scene": { "image": "scenes/pub_aiden.png" },
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
        "id": "aiden-17",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "Aiden",
            "text": "Értem.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Beszélgettünk még pár dologról, majd elindultunk az egyetem irányába, ami egy ideig megegyezett a lakásom irányával, így egy ideig még együtt folytattuk az utunkat.",
                    "followingSituationId": "aiden-29"
                }
            ]
        }
    },
    {
        "id": "aiden-18",
        "boyMood": Mood.ANGRY,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "Aiden",
            "text": "Én vagyok a paraszt? Te takarítod más mocskát. Ne haragudj, de én egy értelmiségi lányt keresek, Szia.",
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
        "id": "aiden-19",
        "boyMood": Mood.HAPPY,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "Aiden",
            "text": "De hát ez nem is munka, hanem hivatás! Biztos nagyon büszkék rád a szüleid.",
            "answers": [
                {
                    "reputationValue": +1,
                    "text": "Igen, mindig is nagyon a szívemen viseltem más emberek sorsát.",
                    "followingSituationId": "aiden-20"
                },
                {
                    "reputationValue": 0,
                    "text": "Igen, azok.",
                    "followingSituationId": "aiden-17"
                }
            ]
        }
    },
    {
        "id": "aiden-20",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "Aiden",
            "text": "Én meg orvosnak tanulok. Ha később úgy alakulnak a dolgok, akkor talán egy közös rendelőt is nyithatnánk.",
            "answers": [
                {
                    "reputationValue": +1,
                    "text": "Az nagyon jó lenne.",
                    "followingSituationId": "aiden-12"
                },
                {
                    "reputationValue": 0,
                    "text": "Akár.",
                    "followingSituationId": "aiden-17"
                }
            ]
        }
    },
    {
        "id": "aiden-21",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "Aiden",
            "text": "És mit fogsz tanítani?",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Testnevelés, társadalomismeret.",
                    "followingSituationId": "aiden-22"
                },
                {
                    "reputationValue": 0,
                    "text": "Magyar, történelem.",
                    "followingSituationId": "aiden-23"
                },
                {
                    "reputationValue": +1,
                    "text": "Biológia, kémia.",
                    "followingSituationId": "aiden-26"
                }
            ]
        }
    },
    {
        "id": "aiden-22",
        "boyMood": Mood.SAD,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "Aiden",
            "text": "Azt hittem, hogy valami normális tantárgy miatt jöttél ide.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Ha úgy érzed, hogy ezek a tantárgyak bármivel is kevesebbet érnek, mint a reál tárgyak, akkor nincs miről beszélgetnünk. (faképénél hagyom)",
                    "followingSituationId": "aiden-16"
                },
                {
                    "reputationValue": 0,
                    "text": "Egyelőre csak ezeket a tárgyakat kaptam meg. Ismeretség nélkül nehéz elindulni.",
                    "followingSituationId": "aiden-17"
                }
            ]
        }
    },
    {
        "id": "aiden-23",
        "boyMood": Mood.SAD,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "Aiden",
            "text": "Bevallom, ezekből a tárgyakból nem voltam valami jó, így nem igazán tudok mit mondani.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Szívesen korrepetállak, ha gondolod. (kacéran kacsintottam egyet)",
                    "followingSituationId": "aiden-24"
                },
                {
                    "reputationValue": +1,
                    "text": "Mert te milyen tárgyakból voltál jó?",
                    "followingSituationId": "aiden-25"
                }
            ]
        }
    },
    {
        "id": "aiden-24",
        "boyMood": Mood.SAD,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "Aiden",
            "text": "Talán később, azért köszi.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Beszélgettünk még pár dologról, majd elköszöntünk egymástól.",
                    "followingSituationId": "aiden-16"
                }
            ]
        }
    },
    {
        "id": "aiden-25",
        "boyMood": Mood.HAPPY,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "Aiden",
            "text": "Inkább biológia és kémia.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Beszélgettünk még pár dologról, majd elindultunk az egyetem irányába, ami egy ideig megegyezett a lakásom irányával, így egy ideig még együtt folytattuk az utunkat.",
                    "followingSituationId": "aiden-29"
                }
            ]
        }
    },
    {
        "id": "aiden-26",
        "boyMood": Mood.HAPPY,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "Aiden",
            "text": "Nahát! Ezek voltak a kedvenc tantárgyaim.",
            "answers": [
                {
                    "reputationValue": +1,
                    "text": "Tényleg? Ez a sors keze!",
                    "followingSituationId": "aiden-12"
                },
                {
                    "reputationValue": 0,
                    "text": "Mint mindenkinek...",
                    "followingSituationId": "aiden-17"
                }
            ]
        }
    },
    {
        "id": "aiden-27",
        "boyMood": Mood.HAPPY,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "Aiden",
            "text": "És mit fogsz tanulni?",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Testnevelés, társadalomismeret.",
                    "followingSituationId": "aiden-28"
                },
                {
                    "reputationValue": 0,
                    "text": "Magyar, történelem.",
                    "followingSituationId": "aiden-23"
                },
                {
                    "reputationValue": +1,
                    "text": "Biológia, kémia.",
                    "followingSituationId": "aiden-26"
                }
            ]
        }
    },
    {
        "id": "aiden-28",
        "boyMood": Mood.SAD,
        "scene": { "image": "scenes/pub_aiden.png" },
        "dialogue": {
            "name": "Aiden",
            "text": "Azt hittem, hogy valami normális tantárgy miatt jöttél ide.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Ha úgy érzed, hogy ezek a tantárgyak bármivel is kevesebbet érnek, mint a reál tárgyak, akkor nincs miről beszélgetnünk. (faképénél hagyom)",
                    "followingSituationId": "aiden-16"
                },
                {
                    "reputationValue": 0,
                    "text": "Egyelőre csak ide vettek fel, de ha félévkor jó lesz az átlagom, megpróbálok váltani.",
                    "followingSituationId": "aiden-17"
                }
            ]
        }
    },
    {
        "id": "aiden-29",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/street.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Sok órád lesz ma?",
                    "followingSituationId": "aiden-30"
                },
                {
                    "reputationValue": 0,
                    "text": "Mi miatt regisztráltál erre az alkalmazásra?",
                    "followingSituationId": "aiden-35"
                }
            ]
        }
    },
    {
        "id": "aiden-30",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/street.jpg" },
        "dialogue": {
            "name": "Aiden",
            "text": "Annyira nem. Igazából még van egy kis időm beérni, viszont lesz egy ZH-m déltől és még egyszer nem ártana átnézni az anyagot.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "De kár. Pedig reménykedtem, hogy tudunk még egy kis időt együtt tölteni.",
                    "followingSituationId": "aiden-31"
                },
                {
                    "reputationValue": 0,
                    "text": "Ez azt jelenti, hogy még van egy kis időd hazakísérni?",
                    "followingSituationId": "aiden-34"
                }
            ]
        }
    },
    {
        "id": "aiden-31",
        "boyMood": Mood.HAPPY,
        "scene": { "image": "scenes/street.jpg" },
        "dialogue": {
            "name": "Aiden",
            "text": "Ne aggódj! Annyi időm még van, hogy hazakísérjelek!",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "De kedves tőled, köszönöm!",
                    "followingSituationId": "aiden-32"
                },
                {
                    "reputationValue": -1,
                    "text": "Milyen önfeláldozó...",
                    "followingSituationId": "aiden-33"
                }
            ]
        }
    },{
        "id": "aiden-32",
        "boyMood": Mood.HAPPY,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Egészen a lakásomig jó hangulatban beszélgettünk tovább.",
                    "followingSituationId": "aiden-40"
                }
            ]
        }
    },
    {
        "id": "aiden-33",
        "boyMood": Mood.ANGRY,
        "scene": { "image": "scenes/street.jpg" },
        "dialogue": {
            "name": "Aiden",
            "text": "Nem erőszak. Mehetsz nyugodtan egyedül.",
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
        "id": "aiden-34",
        "boyMood": Mood.ANGRY,
        "scene": { "image": "scenes/street.jpg" },
        "dialogue": {
            "name": "Aiden",
            "text": "Bocsi, de a tanulás az első. Legközelebb hazakísérlek, szia!",
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
        "id": "aiden-35",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/street.jpg" },
        "dialogue": {
            "name": "Aiden",
            "text": "Elsősorban szerettem volna találni valakit, akivel jól el tudok beszélgetni. Aztán csak reménykedek benne, hogy előbb-utóbb kapcsolatot is sikerül kialakítanom egy ilyen személlyel.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "És eddig én hogy szereplek?",
                    "followingSituationId": "aiden-37"
                },
                {
                    "reputationValue": -1,
                    "text": "A beszélgetés része pipa, akkor már csak a kapcsolatot kell megjátszanunk.",
                    "followingSituationId": "aiden-36"
                }
            ]
        }
    },
    {
        "id": "aiden-36",
        "boyMood": Mood.SAD,
        "scene": { "image": "scenes/street.jpg" },
        "dialogue": {
            "name": "Aiden",
            "text": "Igen, eddig én is úgy gondoltam, hogy a beszélgetés része pipa, de talán rosszul tettem...",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Beszélgettünk még pár dologról, majd elköszöntünk egymástól.",
                    "followingSituationId": "aiden-39"
                }
            ]
        }
    },
    {
        "id": "aiden-37",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "scenes/street.jpg" },
        "dialogue": {
            "name": "Aiden",
            "text": "Lehet, hogy furán fog hangzani, de mintha már régóta ismernénk egymást. Olyan nyugodtnak érzem magam miközben veled beszélgetek.",
            "answers": [
                {
                    "reputationValue": +1,
                    "text": "Dehogy furcsa, én is ugyanezt érzem.",
                    "followingSituationId": "aiden-32"
                },
                {
                    "reputationValue": 0,
                    "text": "Húha, hát ez egy kicsit gyors..",
                    "followingSituationId": "aiden-38"
                }
            ]
        }
    },
    {
        "id": "aiden-38",
        "boyMood": Mood.SAD,
        "scene": { "image": "scenes/street.jpg" },
        "dialogue": {
            "name": "Aiden",
            "text": "Igen, igazad van. Talán jobb is ha megyek, szia!",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Szia.",
                    "followingSituationId": "aiden-39"
                }
            ]
        }
    },
    {
        "id": "aiden-39",
        "boyMood": null,
        "scene": { "image": "scenes/street.jpg" },
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
        "id": "aiden-40",
        "boyMood": Mood.NORMAL,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Hát akkor ideértünk...",
                    "followingSituationId": "aiden-41"
                }
            ]
        }
    },
    {
        "id": "aiden-41",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "Aiden",
            "text": "Igen...",
            "answers": [
                {
                    "reputationValue": -1,
                    "text": "Lenne kedved bejönni?",
                    "followingSituationId": "aiden-42"
                },
                {
                    "reputationValue": +1,
                    "text": "Köszönöm, hogy elkísértél!",
                    "followingSituationId": "aiden-44"
                }
            ]
        }
    },
    {
        "id": "aiden-42",
        "boyMood": Mood.SAD,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "Aiden",
            "text": "Nem, nem. Mennem kell, mert zh-m lesz. Örülök, hogy találkoztunk, szia!",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Szia!",
                    "followingSituationId": "aiden-43"
                }
            ]
        }
    },
    {
        "id": "aiden-43",
        "boyMood": null,
        "scene": { "image": "scenes/house.jpg" },
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
        "id": "aiden-44",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "Aiden",
            "text": "Nincs mit, de most már tényleg mennem kell. Nemsokára kezdődik a zh-m.",
            "answers": [
                {
                    "reputationValue": +1,
                    "text": "Nem tudom hogy fejezzem ki magam, de örülnék neki, ha még láthatnálak.",
                    "followingSituationId": "aiden-46"
                },
                {
                    "reputationValue": 0,
                    "text": "Rendben, sok sikert hozzá! Szia!",
                    "followingSituationId": "aiden-45"
                }
            ]
        }
    },
    {
        "id": "aiden-45",
        "boyMood": Mood.SAD,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "Aiden",
            "text": "Szia!",
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
        "id": "aiden-46",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "Aiden",
            "text": "Engem is boldoggá tenne, ha még találkoznánk.",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Lassan, az ujjbegyeivel végigsimított a karomon.",
                    "followingSituationId": "aiden-47"
                }
            ]
        }
    },
    {
        "id": "aiden-47",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Lefagyok.",
                    "followingSituationId": "aiden-48"
                },
                {
                    "reputationValue": +1,
                    "text": "Önkéntelenül is közelebb lépek.",
                    "followingSituationId": "aiden-49"
                }
            ]
        }
    },
    {
        "id": "aiden-48",
        "boyMood": Mood.SAD,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "Aiden",
            "text": "Még találkozunk!",
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
        "id": "aiden-49",
        "boyMood": Mood.BLUSHED,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Mielőtt észbekaphattam volna már az ajkaink egymásra találtak és egy lágy, érzéki csókkal koronázzuk a randevút.",
                    "followingSituationId": "aiden-50"
                }
            ]
        }
    },
    {
        "id": "aiden-50",
        "boyMood": null,
        "scene": { "image": "scenes/house.jpg" },
        "dialogue": {
            "name": "",
            "text": "",
            "answers": [
                {
                    "reputationValue": 0,
                    "text": "Gratulálok! Teljesen elcsavartad Aiden fejét!",
                    "followingSituationId": null
                }
            ]
        }
    }
]