{
  class User {
    static adminUser: User;
    static {
      this.adminUser = new User('管理ユーザー');
      this.adminUser.#age = 9999;
    }

    #age?: number;

    constructor(public name: string) { }

    getAge() {
      return this.#age;
    }

    setAge(age: number) {
      if (age < 0 || age > 150) {
        return;
      }
      this.#age = age;
    }
  }
  console.log(User.adminUser.getAge());
}