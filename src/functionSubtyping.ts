{
  type HasName = {
    name: string;
  };
  type HasNameAndAge = {
    name: string;
    age: number;
  };

  const fromAge = (age: number): HasNameAndAge => ({
    name: 'John Smith',
    age
  });

  const f: (age: number) => HasName = fromAge;

  const obj: HasName = f(100);

  console.log(obj);

}
{
  const f = (name: string) => ({ name });

  const g: (name: string) => void = f;
}
{
  type HasName = {
    name: string;
  };
  type HasNameAndAge = {
    name: string;
    age: number;
  };

  const showName = (obj: HasName) => {
    console.log(obj.name);
  };

  const g: (obj: HasNameAndAge) => void = showName;

  showName({ name: 'uhyo' });
  g({ name: 'uhyo', age: 26 });
}
{
  type UnaryFunc = (arg: number) => number;
  type BinaryFunc = (left: number, right: number) => number;

  const double: UnaryFunc = arg => arg * 2
  const add: BinaryFunc = (left, right) => left + right;

  const bin: BinaryFunc = double;

  console.log(bin(10, 15));
}
{
  const sum = (nums: readonly number[]): number => {
    let result = 0;
    for (const num of nums) {
      result += num;
    }
    return result;
  };

  const nums1: readonly number[] = [1, 10, 100];

  console.log(sum(nums1));

  const nums2: number[] = [1, 1, 2, 3, 5, 8];

  console.log(sum(nums2));
}
{
  const fillZero = (nums: number[]): void => {
    for (let i = 0; i < nums.length; i++) {
      nums[i] = 0;
    }
  };

  const nums1: number[] = [1, 10, 100];

  console.log(fillZero(nums1));
  console.log(nums1);

  const nums2: readonly number[] = [1, 1, 2, 3, 5, 8];

  // fillZero(nums2);
}
{
  type User = { name: string };
  type ReadonlyUser = { readonly name: string };

  const uhyoify = (user: User) => {
    user.name = 'uhyo';
  };

  const john: ReadonlyUser = {
    name: 'John Smith'
  };
  // john.name = 'Nanashi';

  uhyoify(john);

  console.log(john);
}