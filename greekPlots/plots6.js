// set a function that initializes the plot
function init()
{
    // load the data and load the charts
    d3.json("data.json").then(function(data){
        trace = {
            x: data.map(data => data.pair),
            y: data.map(data => data.greekSearchResults),
            type: "bar"
        }

        traceData = [trace];

        layout = {
            title: "Greek Data"
        }

        Plotly.newPlot("plot1", traceData, layout);
    });
}

// make a function that updates the plot
function updatePlot()
{
    d3.json("data.json").then(function(data){
        //console.log(data);

        // define the arrays (even if they are empty)
        let x = [];
        let y = [];
        let label = ""

        // d3 selector on the dropdown menu
        let dropdown = d3.select("#selDataset");

        // access nested value properties from the options in the dropdown
        let dataset = dropdown.property("value");
        
        // based on the value attribute from either option in the dropdown
        // establish the values of the arrays for the data for the traces
        if(dataset == 'greek')
        {
            y = data.sort((a,b) => b.greekSearchResults - a.greekSearchResults).map(data => data.pair).slice(0,10).reverse();
            x = data.sort((a, b) => b.greekSearchResults - a.greekSearchResults).map(data => data.greekSearchResults).slice(0,10).reverse();
            label = 'Greek Search Results';
        }
        else if(dataset == 'roman')
        {
            y = data.sort((a,b) => b.romanSearchResults - a.romanSearchResults).map(data => data.pair).slice(0,10).reverse();
            x = data.sort((a, b) => b.romanSearchResults - a.romanSearchResults).map(data => data.romanSearchResults).slice(0,10).reverse();
            label = 'Roman Search Results';
        }

        // restyle to reset the plot to the right dataset
        let update = {
            title: lable
        }

        // call on Plotly.restyle() to restyle the plot
        Plotly.restyle("plot1", "x", [x]);
        Plotly.restyle("plot1", "y", [y]);
        Plotly.relayout("plot1", update);
    });
   
}

// call on d3 selector associate the dropdown with an object
d3.selectAll("#selDataset").on("change", updatePlot);

// call init()
init();