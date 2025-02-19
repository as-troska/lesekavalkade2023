const readBooks = [
    {
        "id": 1,
        "tittel": "tilintetgjøre",
        "språk": "bokmål",
        "forfatter": "Michel Houellebecq",
        "kjønn": "mann",
        "år": 2022,
        "sjanger": "roman",
        "forlag": "Cappelen Damm",
        "sidetall": 688,
        "rating": 5,
        "format": "innbunden",
        "fullført": "januar",
        "land": "Frankrike",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1646466240l/60552020.jpg"
    }, {
        "id": 2,
        "tittel": "Der hunden ligger begravd",
        "språk": "bokmål",
        "forfatter": "Kristin Hoffman",
        "kjønn": "kvinne",
        "år": 2021,
        "sjanger": "noveller",
        "forlag": "Pelikanen",
        "sidetall": 136,
        "rating": 2,
        "format": "innbunden",
        "fullført": "januar",
        "land": "Noreg",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1646219079l/60535532.jpg"
    }, {
        "id": 3,
        "tittel": "Monica",
        "språk": "engelsk",
        "forfatter": "Daniel Clowes",
        "kjønn": "mann",
        "år": 2023,
        "sjanger": "teikneseire",
        "forlag": "Fantagraphics",
        "sidetall": 106,
        "rating": 5,
        "format": "innbunden",
        "fullført": "januar",
        "land": "USA",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1720017438l/123209437.jpg"
    }, {
        "id": 4,
        "tittel": "Stål og snø",
        "språk": "bokmål",
        "forfatter": "George R.R. Martin",
        "kjønn": "mann",
        "år": 2000,
        "sjanger": "roman",
        "forlag": "Vendetta",
        "sidetall": 701,
        "rating": 4,
        "format": "lydbok",
        "fullført": "februar",
        "land": "USA",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1366884699l/17849143.jpg"
    }, {
        "id": 5,
        "tittel": "Morgon og kveld",
        "språk": "nynorsk",
        "forfatter": "Jon Fosse",
        "kjønn": "mann",
        "år": 2000,
        "sjanger": "roman",
        "forlag": "Samlaget",
        "sidetall": 115,
        "rating": 4,
        "format": "ebok",
        "fullført": "februar",
        "land": "Noreg",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1361962879l/249351.jpg"
    }, {
        "id": 6,
        "tittel": "Mordenheim (Ravenloft, #9)",
        "språk": "engelsk",
        "forfatter": "Chet Williamson",
        "kjønn": "mann",
        "år": 1994,
        "sjanger": "roman",
        "forlag": "Mass Market Paperback",
        "sidetall": 315,
        "rating": 2,
        "format": "ebok",
        "fullført": "februar",
        "land": "USA",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387712872l/363150.jpg"
    }, {
        "id": 7,
        "tittel": "Blod og gull",
        "språk": "engelsk",
        "forfatter": "George R.R. Martin",
        "kjønn": "mann",
        "år": 2000,
        "sjanger": "roman",
        "forlag": "Vendetta",
        "sidetall": 696,
        "rating": 4,
        "format": "lydbok",
        "fullført": "februar",
        "land": "USA",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1366884908l/17849146.jpg"
    }, {
        "id": 8,
        "tittel": "Skattøya",
        "språk": "bokmål",
        "forfatter": "Robert Louis Stevenson",
        "kjønn": "mann",
        "år": 1882,
        "sjanger": "roman",
        "forlag": "SolumBokvennen",
        "sidetall": 320,
        "rating": 4,
        "format": "innbunden",
        "fullført": "februar",
        "land": "Skottland",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1680268783l/124929779.jpg"
    }, {
        "id": 9,
        "tittel": "Kanelbutikkane og andre forteljingar",
        "språk": "nynorsk",
        "forfatter": "Bruno Schulz",
        "kjønn": "mann",
        "år": 1933,
        "sjanger": "noveller",
        "forlag": "Skald",
        "sidetall": 134,
        "rating": 3,
        "format": "innbunden",
        "fullført": "februar",
        "land": "Polen",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1685610479l/169792928.jpg"
    }, {
        "id": 10,
        "tittel": "Kråkenes Gilde (A Song of Ice and Fire, #4, part #1)",
        "språk": "bokmål",
        "forfatter": "George R.R. Martin",
        "kjønn": "mann",
        "år": 2013,
        "sjanger": "roman",
        "forlag": "Vendetta",
        "sidetall": 500,
        "rating": 3,
        "format": "lydbok",
        "fullført": "mars",
        "land": "USA",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387740373l/20255974.jpg"
    }, {
        "id": 11,
        "tittel": "Cthulhu vaknar",
        "språk": "svensk",
        "forfatter": "H.P. Lovecraft",
        "kjønn": "mann",
        "år": 1928,
        "sjanger": "roman",
        "forlag": "Fria Ligan",
        "sidetall": 64,
        "rating": 4,
        "format": "innbunden",
        "fullført": "mars",
        "land": "USA",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1528120122l/40380768.jpg"
    }, {
        "id": 12,
        "tittel": "Jern og sand",
        "språk": "bokmål",
        "forfatter": "George R.R. Martin",
        "kjønn": "mann",
        "år": 2005,
        "sjanger": "roman",
        "forlag": "Vendetta",
        "sidetall": 527,
        "rating": 4,
        "format": "lydbok",
        "fullført": "mars",
        "land": "USA",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394017840l/20986157.jpg"
    }, {
        "id": 13,
        "tittel": "Drømmer og Støv",
        "språk": "bokmål",
        "forfatter": "George R.R. Martin",
        "kjønn": "mann",
        "år": 2011,
        "sjanger": "roman",
        "forlag": "Vendetta",
        "sidetall": 625,
        "rating": 4,
        "format": "lydbok",
        "fullført": "mars",
        "land": "USA",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1451781498l/23618953.jpg"
    }, {
        "id": 14,
        "tittel": "Dragenes Dans (En sang om is og ild, #5 - del 2)",
        "språk": "bokmål",
        "forfatter": "George R.R. Martin",
        "kjønn": "mann",
        "år": 2011,
        "sjanger": "roman",
        "forlag": "Vendetta",
        "sidetall": 637,
        "rating": 4,
        "format": "lydbok",
        "fullført": "mars",
        "land": "USA",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1431987022l/25561286.jpg"
    }, {
        "id": 15,
        "tittel": "Blekksprut. En kjærlighetshistorie",
        "språk": "bokmål",
        "forfatter": "Henning Røed",
        "kjønn": "mann",
        "år": 2021,
        "sjanger": "sakprosa",
        "forlag": "Humanist",
        "sidetall": 242,
        "rating": 4,
        "format": "innbunden",
        "fullført": "april",
        "land": "Noreg",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1633466531l/59223370.jpg"
    }, {
        "id": 16,
        "tittel": "Uønska åtferd",
        "språk": "nynorsk",
        "forfatter": "Olaug Nilssen",
        "kjønn": "kvinne",
        "år": 2023,
        "sjanger": "roman",
        "forlag": "Samlaget",
        "sidetall": 224,
        "rating": 4,
        "format": "ebok",
        "fullført": "april",
        "land": "Noreg",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1696180373l/199063738.jpg"
    }, {
        "id": 17,
        "tittel": "Tomie",
        "språk": "engelsk",
        "forfatter": "Junji Ito",
        "kjønn": "mann",
        "år": 1987,
        "sjanger": "teikneseire",
        "forlag": "VIZ Media",
        "sidetall": 750,
        "rating": 3,
        "format": "innbunden",
        "fullført": "april",
        "land": "Japan",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1473607428l/29632242.jpg"
    }, {
        "id": 18,
        "tittel": "Det framande landet",
        "språk": "nynorsk",
        "forfatter": "Carl Frode Tiller",
        "kjønn": "mann",
        "år": 2022,
        "sjanger": "dikt",
        "forlag": "Aschehoug",
        "sidetall": 68,
        "rating": 4,
        "format": "innbunden",
        "fullført": "april",
        "land": "Noreg",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1664562244l/62832200.jpg"
    }, {
        "id": 19,
        "tittel": "Merkelig vær i Tokyo",
        "språk": "bokmål",
        "forfatter": "Hiromi Kawakami",
        "kjønn": "kvinne",
        "år": 2001,
        "sjanger": "roman",
        "forlag": "Press",
        "sidetall": 195,
        "rating": 4,
        "format": "pocket",
        "fullført": "mai",
        "land": "Japan",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1423655585l/24909739.jpg"
    }, {
        "id": 20,
        "tittel": "Alle mot alle",
        "språk": "nynorsk",
        "forfatter": "Agnes Ravatn",
        "kjønn": "kvinne",
        "år": 2023,
        "sjanger": "sakprosa",
        "forlag": "Samlaget",
        "sidetall": 300,
        "rating": 4,
        "format": "ebok",
        "fullført": "juni",
        "land": "Noreg",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1687643566l/180552178.jpg"
    }, {
        "id": 21,
        "tittel": "Ventetiden",
        "språk": "bokmål",
        "forfatter": "Keum Suk Gendry-Kim",
        "kjønn": "kvinne",
        "år": 2020,
        "sjanger": "teikneseire",
        "forlag": "Pax",
        "sidetall": 248,
        "rating": 4,
        "format": "pocket",
        "fullført": "juni",
        "land": "Sør-Korea",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1675089389l/90887153.jpg"
    }, {
        "id": 22,
        "tittel": "Cyberpunk 2077: No Coincidence",
        "språk": "engelsk",
        "forfatter": "Rafał Kosik",
        "kjønn": "mann",
        "år": 2023,
        "sjanger": "roman",
        "forlag": "Orbit",
        "sidetall": 416,
        "rating": 3,
        "format": "ebok",
        "fullført": "juni",
        "land": "Polen",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1666573607l/62966999.jpg"
    }, {
        "id": 23,
        "tittel": "Eg rissa desse runene",
        "språk": "nynorsk",
        "forfatter": "Aina Basso",
        "kjønn": "kvinne",
        "år": 2023,
        "sjanger": "noveller",
        "forlag": "Samlaget",
        "sidetall": 155,
        "rating": 5,
        "format": "ebok",
        "fullført": "juni",
        "land": "Noreg",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1695152916l/199030306.jpg"
    }, {
        "id": 24,
        "tittel": "Kvitleik",
        "språk": "nynorsk",
        "forfatter": "Jon Fosse",
        "kjønn": "mann",
        "år": 2023,
        "sjanger": "roman",
        "forlag": "Samlaget",
        "sidetall": 71,
        "rating": 3,
        "format": "ebok",
        "fullført": "juli",
        "land": "Noreg",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1673791122l/77922788.jpg"
    }, {
        "id": 25,
        "tittel": "De andres liv",
        "språk": "bokmål",
        "forfatter": "Ida Fjeldbraaten",
        "kjønn": "kvinne",
        "år": 2024,
        "sjanger": "roman",
        "forlag": "Cappelen Damm",
        "sidetall": 160,
        "rating": 3,
        "format": "ebok",
        "fullført": "juli",
        "land": "Noreg",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1716561333l/213830566.jpg"
    }, {
        "id": 26,
        "tittel": "Kafka på stranden",
        "språk": "bokmål",
        "forfatter": "Haruki Murakami",
        "kjønn": "mann",
        "år": 2002,
        "sjanger": "roman",
        "forlag": "Pax",
        "sidetall": 528,
        "rating": 5,
        "format": "lydbok",
        "fullført": "juli",
        "land": "Japan",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1462872996l/10154587.jpg"
    }, {
        "id": 27,
        "tittel": "The Hills",
        "språk": "bokmål",
        "forfatter": "Matias Faldbakken",
        "kjønn": "mann",
        "år": 2017,
        "sjanger": "roman",
        "forlag": "Oktober",
        "sidetall": 232,
        "rating": 3,
        "format": "lydbok",
        "fullført": "juli",
        "land": "Noreg",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1504106984l/36151519.jpg"
    }, {
        "id": 28,
        "tittel": "Raudt støv : Bok 1",
        "språk": "nynorsk",
        "forfatter": "Tore Kvæven",
        "kjønn": "mann",
        "år": 2023,
        "sjanger": "roman",
        "forlag": "Samlaget",
        "sidetall": 279,
        "rating": 2,
        "format": "ebok",
        "fullført": "juli",
        "land": "Noreg",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1700389373l/202395039.jpg"
    }, {
        "id": 29,
        "tittel": "The Handmaid's Tale",
        "språk": "engelsk",
        "forfatter": "Margaret Atwood",
        "kjønn": "kvinne",
        "år": 1985,
        "sjanger": "roman",
        "forlag": "Anchor",
        "sidetall": 311,
        "rating": 5,
        "format": "ebok",
        "fullført": "juli",
        "land": "Canada",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1578028274l/38447.jpg"
    }, {
        "id": 30,
        "tittel": "Lykke til! 52 ting du dessverre må gjennom",
        "språk": "bokmål",
        "forfatter": "Tegnehanne",
        "kjønn": "kvinne",
        "år": 2017,
        "sjanger": "teikneseire",
        "forlag": "Kagge",
        "sidetall": 206,
        "rating": 3,
        "format": "innbunden",
        "fullført": "juli",
        "land": "Noreg",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1489310243l/34524132.jpg"
    }, {
        "id": 31,
        "tittel": "Jorda rundt på 80 dagar",
        "språk": "nynorsk",
        "forfatter": "Jules Verne",
        "kjønn": "mann",
        "år": 1872,
        "sjanger": "roman",
        "forlag": "Vidarforlaget",
        "sidetall": 353,
        "rating": 3,
        "format": "innbunden",
        "fullført": "august",
        "land": "Frankrike",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1720373359l/216179715.jpg"
    }, {
        "id": 32,
        "tittel": "Flodmaal",
        "språk": "nynorsk",
        "forfatter": "Olav Nygard",
        "kjønn": "mann",
        "år": 1913,
        "sjanger": "dikt",
        "forlag": "Norsk bokreidningslag",
        "sidetall": 78,
        "rating": 4,
        "format": "innbunden",
        "fullført": "august",
        "land": "Noreg",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1416509885l/23593714.jpg"
    }, {
        "id": 33,
        "tittel": "Jerv",
        "språk": "bokmål",
        "forfatter": "Ida Fjeldbraaten",
        "kjønn": "kvinne",
        "år": 2020,
        "sjanger": "roman",
        "forlag": "Cappelen Damm",
        "sidetall": 128,
        "rating": 4,
        "format": "lydbok",
        "fullført": "august",
        "land": "Noreg",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1589872790l/53442453.jpg"
    }, {
        "id": 34,
        "tittel": "Genanse og verdighet",
        "språk": "bokmål",
        "forfatter": "Dag Solstad",
        "kjønn": "mann",
        "år": 1994,
        "sjanger": "roman",
        "forlag": "Oktober",
        "sidetall": 143,
        "rating": 4,
        "format": "lydbok",
        "fullført": "august",
        "land": "Noreg",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1453560228l/1494961.jpg"
    }, {
        "id": 35,
        "tittel": "Innsirkling 2",
        "språk": "nynorsk",
        "forfatter": "Carl Frode Tiller",
        "kjønn": "mann",
        "år": 2010,
        "sjanger": "roman",
        "forlag": "Aschehoug",
        "sidetall": 400,
        "rating": 5,
        "format": "lydbok",
        "fullført": "september",
        "land": "Noreg",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1287850168l/9562097.jpg"
    }, {
        "id": 36,
        "tittel": "Innsirkling 3",
        "språk": "nynorsk",
        "forfatter": "Carl Frode Tiller",
        "kjønn": "mann",
        "år": 2014,
        "sjanger": "roman",
        "forlag": "Aschehoug",
        "sidetall": 475,
        "rating": 5,
        "format": "lydbok",
        "fullført": "september",
        "land": "Noreg",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1408212187l/22924483.jpg"
    }, {
        "id": 37,
        "tittel": "Med restene av mine hender",
        "språk": "bokmål",
        "forfatter": "Priya Bains",
        "kjønn": "kvinne",
        "år": 2021,
        "sjanger": "dikt",
        "forlag": "Oktober",
        "sidetall": 169,
        "rating": 3,
        "format": "ebok",
        "fullført": "september",
        "land": "Noreg",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1628251664l/58712573.jpg"
    }, {
        "id": 38,
        "tittel": "The Book of Human Insects",
        "språk": "engelsk",
        "forfatter": "Osamu Tezuka",
        "kjønn": "mann",
        "år": 1970,
        "sjanger": "teikneseire",
        "forlag": "Vertical",
        "sidetall": 304,
        "rating": 3,
        "format": "pocket",
        "fullført": "september",
        "land": "Japan",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327879597l/9970069.jpg"
    }, {
        "id": 39,
        "tittel": "Det mørkeste rommet",
        "språk": "bokmål",
        "forfatter": "Hilde Reikrås",
        "kjønn": "kvinne",
        "år": 2021,
        "sjanger": "sakprosa",
        "forlag": "Kagge",
        "sidetall": 245,
        "rating": 3,
        "format": "lydbok",
        "fullført": "september",
        "land": "Noreg",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1620717488l/58006767.jpg"
    }, {
        "id": 40,
        "tittel": "Skråninga - Skodespel",
        "språk": "nynorsk",
        "forfatter": "Carl Frode Tiller",
        "kjønn": "mann",
        "år": 2010,
        "sjanger": "skodespel",
        "forlag": "Aschehoug",
        "sidetall": 143,
        "rating": 4,
        "format": "pocket",
        "fullført": "september",
        "land": "Noreg",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1727522557l/219657974.jpg"
    }, {
        "id": 41,
        "tittel": "Portrett av ein varulv",
        "språk": "nynorsk",
        "forfatter": "Carl Frode Tiller",
        "kjønn": "mann",
        "år": 2011,
        "sjanger": "skodespel"	,
        "forlag": "Aschehoug",
        "sidetall": 96,
        "rating": 3,
        "format": "ebok",
        "fullført": "september",
        "land": "Noreg",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1578573373l/14027800.jpg"
    }, {
        "id": 42,
        "tittel": "1Q84 bok 1",
        "språk": "bokmål",
        "forfatter": "Haruki Murakami",
        "kjønn": "mann",
        "år": 2009,
        "sjanger": "roman",
        "forlag": "Lydbokforlaget",
        "sidetall": 375,
        "rating": 4,
        "format": "lydbok",
        "fullført": "oktober",
        "land": "Japan",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1541417525i/42633567.jpg"
    }, {
        "id": 43,
        "tittel": "1Q84 bok 2",
        "språk": "bokmål",
        "forfatter": "Haruki Murakami",
        "kjønn": "mann",
        "år": 2009,
        "sjanger": "roman",
        "forlag": "Lydbokforlaget",
        "sidetall": 376,
        "rating": 4,
        "format": "lydbok",
        "fullført": "oktober",
        "land": "Japan",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1395672126l/21538370.jpg"
    }, {
        "id": 44,
        "tittel": "Arbeidarhjerte - bok 1",
        "språk": "nynorsk",
        "forfatter": "Carl Frode Tiller",
        "kjønn": "mann",
        "år": 2024,
        "sjanger": "roman",
        "forlag": "Aschehoug",
        "sidetall": 349,
        "rating": 4,
        "format": "ebok",
        "fullført": "november",
        "land": "Noreg",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1723194985l/217322454.jpg"
    }, {
        "id": 45,
        "tittel": "1Q84 bok 3",
        "språk": "bokmål",
        "forfatter": "Haruki Murakami",
        "kjønn": "mann",
        "år": 2010,
        "sjanger": "roman",
        "forlag": "Lydbokforlaget",
        "sidetall": 432,
        "rating": 4,
        "format": "lydbok",
        "fullført": "november",
        "land": "Japan",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1331542976l/13536889.jpg"
    }, {
        "id": 46,
        "tittel": "Vegetarianeren",
        "språk": "bokmål",
        "forfatter": "Han Kang",
        "kjønn": "kvinne",
        "år": 2007,
        "sjanger": "roman",
        "forlag": "Pax",
        "sidetall": 214,
        "rating": 5,
        "format": "ebok",
        "fullført": "november",
        "land": "Sør-Korea",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1542658532l/42867147.jpg"
    }, {
        "id": 47,
        "tittel": "Bipersonar",
        "språk": "nynorsk",
        "forfatter": "Carl Frode Tiller",
        "kjønn": "mann",
        "år": 2003,
        "sjanger": "roman",
        "forlag": "Aschehoug",
        "sidetall": 332,
        "rating": 4,
        "format": "lydbok",
        "fullført": "november",
        "land": "Noreg",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1204274083l/2913081.jpg"
    }, {
        "id": 48,
        "tittel": "Sju galningar",
        "språk": "nynorsk",
        "forfatter": "Roberto Arlt",
        "kjønn": "mann",
        "år": 1929,
        "sjanger": "roman",
        "forlag": "Skald",
        "sidetall": 348,
        "rating": 3,
        "format": "innbunden",
        "fullført": "desember",
        "land": "Argentina",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1715782717l/213451569.jpg"
    }, {
        "id": 49,
        "tittel": "Om utregning av romfang 2",
        "språk": "bokmål",
        "forfatter": "Solvej Balle",
        "kjønn": "kvinne",
        "år": 2020,
        "sjanger": "roman",
        "forlag": "Press",
        "sidetall": 240,
        "rating": 4,
        "format": "lydbok",
        "fullført": "desember",
        "land": "Danmark",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1672685837l/75519705.jpg"
    }, {
        "id": 50,
        "tittel": "Om utregning av romfang 3",
        "språk": "bokmål",
        "forfatter": "Solvej Balle",
        "kjønn": "kvinne",
        "år": 2021,
        "sjanger": "roman",
        "forlag": "Press",
        "sidetall": 231,
        "rating": 4,
        "format": "lydbok",
        "fullført": "desember",
        "land": "Danmark",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1687929803l/181558028.jpg"
    }, {
        "id": 51,
        "tittel": "Om utregning av romfang 4",
        "språk": "bokmål",
        "forfatter": "Solvej Balle",
        "kjønn": "kvinne",
        "år": 2024,
        "sjanger": "roman",
        "forlag": "Press",
        "sidetall": 231,
        "rating": 4,
        "format": "lydbok",
        "fullført": "desember",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1706560510l/206166783.jpg"
    }, {
        "id": 52,
        "tittel": "2 AM - She calls",
        "språk": "engelsk",
        "forfatter": "Tomasz Marchewka",
        "kjønn": "mann",
        "år": 2020,
        "sjanger": "noveller",
        "forlag": "CD Project Red",
        "sidetall": 56,
        "rating": 2,
        "format": "ebok",
        "fullført": "desember",
        "land": "Polen",
        "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1640356327l/59922651.jpg"
    }
]

