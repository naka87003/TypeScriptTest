{
  class User {
    #name: string;
    #age: number;
    constructor(name: string, age: number) {
      if (name === '') {
        throw Error('名前は空にできません！');
      }
      this.#name = name;
      this.#age = age;
    }

    getMessage(message: string): string {
      return `${this.#name} (${this.#age}) [${message}]`;
    }
  }

  const uhyo = new User('uhyo', 26);
  console.log(uhyo.getMessage('こんにちは'));
}
{

  function createUser(name: string, age: number) {
    if (name === '') {
      throw Error('名前は空にできません！');
    }
    return (message: string) => `${name} (${age}) [${message}]`;
  }

  const getMessage = createUser('uhyo', 26);

  console.log(getMessage('こんにちは'));
}