// Задание 1
const myName = 'name';
const myAge = 28;
const chikenIsFly = false;
const yourFavoriteFilm = null;
const yourCar = undefined;

console.log('myName', myName, typeof myName);
console.log('myAge', myAge, typeof myAge);
console.log('chikenIsFly', chikenIsFly, typeof chikenIsFly);
console.log('yourFavoriteFilm', yourFavoriteFilm, typeof yourFavoriteFilm);
console.log('yourCar', yourCar, typeof yourCar);

// Задание 2+3
let age = 20;
let amount = '100';
let isJavaScriptDev = false;

age = '20';
amount = 100;
isJavaScriptDev = null;

console.log(age);
console.log(amount);
console.log(isJavaScriptDev);

console.log(age+amount);

// Задание 4

// myName - ваше имя
// programmingLanguage - язык программирования
// curatorName - имя куратора
// reasonText - причина, почему вы хотите стать frontend-разработчиком
// numberOfHour - количество часов в день, которое вы уделяете на изучению

const myName = 'Максим';
const programmingLanguage = 'JavaScript';
const curatorName = 'Александр';
const reasonText = 'хочу работать, независя от моего местоположения';
const numberOfHour = 2;

const resultString = `Всем привет! Меня зовут, ${myName}.
Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${curatorName}. 
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а).
Я уверен(а), что пройду данный курс до конца!
`;
console.log(resultString);
