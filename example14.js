// When running in node, fetch API will not work out of the box
const fetch = require("node-fetch");

const getData = async () => {
    const searchResponse = await fetch(
        "http://www.omdbapi.com/?apikey=53aa2cd6&s=Star"
    );
    const searchData = await searchResponse.json();
    const titleData = searchData.Search[0];
    console.log(titleData);
};

getData();
