const fs = require('fs');
const XLSX = require('xlsx');


// Укажите путь до файла Excel
const filePath = './bd/teachers.xlsx';

// Прочитайте содержимое файла
const fileContents = fs.readFileSync(filePath);

// Преобразуйте содержимое файла в массив байтов
const data = new Uint8Array(fileContents);

// Прочитайте книгу Excel из массива байтов
const workbook = XLSX.read(data, { type: 'array' });

// Получите первую страницу книги
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

// Преобразуйте страницу в массив объектов
const teachArray = XLSX.utils.sheet_to_json(worksheet);

console.log(teachArray)

// Выведите результат в консоль
// let sortArr = guysArray.sort((a, b) => {
//     if (a.name < b.name) {
//         return -1;
//     }
//     if (a.name > b.name) {
//         return 1;
//     }
//     return 0;
// });

// Сгруппируйте массив по классу
//
 //console.log(sortArr)
//
// module.exports = sortArr;
//
//
// sortArr.navigator.clipboard



// // Найдите элемент, куда вы хотите добавить таблицу
// const tableContainer = document.querySelector(".classes__table-container");
//
// // Создайте таблицу
// const table = document.createElement("table");
//
// // Создайте заголовок таблицы
// const thead = document.createElement("thead");
// const headerRow = document.createElement("tr");
// Object.keys(data[0]).forEach(key => {
//     const th = document.createElement("th");
//     th.textContent = key;
//     headerRow.appendChild(th);
// });
// thead.appendChild(headerRow);
// table.appendChild(thead);
//
// // Создайте тело таблицы
// const tbody = document.createElement("tbody");
// data.forEach(item => {
//     const row = document.createElement("tr");
//     Object.keys(item).forEach(key => {
//         const cell = document.createElement("td");
//         cell.textContent = item[key];
//         row.appendChild(cell);
//     });
//     tbody.appendChild(row);
// });
// table.appendChild(tbody);
//
// // Добавьте таблицу в элемент контейнера
// tableContainer.appendChild(table);
