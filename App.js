const fs = require('fs');
const path = require('path')

// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
//
// fs.mkdir(path.join(__dirname, 'main'),(err)=>{
//     if (err) {
//         console.log(err)
//     }
//     console.log('Directody is creasted')
// })
//
// fs.mkdir(path.join(__dirname,'main','online'),(err)=>{
//     if(err){
//         console.log(err);
//         throw err;
//     }
// })
// fs.mkdir(path.join(__dirname,'main','inPerson'),(err)=>{
//     if(err){
//         console.log(err);
//         throw err;
//     }
// })
//
// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }),
// відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів,
// але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.


let onlineUsers =
    [
        {NAME: 'Anna', AGE: 30, CITY: 'Varash'},
        {NAME: 'Tanya', AGE: 25, CITY: 'Kyiv'},
        {NAME: 'Yustyna', AGE: 18, CITY: 'Lviv'}
    ]


let inPersonUsers =
    [
        {NAME: 'Sergiy', AGE: 31, CITY: 'Lviv'},
        {NAME: 'Ivan', AGE: 26, CITY: 'Rivne'},
        {NAME: 'Denys', AGE: 25, CITY: 'Lviv'}
    ]

//
// onlineUsers.forEach(user => {
//     fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), JSON.stringify([inPersonUsers], null, 1), (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     })
// })
// inPersonUsers.forEach(user => {
//     fs.writeFile(path.join(__dirname, 'main', 'online', 'online.txt'), JSON.stringify([onlineUsers], null, 1), (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     })
// })


// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
// (ті, що були в папці inPerson будуть в папці online)


// fs.rename(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'),
//     path.join(__dirname, 'main', 'online', 'inPerson.txt'), (err) => {
//         if (err) {
//             console.log(err)
//         }
//         })
//
// fs.rename(path.join(__dirname, 'main', 'online', 'online.txt'),
//     path.join(__dirname, 'main', 'inPerson', 'online.txt'), (err) => {
//         if (err) {
//             console.log(err)
//         }
//         })

