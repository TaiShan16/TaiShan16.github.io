// NYC Coordinates: 40.7128° N, 74.0060° W

// make a variable to hold the map - center at the coordinates above
var myMap = L.map("map", {
    center: [40.7128, -74.0060],
    zoom: 11
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// get the GeoJSON data - use D3!
/*d3.json("nyc.geojson").then(
    function(data)
    {
        // because this nyc.geoJson file has polygon coordinates,
        // it plots the outlines of the neighborhoods
        L.geoJson(data).addTo(myMap);
    }
);*/

/*
// specify the properties in a variable to be used with the style property in L.geoJson()
var styling = {
    color: "white", // changes the outlines for each neighborhood to white
    fillColor: "pink", // changes the fill color to pink
    fillOpacity: 0.75, // change the opacity of each neighborhood
    weight: 1.5 // change the weight of the outline of neighborhoods
};

// we can change the colors of the outlines of the neighborhoods
// get the GeoJSON data - use D3!
d3.json("nyc.geojson").then(
    function(data)
    {
        // because this nyc.geoJson file has polygon coordinates,
        // it plots the outlines of the neighborhoods
        // add a style property to change the coloring of the neighborhoods
        L.geoJson(data,
            {
                style: styling
                /* can also use:
                style: {
                    color: "white", // changes the outlines for each neighborhood to white
                    fillColor: "pink", // changes the fill color to pink
                    fillOpacity: 0.75, // change the opacity of each neighborhood
                    weight: 1.5 // change the weight of the outline of neighborhoods
                }
            }).addTo(myMap);
    }
);
*/

// function that colors the borough based on the value of the Borough property passed in
function boroughColor(borough)
{
    if (borough == "Brooklyn")
        return "yellow";
    else if(borough == "Bronx")
        return "red";
    else if(borough == "Manhattan")
        return "orange";
    else if(borough == "Queens")
        return "green";
    else
        return "blue"; // must be Staten Island    
}

// color the boroughs on the map based on the name of the borough
d3.json("nyc.geojson").then(
    function(data)
    {
        // because this nyc.geoJson file has polygon coordinates,
        // it plots the outlines of the neighborhoods

        // can access the boroughs by going to feature.properties.borough
        L.geoJson(data,{
            style: function (feature) {
                return {
                color: "white", // outline color
                fillOpacity: 0.45, // fill opacity
                weight: 1.5, // outline width
                fillColor: // call a function and pass in the value 
                           // of feature.properties.borough
                           boroughColor(feature.properties.borough)
                };
            },
            // this property allows for actions and other attributes to be mapped
            // to each neighborhood on the map
            onEachFeature: function(feature, layer)
            {
                // bind a popup when the neighborhood is clicked
                layer.bindPopup(`<center>
                <h2>
                ${feature.properties.neighborhood}</h2><hr><h3>${feature.properties.borough}</h3>
                </center>`);

                // use layer.on() to add events to the map based on the mouse
                layer.on({
                    // mouseover - hover over a neighborhood with the mouse
                    mouseover: function(event){
                        // tell what triggered the event - store the ref in a variable
                        layer = event.target; 
                        // use setStyle() property to change the fillOpacity
                        layer.setStyle({
                            fillOpacity: 0.9 // brightens the fill of the neighborhood
                        });
                    },
                    // remove mouse from a neighborhood
                    mouseout: function(event){
                        // tell what triggered the event - store the ref in a variable
                        layer = event.target; 
                        // use setStyle() property to change the fillOpacity
                        layer.setStyle({
                            fillOpacity: 0.45 // resets the fill of the neighborhood
                        });
                    }, 
                    // add a click property to zoom in on a neighborhood when clicked
                    click: function(event)
                    {
                        // use a map function, fitBounds to zoom in
                        myMap.fitBounds(event.target.getBounds());
                    }
                });
            }
        }).addTo(myMap);
    }
);