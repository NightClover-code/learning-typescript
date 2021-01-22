import { Sortable, Sorter } from './sorter';

export class CharactersCollection extends Sorter implements Sortable {
  constructor(public data: string) {
    super();
  }
  //array length
  get length() {
    return this.data.length;
  }
  //swap method
  swap(leftIndex: number, rightIndex: number) {
    //splitting the word / string onto an array
    const characters = this.data.split('');
    //swaping logic
    const previous = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = previous;
    //joining back the string
    this.data = characters.join('');
  }
  //compare method
  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }
}
