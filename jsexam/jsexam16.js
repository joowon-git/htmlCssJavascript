function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function () {
  console.log(this.sound); // 같은 영역에 있기 때문에 this 사용이 가능하다.
}

Animal.prototype.sharedValue = 1; // 프로토타입으로 정의하면 값이 정의가 될 것이다.

const dog = new Animal('개', 'Happy', '멍멍!!');
const cat = new Animal('고양이', 'Naby', '야옹~~');

dog.say();
cat.say();

// 프로토타입 영역을 같이 참고하고 있다. 함수가 객체마다 별개로 만들어지지 않게할 수 있다.
Animal.prototype.say = function () {
  console.log('어떻게 소리내는지 몰라몰라');
}

dog.say();
cat.say();


console.log(dog.sharedValue);
console.log(cat.sharedValue);

// 다시 cat.say 함수를 변경하면,
cat.say = function () {
  console.log('야옹야옹');
}

dog.say();
cat.say();