

const Parser = require('rss-parser');
const parser = new Parser();
const apiKey = "";

async function goodreads() {
    let feed = await parser.parseURL('https://www.goodreads.com/review/list_rss/10008902?key=' + apiKey + '&shelf=2024');

    let id = 52;

    feed.items.forEach(item => {
        id--;
        let content = item.content.split("\n")       
        
        let img = content[2].split('"')[5].replace(/\_(.*)/g, "jpg");

        let author = content[3].split(":")[1].trim().replace("<br/>", "");
        
        let published = content[6].split(":")[1].trim().replace("<br/>", "");

        let rating = content[7].split(":")[1].trim().replace("<br/>", "");

        let title = content[2].split("alt=")[1].split('"')[1];

        let readAt = content[8].split(":")[1].trim().replace("<br/>", "").split("/")[1];

        let months = ["na", "januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"]

        let month = months[parseInt(readAt)]



        let data = {
            id: id,
            tittel: title,
            språk: "",
            forfatter: author,
            kjønn: "",
            år: published,
            land: "",
            sjanger: "",
            forlag: "",
            sidetall: 0,
            rating: rating,
            format: "",
            fullført: month,
            cover: img
        } 

        appendToJSONArray(data);
    });
};

// Append to JSON file
function appendToJSONArray(data) {
    const fs = require('fs');
    let rawdata = fs.readFileSync('books.json');
    let books = JSON.parse(rawdata);
    books.push(data);
    fs.writeFileSync('books.json', JSON.stringify(books));
}

function reverseJSON() {
    const fs = require('fs');
    let rawdata = fs.readFileSync('books.json');
    let books = JSON.parse(rawdata);
    books.reverse();
    fs.writeFileSync('books.json', JSON.stringify(books));
}

function fixId() {
    const fs = require('fs');
    let rawdata = fs.readFileSync('books.json');
    let books = JSON.parse(rawdata);
    let id = 0;
    books.forEach(book => {
        id++;
        book.id = id;
    });
    fs.writeFileSync('books.json', JSON.stringify(books));
}


//goodreads()
reverseJSON()
//fixId()