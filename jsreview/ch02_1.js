
// 1. 대입 연산자
let num0 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10;

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20; //num7 = num7 + 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 10;

// 4. 증감 연산자
let num8 = 10;
 console.log(num8++); //아래랑 비교, 후위연산자
 console.log(++num8); //전위연산자

++num8;
num8++;

// 5. 논리 연산자
let or = true || false;

let and = true && false;

let not = !true;

// 6. 비교 연산자
let comp1 = 1 === "1";
let comp2 = 1 !== 2;

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;


// 7. null 병합 연산자 :  null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = var3 ?? var2;

let userName;
let userNickName = "Winterlood";

let displayName = userName ?? userNickName;

// 8. typeof 연산자 : 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";
var7 = true;

let t1 = typeof var7;
console.log(t1);


// 9. 삼항 연산자 : 항을 3개 사용하는 연산자

let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);

