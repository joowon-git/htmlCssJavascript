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

const dog = new Animal('강아지', '해피', '멍멍!!');
const cat = new Animal('고양이', '나비', '야옹~~');

dog.say();
cat.say();