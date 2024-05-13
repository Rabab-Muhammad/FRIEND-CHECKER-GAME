#! /usr/bin/env node

//                     Task 3
//.Friend checker game:
//• Prompt the user to enter a name.
//• Use a switch statement to check if the entered name is a known friend.
//• Output a confirmation message if the name is known,
//  otherwise output a default response

import inquirer from "inquirer";

// Sample list of known friends
const knownFriend = ["fatima", "zainab", "sakina", "maria"];

// Function to check if the entered name is a known friend
let checkFriend:{name:string} =await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter a name :",
    }
]);
let {name}=checkFriend;
let friendName = name.toLowerCase();
    switch (friendName) {
        case "fatima":
            console.log(`${friendName} is a known friend!`);
        break;
        case "zainab":
            console.log(`${friendName} is a known friend!`);
        break;
        case "sakina":
            console.log(`${friendName} is a known friend!`);
        break;
        case "maria":
            console.log(`${friendName} is a known friend!`);
        break;
        default: 
        console.log("Sorry, I don\'t recognize that name.");
    };


























