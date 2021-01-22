//importing classes
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './sorter';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
//initializing an array of numbers
let numbersCollection = new NumbersCollection([1, 8, 8, 6, 64, 12, -241]);
let charactersCollection = new CharactersCollection('achraf il est beau');

charactersCollection.sort();
console.log(charactersCollection);
