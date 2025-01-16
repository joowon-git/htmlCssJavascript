const hi = (name) => {
  console.log(`hi ${name}`);
}

hi('joowon');

const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

superheroes.forEach(value => {
  console.log(value)
});


superheroes.forEach(hi);

superheroes.forEach(function (name) {
  console.log(`hi ${name}`);
})

process.stdout.write(1 + '');
process.stdout.write(2 + '');

console.log(1, 2, 3);


