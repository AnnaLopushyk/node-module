const fs = require('fs');
const path = require('path')


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


// fs.writeFile(path.join(__dirname,'main','inPerson','inPerson.txt'),'', (err)=>{
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })


//
// fs.writeFile(path.join(__dirname,'main','online','online.txt'),'' ,(err)=>{
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })


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


// fs.unlink(path.join(__dirname,'main','online','online.txt'),(err)=>{
//     if(err){
//         console.log(err);
//         throw err;
//     }
// })


// fs.appendFile(path.join(__dirname,'main','inPerson','inPerson.txt'),JSON.stringify([inPersonUsers],null,1), (err)=> {
//     if (err) {
//         console.log(err);
//     }
// })

//
// fs.appendFile(path.join(__dirname,'main','online','online.txt'),JSON.stringify([onlineUsers],null,1), (err)=> {
//     if (err) {
//         console.log(err);
//     }
// })



fs.rename(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'),
    path.join(__dirname, 'main', 'online', 'inPerson.txt'), (err) => {
        if (err) {
            console.log(err)
        }
        })

fs.rename(path.join(__dirname, 'main', 'online', 'online.txt'),
    path.join(__dirname, 'main', 'inPerson', 'online.txt'), (err) => {
        if (err) {
            console.log(err)
        }
        })


