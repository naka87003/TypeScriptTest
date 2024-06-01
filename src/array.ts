{

  const arr: ReadonlyArray<boolean> = [true, false, true];

  const arr2: (number | boolean | string)[] = [0, true, '文字列', ...arr];

  arr2[1] = 'hi';

  console.log(arr[1]);

  const arr3: boolean[] = [true, false];

  const arr4: Array<{ name: string; }> = [{
    name: 'John'
  }]

  const arr5: number[] = [10, 20, 35];
  
  arr5[5] = 1000;
  console.log(arr5);
  console.log(arr5[3]);
  console.log(arr5.indexOf(1000));
  console.log(arr5.length);
}