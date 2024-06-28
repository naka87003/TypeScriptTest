{
  class User {
    name: string = '';
    age: number = 0;
  }

  const uhyo = new User();
  console.log(uhyo instanceof User);
  console.log({} instanceof User);

  const john: User = {
    name: 'John Smith',
    age: 15
  };

  console.log(john instanceof User);
}
{

  type HasAge = {
    age: number;
  }

  class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  const getPrice = (customer: HasAge): number => {
    if (customer instanceof User && customer.name === 'uhyo') {
      return 0;
    }
    return customer.age < 18 ? 1000 : 1800;
  };

  const customer1: HasAge = { age: 15 };
  const customer2: HasAge = { age: 40 };
  const uhyo: User = new User('uhyo', 26);

  console.log(getPrice(customer1))
  console.log(getPrice(customer2))
  console.log(getPrice(uhyo));
}