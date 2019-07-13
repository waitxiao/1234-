var timer;
var index=0;
var pic=document.getElementById("banner");
var lis=pic.getElementsByTagName("li");
console.log(lis.length);
function slideImg(){
    pic.onmouseover=function(){
        stopAutoPlay();
    }
    pic.onmouseout=function(){
        startAutoPlay();
    }
    pic.onmouseout();

    function startAutoPlay(){
        timer=setInterval(function(){
            index++;
            if(index>3){
                index=0;
            }
            changeImg();

        },1000);
    }

    function stopAutoPlay(){
        clearInterval(timer);
    }

    function changeImg(){
        for(var i=0;i<lis.length;i++){
            lis[i].style.display="none";
        }
        lis[index].style.display="block";
    }
}
slideImg();
