let pencil=document.querySelector("#pencil");
let eraser=document.querySelector("#eraser");
let rectangle=document.querySelector("#rect");
let line=document.querySelector("#line");
let options=document.querySelectorAll(".size-box")
let ctool="pencil";
pencil.addEventListener("click",function(e){
    if(ctool=="pencil"){
        //second click
        //option show
        options[0].style.display="flex";
    }
    else{
        //removing previous menu
        for(let i=0;i<options.length;i++){
            options[i].style.display="none";
        }
        //pencil.style.border="1px solid black";
        ctool="pencil";
        tool.strokeStyle="black";
    }
})
eraser.addEventListener("click",function(e){
    if(ctool=="eraser"){
        //second click
        //option show
        options[1].style.display="flex";
    }
    else{
        //removing previous menu
        for(let i=0;i<options.length;i++){
            options[i].style.display="none";
        }
        //eraser.style.border="1px solid black";
        ctool="eraser";
        tool.strokeStyle="white";
    }
})
rectangle.addEventListener("click",function(){
    if(ctool=="rect"){
        //second click
        //option show
        options[2].style.display="flex";
    }
    else{
        //removing previous menu
        for(let i=0;i<options.length;i++){
            options[i].style.display="none";
        }
        //pencil.style.border="1px solid black";
        ctool="rect";
        tool.strokeStyle="black";
    }
})
line.addEventListener("click",function(){
    if(ctool=="line"){
        //second click
        //option show
        options[3].style.display="flex";
    }
    else{
        //removing previous menu
        for(let i=0;i<options.length;i++){
            options[i].style.display="none";
        }
        //pencil.style.border="1px solid black";
        ctool="line";
        tool.strokeStyle="black";
    }
})