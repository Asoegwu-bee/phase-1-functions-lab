// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    let headquaterLocation = 42;
    if (distance >= headquaterLocation) {
      return distance - headquaterLocation;
    }else {
      return headquaterLocation - distance;
    }
}

function distanceFromHqInFeet(pickupDistance) {
  let block = 264;
  let distanceInFeet = distanceFromHqInBlocks(pickupDistance) * block;
  return distanceInFeet;
}

  function distanceTravelledInFeet(uptown, downtown) {
  let block = 264;
  if (downtown > uptown) {
    return (downtown - uptown) * block;
  }else {
    return (uptown - downtown) * block;
  }
}

function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400){
    return 0;
  }
  if (distance >= 400 && distance <= 2000){
    return (distance - 400) * 0.02;
  }
  else if(distance >= 2000 && distance <= 2500){
    return 25;
  }
  else if (distance > 2500){
    return "cannot travel that far";
  }
}