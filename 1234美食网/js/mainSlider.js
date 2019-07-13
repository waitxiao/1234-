var timer;
var index=0;
var pic=document.getElementById("Pciture");
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
            if(index>5){
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

function changeColor(){
    var color="#98FB98|#DDA0DD|#FFC0CB|#FFDEAD|#FF4500|#40E0D0";//定义颜色
    color=color.split("|");//划分每个颜色,split函数是编程语言中使用的一种函数名称，它是指返回一
    //个下标从零开始的一维数组，split函数包含指定数目的子字符串。获得颜色数组
    var blink=document.getElementById("blink");
    blink.style.color=color[parseInt(Math.random() * color.length)];//随机获得数组中的任一下标
    var logo=document.getElementById("logo");
    logo.style.color=color[parseInt(Math.random() * color.length)];//随机获得数组中的任一下标
     var weekly=document.getElementById("Weekly");
    weekly.style.color=color[parseInt(Math.random() * color.length)];//随机获得数组中的任一下标
     var happy=document.getElementById("Happy");
    happy.style.color=color[parseInt(Math.random() * color.length)];//随机获得数组中的任一下标
     var latest=document.getElementById("Latest");
    latest.style.color=color[parseInt(Math.random() * color.length)];//随机获得数组中的任一下标
     var buy=document.getElementById("Buy");
    buy.style.color=color[parseInt(Math.random() * color.length)];//随机获得数组中的任一下标
     var contact=document.getElementById("Contact");
    contact.style.color=color[parseInt(Math.random() * color.length)];//随机获得数组中的任一下标

}
 setInterval("changeColor()",200);

