const readBooks = [
    {
        id: 1,
        tittel: "Frankenstein eller den moderne Prometevs",
        språk: "nynorsk",
        forfatter: "Mary Shelley",
        kjønn: "kvinne",
        år: 1818,
        sjanger: "roman",
        forlag: "Skald",
        sidetall: 320,
        rating: 4,
        format: "innbundet",
        fullført: "januar",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1497518323l/35439116.jpg"
    }, 
    {
        id: 2,
        tittel: "Av mitt blod",
        språk: "nynorsk",
        forfatter: "Ruth Lillegraven",
        kjønn: "kvinne",
        år: 2021,
        sjanger: "roman",
        forlag: "Kagge",
        sidetall: 334,
        rating: 3,
        format: "ebok",
        fullført: "januar",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1613387887l/57074075.jpg"
    },
    {
        id: 3,
        tittel: "Flukt",
        språk:  "nynorsk",
        forfatter: "Carl Frode Tiller",
        kjønn: "mann",
        år: 2021,
        sjanger: "roman",
        forlag: "Aschehoug",
        sidetall: 199,
        rating: 5,
        format: "innbundet",
        fullført: "januar",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1634882856l/59429456.jpg"
    },
    {
        id: 4,
        tittel: "Kan jeg bli med deg hjem",
        språk: "bokmål",
        forfatter: "Marie Aubert",
        kjønn: "kvinne",
        år: 2016,
        sjanger: "noveller",
        forlag: "Oktober",
        sidetall: 117,
        rating: 4,
        format: "ebok",
        fullført: "januar",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1469909350l/31298435.jpg"
    },
    {
        id: 5,
        tittel: "Kvit, norsk mann",
        språk: "nynorsk",
        forfatter: "Brynjulf Jung Tjønn",
        kjønn: "mann",
        år: 2022,
        sjanger: "dikt",
        forlag: "Cappelen Damm",
        sidetall: 93,
        rating: 3,
        format: "ebok",
        fullført: "januar",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1661459311l/62084200.jpg"
    },
    {
        id: 6,
        tittel: "Absurdgalleriet 1",
        språk: "bokmål",
        forfatter: "Sverre Bjørstad Graff",
        kjønn: "mann",
        år: 2017,
        sjanger: "tegneserie",
        forlag: "Kortdugnad AS",
        sidetall: 124,
        rating: 3,
        format: "pocket",
        fullført: "februar",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1675633170l/55336764.jpg"
    },
    {
        id: 7,
        tittel: "Clan Novel Setite",
        språk: "engelsk",
        forfatter: "Kathleen Ryan",
        kjønn: "kvinne",
        år: 1999,
        sjanger: "roman",
        forlag: "Crossroad Press",
        sidetall: 278,
        rating: 3,
        format: "ebok",
        fullført: "februar",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553112367l/44552680.jpg"
    },
    {
        id: 8,
        tittel: "Stormfulle høgder",
        språk: "nynorsk",
        forfatter: "Emily Brontë",
        kjønn: "kvinne",
        år: 1847,
        sjanger: "roman",
        forlag: "Skald",
        sidetall: 472,
        rating: 4,
        format: "innbundet",
        fullført: "mars",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1575804006l/49126852.jpg"
    },
    {
        id: 9,
        tittel: "Då Ivan Iljitsj døydde",
        språk: "nynorsk",
        forfatter: "Leo Tolstoj",
        kjønn: "mann",
        år: 1886,
        sjanger: "roman",
        forlag: "Skald",
        sidetall: 100,
        rating: 4,
        format: "innbundet",
        fullført: "mars",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1676890009l/122772663.jpg"
    },
    {
        id: 10,
        tittel: "Første person entall",
        språk: "bokmål",
        forfatter: "Haruki Murakami",
        kjønn: "mann",
        år: 2020,
        sjanger: "roman",
        forlag: "Pax",
        sidetall: 173,
        rating: 3,
        format: "ebok",
        fullført: "april",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1612111802l/56899510.jpg"
    },
    {
        id: 11,
        tittel: "Kjangs i havet",
        språk: "bokmål",
        forfatter: "William Burroughs",
        kjønn: "mann",
        år: 1991,
        sjanger: "roman",
        forlag: "Lord Jim Publishing",
        sidetall: 54,
        rating: 3,
        format: "innbundet",
        fullført: "april",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1606229574l/56031415.jpg"
    },
    {
        id: 12,
        tittel: "Saltstøttens sønn",
        språk: "bokmål",
        forfatter: "Carl Henrik Berge",
        kjønn: "mann",
        år: 2022,
        sjanger: "roman",
        forlag: "Kolon",
        sidetall: 138,
        rating: 2,
        format: "ebok",
        fullført: "april",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1668995852l/63366722.jpg"
    },
    {
        id: 13,
        tittel: "Bergeners",
        språk: "bokmål",
        forfatter: "Tomas Espedal",
        kjønn: "mann",
        år: 2013,
        sjanger: "roman",
        forlag: "Gyldendal",
        sidetall: 160,
        rating: 3,
        format: "innbundet",
        fullført: "april",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1380180748l/18587159.jpg"
    },
    {
        id: 14,
        tittel: "Sovende floke",
        språk: "bokmål",
        forfatter: "Tore Renberg",
        kjønn: "mann",
        år: 1995,
        sjanger: "roman",
        forlag: "Tiden Norsk Forlag",
        sidetall: 93,
        rating: 2,
        format: "innbundet",
        fullført: "mai",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1577406140l/15841336.jpg"
    },
    {
        id: 15,
        tittel: "Tollak til Ingeborg",
        språk: "nynorsk",
        forfatter: "Tore Renberg",
        kjønn: "mann",
        år: 2020,
        sjanger: "roman",
        forlag: "Capplen Damm",
        sidetall: 167,
        rating: 4,
        format: "innbundet",
        fullført: "mai",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1593292501l/54184416.jpg"
    },
    {
        id: 16,
        tittel: "Pixley Mapogo",
        språk: "bokmål",
        forfatter: "Tore Renberg",
        kjønn: "mann",
        år: 2009,
        sjanger: "roman",
        forlag: "Oktober",
        sidetall: 212,
        rating: 4,
        format: "innbundet",
        fullført: "mai",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1253126229l/6868198.jpg"
    },
    {
        id: 17,
        tittel: "Den 13. disippel",
        språk: "bokmål",
        forfatter: "Tom Egeland",
        kjønn: "mann",
        år: 2014,
        sjanger: "roman",
        forlag: "Aschehoug",
        sidetall: 496,
        rating: 3,
        format: "pocket",
        fullført: "juni",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1397661207l/21525272.jpg"
    },
    {
        id: 18,
        tittel: "Hvem drepte faren min?",
        språk: "bokmål",
        forfatter: "Èdouard Louis",
        kjønn: "mann",
        år: 2018,
        sjanger: "roman",
        forlag: "Aschehoug",
        sidetall: 77,
        rating: 4,
        format: "ebok",
        fullført: "juli",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1559628316l/46142698.jpg"
    },
    {
        id: 19,
        tittel: "Voksne mennesker",
        språk: "bokmål",
        forfatter: "Marie Aubert",
        kjønn: "kvinne",
        år: 2019,
        sjanger: "roman",
        forlag: "Oktober",
        sidetall: 140,
        rating: 3,
        format: "ebok",
        fullført: "juli",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1560706117l/52765414.jpg"
    },
    {
        id: 20,
        tittel: "Muleum",
        språk: "bokmål",
        forfatter: "Erlend Loe",
        kjønn: "mann",
        år: 2007,
        sjanger: "roman",
        forlag: "Cappelen Damm",
        sidetall: 206,
        rating: 4,
        format: "innbundet",
        fullført: "juli",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1223986709l/3869157.jpg"
    }, 
    {
        id: 21,
        tittel: "Vonde blomar",
        språk: "nynorsk",
        forfatter: "Gunnhild Øyehaug",
        kjønn: "kvinne",
        år: 2020,
        sjanger: "noveller",
        forlag: "Kolon",
        sidetall: 101,
        rating: 2,
        format: "ebok",
        fullført: "juli",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1598021470l/55052559.jpg"
    },
    {
        id: 22,
        tittel: "Dracula",
        språk: "bokmål",
        forfatter: "Bram Stoker",
        kjønn: "mann",
        år: 1897,
        sjanger: "roman",
        forlag: "Gyldendal",
        sidetall: 416,
        rating: 3,
        format: "innbundet",
        fullført: "august",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1301484589l/10920638.jpg"
    },
    {
        id: 23,
        tittel: "Veien",
        språk: "bokmål",
        forfatter: "Cormac McCarthy",
        kjønn: "mann",
        år: 2006,
        sjanger: "roman",
        forlag: "Gyldendal",
        sidetall: 254,
        rating: 5,
        format: "pocket",
        fullført: "august",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1339772051l/15706829.jpg"
    },
    {
        id: 24,
        tittel: "Digital minimalism: Choosing a Focused Life in a Noisy World",
        språk: "engelsk",
        forfatter: "Cal Newport",
        kjønn: "mann",
        år: 2019,
        sjanger: "fagbok",
        forlag: "Portfolio",
        sidetall: 302,
        rating: 4,
        format: "ebok",
        fullført: "august",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1549433350l/40672036.jpg"
    },
    {
        id: 25,
        tittel: "666",
        språk: "bokmål",
        forfatter: "Tom Egeland",
        kjønn: "mann",
        år: 2023,
        sjanger: "roman",
        forlag: "Bonnier Norsk Forlag AS",
        sidetall: 508,
        rating: 2,
        format: "ebok",
        fullført: "august",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1682578660l/142416504.jpg"
    },
    {
        id: 26,
        tittel: "Åpne opp ned",
        språk: "bokmål",
        forfatter: "Jason",
        kjønn: "mann",
        år: 2022,
        sjanger: "tegneserie",
        forlag: "Magikon",
        sidetall: 253,
        rating: 3,
        format: "innbundet",
        fullført: "august",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1655583843l/61313915.jpg"
    },
    {
        id: 27,
        tittel: "Om utregning av romfang 1",
        språk: "bokmål",
        forfatter: "Solvej Balle",
        kjønn: "kvinne",
        år: 2020,
        sjanger: "roman",
        forlag: "Forlaget Press",
        sidetall: 212,
        rating: 3,
        format: "ebok",
        fullført: "september",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1655979075l/61340947.jpg"
    },
    {
        id: 28,
        tittel: "Atlas over fyrtårn ved verdens ende",
        språk: "bokmål",
        forfatter: "José Luis González Macías",
        kjønn: "mann",
        år: 2022,
        sjanger: "fagbok",
        forlag: "Spartacus",
        sidetall: 150,
        rating: 5,
        format: "innbundet",
        fullført: "september",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1667057506l/63126127.jpg"
    },
    {
        id: 29,
        tittel: "Stakkar",
        språk: "bokmål",
        forfatter: "Matias Faldbakken",
        kjønn: "mann",
        år: 2022,
        sjanger: "roman",
        forlag: "Oktober",
        sidetall: 184,
        rating: 4,
        format: "ebok",
        fullført: "september",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1663841515l/62686803.jpg"
    },
    {
        id: 30,
        tittel: "Innsirkling 1",
        språk: "nynorsk",
        forfatter: "Carl Frode Tiller",
        kjønn: "mann",
        år: 2007,
        sjanger: "roman",
        forlag: "Aschehoug",
        sidetall: 284,
        rating: 4,
        format: "pocket",
        fullført: "september",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544840384l/3109327.jpg"
    },
    {
        id: 31,
        tittel: "Drømmenes sykkelregister",
        språk: "bokmål",
        forfatter: "Erlend Loe",
        kjønn: "mann",
        år: 2023,
        sjanger: "roman",
        forlag: "Cappelen Damm",
        sidetall: 144,
        rating: 2,
        format: "ebok",
        fullført: "september",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1694367201l/198905277.jpg"
    },
    {
        id: 32,
        tittel: "Av måneskinn gror det ingenting",
        språk: "bokmål",
        forfatter: "Torborg Nedreaas",
        kjønn: "kvinne",
        år: 1947,
        sjanger: "roman",
        forlag: "Aschehoug",
        sidetall: 216,
        rating: 5,
        format: "innbundet",
        fullført: "oktober",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1306854627l/11504713.jpg"
    },
    {
        id: 33,
        tittel: "Jeg er egentlig ikke sånn",
        språk: "bokmål",
        forfatter: "Marie Aubert",
        kjønn: "kvinne",
        år: 2022,
        sjanger: "roman",
        forlag: "Oktober",
        sidetall: 213,
        rating: 4,
        format: "ebok",
        fullført: "oktober",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1665551954l/62973652.jpg"
    },
    {
        id: 34,
        tittel: "Hardanger",
        språk: "nynorsk",
        forfatter: "Marit Eikemo",
        kjønn: "kvinne",
        år: 2019,
        sjanger: "noveller",
        forlag: "Samlaget",
        sidetall: 172,
        rating: 4,
        format: "ebok",
        fullført: "oktober",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1571869363l/48563562.jpg"
    },
    {
        id: 35,
        tittel: "Da vi var yngre",
        språk: "bokmål",
        forfatter: "Oliver Lovrenski",
        kjønn: "mann",
        år: 2023,
        sjanger: "roman",
        forlag: "Aschehoug",
        sidetall: 242,
        rating: 3,
        format: "ebok",
        fullført: "oktober",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1695315016l/199066185.jpg"
    },
    {
        id: 36,
        tittel: "I vargens tid",
        språk: "bokmål",
        forfatter: "George R.R. Martin",
        kjønn: "mann",
        år: 1996,
        sjanger: "roman",
        forlag: "Vendetta forlag",
        sidetall: 409,
        rating: 4,
        format: "lydbok",
        fullført: "november",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1339932400l/15709503.jpg"
    },
    {
        id: 37,
        tittel: "Kampen om jerntronen",
        språk: "bokmål",
        forfatter: "George R.R. Martin",
        kjønn: "mann",
        år: 1996,
        sjanger: "roman",
        forlag: "Vendetta forlag",
        sidetall: 609,
        rating: 4,
        format: "lydbok",
        fullført: "november", 
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1317212259l/12743090.jpg"
    },
    {
        id: 38,
        tittel: "Kongenes kamp",
        språk: "bokmål",
        forfatter: "George R.R. Martin",
        kjønn: "mann",
        år: 1998,
        sjanger: "roman",
        forlag: "Vendetta forlag",
        sidetall: 683,
        rating: 4,
        format: "lydbok",
        fullført: "desember",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353172508l/16154720.jpg"
    },
    {
        id: 39,
        tittel: "PTSD Radio 1",
        språk: "engelsk",
        forfatter: "Masaaki Nakayama",
        kjønn: "mann",
        år: 2022,
        sjanger: "tegneserie",
        forlag: "Kondansha Comics",
        sidetall: 320,
        rating: 2,
        format: "pocket",
        fullført: "desember",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1664248880l/60543010.jpg"
    },
    {
        id: 40,
        tittel: "Dragenes dronning",
        språk: "bokmål",
        forfatter: "George R.R. Martin",
        kjønn: "mann",
        år: 1998,
        sjanger: "roman",
        forlag: "Vendetta forlag",
        sidetall: 627,
        rating: 4,
        format: "lydbok",
        fullført: "desember",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1356972798l/17193256.jpg"
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
            data.datasets[0].borderColor.push("rgba(255, 99, 132, 1)")            
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
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)"
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)"
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
                borderColor: [],
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
            data.datasets[0].borderColor.push("rgba(255, 99, 132, 1)")            
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
                borderColor: ["rgba(255, 99, 132, 1)"],
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
                borderColor: ["rgba(255, 99, 132, 1)"],
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
            data.datasets[0].borderColor.push("rgba(255, 99, 132, 1)")            
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

// Fiks fargetema
function getPhysicalOrDigital() {
    const data = {
        labels: ["Fysisk", "Digital"],
        datasets: [
            {
                label: "Antall bøker lest",
                data: [0, 0],
                backgroundColor: [],
                borderColor: [],
                borderWidth: 1
            
            }
        ]
    }

    for (let book of readBooks) {
        const format = book.format

        switch (format) {
            case "innbundet":
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
            data.datasets[0].borderColor.push("rgba(255, 99, 132, 1)")            
        } else {
            data.datasets[0].data[index] += 1
        }
    }

    return data

}

function randomColor() {
    return "rgba("+ Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ", 0.7)" 

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



// console.log(getNumberOfBooksPerGender())