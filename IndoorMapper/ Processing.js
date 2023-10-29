import data1 from './data/mapData.json';

let currLoc;
let destLoc;
let path;
let currBuilding;
let locations;


function loadBuilding(locationID) {
    currBuilding = data1;
    locations = currBuilding["locations"];
    currLoc = currBuilding.locations[locationID];
    destLoc = locationID;
    updateMap();
}

export function loadNewDestination(destLocID) {
    destLoc = destLocID;
    console.log(destLoc);
    findPath();
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

function findPath(currLoc, destLoc) {
    var PF = require('pathfinding');  
    var matrix = [
        [0, 0, 0, 1, 0],
        [1, 0, 0, 0, 1],
        [0, 0, 1, 0, 0],
    ];
    var grid = new PF.Grid(matrix);

    var finder = new PF.AStarFinder();
    var tPath = finder.findPath(1, 2, 4, 2, grid);

    let path2d = new Path2D();
    path2d.moveTo(tPath[0][1], tPath[0][0]);
    for (let i = 1; i < path.length; i++) {
        path2d.lineTo(tPath[i][1], tPath[i][0]);
    }
    path = path2d;
}