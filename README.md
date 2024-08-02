# leaflet-challenge

## Earthquake Data Visualization

### Project Overview
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

### Data
The data for this project is taken from [USGS Earthquake Hazards Program:] (https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)

### Instructions
In this project you will create a visualization for earthquake data using the Leaflet.js library. The final visualization will display a global map that plots all earthquakes from your dataset based on latitude and logitude, include a legend to provide context for the map data, and must include data markers that:
1. Reflect the magnitude pf the earthquakes by size (higher magintudes should appear larger)
2. Reflext the depth of the earthquakes by color (greater depth should appear darker) 
3. Include popups with additional information related to that specific earthquake when the associated marker is clicked 

### Files
To deploy your visualization successfully, ensure you have the following essential files at a minimum:
- `index.html`: This file serves as the main HTML document that establishes the webpage structure and links to required CSS and JavaScript files.
- `style.css`: Contains the CSS code responsible for styling the map and legend components.
- `logic.js`: The JavaScript file responsible for fetching earthquake data, handling data processing, and generating the map visualization.

### Visualization
An example of the final visualization is shown below. Your final visualization must include these same features at minimum, but feel free to challenge yourself to add complexity to your final product.

![Image Alt Text](Images/2-BasicMap.png)

### Resources
OpenStreetMap: Source of the map tiles.
Leaflet.js Documentation: Official documentation for Leaflet.js.
D3.js Documentation: Official documentation for D3.js.
Debugging assistance using AI Xpert Learning Assistant.