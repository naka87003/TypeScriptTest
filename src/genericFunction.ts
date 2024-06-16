{
  const repeat = <T>(element: T, length: number): T[] => {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  }

  console.log(repeat<string>('a', 10));
  console.log(repeat<number>(10, 10));
  console.log(repeat(10, 10));
}
{
  const pair = <Left, Right>(arg1: Left, arg2: Right): [Left, Right] => [arg1, arg2];
  const p = pair<number, string>(1, 'aaa');

  p.push('bbb');

  p[0] = 13;

  console.log(p[1]);
}
{
  const repeat = <T extends { name: string; }>(element: T, length: number): T[] => {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  }

  type HasNameAndAge = {
    name: string;
    age: number;
  };
  console.log(repeat<HasNameAndAge>({
    name: 'uhyo',
    age: 26
  }, 10));
}
{
  type Func = <T>(element: T, length: number) => T[];
  const repeat: Func = (element, length) => {
    const result = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  }
}
{
  const makeTriple = <T>(x: T, y: T, z: T): T[] => {
    return [x, y, z];
  };

  const stringTriple = makeTriple('a', 'b', 'c');

  console.log(stringTriple);

  // const mixTriple = makeTriple('a', 10, true);
}
{
  const double = <T>(func: (arg: T) => T): (arg: T) => T => {
    return (arg: T) => func(func(arg));
  };

  type NumberToNumber = (arg: number) => number;

  const plus2 = double<number>((x: number) => x + 1);

  console.log(plus2(10));
}