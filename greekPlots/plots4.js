/*
    goal is to make a clustered column chart
        grab all greek names - store in an array
        grab all roman names - store in an array
        grab all greek search results - store in an array
        grab all roman search results - store in an array
*/

// declare the arrays to hold each set of data
/*let greekNames = [];
let romanNames = [];
let greekSearchResults = [];
let romanSearchResults = [];
let pairs = [];

// for loop to populate the arrays
// data.js and all of its information (searchResults array is available!!!)
for(var i = 0; i < searchResults.length; i++)
{
    // access each entry of data
    result = searchResults[i];

    // with each entry, push the information into the necessary array
    pairs.push(result.pair);
    romanNames.push(result.romanName);
    greekNames.push(result.greekName);
    romanSearchResults.push(result.romanSearchResults);
    greekSearchResults.push(result.greekSearchResults);
}
*/

// use .map to create the arrays
/*let pairs = searchResults.map(function(result) {
    return searchResults.pair;
});*/

// instead of the longer version of map
//let pairs = searchResults.map(result => result.pair);

// make a function that will allow for us to filter entries with over 1000000
// search results
/*
function popularGreek(entry) {
    return entry.greekSearchResults > 1000000;
    // when the function is used with .filter() function, it finds and returns
    // entries that satisfy that criteria
}

function popularRoman(entry) {
    return entry.romanSearchResults > 1000000;
    // when the function is used with .filter() function, it finds and returns
    // entries that satisfy that criteria
}

// make an array of popular Greek entries
let poppinGreeks = searchResults.filter(popularGreek); // uses the function
                                                        // to filter based on criteria

                                                        // make an array of popular Greek entries
let poppinRomans = searchResults.filter(popularRoman); // uses the function
// to filter based on criteria
*/

// we can also sort and slice the data to filter for the top 10 results
let poppinGreeks = searchResults.sort((a, b) => b.greekSearchResults - a.greekSearchResults);
let poppinRomans = searchResults.sort((a, b) => b.romanSearchResults - a.romanSearchResults);

// slice the data to the first 10 results
poppinGreeks = poppinGreeks.slice(0, 10);
poppinRomans = poppinRomans.slice(0, 10);

// use .reverse() function to flip the data in reverse order - great for horizontal
// bar charts
poppinGreeks = poppinGreeks.reverse();
poppinRomans = poppinRomans.reverse();

// to plot data, first we need to have our trace info
let greekTrace = {
    y: poppinGreeks.map(result => result.pair), //pairs,
    x: poppinGreeks.map(result => result.greekSearchResults), //greekSearchResults,
    text: poppinGreeks.map(result => result.greekName), //greekNames,
    name: "Greek",
    type: "bar",
    orientation: "h"
};

let romanTrace = {
    y: poppinRomans.map(result => result.pair), //pairs,
    x: poppinRomans.map(result => result.romanSearchResults), //romanSearchResults,
    text: poppinRomans.map(result => result.romanName), //romanNames,
    name: "Roman",
    type: "bar",
    orientation: "h"
};

// create the array for our traces to be plotted together
let greekData = [greekTrace];
let romanData = [romanTrace];

// add the layout properties
let greeklayout = {
    title: "Top 10 Greek Search Results",
    margin: {
        l: 100,
        r: 100,
        b: 100,
        t: 100,
    }
};

let romanlayout = {
    title: "Top 10 Roman Search Results",
    margin: {
        l: 100,
        r: 100,
        b: 100,
        t: 100,
    }
};

// render the Greek plot to the tag with id = 'plot'
Plotly.newPlot("plot1", greekData, greeklayout);
Plotly.newPlot("plot2", romanData, romanlayout);