function getNumberOfBooksPerYear() {
    const data = {
        labels: [],
        datasets: [
            {
                label: "Antall bøker lest",
                data: [],
                backgroundColor: [],
                borderColor: [],
                borderWidth: 1
            
            }
        ]
    }

    for (let book of readBooks) {
        const year = book.år
        const index = data.labels.indexOf(year)     

        if (index === -1) {
            data.labels.push(year)
            data.labels.sort()
            data.datasets[0].data.push(0)
            data.datasets[0].backgroundColor.push(randomColor())
            data.datasets[0].borderColor.push("grey")            
        } 
    }

    for (let book of readBooks) {
        const year = book.år
        const index = data.labels.indexOf(year)

        if (index !== -1) {
            data.datasets[0].data[index] += 1
        }
    }    

    return data
}

function getNumberOfBooksPerGender() {
    const data = {
        labels: ["Mann", "Kvinne"],
        datasets: [
            {
                label: "Antall bøker lese per kjønn",
                data: [0, 0],
                backgroundColor: [
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 99, 132, 0.2)"
                    
                ],
                borderColor: [
                    "grey",
                    "grey"
                ],
                borderWidth: 1
            
            }
        ]
    }

    for (let bok of readBooks) {
        if (bok.kjønn === "mann") {
            data.datasets[0].data[0] += 1
        } else if (bok.kjønn === "kvinne") {
            data.datasets[0].data[1] += 1
        }
    }

    return data
}

