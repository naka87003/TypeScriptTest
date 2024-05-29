import cloneDeep from "lodash/clonedeep.js";

const foo = { obj: { num: 1234 } };

const bar = cloneDeep(foo);

bar.obj.num = 0;

console.log(foo.obj.num);
console.log(bar.obj.num);