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
        fullført: "januar"
    }, 
    {
        id: 2,
        tittel: "Av mitt blod",
        språk: "nynorsk",
        forfatter: "Ruth Lillegraven",
        kjønn: "kvinne",
        år: 2021,
        sjanger: "roman",
        forlag: "Kagge forlag",
        sidetall: 334,
        rating: 3,
        format: "ebok",
        fullført: "januar"
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
        fullført: "januar"
    },
    {
        id: 4,
        tittel: "Kan jeg bli med deg hjem",
        språk: "bokmål",
        forfatter: "Marie Aubert",
        kjønn: "kvinne",
        år: 2016,
        sjanger: "noveller",
        forlag: "Forlaget Oktober",
        sidetall: 117,
        rating: 4,
        format: "ebok",
        fullført: "januar"
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
        fullført: "januar"
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
        fullført: "februar"
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
        fullført: "februar"
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
        fullført: "mars"
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
        fullført: "mars"
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
        fullført: "april"
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
        fullført: "april"
    },
    {
        id: 12,
        tittel: "Saltstøttens sønn",
        språk: "bokmål",
        forfatter: "Carl Henrik Berge",
        kjønn: "mann",
        år: 2022,
        sjanger: "roman",
        forlag: "Kolon forlag",
        sidetall: 138,
        rating: 2,
        format: "ebok",
        fullført: "april"
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
        fullført: "april"
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
        fullført: "mai"
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
        fullført: "mai"
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
        fullført: "mai"
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
        fullført: "juni"
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
        fullført: "juli"
    },
    {
        id: 19,
        tittel: "Voksne mennesker",
        språk: "bokmål",
        forfatter: "Marie Aubert",
        kjønn: "kvinne",
        år: 2019,
        sjanger: "roman",
        forlag: "Forlaget Oktober",
        sidetall: 140,
        rating: 3,
        format: "ebok",
        fullført: "juli"
    },
    {
        id: 20,
        tittel: "Muleum",
        språk: "bokmål",
        forfatter: "Erlend Loe",
        kjønn: "mann",
        år: 2007,
        sjanger: "roman",
        forlag: "Cappelen",
        sidetall: 206,
        rating: 4,
        format: "innbundet",
        fullført: "juli"
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
        fullført: "juli"
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
        fullført: "august"
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
        fullført: "august"
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
        fullført: "august"
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
        fullført: "august"
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
        fullført: "august"
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
        fullført: "september"
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
        fullført: "september"
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
        fullført: "september"
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
        fullført: "september"
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
        fullført: "september"
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
        fullført: "oktober"
    },
    {
        id: 33,
        tittel: "Jeg er egentlig ikke sånn",
        språk: "bokmål",
        forfatter: "Marie Aubert",
        kjønn: "kvinne",
        år: 2022,
        sjanger: "roman",
        forlag: "Forlaget Oktober",
        sidetall: 213,
        rating: 4,
        format: "ebok",
        fullført: "oktober"
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
        fullført: "oktober"
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
        fullført: "oktober"
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
        fullført: "november"
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
        fullført: "november"
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
        fullført: "desember"
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
        fullført: "desember"
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
        fullført: "desember"
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
            
            data.datasets[0].data.push(0)
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

// console.log(getNumberOfBooksPerGender())