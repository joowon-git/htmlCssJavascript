const dog = {
  name: '멍멍이',
  sound: '멍멍!!',
  say: function () {
    console.log(this.sound);
    console.log(`dog 객체 안에서의 :: ${this}`);
    console.log('dog 객체 안에서의 :: ' + this);
  },
  say2: () => {
    console.log(this);  // 객체 안에서 화살표 함수를 사용하고 this 를 사용하면, this가 가리키는 게 객체가 아닌 더 상위를 가리키기 때문에 객체 안에서는 화살표 함수 사용을 권장하지 않는다!
  }
}

dog.say();

function test() {
  console.log(this);
}

test();

