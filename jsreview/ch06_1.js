// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

// console.log(arrB);

let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];

//-------------------------

// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];

arrC[0] = "hello";
// console.log(arrC);

//-------------------------

// 2-1. 배열 요소 접근 (for문)
for (let i = 0; i < arrC.length; i++) {
  console.log(arrC[i]);
}
for (let item of arrC) {
  console.log(item);
}

//-------------------------

// 3. 구조분해 할당 :  배열

let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);

//-------------------------

// 3. 구조분해 할당 :  객체
let person = {
  name: "홍길동",
  age: 27,
  hobby: "테니스",
};

let { age: myAge, hobby, name, extra = "hello" } = person;
console.log(myAge, hobby, name, extra);

//-------------------------

//  3. 구조분해 할당 :구조 분해 할당해서서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
