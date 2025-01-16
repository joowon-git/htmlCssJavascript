const person = {
    name: 'joowon',
    age: '20',
    say: function () {
        console.log(`${this.name}!! hello!`);
    }
}

const personInfo = (person) => {
    const { name, age } = person;
    console.log(name);
    console.log(age);
    person.say();
}

personInfo(person);