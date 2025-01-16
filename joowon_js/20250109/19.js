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

class Dog extends Animal {
    constructor(name, sound) {
        super('강아지', name, sound);
    }
}

class Cat extends Animal {
    constructor(name, sound) {
        super('고양이', name, sound);
    }
}


const dog = new Dog('해피', '멍멍!!');
const cat = new Cat('나비', '야옹~~');

dog.say();
cat.say();