function getNumberOfBooksPerLanguage() {
    const data = {
        labels: [],
        datasets: [
            {
                label: "Antall bøker lest",
                data: [],
                backgroundColor: [],
                borderColor: ["grey"],
                borderWidth: 1
            
            }
        ]
    }

    for (let book of readBooks) {
        const language = book.språk
        const index = data.labels.indexOf(language)     

        if (index === -1) {
            data.labels.push(language)
            
            data.datasets[0].data.push(1)
            data.datasets[0].backgroundColor.push(randomColor())
            data.datasets[0].borderColor.push("grey")            
        } else {
            data.datasets[0].data[index] += 1
        }
    }

    return data
}

function getBooksReadPerMonth() {
    const data = {
        labels: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August","September", "Oktober", "November", "Desember"],
        datasets: [
            {
                label: "Antall bøker lest",
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                borderColor: ["grey"],
                borderWidth: 1
            
            }
        ]
    }

    for (let book of readBooks) {
        const month = book.fullført.charAt(0).toUpperCase() + book.fullført.slice(1);
        const index = data.labels.indexOf(month);  
        
        data.datasets[0].data[index] += 1
    }

    return data

}

function getPagesReadPerMonth() {
    const data = {
        labels: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August","September", "Oktober", "November", "Desember"],
        datasets: [
            {
                label: "Antall sider lese",
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                borderColor: ["grey"],
                borderWidth: 1
            
            }
        ]
    }

    for (let book of readBooks) {
        const month = book.fullført.charAt(0).toUpperCase() + book.fullført.slice(1);
        const index = data.labels.indexOf(month);  
        
        data.datasets[0].data[index] += book.sidetall
    }

    return data
}

