// 阿里面试题  原生js题目：实现一个fn函数
const o = { a: 1, b: [1, 2, { c: true }], d: { e: 2, f: 3 }, g: null };

export default function flattening(o) {
  let result = Object.create(null);
  return (target = ((o) => {
    Object.keys(o).forEach((i) => {
      if (typeof o[i] === "object" || Array.isArray(obj)) {
        target(obj[i]);
      } else {
      }
    });
  })(o));
}
// fn(o)=>扁平化函数 util/flattening
//return {"a":1"b[0]":1,"b[1]":2};

//这个没写完
