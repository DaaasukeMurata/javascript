// defaultでexportすることで、名前はimport側でつける
export default class {
    constructor(isBomb, isOpen, isFlagged) {
    this.isBomb = isBomb;
    this.isOpen = isOpen;
    this.isFlagged = isFlagged;
  }
}
