const person = {
  name: 'joowon',
  job: {
    title: 'student',
    manager: {
      name: 'kang'
    },
  },
};

function printManagerName(person) {
  console.log(person && person.job && person.job.manager && person.job.manager.name);
}

// ? 단축평가
function printManagerName(person) {
  console.log(person?.job?.manager?.name ?? 'have not manager');
}

printManagerName(person);
printManagerName({ name: 'kim' });
printManagerName({});



const kim = {
  name: 'kim',
  admin() {
    console.log('관리자 입니다.');
  }
}

const kang = {
  name: 'kang',
}

// ?.()
kim.admin();
kang.admin?.();
kang.admin?.() ?? console.log('관리자가 아닙니다.');

// ?.[]
console.log(kim['age']);
const hong = {};
console.log(hong?.['name']);
