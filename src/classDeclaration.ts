{
  class User {
    name: string = '';
    age: number = 0;
  }

  const uhyo = new User();

  console.log(uhyo.name);
  console.log(uhyo.age);

  uhyo.age = 26;
  console.log(uhyo.age);

  const obj = {
    cl: User
  };

  const uhyo2 = new obj.cl();

  console.log(uhyo2.age);
}
{
  class User {
    name?: string;
    age: number = 0;
  }

  const uhyo = new User();

  console.log(uhyo.name);


  uhyo.name = 'Name';
  console.log(uhyo.name);
}
{
  class User {
    readonly name: string = '';
    age: number = 0;
  }

  const uhyo = new User();
  // uhyo.name = 'Name';
}
{
  class User {
    name: string = '';
    age: number = 0;

    isAdult(): boolean {
      return this.age >= 20;
    }

    setAge(newAge: number) {
      this.age = newAge;
    }
  }

  const uhyo = new User();
  const baby = new User();

  uhyo.setAge(26);

  console.log(uhyo.isAdult());
  console.log(baby.isAdult());
}
