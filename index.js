// Code your solution in this file!
const hqLocation = 42

function distanceFromHqInBlocks(location) {
    return Math.abs(location - hqLocation)
}


function distanceFromHqInFeet(value) {
    return distanceFromHqInBlocks(value)*264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination)*264
  }

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0
    } else if (distanceTravelledInFeet(start, destination) < 2000) {
        return (distanceTravelledInFeet(start, destination)- 400 )*0.02
    } else if (distanceTravelledInFeet(start, destination) < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
  }