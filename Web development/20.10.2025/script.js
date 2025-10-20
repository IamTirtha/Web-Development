console.log("Hello Today we learn Event Bubbling.Event bubbling is a mechanism in the DOM (Document Object Model) where an event that occurs on a child element automatically propagates (bubbles up) to its ancestor elements (like parent, grandparent, etc.), unless it’s explicitly stopped.");
//Select Elements
let a= document.querySelector(".grandparents");  //Syntax:node.addEventListener("event",function(){});
let b= document.querySelector(".parents");
let c= document.querySelector(".child");
//Adding Events
a.addEventListener("click",function(){
    alert("GrandParents Clicked");
});
b.addEventListener("click",function(){
    alert("Parents Clicked");
});
c.addEventListener("click",function(){
    alert("Child Clicked");
});