function getTotalPagesRead() {
    let pages = 0

    for (let book of readBooks) {
        pages += book.sidetall
    }

    return pages
}

function getTotalBooksRead() {
    return readBooks.length
}

function getFormatsRead() {
    const data = {
        labels: [],
        datasets: [
            {
                label: "Antall bøker lest",
                data: [],
                backgroundColor: [],
                borderColor: [],
                borderWidth: 1
            
            }
        ]
    }

    for (let book of readBooks) {
        const format = book.format
        const index = data.labels.indexOf(format)     

        if (index === -1) {
            data.labels.push(format)
            
            data.datasets[0].data.push(1)
            data.datasets[0].backgroundColor.push(randomColor())
            data.datasets[0].borderColor.push("grey")            
        } else {
            data.datasets[0].data[index] += 1
        }
    }

    return data

}

function getPublisherCount() {
    const data = {}

    for (let book of readBooks) {
        const publisher = book.forlag
        if (!data[publisher]) {
            data[publisher] = {
                text: publisher,
                value: 500
            }
        } else {
            data[publisher].value += 1000
        }
    }

    return Object.values(data);
}

function getAuthorCount() {
    const data = {}

    for (let book of readBooks) {
        const author = book.forfatter
        if (!data[author]) {
            data[author] = {
                text: author,
                value: 500
            }
        } else {
            data[author].value += 1000
        }
    }

    return Object.values(data);
}

