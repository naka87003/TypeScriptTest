{
  const d = new Date('2020-02-03T15:00:00+09:00');

  console.log(d);
  console.log(d.toISOString());
  const timeNum = d.getTime();
  console.log(timeNum);
  const d2 = new Date(timeNum);
  console.log(d2);
  console.log(Date.now());
}