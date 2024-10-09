import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({ input, output });

let antwoord = await userInput.question("Geef een hoogte in: ");
let hoogte = parseInt(antwoord);

for(let i = 1; i <= hoogte; i++){
    console.log('*'.repeat(i));
}
process.exit()