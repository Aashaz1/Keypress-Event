
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
imgWidth=300;
imgHeight=100;
var img_image;
imageX= 100;
imageY= 100;
function add(){
    img_imgTag= new Image();
    img_imgTag.onload= uploadImage;
    img_imgTag.src= img_image;
}
function uploadImage(){
    ctx.drawImage(img_imgTag, imageX, imageY, imgWidth, imgHeight);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
    {
        alphabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key";
        console.log("alphabet Key");
    }
    if((keyPressed >=48 && keyPressed<=57)){
        numberkey();
        document.getElementById("d1").innerHTML="You pressed number key";
        console.log("number Key");
    }
    if((keyPressed >=37 && keyPressed<=40))
    {
        arrowKkey();
        document.getElementById("d1").innerHTML="You pressed arrow key";
        console.log("arrow Key");
    }
    if((keyPressed >=17))
    {
        specialkey();
        document.getElementById("d1").innerHTML="You pressed special key";
        console.log("special Key");
    }
}
function alphabetkey(){
    img_image="ak.png";
    add();
}
function numberkey(){
    img_image="nk.png";
    add();
}
function arrowkey(){
    img_image="ark.png";
    add();
}
function specialkey(){
    img_image="sk.png";
    add();
}
