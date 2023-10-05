var button=document.getElementById("button")

var off=document.getElementById("img-off")
var on= document.getElementById("img-on")


button.addEventListener("click",function(){
 
  
  
 if(button.innerHTML=="OFF" &&  on.style.display=="none"){
   
   button.innerHTML="ON"
   on.style.display="block"
   
 }else{
   button.innerHTML="OFF"
   on.style.display="none"
 }
})








  



