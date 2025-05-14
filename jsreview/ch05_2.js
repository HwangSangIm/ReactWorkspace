// 4. 콜백(CallBack) 함수 : 인수로서 전달된 함수

function main(value) {
  value();
}

function sub() {
  console.log("func two");
}

main(sub);

//------------------------
function main2(value) {
  value();
}

let para = function () {
  console.log("func two2");
};

main2(para);

//------------------------
// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
