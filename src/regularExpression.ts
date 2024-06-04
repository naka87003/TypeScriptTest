{
  const r: RegExp = /^ab{4}c/i;

  console.log(typeof r);

  console.log(r.test('abbbbc'));
  console.log(r.test('Hello, abc world!'));
  console.log(r.test('ABC'));
  console.log(r.test('こんにちは'));
}
{
  const text: string = 'Hello, abbbbbbbc world! abbc';

  console.log(typeof text);
  console.log(text.replace(/ab+c/, 'foobar'));
  console.log(text.replace(/ab+c/g, 'foobar'));

  const result = text.match(/a(?<worldName>b+)c/);

  if (result !== null) {
    console.log(result.groups?.worldName);
  }

  const result2 = text.match(/a(?<worldName>b+)c/g);

  if (result !== null) {
    console.log(result2);
  }
}
