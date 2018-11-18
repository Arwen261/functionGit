/*2. Есть текущая дата. Необхомо вывести её в формате: 2 июня 2018 года*/
var today = new Date();
console.log("", today.toDateString());

var date = new Date();
var monthes = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
var day = date.getDate(),
month = monthes[date.getMonth()],
year = date.getFullYear();
console.log('Сегодня: ' + day + ' ' + month + ' ' + year + ' '); 




 




 	