function getCovers() {
    let data = []
    for (let book of readBooks) {
        data.push(book.cover)
    }

    return data
}

function getBookInfoSortedByRating() {
    let data = []
    for (let book of readBooks) {
        data.push({
            title: book.tittel,
            author: book.forfatter,
            rating: book.rating,
            cover: book.cover,
            published: book.år,
            publisher: book.forlag,
            finished: book.fullført,
            pages: book.sidetall
        })
    }
    data.sort((a, b) => (a.rating > b.rating) ? -1 : 1)
    return data
}

// Fiks fargetema
function getPhysicalOrDigital() {
    const data = {
        labels: ["Fysisk", "Digital"],
        datasets: [
            {
                label: "Antall bøker lest",
                data: [0, 0],
                backgroundColor: [randomColor(), randomColor()],
                borderColor: ["grey"],
                borderWidth: 1
            
            }
        ]
    }

    for (let book of readBooks) {
        const format = book.format

        switch (format) {
            case "innbunden":
                data.datasets[0].data[0] += 1
                break;
            case "pocket":
                data.datasets[0].data[0] += 1
                break;
            case "ebok":
                data.datasets[0].data[1] += 1
                break;
            case "lydbok":
                data.datasets[0].data[1] += 1
                break;
            default:
                break;
        }
    }

    return data
}

