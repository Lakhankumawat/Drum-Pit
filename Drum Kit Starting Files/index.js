

var o=document.querySelectorAll(".drum").length;


for(var i=0;i<o;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){

var k = this.innerHTML;
makesound(k);
buttonAnim(k);

 });
}


document.addEventListener("keypress", function(event){


  makesound(event.key);
  buttonAnim(event.key);
});



function makesound(input)
{

  switch (input){
    case "w":
    var tom1 = new Audio('sounds/tom-1.mp3');
     tom1.play();
     break;
     case "a":
     var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
      case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
       tom3.play();
       break;
       case "d":
       var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
        case "j":
        var crash = new Audio('sounds/crash.mp3');
       crash.play();
         break;
         case "k":
         var snare = new Audio('sounds/snare.mp3');
          snare.play();
          break;
          case "l":
          var kick = new Audio('sounds/kick-bass.mp3');
           kick.play();
           break;
        default:
        break;
  }
}


function buttonAnim(keypass){

var addedclass =  document.querySelector("."+keypass);
addedclass.classList.add("pressed");

setTimeout(function(){
addedclass.classList.remove("pressed");
},100);
}
