class MinMaxStack {
  // overall time O(1) and O(1) space
  constructor() {
    this.minMax = [];
    this.stack = [];
  }

  getMin() {
    return this.minMax[this.minMax.length - 1][0]
  }

  getMax() {
    return this.minMax[this.minMax.length - 1][1]
  }

  pop() {
    this.minMax.pop();
    this.stack.pop();

    return this;
  }

  peek() {
    return this.stack[this.stack.length];
  }

  push(val) {
    this.stack.push(val);

    if (this.minMax.length <= 0) {
      this.minMax[0] = [val, val];
    } else {
      const [prevMin, prevMax] = this.minMax[this.minMax.length - 1];
      
      this.minMax[this.minMax.length] = [
        Math.min(prevMin, val),
        Math.max(prevMax, val),
      ];
    }

    return this;
  }
}
