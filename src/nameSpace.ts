{
  type Item = {
    name: string;
    price: number;
  };

  const apple: Item = {
    name: 'りんご',
    price: 200
  };

  // const orange: apple = {
  //   name: 'みかん',
  //   price: 150
  // };

  console.log(apple);
  // console.log(Item);
}
{
  type Item = {
    name: string;
    price: number;
  };

  // 変数名の名前空間にもItemを作成
  const Item: Item = {
    name: 'りんご',
    price: 200
  };

  // このItemは型名のItem
  const orange: Item = {
    name: 'みかん',
    price: 150
  };

  // このItemは変数名のItem
  console.log(Item);
  console.log(orange);

}