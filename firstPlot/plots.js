// define a JS object (value - key pairs) for trace information
var trace = {
    x: xData,
    y: yData
};

// data array that contains our trace info
var data = [trace];

// specify layout attributes
var layout = {
    title: "A Plotly Plot for you Plotters"
};

// call Plotly.newPlot()
// takes 3 args
    // destination - an id in the html
    // data array
    // layout attribute object
Plotly.newPlot("plot", data, layout);