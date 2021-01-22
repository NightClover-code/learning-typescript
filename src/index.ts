//importing classes
import { NumbersData } from './NumbersCollection';
import { Sorter } from './sorter';
//initializing an array of numbers
let numbersCollection = new NumbersData([1, 8, 8, 6, 64, 12, -241]);
const sorter = new Sorter(numbersCollection);
//sorting the array
sorter.sort();
console.log(numbersCollection);
