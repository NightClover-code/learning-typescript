//importing sortable
import { Sortable, Sorter } from './sorter';
//sorting and comparing logic
export class NumbersCollection extends Sorter implements Sortable {
  constructor(public data: number[]) {
    super();
  }
  //array length
  get length() {
    return this.data.length;
  }
  //swap method
  swap(leftIndex: number, rightIndex: number) {
    const previous = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = previous;
  }
  //compare method
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
}
