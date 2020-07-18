function staircase(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
    // console.log("#".repeat(i));
  }
}

staircase(95);
