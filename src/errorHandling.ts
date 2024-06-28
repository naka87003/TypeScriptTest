{
  // const throwError = () => {
  //   const error = new Error('エラーが発生しました！！！！！');
  //   throw error;
  // }
  // console.log('エラーを発生させます');
  // throwError();
  // console.log('エラーを発生させました');
}
// {
//   const getAverage = (nums: number[]) => {
//     if (nums.length === 0) {
//       throw new Error('配列が空です');
//       // return undefined;
//     }
//     return sum(nums) / nums.length;
//   };

//   const sum = (nums: number[]): number => {
//     return nums.reduce((accumulator, currentValue) => accumulator + currentValue);
//   };

//   const arr: number[] = [1, 2, 3, 4, 4, 4, 4, 4, 4, 4];

//   console.log(getAverage(arr));
// }
// {

//   const throwError = () => {
//     // undefined.prop;
//     const error = new Error('エラーが発生しました！！！！！');
//     throw error;
//   };

//   try {
//     console.log('エラーを発生させます');
//     throwError();
//     console.log('エラーを発生させました');
//   } catch (err) {
//     console.log('エラーをキャッチしました');
//     console.log(err);
//   }
//   console.log('おわり');
// }
{
  // const throwError = () => {
  //   const error = new Error('エラーが発生しました！！！！！');
  //   throw error;
  //   console.log('これは表示されない');
  // };

  // try {
  //   throwError();
  //   console.log('これは表示されない');
  // } catch (err) {
  //   console.log(err);
  // }
}
{
  try {
    const bigInt = BigInt('foobar');
    console.log(bigInt);
  } catch (err) {
    console.log(err);
    console.log('ok');
  }
}
{
  const throwError = () => {
    const error = new Error('エラーが発生しました！！！！！');
    throw error;
  };

  try {
    console.log('tryブロック1');
    throwError();
    console.log('tryブロック2');
  } catch (err) {
    console.log(err);
    console.log('catchブロック');
  } finally {
    console.log('finallyブロック');
  }
}
// {
//   const throwError = () => {
//     const error = new Error('エラーが発生しました！！！！！');
//     throw error;
//   };

//   try {
//     console.log('エラーを発生させます');
//     throwError();
//     console.log('エラーを発生させました');
//   } finally {
//     console.log('finallyブロック');
//   }
//   console.log('try文の後ろ');
// }
{
  const sum = (max: number): number => {
    try {
      let result = 0;
      for (let i = 1; i <= max; i++) {
        result += i;
      }
      return result;
    } finally {
      console.log('sumから脱出します！！！！');
    }
  }
  console.log(sum(100));
}
{
  const throwNull = () => {
    throw null;
  };
  try {
    throwNull();
  } catch (err) {
    console.log(err, 'が投げられました');
  }
}
{
  class EmptyArrayError extends Error { }

  const sum = (nums: number[]): number => {
    return nums.reduce((previousValue, currentValue) => previousValue + currentValue);
  }

  const getAverage = (nums: number[]) => {
    if (nums.length === 0) {
      throw new EmptyArrayError('配列が空です');
    }
    return sum(nums) / nums.length;
  };
  
  try {
    getAverage([1, 2, 3]);
    getAverage([]);
  } catch (err) {
    if (err instanceof EmptyArrayError) {
      console.log('EmptyArrayErrorをキャッチしました');
    } else {
      throw err;
    }
  }
}