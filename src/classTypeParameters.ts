{
  class User<T> {


    #age: number;

    constructor(public name: string, age: number, public data: T) {
      this.#age = age;
    }

    getAge() {
      return this.#age;
    }

    setAge(age: number) {
      if (age < 0 || age > 150) {
        return;
      }
      this.#age = age;
    }

    isAdult() {
      return (this.#age && this.#age >= 20);
    }
  }

  const uhyo: User<string> = new User<string>('uhyo', 26, '追加データ');

  const data = uhyo.data;

  const john = new User('john Smith', 15, { num: 123 });

  const data2 = john.data;
}
{
  class User {
    name: string = '';
    age: number = 0;

    isAdult(): boolean {
      return this.age >= 20;
    }
  }

  const uhyo: User = new User();

  const john: User = {
    name: 'john',
    age: 16,
    isAdult: () => false
  }
}
{
  const User = class {
    name: string = '';
    age: number = 0;

    isAdult(): boolean {
      return this.age >= 20;
    }
  }

  const uhyo = new User();
  // const john: User = new User();
}