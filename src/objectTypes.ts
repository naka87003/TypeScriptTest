{
  const obj = {
    foo: 123,
    bar: 'Hello, world!',
  };

  type T = {
    foo: number;
    bar: string;
    baz?: string;
  };

  const obj2: T = {
    foo: -50,
    bar: ''
  }
}
{
  type HasLength = {
    length: number;
  };

  const obj: HasLength = 'foo';

  let val: {} = 123;
  val = 'foobar';
  val = { num: 1234 };
  // val = null;
  // val = undefined;
}


