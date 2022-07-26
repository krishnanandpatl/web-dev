let size1=document.querySelectorAll(".size1");
let size2=document.querySelectorAll(".size2");
let size3=document.querySelectorAll(".size3");
let size4=document.querySelectorAll(".size4");
let wid;

for(let aa=0;aa<4;aa++){
    size1[aa].addEventListener("click",function(){
        wid=2;
    })
    size2[aa].addEventListener("click",function(){
        wid=4;
    })
    size3[aa].addEventListener("click",function(){
         wid=6;
    })
    size4[aa].addEventListener("click",function(){
         wid=8;
    })
}
