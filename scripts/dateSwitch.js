var currentDate = new Date()
	,
	currentDay = currentDate.toDateString()
	;
var holidays = new Object()
	;
holidays["Міжнародний День захисту дітей"] =  new Date(2018, 05, 01)
	;
holidays["Іменини Костянтина і Олени"] =  new Date(2018, 05, 03)
	;
holidays["Всесвітній день довкілля"] =  new Date(2018, 05, 05)
	;
holidays["День друзів"] =  new Date(2018, 05, 09)
	;
holidays["Всесвітній день донора"] =  new Date(2018, 05, 14)
	;
holidays["День Батька (третя неділя червня)"] =  new Date(2018, 05, 17)
	;
holidays["Міжнародний день біженців"] =  new Date(2018, 05, 20)
	;
holidays["Літнє рівнодення (Купала)"] =  new Date(2018, 05, 21)
	;
holidays["День молоді (остання неділя червня)"] =  new Date(2018, 05, 24)
	;
holidays["День Конституції України"] =  new Date(2018, 05, 28)
	;
	console.log("Сьогодні: " + currentDay); 
	console.log("Міжнародний День захисту дітей: " + holidays["Міжнародний День захисту дітей"].toDateString());
	console.log("Іменини Костянтина і Олени: " + holidays["Іменини Костянтина і Олени"].toDateString());
	console.log("Всесвітній день довкілля: " + holidays["Всесвітній день довкілля"].toDateString());
	console.log("День друзів: " + holidays["День друзів"].toDateString());
	console.log("Всесвітній день донора: " + holidays["Всесвітній день донора"].toDateString());
	console.log("День Батька (третя неділя червня): " + holidays["День Батька (третя неділя червня)"].toDateString());
	console.log("Міжнародний день біженців: " + holidays["Міжнародний день біженців"].toDateString());
	console.log("Літнє рівнодення (Купала): " + holidays["Літнє рівнодення (Купала)"].toDateString());
	console.log("День молоді (остання неділя червня): " + holidays["День молоді (остання неділя червня)"].toDateString());
	console.log("День Конституції України: " + holidays["День Конституції України"].toDateString());


	switch(currentDay){
		case holidays["Міжнародний День захисту дітей"].toDateString() :
			console.log("Сьогодні Міжнародний День захисту дітей");
			break;
		case holidays["Іменини Костянтина і Олени"].toDateString() :
			console.log("Сьогодні Іменини Костянтина і Олени");
			break;
		case holidays["Всесвітній день довкілля"].toDateString() :
			console.log("Сьогодні Всесвітній день довкілля");
			break;
		case holidays["День друзів"].toDateString() :
			console.log("Сьогодні День друзів");
			break;
		case holidays["Всесвітній день донора"].toDateString() :
			console.log("Сьогодні Всесвітній день донора");
			break;
		case holidays["День Батька (третя неділя червня)"].toDateString() :
			console.log("Сьогодні День Батька (третя неділя червня)");
			break;
		case holidays["Міжнародний день біженців"].toDateString() :
			console.log("Сьогодні Міжнародний день біженців");
			break;
		case holidays["Літнє рівнодення (Купала)"].toDateString() :
			console.log("Літнє рівнодення (Купала)");
			break;
		case holidays["День молоді (остання неділя червня)"].toDateString() :
			console.log("День молоді (остання неділя червня)");
			break;
		case holidays["День Конституції України"].toDateString() :
			console.log("День Конституції України");
			break;
		default:
			console.log("Сьогодні немає ніякого свята")
	}


/*if (currentDay == holidays["Міжнародний День захисту дітей"].toDateString())
	{
	console.log("Сьогодні Міжнародний День захисту дітей");
	} else if (currentDay == holidays["Іменини Костянтина і Олени"].toDateString())
			{
		console.log("Сьогодні Іменини Костянтина і Олени");
			} else {console.log("Сьогодні немає ніякого свята")
				};*/
