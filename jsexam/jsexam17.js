class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }

  say() {
    console.log(this.sound);
  }
}

const dog = new Animal('개', '해피', '멍멍!!');
const cat = new Animal('고양이', '나비', '야옹~~~~');

console.log(dog.name);
console.log(dog.type);
dog.say();

console.log(cat.name);
console.log(cat.type);
cat.say();


class Dog extends Animal {
  constructor(name, sound) {
    super('강아지', name, sound);
  }
}

const dog2 = new Dog('감자', '머어어엉!!');
console.log(dog2.name);
dog2.say();