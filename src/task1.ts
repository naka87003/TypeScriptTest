{
  type User = {
    name: string;
    age: number;
    premiumUser: boolean;
  }

  const data: string = `
  uhyo,26,1
  John Smith,17,0
  Mary Sue,14,1
  `;

  const users: User[] = [];
  for (const row of data.split('\n')) {
    const record: string = row.trim();
    if (record !== '') {
      const arrUser: string[] = (record.split(','));
      users.push({
        name: arrUser[0],
        age: Number(arrUser[1]),
        premiumUser: Number(arrUser[2]) === 1 ? true : false
      })
    }
  }

  console.log(users);

  for (const user of users) {
    if(user.premiumUser) {
      console.log(`${user.name} (${user.age})はプレミアムユーザーです。`);
    } else {
      console.log(`${user.name} (${user.age})はプレミアムユーザーではありません。`);
    }
  }
}