const kang = {
  name: 'kang',
  phone: '010-1111-2222',
  say: function () {
    console.log('말을하다');
  }
};


const kim = {
  name: 'kim',
  phone: '010-3333-4444',
  say: function () {
    console.log('말을하다');
  }
};


// 객체로 Function을 정의할 때는 대문자로
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
  this.say = function () {
    console.log(this.sound);
  };
}

const dog = new Animal('개', '해피', '멍멍!!');
const cat = new Animal('고양이', '나비', '야옹~~');

console.log(dog.name);
dog.say();
console.log(cat.name);
cat.say();

dog.say = function () {
  console.log('강아지 몰라몰라');
}

console.log('---');

dog.say();
cat.say();