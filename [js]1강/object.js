/* <챕터 13-5 객체>

const student = {
    grade: 1,
    school :"lion school"
};

var gradeInfo = student.grade;
console.log(gradeInfo);

var key = Object.keys(student);
console.log(key);

student.whatthe = 3;
console.log(student);

student['class'] = 10;
console.log(student);

var teacher = new Object(); // 빈 객체 만들기
*/

/* < 챕터 13-6 Symbol >

var name1 = "김멋사";
var name2 = "김멋사";
console.log(name1 == name2);

var name3 = Symbol("이테킷");
var name4 = Symbol("이테킷");
console.log(name3 == name4);

var myclass = {
    [Symbol("이테킷")] : 1,
    [Symbol("이테킷")] : 2,
}
*/

/* < 챔터 13-10 문자열 함수 > + 정규표현식 추가해서 가르쳐 줘야 할 듯

// 문자열. indexOf("문자열") : 해당 문자열의 첫글자의 index 반환
var abc = "I am Iron man";
console.log(abc.indexOf("man"));

// 문자열. slice(시작인덱스, 끝인덱스) : 문자열의 시작인덱스 이상 끝인데스 미만의 문자열 반환
console.log(abc.slice(1,5));

// 문자열. toUpperCase(), toLowerCase()
console.log(abc.toUpperCase());
console.log(abc.toLowerCase());

// 문자열. startsWith('문자열') : 해당 문자열로 시작하면 true 반환, 아니면 false 반환
console.log(abc.startsWith("I am"));

// 문자열. endsWith('문자열') : 해당 문자열로 끝나면 true, 아니면 false
console.log(abc.endsWith("I am"));

// 문자열. includes('문자열') : 해당 문자열이 포함되어 있으면 true 없으면 false
console.log(abc.includes("Iron"));
*/

/* < 챔터 13-11 배열 기본 + 함수(1) > 

var mbti = ['INFP', 'INFJ', 'INTP']
console.log(mbti[0]);
console.log(mbti.length);

mbti.push("ESFP");
mbti[4] = ("ESFP");
mbti[0] = "INTP";

var newMbti = [...mbti, "ESTP"];

//push(), pop(), unshift(), shift()
console.log(newMbti.pop());
console.log(newMbti);

console.log(newMbti.shift());
console.log(newMbti);

console.log(newMbti.push("ISTJ"));
console.log(newMbti);

console.log(newMbti.unshift("ISFP"));
console.log(newMbti);
*/

/* < 챔터 13-12 배열 함수(2) > 

var mbti = ['INFP', 'ENFJ', 'INTJ'];

//slice() : 배열 일부 복사
console.log(mbti.slice(0,2));
console.log(mbti.slice(-2));

//join() : 배열 요소들을 연결
console.log(mbti.join())
console.log(mbti.join('-'));

//sort() : 오름차순 정렬
//sort().reverse() : 내림차순 정렬
console.log(mbti.sort())
console.log(mbti.sort().reverse())

*/

/* < 챕터 13-13 조건문(if / switch) >

var a = 5;

if(a > 2){
    console.log(`a > 2`);
}else{
    console.log('a <=2');
}

switch (a) {
    case 5:
        console.log("wow")
        break;

    default:
        break;
}
*/

/* < 챕터 13-14 반복문(for / 이중for / while / do-while) >

for ( var i = 0 ; i < 10 ; i++){
    console.log(i);
}

for( var i = 10; i> 0 ;i--){
    console.log(i);
}

for(var i = 0; i < 10; i++){
    for(var j = 0 ; j < 10; j ++){
        console.log( `${i} - ${j} `);
    }
}

while(1){
    console.log('what the');
    break;
}

var flag = 10;

do{
    console.log("while시작합니다.");
    flag--;
}while(flag < 10);
*/

/* < 챕터 13-15 예외처리(try-catch-finally) >

try{
   
    myfunc();
    throw new Error("에러");

}catch(e){

    console.log("에러 발생");
    console.log(e);
}finally{
    
    console.log("무조건 실행");
}
*/

/* < 챕터 13-16 함수 선언 >
function multiply(a, b){
    return a * b;
}

console.log(multiply(10, 5));

var multiply = function(a, b){
    return a * b;
};
*/

/* < 챕터 13-17 var let const >

var a;
let a;
const a = 10;

//호이스팅
var a = 10;
let b = 10
while(1){
    var a = 1000;
    let b = 1000;
    break;
}
console.log(a);
console.log(b);

//========================//
console.log(word);
console.log(hello);

word = "Hello";
hello = "word";

console.log(word);
console.log(hello);

var word;
let hello;

*/

/* < 챕터 13-18 화살표 함수 >
let plusa = (a, b) => {
    return a + b;
};

let plus = (a, b) => a + b;

let print = word =>{
    console.log(word);
}

let myfunc = () =>{
    return 1;
}
console.log(myfunc());
*/
