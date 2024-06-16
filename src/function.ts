{
  console.log(range(-5, 10));

  function range(min: number, max: number): number[] {
    const result: number[] = [];
    for (let i = min; i <= max; i++) {
      result.push(i);
    }
    return result;
  }
}
{
  helloWorldTimes(50);
  function helloWorldTimes(n: number): void {
    if (n > 100) {
      console.log('too many');
      return;
    }
    for (let i = 0; i < n; i++) {
      console.log('Hello, world!');
    }
  }
}
{
  type Human = {
    height: number;
    weight: number;
  };

  const calcBMI = ({ weight, height }: Human): number => weight / height ** 2;
  const uhyo: Human = {
    height: 1.84,
    weight: 72
  };

  console.log(calcBMI(uhyo));
  console.log(typeof calcBMI);
}
{
  type Human = {
    height: number;
    weight: number;
  };

  type ReturnObj = {
    bmi: number;
  };

  const calcBMIObject = ({ height, weight }: Human): ReturnObj => ({ bmi: weight / height ** 2 });
  const uhyo: Human = {
    height: 1.84,
    weight: 72
  };

  console.log(calcBMIObject(uhyo));
}