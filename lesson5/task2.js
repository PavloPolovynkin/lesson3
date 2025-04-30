//Завдання 2: Виконайте попереднє завдання але використовуючи конструкцію switch/case

const averageGrade = 'test'; //Math.round((Math.random() * 100) + 1);
let score;

switch (
	true //в случае когда в кейсах есть условие, то мы должны использовать конструкцию switch(true). А switch(averageGrade) можно юзать при конкретных значениях кейсов
) {
	case averageGrade < 60 && averageGrade >= 0:
		score = 'Незадовільно';
		console.log(`Рівень успішності за оцінками: ${averageGrade} - ${score}`);
		break;
	case averageGrade >= 60 && averageGrade <= 70:
		score = 'Задовільно';
		console.log(`Рівень успішності за оцінками: ${averageGrade} - ${score}`);
		break;
	case averageGrade >= 71 && averageGrade <= 80:
		score = 'Добре';
		console.log(`Рівень успішності за оцінками: ${averageGrade} - ${score}`);
		break;
	case averageGrade >= 81 && averageGrade <= 90:
		score = 'Дуже добре';
		console.log(`Рівень успішності за оцінками: ${averageGrade} - ${score}`);
		break;
	case averageGrade >= 91 && averageGrade <= 100:
		score = 'Відмінно';
		console.log(`Рівень успішності за оцінками: ${averageGrade} - ${score}`);
		break;
	default:
		console.log(`Error! Your value is not between 0-100 or not a number.`);
}
