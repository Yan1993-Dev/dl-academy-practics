// Задание 1
let age = 20

if (age > 18) {
    console.log('Вы уже взрослый');
}

// Задание 2
const existingUserLogin = "the_best_user";
const existingUserPassword = "12345678";

const userLogin = prompt("Введите логин")?.trim();
const userPassword = prompt("Введите пароль");

if (existingUserLogin === userLogin && existingUserPassword === userPassword) {
    alert(`Добро пожаловать, ${userLogin}!`);
} else {
    alert("Логин и (или) Пароль введены неверно!");
}

// Задание 3

for (let i = 0; i < 3; i += 1) {
    let newStudent = prompt('Введите имя нового студента!');
    newStudent = newStudent?.trim();
    if (newStudent) {
       alert(`Добро пожаловать, ${newStudent}!`)
    }
 }

// Задание 4
let i = 0;
while (i < 3) {
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
        newStudent = newStudent.trim();
        alert(`Добро пожаловать, ${newStudent}!`)
    }
    i += 1;
}

let j = 0;
do {
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
        newStudent = newStudent.trim();
        alert(`Добро пожаловать, ${newStudent}!`)
    }
    j += 1;
} while (j < 3);