//Basic Design
/*
const button=document.getElementById("btn");
const body=document.body;
const colors=["red","blue","green","violet","yellow","pink"];
button.addEventListener("click",changeBackgroundColor);
function changeBackgroundColor(){
    const colorsIndex=Math.floor(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorsIndex];
}
*/
let btn1=document.getElementById("mybutton1");
let btn2=document.getElementById("mybutton2");
function handlebutton1(){
    let myhexvalues="0123456789abcdef";
    let color1="#";
    for(let i=0;i<6;i++){
        color1+=myhexvalues[Math.floor(Math.random()*16)];
    }
    console.log(color1);
    document.body.style.backgroundImage=`linear-gradient(to right,${color1},#444)`;//backtick(`) is must
    copydiv.innerHTML=`background-image:linear-gradient(to right,${color1},#444)`;
    btn1.innerHTML=color1;
}
btn1.addEventListener("click",handlebutton1);
function handlebutton2(){
    let myhexvalues="0123456789abcdef";
    let color2="#";
    for(let i=0;i<6;i++){
        color2+=myhexvalues[Math.floor(Math.random()*16)];
    }
    document.body.style.backgroundImage=`linear-gradient(to left,${color2},#444)`;
    copydiv.innerHTML=`background-image:linear-gradient(to left,${color2},#444)`;
    btn2.innerHTML=color2;
}
btn2.addEventListener("click",handlebutton2);
let copydiv=document.querySelector(".copycode");