let canvasBoard=document.querySelector("canvas");
canvasBoard.height=window.innerHeight;
canvasBoard.width=window.innerWidth;
let tool=canvasBoard.getContext("2d");
let recttool=document.querySelector(".fa-square");
let linetool=document.querySelector(".fa-grip-lines-vertical");
let ctool="recttool";
    //drawing rectangle
//tool.fillStyle="red";
//tool.fillRect(0,0,200,200);
//tool.strokeStyle="yellow";
//tool.strokeRect(20,20,200,200);

//for getting mouse position
let body=document.querySelector("body");
//tool change logic
recttool.addEventListener("click",function(){
    ctool="recttool";
})
linetool.addEventListener("click",function(){
    ctool="linetool";
})
let boardtop=canvasBoard.getBoundingClientRect().top;
let boardleft=canvasBoard.getBoundingClientRect().left;
let xPos,yPos,aPos,bPos;
let blueb=document.querySelector("#blue");
    blueb.addEventListener("click",function(){
        tool.strokeStyle="blue";
    })
let redb=document.querySelector("#red");
    redb.addEventListener("click",function(){
        tool.strokeStyle="red";
    })
let greenb=document.querySelector("#green");
    greenb.addEventListener("click",function(){
        tool.strokeStyle="green";
    })
    body.addEventListener("mousedown",function(e){
        //console.log(e);
        xPos=e.clientX-boardleft;
        yPos=e.clientY-boardtop;
    })
    body.addEventListener("mouseup",function(e){
        //console.log(e);
        aPos=e.clientX-boardleft;
        bPos=e.clientY-boardtop;
        //console.log(aPos,bPos);
        let wid=aPos-xPos;
        let hei=bPos-yPos;
        if(ctool=="recttool"){
        tool.strokeRect(xPos,yPos,wid,hei);
        }
        else{
            tool.beginPath();
            tool.moveTo(xPos,yPos);
            tool.lineTo(aPos,bPos);
            tool.stroke();
        }
    })