{
  type F = (repeatNum: number) => string;
  const xRepeat: F = (num) => 'x'.repeat(num);

  console.log(xRepeat(10));

  const g = (num: number): void => {
    for (let i = 0; i < num; i++) {
      console.log('Hello, world!');
    }
  }
}
{
  function range(min: number, max: number): number[] {
    const result = [];
    for (let i = min; i <= max; i++) {
      result.push(i);
    }
    return result;
  }

  const arr = range(5, 10);

  for (const value of arr) {
    console.log(value);
  }

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const arr2 = nums.filter(x => x % 3 === 0);

  console.log(arr2);

  console.log(typeof range);

};