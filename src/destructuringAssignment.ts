{
  type NestedObj = {
    obj?: { foo: number };
  };

  const nested1: NestedObj = {
    obj: { foo: 100 }
  };

  const nested2: NestedObj = {};

  const { obj: { foo: foo1 = 2000 } = { foo: 0 } } = nested1;
  const { obj: { foo: foo2 = 1000 } = { foo: 0 } } = nested2;

  console.log(foo1);
  console.log(foo2);
}
{
  const obj = {
    foo: 123,
    bar: 'string',
    baz: false
  }

  const { bar: x, ...restObj } = obj;

  console.log(x);
  console.log(restObj);
}