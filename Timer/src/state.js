class State {
    constructor() {
      this.useId = 1;
    }
  
    next() {
      this.userId++;
    }
    prevUser() {
      this.userId--;
    }
  }
  