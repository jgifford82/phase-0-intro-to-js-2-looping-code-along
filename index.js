// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     // debugger
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         // debugger;
//     }
//     return gifts;
// }

// wrapGifts(gifts);

const name = ["Guadalupe", "Ollie", "Aki"];


function writeCards(name) {
    const message = [];
    for (let i = 0; i < name.length; i++) {
        message.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
    }
    return message;
}


// function writeCards(name) {
//     const message = [];
//     for (let i = 0; i < name.length; i++) {
//         message.push(`Thank you, ${name}, for the wonderful surprise} gift!`);
//         debugger;
//     }
//     return message;
// }

// function writeCards(name) {
//     const message = [];
//     for (let i = 0; i < name; i++) {
//         message.push(`Thank you, ${name}, for the wonderful surprise} gift!`);
//     }
//     return message;
// }


function countDown(count) {
    let c = 10;
    while (c >= 0) {
        console.log(c--);
    }
}