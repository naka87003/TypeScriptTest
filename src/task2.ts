{
  const getFizzBuzzString = (num: number): string | number => {
    if (num % 3 === 0 && num % 5 === 0) {
      return 'FizzBuzz';
    } else if (num % 3 === 0) {
      return 'Fizz';
    } else if (num % 5 === 0) {
      return 'Buzz';
    } else {
      return num;
    }
  };
  const sequence = (startNum: number, endNum: number): number[] => {
    const result: number[] = [];
    for (let i = startNum; i <= endNum; i++) {
      result.push(i);
    }
    return result;
  };
  for (const i of sequence(1, 100)) {
    const message = getFizzBuzzString(i);
    console.log(message);
  }
}
{
  const map = <T, U>(array: T[], callback: (x: T) => U): U[] => {
    const result: U[] = [];
    for (const element of array) {
      result.push(callback(element));
    }
    return result;
  };

  const data1 = [1, 1, 2, 3, 5, 8, 13];
  const result1 = map(data1, (x) => x * 10);
  console.log(result1);
  const data2 = ['a', 'b', 'c', 'd'];
  const result2 = map(data2, (x) => x + x);
  console.log(result2);
  const data3 = [1, -3, -2, 8, 0, -1];
  const result3 = map(data3, (x) => x >= 0);
  console.log(result3);
}
