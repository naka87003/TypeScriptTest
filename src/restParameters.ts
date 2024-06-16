{
  const sum = (base: number, ...args: number[]): number => {
    let result = base;
    for (const num of args) {
      result += num;
    }
    return result;
  }

  console.log(sum(1, 2, 3, 5));

  console.log(sum(123, 456));
  console.log(sum(0b1000));
  console.log(sum);
  const nums: [number, number, number, number] = [10, 20, 30, 40];
  console.log(sum(...nums));
}