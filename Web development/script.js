console.log("generating random color in the boxes");
//Selection of All the boxes
let boxes=document.querySelectorAll(".box")
//Generating Random Color:
function getRandomColor(){
    let val1=Math.ceil(0+Math.random()*255); //Formula to generate ranndom color is :
    let val2=Math.ceil(0+Math.random()*255); // a+r*(b-a). here a=0 and b=255
    let val3=Math.ceil(0+Math.random()*255);
    return `rgb(${val1},${val2},${val3})`
}
//Using For each loop to aplly the colors in the boxes.
Array.from(boxes).forEach(e=>{
    e.style.color=getRandomColor();
    e.style.backgroundColor=getRandomColor();
})


