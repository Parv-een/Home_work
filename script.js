const modal=document.getElementById("modal");

function changeColor(newColor) {
var elem= document.getElementById("color-change");
elem.style.color=newColor;
}

function getValue(){
    var input=document.getElementById("myInput");
    var value = input.value;
    console.log(value);
    alert(value);
    


}