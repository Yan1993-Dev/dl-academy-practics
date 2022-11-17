// Задание 1

const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

const giveParcel = () => {
    const clientName = peopleWaiting.shift();
    alert(`${clientName} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`);
}

const leaveQueueWithoutParcel = () => {
    const clientName = peopleWaiting.pop();
    alert(`${clientName} не получил(а) посылку и ушел(ла) из очереди`);
}

giveParcel();
giveParcel();
giveParcel();

for (let i = peopleWaiting.length; i > 0; i -= 1) {
    leaveQueueWithoutParcel();
}

// Задание 2

const getSumOfSequence = (number) => {
    const finalArray = [];
    for (let i = 1; i <= number; i += 1) {
        finalArray.push(i);
    }

    return finalArray[0] + finalArray[finalArray.length - 1];
};

const result = getSumOfSequence(10);
console.log('result', result);

// Задание 3


const coffees = ["Latte", "Cappuccino", "Americano"];

let favoriteCoffeeName = prompt("Поиск кофе по названию:");
favoriteCoffeeName = favoriteCoffeeName?.trim().toLowerCase();

const favoriteCoffeeIndex = coffees.findIndex(
    (coffee) => coffee.toLowerCase() === favoriteCoffeeName
);
const favoriteCoffee = coffees[favoriteCoffeeIndex];
if (favoriteCoffee) {
    alert(
        `Держите ваш любимый кофе ${favoriteCoffee}. Он ${favoriteCoffeeIndex + 1
        }-й по популярности в нашей кофейне.`
    );
} else {
    alert("К сожалению, такого вида кофе нет в наличии");
}

// Задание 4
const numbers = [10, 4, 100, -5, 54, 2];

// 1. for

let sum1 = 0;
for (let i = 0; i < numbers.length; i += 1) {
    sum1 += numbers[i] ** 3;
}
console.log('sum1', sum1);

// 2. for of

let sum2 = 0;
for (const number of numbers) {
    sum2 += number ** 3;
}
console.log('sum2', sum2);

// 3. forEach

let sum3 = 0;
numbers.forEach((number) => {
    sum3 += number ** 3;
});
console.log('sum3', sum3);

// 4. reduce

const sum4 = numbers.reduce((acc, number) => {
    return acc + number ** 3;
}, 0);
console.log('sum4', sum4);