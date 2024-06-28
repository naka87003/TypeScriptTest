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

  class PremiumUser extends User {
    rank: number = 1;
  }

  const uhyo = new PremiumUser('uhyo', 26);

  console.log(uhyo.rank);
  console.log(uhyo.name);
  console.log(uhyo.isAdult());
  const getMessage = (u: User) => {
    return `こんにちは、${u.name}さん`;
  }
  console.log(getMessage(uhyo));
}
{
  class User {
    name: string;
    protected age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    public isAdult(): boolean {
      return this.age >= 20;
    }
  }

  class PremiumUser extends User {
    rank: number = 1;

    constructor(name: string, age: number, rank: number) {
      super(name, age);
      this.rank = rank;
    }

    public override isAdult(): boolean {
      return this.age >= 10;
    }
  }

  const john = new User('John Smith', 15);
  const taro = new PremiumUser('Taro Yamada', 15, 1);

  console.log(john.isAdult());
  console.log(taro.isAdult());
}
{
  class User {
    name: string;
    protected age: number;
    private _isAdult: boolean;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
      this._isAdult = age >= 20;
    }

    public isAdult(): boolean {
      return this._isAdult;
    }
  }

  class PremiumUser extends User {
    public setAge(newAge: number) {
      this.age = newAge;
    }
  }

  const uhyo = new PremiumUser('uhyo', 26);
  console.log(uhyo.isAdult());

  uhyo.setAge(15);
  console.log(uhyo.isAdult());
}
{
  class User1 {
    private age = 0;
  }

  class SuperUser1 extends User1 {
    // エラー
    // private age = 1;
  }

  class User2 {
    #age = 0;
  }

  class SuperUser2 extends User2 {
    #age = 1;
  }
}