const array = [1, 3, 5, 7, 4, 7, 6, 9];

const arrayCopy = array.map((n) => n * n); // 새로운 배열을 만들어서 리턴해 준다.

console.log(arrayCopy);


const todos = [
  {
    id: 1,
    text: 'javascript basic11',
    done: false
  },
  {
    id: 2,
    text: 'javascript basic22',
    done: true
  },
  {
    id: 3,
    text: 'javascript basic33',
    done: true
  },
  {
    id: 4,
    text: 'javascript basic44',
    done: false
  }
];

const todoIndex = todos.findIndex((todo) => todo.id === 2);
console.log(todoIndex);

const todo = todos.find((todo) => todo.id === 2);
console.log(todo);

const todoFalse = todos.filter((todo) => todo.done === false);
console.log(todoFalse);

console.log('===========================');
const newTodos = todos.splice(1, 2);
console.log(newTodos);
console.log('===========================');
console.log(todos);
