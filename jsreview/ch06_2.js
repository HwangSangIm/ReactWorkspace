// 1. Spread 연산자: 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

// 배열
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);
// 객체
let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

// 함수
function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
funcA(...arr1);

//-------------------------

// 2. Rest 매개변수
// -> Rest는 나머지 , 나머지 매개변수

function funcB(...ds) {
  console.log(ds);
}
funcB(...arr1);

function funcB1(one, ...ds) {
  //앞에만 다른 변수명 선언, 즉, funcB1(one, ...ds, fin) <- 에러
  console.log(one);
  console.log(ds);
}
funcB1(...arr1);

//-------------------------

// 3. 얕은 복사 vs. 깊은 복사

let o1 = { name: "홍길동" };
let o2 = o1; // 얕은 복사

let o3 = { name: "홍길동" };
let o4 = { ...o3 }; // 깊은 복사

console.log(o1 === o2); // true
console.log(o3 === o4); // false  왜?객체의 참조값을 비교하기때문  (얕은 비교)
console.log(JSON.stringify(o3) === JSON.stringify(o4)); //true, 객체를 문자열로 변환하여 비교 (깊은 비교)
