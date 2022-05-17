const hqStartingBlock = 42;
// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    return Math.abs(block - hqStartingBlock);    
}
function distanceFromHqInFeet(block) {
    return Math.abs(distanceFromHqInBlocks(block) * 264);
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination - start)) * 264;
}
function calculatesFarePrice(start, destination) {
    if ((Math.abs((destination - start)) * 264) <= 400) {
        return 0;
    } else if ((Math.abs((destination - start)) * 264) > 400 && (Math.abs((destination - start)) * 264) <= 2000) {
        return (((Math.abs((destination - start)) * 264) - 400) * 2) / 100;
    } else if ((Math.abs((destination - start)) * 264) > 2000 && (Math.abs((destination - start)) * 264) < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
