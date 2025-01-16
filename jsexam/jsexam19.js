// ?? 단축평가 거짓을 판단하는 기준이 단지 값으로만 판단.

console.log('' ?? 'hello');
console.log(0 ?? 'hello');
console.log(null ?? 'hello');
console.log(undefined ?? 'hello');
console.log(false ?? 'hello');

let oldName = '송아지';
let newName = '송수한';

// 단축평가 사용하지 않은 코드
if (newName) {
  oldName = newName;
}

console.log('단축평가 사용전: ' + oldName);

// 단축평가로 사용한 코드
oldName = '송아지';
newName && (oldName = newName);
console.log('단축평가 사용후: ' + oldName);

// 위와 기준점이 newName/oldName으로 다르지만 이런 방법도 있다.
oldName = '송아지';
oldName &&= newName;
console.log('단축평가 &&= 사용후: ' + newName);

const person = { name: '', age: 0 };

person.age ??= 21; // person age 라는 속성이 없다면 적용.. 있다면 무시

console.log(person);

person.name ||= 'kim';
console.log(person);
person.age ||= 21;
console.log(person);


function makeObj(obj) {
  obj.name ??= 'guest';
  obj.age ??= 20;
  return obj;
}

console.log(makeObj({}));
console.log(makeObj({ name: 'joowon' }));
console.log(makeObj(person));
