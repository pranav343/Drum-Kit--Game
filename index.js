var numberofbuttons=document.querySelectorAll(".drum").length;
for(var i=0 ; i<numberofbuttons ; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",
    function()
    {
    //    console.log(this.style.color="white");
     var buttoninnerHTML=this.innerHTML;
     makesound(buttoninnerHTML);
     buttonAnimation(buttoninnerHTML);
     
    }
    );
};

document.addEventListener("keypress", function(event)
    {
        makesound(event.key);
        buttonAnimation(event.key);
    }
);

function makesound(key)
{
    switch (key) {
        case "w":
            var audio1= new Audio("sounds/tom-1.mp3");
            audio1.play();
            
            break;
       case "s":
           var audio2= new Audio("sounds/tom-2.mp3");
               audio2.play();

               break;
       case "a":
            var audio3= new Audio("sounds/tom-3.mp3");
            audio3.play();
            
            break;
       case "j":
            var audio4= new Audio("sounds/snare.mp3");
            audio4.play();
            
            break;
       case "k":
            var audio5= new Audio("sounds/crash.mp3");
            audio5.play();
            
            break;
       case "l":
            var audio6= new Audio("sounds/kick-bass.mp3");
            audio6.play();
            
            break;
    
        default:console.log(buttoninnerHTML);
            
    } 
};

function buttonAnimation(currentkey)
{
var buttonFinal= document.querySelector("."+currentkey);
buttonFinal.classList.add("pressed");
setTimeout(function(){
    buttonFinal.classList.remove("pressed");
},100);
}