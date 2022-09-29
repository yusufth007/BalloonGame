var isend = false;
function clickScreen(){
   if(isend==false){
    var playscreen =document.querySelector("#playBotton");
    playscreen.style.display="none";
    globalThis=1;
    var time = 60;//for sec
    
 let genelTime = setInterval(timeFun,1000);//her 1 sn de bir okuyor.
    function timeFun(){
        if(time<=0){
       clearInterval(genelTime);
       isend=true;
       document.getElementById("everyBallon").style.display="none";
        playscreen.style.display="block";
        playscreen.innerHTML="SCORE:"+number;  
        document.querySelector("#realTime").innerHTML="TIME UP";
        
    }
        else{
            time--;
        document.querySelector("#realTime").innerHTML="TIME:"+time;
         
    }
    }
    
  }
}
function replayy(){
    window.location.reload();
    isend=false;
}
var number = 0 ;
function clikBlue(){
if(globalThis==1){
number+=2;
document.querySelector("#numberScore").innerHTML=number;
document.getElementById("ballonBlue").setAttribute("src","/image/blue-balloon/2.png");
setTimeout(function(){
document.getElementById("ballonBlue").setAttribute("src","/image/blue-balloon/3.png");
},100);
setTimeout(function(){
document.getElementById("ballonBlue").setAttribute("src","/image/blue-balloon/4.png");
},200);
setTimeout(function(){
document.getElementById("ballonBlue").setAttribute("src","/image/blue-balloon/5.png");
},300);
setTimeout(function(){
document.getElementById("ballonBlue").setAttribute("src","/image/blue-balloon/6.png");
},400);
setTimeout(function(){
document.getElementById("ballonBlue").style.display="none";
},400);
setTimeout(function(){
document.getElementById("ballonBlue").style.display="block";
document.getElementById("ballonBlue").setAttribute("src","/image/blue-balloon/1.png");
},1300);
}

}
function clickGreen(){
    if(globalThis==1){
        number+=3;
        document.querySelector("#numberScore").innerHTML=number;
        document.getElementById("ballonGreen").setAttribute("src","/image/green-balloon/2.png");
        setTimeout(function(){
        document.getElementById("ballonGreen").setAttribute("src","/image/green-balloon/3.png");
        },100);
        setTimeout(function(){
        document.getElementById("ballonGreen").setAttribute("src","/image/green-balloon/4.png");
        },200);
        setTimeout(function(){
        document.getElementById("ballonGreen").setAttribute("src","/image/green-balloon/5.png");
        },300);
        setTimeout(function(){
        document.getElementById("ballonGreen").setAttribute("src","/image/green-balloon/6.png");
        },400);
        setTimeout(function(){
        document.getElementById("ballonGreen").style.display="none";
        },500);
        setTimeout(function(){
        document.getElementById("ballonGreen").style.display="block";
        document.getElementById("ballonGreen").setAttribute("src","/image/green-balloon/1.png");
        },1300);
}
}
function clickOrange(){
    if(globalThis==1){
        number++;
        document.querySelector("#numberScore").innerHTML=number;    
        document.getElementById("ballonOrange").setAttribute("src","/image/orange-balloon/2.png");
        setTimeout(function(){
        document.getElementById("ballonOrange").setAttribute("src","/image/orange-balloon/3.png");
        },100);
        setTimeout(function(){
        document.getElementById("ballonOrange").setAttribute("src","/image/orange-balloon/4.png");
        },200);
        setTimeout(function(){
        document.getElementById("ballonOrange").setAttribute("src","/image/orange-balloon/5.png");
        },300);
        setTimeout(function(){
        document.getElementById("ballonOrange").setAttribute("src","/image/orange-balloon/6.png");
        },400);
        setTimeout(function(){
        document.getElementById("ballonOrange").style.display="none";
        },500);
        setTimeout(function(){
        document.getElementById("ballonOrange").style.display="block";
        document.getElementById("ballonOrange").setAttribute("src","/image/orange-balloon/1.png");
        },1300);
}
}
function clickPink(){
    if(globalThis==1){
        number+=2;
        document.querySelector("#numberScore").innerHTML=number;  
        document.getElementById("ballonPink").setAttribute("src","/image/pink-ballon/2.png");
        setTimeout(function(){
        document.getElementById("ballonPink").setAttribute("src","/image/pink-ballon/3.png");
        },100);
        setTimeout(function(){
        document.getElementById("ballonPink").setAttribute("src","/image/pink-ballon/4.png");
        },200);
        setTimeout(function(){
        document.getElementById("ballonPink").setAttribute("src","/image/pink-ballon/5.png");
        },300);
        setTimeout(function(){
        document.getElementById("ballonPink").setAttribute("src","/image/pink-ballon/6.png");
        },400);
        setTimeout(function(){
        document.getElementById("ballonPink").style.display="none";
        },500);
        setTimeout(function(){
        document.getElementById("ballonPink").style.display="block";
        document.getElementById("ballonPink").setAttribute("src","/image/pink-ballon/1.png");
        },1300);
}
}
function clickPurple(){
    if(globalThis==1){
        number+=3;
        document.querySelector("#numberScore").innerHTML=number;  
        document.getElementById("ballonPurple").setAttribute("src","/image/purple-balloon/2.png");
        setTimeout(function(){
        document.getElementById("ballonPurple").setAttribute("src","/image/purple-balloon/3.png");
        },100);
        setTimeout(function(){
        document.getElementById("ballonPurple").setAttribute("src","/image/purple-balloon/4.png");
        },200);
        setTimeout(function(){
        document.getElementById("ballonPurple").setAttribute("src","/image/purple-balloon/5.png");
        },300);
        setTimeout(function(){
        document.getElementById("ballonPurple").setAttribute("src","/image/purple-balloon/6.png");
        },400);
        setTimeout(function(){
        document.getElementById("ballonPurple").style.display="none";
        },500);
        setTimeout(function(){
        document.getElementById("ballonPurple").style.display="block";
        document.getElementById("ballonPurple").setAttribute("src","/image/purple-balloon/1.png");
        },1300);
}
}
function clickRed(){
    if(globalThis==1){
        number+=4;
        document.querySelector("#numberScore").innerHTML=number;  
        document.getElementById("ballonRed").setAttribute("src","/image/red-balloon/2.png");
        setTimeout(function(){
        document.getElementById("ballonRed").setAttribute("src","/image/red-balloon/3.png");
        },100);
        setTimeout(function(){
        document.getElementById("ballonRed").setAttribute("src","/image/red-balloon/4.png");
        },200);
        setTimeout(function(){
        document.getElementById("ballonRed").setAttribute("src","/image/red-balloon/5.png");
        },300);
        setTimeout(function(){
        document.getElementById("ballonRed").setAttribute("src","/image/red-balloon/6.png");
        },400);
        setTimeout(function(){
        document.getElementById("ballonRed").style.display="none";
        },500);
        setTimeout(function(){
        document.getElementById("ballonRed").style.display="block";
        document.getElementById("ballonRed").setAttribute("src","/image/red-balloon/1.png");
        },1300);
}
}
function clickYellow(){
    if(globalThis==1){
        number+=3;
        document.querySelector("#numberScore").innerHTML=number;  
        document.getElementById("ballonYellow").setAttribute("src","/image/yellow-balloon/2.png");
        setTimeout(function(){
        document.getElementById("ballonYellow").setAttribute("src","/image/yellow-balloon/3.png");
        },100);
        setTimeout(function(){
        document.getElementById("ballonYellow").setAttribute("src","/image/yellow-balloon/4.png");
        },200);
        setTimeout(function(){
        document.getElementById("ballonYellow").setAttribute("src","/image/yellow-balloon/5.png");
        },300);
        setTimeout(function(){
        document.getElementById("ballonYellow").setAttribute("src","/image/yellow-balloon/6.png");
        },400);
        setTimeout(function(){
        document.getElementById("ballonYellow").style.display="none";
        },500);
        setTimeout(function(){
        document.getElementById("ballonYellow").style.display="block";
        document.getElementById("ballonYellow").setAttribute("src","/image/yellow-balloon/1.png");
        },1300);
}
}

