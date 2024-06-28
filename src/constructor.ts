{
  class User {
    name: string;
    readonly age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    // setAge(age: number) {
    //   this.age = age;
    // }

    isAdult() {
      return this.age >= 20;
    }
  }

  const uhyo = new User('uhyo', 26);

  // uhyo.age = 27;

  console.log(uhyo.name);
  console.log(uhyo.isAdult());
}