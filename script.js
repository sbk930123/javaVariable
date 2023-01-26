// var, let & const 차이점
// 변수에 어떤 값을 넣기위해서 확보한 공간
// = 연산자로 변수에 값을 할당


// var, let은 변수 선언 후 값을 재할당 가능
let a = 123;
a = 456;

console.log(a);


// const는 변수 선언 후 값을 재할당 할 경우 (type error) 오류 출력
const b = 123;

console.log(b);


// var, let은 먼저 변수 선언 후 값 할당 가능
// const 변수 선언과 동시에 값이 할당 되어야 한다.
let c;

//undefined = 변수는 존재하나 값이 할당되지 않아서 자료형이 정해지지 않았을때 출력
c = '집에 가고싶다.'

console.log(c);

let num;
// ++ : 증감연산자 라고 한다 
// 초기값 : 1 / num이 100과 같아질때 까지 증감연산자로 인해 1씩 더해지면서 100까지 반복한다

// 자바스크립트 사칙연산
// + : 더하기
// - : 빼기
// / : 나누기
// * : 곱하기
// % : 나머지값
for(num = 1; num <= 100; num++) {
  if(num % 2 == 1) {
    console.log(num);
    document.write(num, '<br>');
  }
}



