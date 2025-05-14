// 2. 함수 (함수 표현식) : 변수에 함수를 저장
function funcA() {
  //   console.log("funcA");
}

let varA = funcA;
varA();

let varB = function () {    // 익명 함수
  //   console.log("funcB");
};

varB();

//-------------------------
// 3. 화살표 함수

let varC1 = () => {
  return 1;
};
console.log(varC1());

//*************
let varC2 = () => 1;
console.log(varC2());

//*************
let varC3 = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC3(10));
