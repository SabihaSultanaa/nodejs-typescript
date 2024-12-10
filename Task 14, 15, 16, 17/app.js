"use strict";
// TASK 14         GUEST LIST
let guest = ['Samia', 'Maria', 'Nazia', 'Wajiha'];
for (let value of guest) {
    console.log(`\n Dear ${value}, \n\n I would like to invite you at dinner party today. Please come and join us.\n\n Thankyou !\n`);
}
//TASK 15         CHANGING GUEST LIST
console.log(`Due to certain condition ${guest[2]} is not coming at dinner party today.`);
guest[2] = 'Almas';
for (let value of guest) {
    console.log(`\n Dear ${value}, \n\n I would like to invite you at dinner party today. Please come and join us.\n\n Thankyou !\n`);
}
// TASK 16       MORE GUEST
console.log('Hey Guys, Good News ! I found a bigger dinner table.');
guest.unshift('Rubina');
guest.splice(3, 0, 'Uzma');
guest.push('Taha');
for (let value of guest) {
    console.log(`\n Dear ${value}, \n\n I would like to invite you at dinner party today. Please come and join us.\n\n Thankyou !\n`);
}
// TASK 17      SHRINKING GUEST LIST
console.log('Sorry Guys i cannot arrange the big table for dinner so i can invite only two people.');
while (guest.length > 2) {
    let removedGuest = guest.pop();
    console.log(`Sorry, ${removedGuest} I can't invite you at dinner party.`);
}
for (let value of guest)
    (console.log(`Dear ${value}, You're still invited at dinner party.`));
guest.length = 0;
console.log(guest);
