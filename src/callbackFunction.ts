{
  type User = {
    name: string;
    age: number;
  }

  const users: User[] = [
    { name: 'Uhyo', age: 26 },
    { name: 'John Smith', age: 15 }
  ];

  const names = users.map((u: User): string => {
    console.log('u is', u);
    return u.name;
  });

  console.log(names);

  // 20歳以上のユーザーだけの配列
  const adultUsers = users.filter((u: User): boolean => u.age >= 20);
  console.log(adultUsers);

  // すべてのユーザーが20歳以上ならtrue
  const allAdult = users.every((u: User): boolean => u.age >= 20);
  console.log(allAdult);

  // 60歳以上のユーザーが1人でもいればtrue
  const seniorExists = users.some((u: User): boolean => u.age >= 60);
  console.log(seniorExists);

  // 名前がJohnで始まるユーザーを探して返す（最初に合致した要素を取得する、存在しない場合はundefinedを返す）
  const john = users.find((u:User):boolean => u.name.startsWith('John'));
  console.log(john);
}