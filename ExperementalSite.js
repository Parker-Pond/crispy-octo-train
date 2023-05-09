// let counter = 1

// while (counter < 4){
//     console.log ("in loop " + counter);
//     counter++
// }

// console.log("outside of loop " + counter)



// const thing1 = ["dog","cat", "badger","other thing"]

// for (let i = 0; i< thing1.length; i++) {
//  console.log(thing1[i] )
// }

// function iCanCountISwear(number){
// for(let i = number; i >= 0; i--)
// console.log(i)
// }

// iCanCountISwear(5)

// function pddPrinter(){
// for(let i = 1; i < 20; i+=2)
// console.log(i)
// }
// pddPrinter()

// ?function multiplyMe(thingy){
//  ?   for (let i = 1; i <= 10; i++) {
//   ?   console.log( thingy * i )}

// let i=1
//    * while (i<=10){
//     !console.log (thingy * i )
//  TODO:   i++}
// }
// multiplyMe(16)


// let arrayOfThings = [ 1,2,3,4,5,6,7,90]

// function openTheBox(arrayName, ){
//     for(i=0; i < arrayName.length; i++){
//         console.log(arrayName[i])
//     }

// }

// openTheBox(arrayOfThings)

// !function factorialize(num){
//    let answer = 1
//    while(num > 0){
//    answer = answer * num
//    num--}
// }
// !console.log(factorialize(5))

const myArray = [1,2,3,4,5,6]


function addToMyArray(arrayName, Element){
    console.log (arrayName);
    arrayName= arrayName.pop;
    arrayName = arrayName.unshift(Element);
    console.log (arrayName);

}

addToMyArray(myArray, "DOG")

