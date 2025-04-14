//Завдання 1: Визначення рівня успішності студента

let averageGrade = 102; //Math.round((Math.random() * 100) + 1);  

if (averageGrade < 60 && averageGrade >= 0) {
    console.log(`Рівень успішності за оцінками: ${averageGrade} - Незадовільно`);
} else if (averageGrade >= 60 && averageGrade <= 70) {
    console.log(`Рівень успішності за оцінками: ${averageGrade} - Задовільно`);
} else if (averageGrade >= 71 && averageGrade <= 80) {
    console.log(`Рівень успішності за оцінками: ${averageGrade} - Добре`);
} else if (averageGrade >= 81 && averageGrade <= 90) {
    console.log(`Рівень успішності за оцінками: ${averageGrade} - Дуже добре`);
} else if (averageGrade >= 91 && averageGrade <= 100) {
    console.log(`Рівень успішності за оцінками: ${averageGrade} - Відмінно`);
} else console.log(`Error! Your value is not between 0-100 or not a number.`);
