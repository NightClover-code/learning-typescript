class Sorter {
  constructor(public collection: string[]) {}
  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const previous = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = previous;
        }
      }
    }
    console.log(this.collection);
  }
}

let collection = ['d', 'c', 'b', 'a', 'e'];
const sorter = new Sorter(collection);
sorter.sort();
