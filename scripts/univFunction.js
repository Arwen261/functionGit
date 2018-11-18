function areaUniv(b, h, kind){ //b - основа h - висота
	var area;
	switch(kind){
		case "tri":
			area = (b * h)/2;
			break;
		case "rec":
			area = b*h;
			break;
		default:
			area = 0;
	}
	console.log("local area:", area)
	return area;// повернення результату
}
console.log("triangle area:", areaUniv(10, 4, "tri")); // параметри функції
console.log("rectangle area:", areaUniv(10, 4, "rec")); // параметри функції
