// Using fs module - Manage file system
const fs = require('fs');

// fs.writeFile('demo1.text', 'My name is Shohel rana', (err)=>{
// if (err){
//     console.log(err);
// }
// else{
//     console.log('successfully written');
// }
// })

// fs.readFile('demo1.text', 'utf-8', (err, data)=>{
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
//     })

// fs.rename('demo1.text', 'demo2.txt', (err)=>{
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log("Successfully renamed");
//     }
//     })

// unlink means delete the file.................
// fs.unlink('demo2.txt', (err)=>{
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log("Successfully renamed");
//     }
//     });

fs.exists('demo2.txt', (result)=>{
    if (result){
        console.log("found");
    }
    else{
        console.log("Not found");
    }
    });

    // using synchronous
    // fs.existsSync('demo2.txt')
    //     if (result){
    //         console.log("found");
    //     }
    //     else{
    //         console.log("Not found");
    //     }
    //     });