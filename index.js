// const app =require('./index1')
// console.log(app);


// const fs = require('fs');  // non global core module because it needed to be imported.
// fs.writeFileSync("hello.txt","hello")

//const http = require('http');

// http.createServer((req,resp)=>{
//     resp.write("listening on server");
//     resp.end();

// }).listen(4500);







//YOU CAN USE A FUNCTION AND THEN PASS IT TO THE PARAMETER AS WELL

// function dataControl(req,res){
//       res.write("Listening");
//       res.end();
// }

// http.createServer(dataControl).listen(4500);





//YOU CAN USE FAT ARROW FUNCTION AS WELL

//  let value =(req,res)=>{
//     res.write("Listening on 4500");
//     res.end();
// }
// http.createServer(value).listen(4500);



//IMPORTING THE COLOR MODULE AND USING IT IN THE console.LOG STATEMENT

// const value = require('colors');
// console.log("hello".green);
// console.log("hello".bgBlue);




// const dataValue = require('./data');
// const server = require('http');

// server.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type':'application/json'});
//     resp.write(JSON.stringify(dataValue));
//     resp.end();
// }).listen(4500);

// console.log(process.argv[4]);




//INTRO TO FILE SYSTEM HOW TO ADD DELETE

//writeFileSync --> to add file 
//unlinkSync --> to remove a file

// const fs = require("fs"); //IMPORTING THE FS MODULE

// const input = process.argv; //USING THIS TO TAKE INPUT FROM COMMAND LINE

// if (input[2] == "add") {
//   //WHY INPUT[2] because by default argv return first 2 line and then it returns any command line input
//   fs.writeFileSync(input[3], input[4]); // FIRST PARAMETER IS FILE NAME , SECOND PARAMETER IS DATA INSIDE THE FILE
// } else if (input[2] == "remove") {
//   fs.unlinkSync(input[3]);
// } else {
//   console.log("wrong input");
// }



// CREATING FILES USING FS MODULE AND PATH MODULE

// const path = require('path');
// const fs = require('fs');
// const dirPath = path.join(__dirname,'new data');

// for(let i =1;i<4;i++){
//     fs.writeFileSync(`${dirPath}/file.txt${i}`,"new data");
// }
 

// READING CONTENTS OF A DIRECTORY

// fs.readdir(dirPath,(err,files)=>{
   
//     files.forEach(element => {
//         console.log(element);
//     });
// });


// DELETING IN AN ARRAY

// const path = require('path');
// const fs = require('fs');
// const dirPath=path.join(__dirname,"new data");
// fs.unlinkSync(`${dirPath}/file.txt1`);


// console.log("hello1");

// setTimeout(()=>{
//     console.log("waited for 2 seconds");    //ASYNC NATURE 
// },2000);

// console.log("hello2");






//HANDLE ASYNC NATURE OF JAVASCRIPT
// let a=10;
// let b=20;

// const promise = new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         b=30;
//         resolve(30);
//     },2000);
// }).then((data)=>{
//     b=data;
//     console.log(a+b);
// })




const express = require("express");
const app = express();
const path = require('path');
const publicPath= path.join(__dirname,"public");


// ACCESS HTML STORED IN OTHER FOLDER
// app.use(express.static(publicPath));

// app.get("", (req, resp) => {
//   resp.send(req.query.name);
// });

// app.get("/about", (req, resp) => {
//   resp.send("About Page");
// });

// app.get("/help", (req, resp) => {
//   resp.send(`
//         <h3>This is heading in html</h3>
//         <button>Click Me</button>
//     `);
// });

// app.get("/details", (req, resp) => {
//   resp.send([
//     {
//       name: "debal sen",
//       age: 24,
//       contact: 46466474,
//     },
//     {
//       name: "vinod",
//       age: 25,
//       contact: 46466474,
//     },
//   ]);
// });




// ACCESSING DATA FROM HTML FILE STORED IN OTHER FOLDER USING THE sendFile METHOD.

// app.get('',(req,resp)=>{
//     resp.sendFile(`${publicPath}/details.html`);
// })

// app.get('/about',(req,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`);
// })


// app.get('*',(req,resp)=>{
//     resp.sendFile(`${publicPath}/error.html`);
// })


//USING EJS TEMPLATE 
app.set('view engine','ejs');

app.get('/profile',(req,resp)=>{
    const user={
        name:'debal',
        phone:554466,
        skills:['c++','java','python']
    }
    resp.render('profile',{user});
})

app.listen(5000);


 