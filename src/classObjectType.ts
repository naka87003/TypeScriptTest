{
  class User {
    name: string = '';
    age: number = 0;
  }

  type MyUserConstructor = new () => User;

  const MyUser: MyUserConstructor = User;

  // uはuser型を持つ
  const u: User = new MyUser();

  console.log(u.name, u.age);
}
{
  class User {
    name: string = '';
    age: number = 0;
  }

  // new Signature
  type MyUserConstructor = {
    new(): User;
  };

  const MyUser: MyUserConstructor = User;

  // uはuser型を持つ
  const u: User = new MyUser();

  console.log(u.name, u.age);
}