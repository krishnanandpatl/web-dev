let canvasBoard=document.querySelector("canvas");
let tool=canvasBoard.getContext("2d");
canvasBoard.height=window.innerHeight;
canvasBoard.width=window.innerWidth;
let body=document.querySelector("body");
let boardTop=canvasBoard.getBoundingClientRect().top;
let boardLeft=canvasBoard.getBoundingClientRect().left;
let ix,iy,fx,fy;
let drawmode=false;
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
    tool.beginPath();
    tool.moveTo(e.clientX-boardLeft,e.clientY-boardTop);
    drawmode=true;
})
body.addEventListener("mouseup",function(e){
    drawmode=false;
})
body.addEventListener("mousemove",function(e){
    if(drawmode==false)
        return;
    fx=e.clientX-boardLeft;
    fy=e.clientY-boardTop;
    tool.lineWidth=10;
   tool.lineTo(fx,fy);
    tool.stroke();
    ix=fx;
    iy=fy;
})