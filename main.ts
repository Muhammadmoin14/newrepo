import inquirer from "inquirer";

// let a = await inquirer.prompt([{
//     name: "userName",
//     type:"string",
//     message:"what is your name",

// }]);
let age = await inquirer.prompt([{
    name:"userage",
    type: "integar",
    message:"what is your age",
}])
console.log(age.userage);
