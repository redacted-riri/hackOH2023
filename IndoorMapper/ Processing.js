import data1 from './mapData.json';

let mapData = {};
let currLoc;
let destLoc;
let path;
let currBuilding;
let locations;
function loadMaps() {
    // Load all maps into memory
    mapData = {data1};
}

function loadNewBuilding(buildingID, locationID) {
    currBuilding = mapData["ID"];
    locations = currBuilding["locations"];
    currLoc = currBuilding.locations[locationID];
    destLoc = locationID;
    updateMap();
}

function loadNewLocations(currDestID, destLocID) {
    currLoc = currDestID;
    destLoc = destLocID;
    updateMap;
}

// On update to a drop down (repath) or on load building
function updateMap() {
    // if current and dest are the same then nothing happens
    if (currLoc == destLoc) {
        return;
    }

    // if on the same floor, path



    // if on diffrent floors, path to nearest stair.
    if (currLoc.position.floor) {

    }

}