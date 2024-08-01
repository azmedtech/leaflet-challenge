// Create a map centered at a specific location
const myMap = L.map('map').setView([0, 0], 2);
console.log(myMap)

// Add a tile layer for the map background
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Define legend colors and labels with intervals of 20 for depth ranges
const legendColors = ['#008000', '#00FF00', '#ADFF2F', '#FFFF00', '#FFA500', '#FF6347', '#FF0000'];
const legendLabels = ['< 20 km', '20 - 40 km', '40 - 60 km', '60 - 80 km', '80 - 100 km', '100 - 120 km', '> 120 km'];

// Create a legend control
const legend = L.control({ position: 'bottomright' });

legend.onAdd = function() {
    const div = L.DomUtil.create('div', 'info legend');
    let labels = [];

    // Add legend title
    div.innerHTML += '<h4>Earthquake Depth</h4>';

    // Loop through legend colors and labels to create the legend
    legendColors.forEach((color, index) => {
        labels.push(
            '<div class="legend-item"><div class="color-block" style="background:' + color + '"></div>' + legendLabels[index] + '</div>'
        );
    });

    div.innerHTML += '<div class="legend">' + labels.join('') + '</div>';
    return div;
};

// Add the legend to the map
legend.addTo(myMap);

// Fetch the earthquake data from the provided URL
fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson')
    .then(response => response.json())
    .then(data => {
        // Loop through the earthquake data and create markers for each earthquake
        data.features.forEach(feature => {
            const coords = feature.geometry.coordinates;
            const mag = feature.properties.mag;
            const depth = coords[2];

            // Calculate the size of the marker based on the magnitude
            const size = mag * 5;

            // Calculate the fill color based on the depth
            let fillColor;
            if (depth < 20) {
                fillColor = legendColors[0]; // <20 km
            } else if (depth < 40) {
                fillColor = legendColors[1]; // 20-40 km
            } else if (depth < 60) {
                fillColor = legendColors[2]; // 40-60 km
            } else if (depth < 80) {
                fillColor = legendColors[3]; // 60-80 km
            } else if (depth < 100) {
                fillColor = legendColors[4]; // 80-100 km
            } else if (depth < 120) {
                fillColor = legendColors[5]; // 100-120 km
            } else {
                fillColor = legendColors[6]; // >120 km
            }

            // Create a circle marker for each earthquake with fill color based on depth
            const marker = L.circleMarker([coords[1], coords[0]], {
                // Adjust the size based on magnitude
                radius: size, 
                // Match outer line color to fill color
                color: fillColor, 
                // Adjust fill color based on depth
                fillColor: fillColor, 
                fillOpacity: 0.8
            }).addTo(myMap);

            // Create a popup with additional information for each marker
            const popupContent = `<b>Location:</b> ${feature.properties.place}<br><b>Magnitude:</b> ${mag}<br><b>Depth:</b> ${depth} km`;
            marker.bindPopup(popupContent);
        });
    });