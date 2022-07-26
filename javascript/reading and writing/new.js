let fs=require('fs');
let a=fs.readFileSync('file.txt','utf-8');
let dte=a.toUpperCase();
console.log(dte);
fs.writeFileSync('d2.txt',dte,'utf-8');