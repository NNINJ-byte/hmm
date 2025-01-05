// script.js
const checker = ()=>  {
    // Define the correct move here
   const userMove = document.getElementById("move-input").value.trim();
   const messageDiv = document.getElementById("message");

   if (userMove === "re1"||userMove==="qa1") {
       messageDiv.innerHTML = `<button><a id="next-stage" href = "stage2.html" >Next Stage</a></button>`
       messageDiv.classList.add("win");


       // Add the win-background class to body to start the animation
       document.body.classList.add("win-background");
   } else {
       messageDiv.innerHTML = "Try again!";
       messageDiv.classList.remove("win");

       // Remove the win-background class if the move is incorrect
       document.body.classList.remove("win-background");
   }
}

document.getElementById("move-input").addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        checker();
    }
})
document.getElementById("submit-move").addEventListener("click",checker);
