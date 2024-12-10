#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        name: "firstNumber",
        type: "number",
        message: "Enter Your First Number"
    },
    {
        name: "secondNumber",
        type: "number",
        message: "Enter Your Second Number"
    },
    {
        name: "operator",
        type: "list",
        message: "Select One Of The Operators To Perform Operation",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus"]
    }]);
if (answer.operator === "Addition") {
    console.log("Your Value Is : ", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log("Your Value Is : ", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log("Your Value Is : ", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log("Your Value Is : ", answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Modulus") {
    console.log("Your Value Is : ", answer.firstNumber % answer.secondNumber);
}
else {
    console.log("Please Select a Valid Operator");
}
