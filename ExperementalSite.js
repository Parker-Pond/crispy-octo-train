

//! problem 1

// let trumpsWallPosts = 20
// let trumpsWallMaterial = "wood"

// for (let beenBuilt = 1; beenBuilt < trumpsWallPosts; beenBuilt++){
//     console.log(`jarvis has built ${beenBuilt} walls of ${trumpsWallMaterial} so far, he has ${trumpsWallPosts - beenBuilt} left`)
// }

//!problem 2

// function zombieTurretDefence(numberofzombies,numberOfTurrets){
//     while (numberofzombies>0){
//     console.log("Zombie Down")
//     numberofzombies -= numberOfTurrets
// }
// }
// zombieTurretDefence(10,3)

//! Problem 3


// const foodItems = ["canned goods","medicin","weed", "twinkies", "something misterious" ];

// function gatheringThingsFromTheWild(whatAmIGetting){
//     console.log ("Jarvis found some:")
//     for (let indexNumber=0; whatAmIGetting.length >= indexNumber; indexNumber++)
//         if (indexNumber < whatAmIGetting.length){
//         console.log (whatAmIGetting[indexNumber])}
//         else{
//             console.log (indexNumber)
//         }
// }
// gatheringThingsFromTheWild(foodItems)

// ! problem 4

const foodItems = ["canned goods","Raider","medicin","weed","Zombie", "twinkies", "something misterious" ];

function RaiderAvoidencePlan(WhatJarvisHasFound){
    for (let whereIsJarvis = 0; whereIsJarvis < WhatJarvisHasFound.length; whereIsJarvis++){
            let whatIsIt = WhatJarvisHasFound[whereIsJarvis];
        if (whatIsIt === "Raider" || whatIsIt ==="Zombie"){
        console.log (`JARVIS has found a ${whatIsIt}!! ENGAGING AVOIDANCE ACTION PLAN!!"`)
        }
        else {
            console.log(`JARVIS has found ${whatIsIt}`)
        }

}
return (`${WhatJarvisHasFound.length} items found on this survey`)
}

console.log(RaiderAvoidencePlan(foodItems))