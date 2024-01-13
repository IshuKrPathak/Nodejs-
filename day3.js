// files handling means operation on files

const fs = require("fs");

sync
fs.writeFileSync("./test.txt", "hey ghvjfhcthere peoples"); // creates a new file with name - test.txt

// async
fs.writeFile("./test2.txt","ftdiydfi");

// // reading inside the file
 const  result = fs.readFileSync("./contact.txt", "utf-8");
 console.log(result)
 
fs.readFile("./contact.txt","utf-8",(err,result2)=>{
    if(err){
        console.log("error",err)
    }
    else{
        console.log(result2)
    }
})


// add data next 
fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());

