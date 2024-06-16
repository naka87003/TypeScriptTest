{
  const toLowerOrUpper = (str: string, upper: boolean = false) => {
  if (upper) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  }

  console.log(toLowerOrUpper('Hello'));
  console.log(toLowerOrUpper('Hello', true));
  console.log(toLowerOrUpper('Hello', false));
  console.log(toLowerOrUpper.name);
  console.log(toLowerOrUpper);
}