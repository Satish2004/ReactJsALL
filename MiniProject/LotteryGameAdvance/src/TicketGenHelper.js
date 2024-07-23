let TicketRandomGen = (n) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = Math.round(Math.random() * 10);
  }
  return arr;
};

let sum = (arr) => {
  return arr.reduce((sum, curr) => sum + curr, 0);
};
export { TicketRandomGen, sum };
