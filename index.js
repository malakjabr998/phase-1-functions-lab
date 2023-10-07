// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    let distance = Math.abs(someValue-42)
    return distance
}
distanceFromHqInBlocks(36)

//in feet
function distanceFromHqInFeet(someValue){
    let distanceinfeet = distanceFromHqInBlocks(someValue)*264
    return distanceinfeet
}
distanceFromHqInFeet(36)

//travelledinft
function distanceTravelledInFeet(start, destination){
    let disInFt = Math.abs(start-destination)*264
    return disInFt
}
distanceTravelledInFeet (34,38)

//fareprice
let price 
function calculatesFarePrice(start, destination){
    let distance=distanceTravelledInFeet(start,destination)
    if (distance<=400){
    price=0
    } else if (distance>400 && distance<2000){
      price=0.02*(distance-400)
    } else if (distance>2000 && distance<=2500){
        price=25
    } else if (distance>2500){
        price= "cannot travel that far"
    }
    return price
}
calculatesFarePrice(34,38)