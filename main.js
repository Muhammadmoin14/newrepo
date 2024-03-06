"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
// let a = await inquirer.prompt([{
//     name: "userName",
//     type:"string",
//     message:"what is your name",
// }]);
let age = await inquirer_1.default.prompt([{
        name: "userage",
        type: "integar",
        message: "what is your age",
    }]);
console.log(age.userage);
