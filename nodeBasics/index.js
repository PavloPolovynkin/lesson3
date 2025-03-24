import chalk from 'chalk';

//added "type": "module", but we cannot add comment into json file

let user = 'Till';
let hello_text = `Hi ${user}`;

console.log(chalk.red(hello_text +" :)"));