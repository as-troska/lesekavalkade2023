

const Parser = require('rss-parser');
const parser = new Parser();
const apiKey = "";

async function goodreads() {
    let feed = await parser.parseURL('https://www.goodreads.com/review/list_rss/10008902?key=' + apiKey + '&shelf=2023');

    feed.items.forEach(item => {
        let content = item.content.split("\n")

        let img = content[2].split('"')[5].replace(/\_(.*)/g, "jpg");

        console.log('"' + img + '"')
    });
};

goodreads()