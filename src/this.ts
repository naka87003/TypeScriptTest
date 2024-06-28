{
  type HasName = {
    name: string;
  }

  class User implements HasName {
    name: string;
    #age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.#age = age;
    }

    public isAdult(): boolean {
      return this.#age >= 20;
    }
  }

  const uhyo = new User('uhyo', 26);
  const john = new User('John Smith', 15);

  console.log(uhyo === john);
  console.log(uhyo.isAdult === john.isAdult);

  const isAdult = uhyo.isAdult;
  // console.log(isAdult());
}
{
  const user = {
    name: 'uhyo',
    age: 26,
    isAdult() {
      return this.age >= 20;
    }
  };

  console.log(user.isAdult());
  user.age = 15;
  console.log(user.isAdult());

  const isAdult = user.isAdult;

  // console.log(isAdult());
}
{

  type HasName = {
    name: string;
  }

  class User implements HasName {
    name: string;
    #age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.#age = age;
    }

    public isAdult(): boolean {
      return this.#age >= 20;
    }

    public filterOlder(users: User[]): User[] {
      return users.filter(u => u.#age >= this.#age);
    }
  }

  const uhyo = new User('uhyo', 26);
  const john = new User('John Smith', 15);
  const bob = new User('Bob', 40);

  console.log(bob.filterOlder([uhyo, john, bob]));
}
{

  type HasName = {
    name: string;
  }

  class User implements HasName {
    name: string;
    #age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.#age = age;
    }

    public isAdult(): boolean {
      return this.#age >= 20;
    }

    public filterOlder(users: User[]): User[] {
      const _this = this;
      return users.filter(function (u) {
        return u.#age >= _this.#age
      });
    }
  }

  const uhyo = new User('uhyo', 26);
  const john = new User('John Smith', 15);
  const bob = new User('Bob', 40);

  console.log(john.filterOlder([uhyo, john, bob]));
}
{
  class User {
    name: string;
    #age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.#age = age;
    }

    public isAdult(): boolean {
      return this.#age >= 20;
    }
  }

  const uhyo = new User('uhyo', 25);
  const john = new User('John Smith', 15);

  console.log(uhyo.isAdult());

  console.log(uhyo.isAdult.apply(john, []));
}
{
  class User {
    name: string;
    #age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.#age = age;
    }

    public isAdult(): boolean {
      return this.#age >= 20;
    }
  }

  const uhyo = new User('uhyo', 25);
  const john = new User('John Smith', 15);

  const boundIsAdult = uhyo.isAdult.bind(uhyo);

  console.log(boundIsAdult());

  console.log(uhyo.isAdult.call(john));
  console.log(boundIsAdult.call(john));
}
{
  class A {
    foo = 123;
    bar = this.foo + 100;

    getFoo() {
      return this.foo;
    }
  }

  const obj = new A();
  console.log(obj.bar);
  console.log(obj.getFoo());
}
{
  class A {
    static foo = 123;
    static bar = this.foo * 2;
    baz = 100;
    static {
      console.log(`bar is ${this.bar}`);
    }

  }
  console.log(A.foo);
}
{
  const map = new Map<string, number>();

  console.log(map instanceof Map);
}
{
  class RepeatArray<T> extends Array<T> {
    repeat(times: number): RepeatArray<T> {
      const result = new RepeatArray<T>();
      for (let i = 0; i < times; i++) {
        result.push(...this);
      }
      return result;
    }
  }

  const arr = new RepeatArray(1, 2);

  console.log(arr);

  arr.push(3);

  const repeated = arr.repeat(3);

  console.log(repeated);
}