function getGenres() {
    const data = {
        labels: [],
        datasets: [
            {
                label: "Antall bøker lest",
                data: [],
                backgroundColor: [],
                borderColor: [],
                borderWidth: 1
            
            }
        ]
    }

    for (let book of readBooks) {
        const genre = book.sjanger
        const index = data.labels.indexOf(genre)     

        if (index === -1) {
            data.labels.push(genre)
            
            data.datasets[0].data.push(1)
            data.datasets[0].backgroundColor.push(randomColor())
            data.datasets[0].borderColor.push("grey")            
        } else {
            data.datasets[0].data[index] += 1
        }
    }

    return data

}

function getAverageRating() {
    let total = 0
    for (let book of readBooks) {
        total += book.rating
    }

    return (total / readBooks.length).toFixed(2)

}

function randomColor() {
    return "rgba("+ Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ", 0.7)" 

}

function getNumberOfBooksPerCountry() {
    const data = {
        labels: [],
        datasets: [
            {
                label: "Antall bøker lese per land",
                data: [],
                backgroundColor: [],
                borderColor: [],
                borderWidth: 1
            
            }
        ]
    }

    for (let book of readBooks) {
        const country = book.land
        const index = data.labels.indexOf(country)     

        if (index === -1) {
            data.labels.push(country)
            
            data.datasets[0].data.push(1)
            data.datasets[0].backgroundColor.push(randomColor())
            data.datasets[0].borderColor.push("grey")            
        } else {
            data.datasets[0].data[index] += 1
        }
    }

    return data
}

export const booksPerYear = getNumberOfBooksPerYear()
export const booksPerGender = getNumberOfBooksPerGender()
export const booksPerLanguage = getNumberOfBooksPerLanguage()
export const booksPerMonth = getBooksReadPerMonth()
export const pagesPerMonth = getPagesReadPerMonth()
export const totalPages = getTotalPagesRead()
export const totalBooks = getTotalBooksRead()
export const booksPerFormat = getFormatsRead()
export const physicalOrDigital = getPhysicalOrDigital()
export const publishers = getPublisherCount()
export const authors = getAuthorCount()
export const covers = getCovers()
export const genres = getGenres()
export const booksSortedByRating = getBookInfoSortedByRating()
export const averageRating = getAverageRating()
export const booksPerCountry = getNumberOfBooksPerCountry();

// console.log(getNumberOfBooksPerGender())