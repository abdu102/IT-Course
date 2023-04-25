function isDivisible(n, x, y) {
    if (n % x == 0 || n % y == 0) {
        console.log(true);
    } else {
        console.log(false);
    }
  }
  isDivisible(10, 15, 3)