
const fs = require('fs');
const path =require ('path');

//Завдання на практику
//
// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл,
// в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так

// fs.mkdir(path.join(__dirname,'less1_cw1'),(err)=>{
//     if (err) {
//         console.log(err)
//         throw err;
//     }
//     console.log('Directory is created')
// })
//
// const text = 'some text 249' || '';
//
// fs.writeFile(path.join(__dirname,'less1_cw1','textFile.txt'), text,(err)=>{
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     console.log('file is created')
//
//     fs.readFile(path.join(__dirname,'less1_cw1','textFile.txt'),'utf8',(err)=>{
//         if (err){
//             console.log(err)
//             throw err;
//         }
//         console.log('file was read');
//
//         fs.writeFile(path.join(__dirname,'less1_cw1','textFile2.txt'), `${text}`,(err)=>{
//             if (err){
//                 console.log(err)
//                 throw err;
//             }
//             console.log('file overwritten')
//         })
//     })
// })


// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній,
// старий файл видаліть після того як все завершиться. Також вийде callback hell





// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать -
// це файли тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new




