// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)
let obj3 = new Date();

obj1.name ="황";

console.log(obj1);
console.log(obj2);
console.log(obj3);

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "장용미",
  age: 10,
  hobby: "테니스",
  job: "Developer",
  extra: {},
  10: 20,
  "like cat": true,
};
// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
let age = person["age2"]; //꼭!!! 쌍따옴표로 key명!!!!

let property = "hobby";
let hobby = person[property];

// for in
for (let objPrint in person) {
  console.log(objPrint, ":", person[objPrint]);
}

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "developer";
person["favoriteFood"] = "떡볶이";

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result2);

// 4. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// animal = { age: 1 }; 새로운 객체 할당은 x
console.log(animal);

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제
// 5. 메서드 :프로퍼티가 함수

const person2 = {
  name: "홍길동",
  // 메서드 선언
  sayHi: function () {
    //화살표 함수로도 가능능
    console.log("안녕!");
  },
};

// const person2 = {
//   name: "person2",
//
//   sayHi() {      위의 67행과 같은 것!
//     console.log("안녕!");
//   },
// };

person2.sayHi();
person2["sayHi"]();
