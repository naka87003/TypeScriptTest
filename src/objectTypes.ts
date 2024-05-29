const obj = {
  foo: 123,
  bar: 'Hello, world!',
};

type T = typeof obj;

const obj2: T = {
  foo: -50,
  bar: ''
}




