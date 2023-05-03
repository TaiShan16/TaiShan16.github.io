
// an array of name of books

let gooseBumpsBooks = ["Monster Blood", "It came from beneath the sink",
                        "Why Im afraid of bees"];

// array of the number of tiems I read each book
let timesRead = [3, 6, 4];

// create trace
let trace1 = {
    x: gooseBumpsBooks,
    y: timesRead,
    type: "bar",
    name: "Dr. A's Reads"
};

// make the array that holds the trace
var data = [trace1];

// set the layout information
var layout = {title: "Dr. A's Goosebump Series Read"};

// call Plotly to plot the chart in the id 'plot1'
Plotly.newPlot('plot1', data, layout);

// if there is another reader, add their information
// array of the number of times the other reader read each book
let timesRead2= [6, 3, 1];

// make a second trace for the other reader
let trace2 = {
    x: gooseBumpsBooks,
    y: timesRead2,
    type: 'bar',
    name: "Other User's Reads"
};

// to make a group chart, add the second trace to the array of data
let data2 = [trace1, trace2];

// update the layout
var layout2 ={
    title: "Dr A and the other user's Goosebumps reads"
};

// call plotly to plot the second grouped bar char in the id 'plot2'
Plotly.newPlot('plot2', data2, layout2);
