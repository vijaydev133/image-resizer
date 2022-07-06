let img = document.getElementById("img");
let inc = document.getElementById("inc");
let dec = document.getElementById("dec")

inc.addEventListener("click",function(){
   let currWidth = img.clientWidth

   img.style.width = (currWidth + 10) + "px";
    
})

dec.addEventListener("click",function(){
    let currWidth = img.clientWidth
 
    img.style.width = (currWidth - 10) + "px";
     
 })