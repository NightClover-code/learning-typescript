//sorting and comparing logic
export class NumbersData {
  constructor(public data: number[]) {}
  get length() {
    return this.data.length;
  }
  swap(leftIndex: number, rightIndex: number) {
    const previous = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = previous;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
}
