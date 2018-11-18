function areaTr(b, h){ //b - основа h - висота
	var area = (b * h)/2 ;// локальная переменная (змінна)
	console.log("local area:", area)
	return area;// повернення результату
}
console.log("function return:", areaTr(10, 7)); // параметри функції