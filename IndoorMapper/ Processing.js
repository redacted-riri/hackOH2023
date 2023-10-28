import data1 from './data/mapData.json';

let mapData = {};
let currLoc;
let destLoc;
let path;
let currBuilding;
let locations;
let mapArray;
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

export function loadNewDestination(destLocID) {
    destLoc = destLocID;
    console.log(destLoc);
}

export function loadNewStart(currDestID) {
    currLoc = currDestID;
    console.log(currLoc);
}

// On update to a drop down (repath) or on load building
function updateMap() {
    // if current and dest are the same then nothing happens
    if (currLoc == destLoc) {
        return;
    }

    // if on the same floor, path
    if (currLoc.position.floor = destLoc.position.floor)
    {
        path = findPath(currLoc, destLoc);
    }

    // if on diffrent floors, path to nearest stair.
    if (currLoc.position.floor != destLoc.position.floor) {
        // Find all available stairs, find closest stair

        path = findPath(currLoc, STAIRLOC);
    }

}

function createArray() {
    mapArray = [];
}

function findPath(currLoc, destLoc) {
    var PF = require('pathfinding');  
    var matrix = [
        [0, 0, 0, 1, 0],
        [1, 0, 0, 0, 1],
        [0, 0, 1, 0, 0],
    ];
    var grid = new PF.Grid(matrix);

    var finder = new PF.AStarFinder();
    var path = finder.findPath(1, 2, 4, 2, grid);

    // turn this path into path2d 
}