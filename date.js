// Date 

// const date = new Date();
// console.log(date);

const date = new Date('1/12/2004');

const months = [
 'January',
 'February',
 'March',
 'April',
 'May',
 'June',
 'July',
 'August',
 'September',
 'October',
 'November',
 'December',
];

const days = [
 'Sunday',
 'Monday',
 'Tuesday',
 'Wednesday',
 'Thursday',
 'Friday',
 'Saturday',
];

const month = date.getMonth();
console.log(month);

const day = date.getDay();
console.log(days[day]);

console.log(date.getDate());
console.log(date.getFullYear());

const sentence = `${days[day]},${date.getDate()} ${months[month]}`;
console.log(sentence);

document.body.innerHTML = sentence;