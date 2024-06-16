{
  const repeat = <T>(element: T, length: number): T[] => {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    // const result = [];
    return result;
  }

  // console.log(element);
}
{
  const repeatLength: number = 10;
  const repeat = <T>(element: T): T[] => {
    const repeatLength: number = 2;
    const result: T[] = [];
    for (let i = 0; i < repeatLength; i++) {
      result.push(element);
    }
    // const result = [];
    return result;
  }
  console.log(repeat('1'))
  console.log(repeatLength);
}
{
  const sabayomi = (age: number) => {
    if (age >= 20) {
      const lie = age - 5;
      return lie;
    }
    // console.log(lie);
    return age;
  }
  console.log(sabayomi(40));
  console.log(sabayomi(18));
}
{
  const sabayomi = (age: number) => {
    if (age >= 30) {
      const lie = age - 10;
      return lie;
    }
    if (age >= 20) {
      const lie = age - 5;
      return lie;
    }
    return age;
  }
}
{
  const sum = (arr: number[]): number => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    // console.log(i);
    return result;
  }
  console.log(sum([1, 3, 5, 7, 10]));
}