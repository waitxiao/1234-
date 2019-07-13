
/*首先获取元素，获取的li是一个数组，调用onmouseover()函数，当鼠标放上去
停止跳转，当鼠标离开，开始跳转。*/

/*为每个轮播图设置一个定时器，即可以实现不同轮播图的跳转互不干扰*/

var timer;
var timer1;
var timer2;
var timer3;
var timer4;
var timer5;
var index=0;
var images=document.getElementById("goodspic1");
var lis=images.getElementsByTagName("li");

var images1=document.getElementById("goodspic11");
var lis1=images1.getElementsByTagName("li");

var images2=document.getElementById("goodspic2");
var lis2=images2.getElementsByTagName("li");

var images3=document.getElementById("goodspic22");
var lis3=images3.getElementsByTagName("li");

var images4=document.getElementById("goodspic3");
var lis4=images4.getElementsByTagName("li");

var images5=document.getElementById("goodspic33");
var lis5=images5.getElementsByTagName("li");



function slideImg(){
   /* 调用onmouseover函数*/
    images.onmouseover=function(){
        /*调用停止函数*/
        stopAutoPlay();
    }

    images1.onmouseover=function(){
        stopAutoPlay1();
    }

    images2.onmouseover=function(){
        stopAutoPlay2();
    }

    images3.onmouseover=function(){
        stopAutoPlay3();
    }

    images4.onmouseover=function(){
        stopAutoPlay4();
    }

    images5.onmouseover=function(){
        stopAutoPlay5();
    }

    images.onmouseout=function(){
        startAutoPlay();
    }

    images1.onmouseout=function(){
        startAutoPlay1();
    }

    images2.onmouseout=function(){
        startAutoPlay2();
    }

    images3.onmouseout=function(){
        startAutoPlay3();
    }

    images4.onmouseout=function(){
        startAutoPlay4();
    }

    images5.onmouseout=function(){
        startAutoPlay5();
    }
    /*页面一开始的跳转，所以先调用onmouseout函数*/
    images.onmouseout();
    images1.onmouseout();
    images2.onmouseout();
    images3.onmouseout();
    images4.onmouseout();
    images5.onmouseout();

   /* 跳转函数*/
    function startAutoPlay(){
       /* 设置定时器*/
        timer=setInterval(function(){
            /*索引自增*/
            index++;
           /* 判断索引的数量是否大于图片的数量，从0开始*/
           /*如果大于5张，则重新回到第一张*/
            if(index>4){
                index=0;
            }
            /*调用更换图片函数*/
            changeImg();
        },1000);/*设置1秒更换一次图片*/
    }

     function startAutoPlay1(){
        timer1=setInterval(function(){
            index++;
            if(index>4){
                index=0;
            }
            changeImg1();
        },500);
    }

     function startAutoPlay2(){
        timer2=setInterval(function(){
            index++;
            if(index>4){
                index=0;
            }
            changeImg2();
        },500);
    }

     function startAutoPlay3(){
        timer3=setInterval(function(){
            index++;
            if(index>4){
                index=0;
            }
            changeImg3();
        },500);
    }

    function startAutoPlay4(){
        timer4=setInterval(function(){
            index++;
            if(index>4){
                index=0;
            }
            changeImg4();
        },500);
    }

     function startAutoPlay5(){
        timer5=setInterval(function(){
            index++;
            if(index>4){
                index=0;
            }
            changeImg5();

        },500);
    }



    /*设置清理定时器，即已停止图片跳转*/
    function stopAutoPlay(){
        clearInterval(timer);
    }

     function stopAutoPlay1(){
        clearInterval(timer1);
    }

     function stopAutoPlay2(){
        clearInterval(timer2);
    }

     function stopAutoPlay3(){
        clearInterval(timer3);
    }

     function stopAutoPlay4(){
        clearInterval(timer4);
    }
     function stopAutoPlay5(){
        clearInterval(timer5);
    }

    /*更换图片函数*/
    function changeImg(){
       /* 首先遍历全部图片，让它们全部不显示*/
        for(var i=0;i<lis.length;i++){
            lis[i].style.display="none";
        }
        /*遍历完之后，判断上面的index为多少，则显示相对应的图片*/
        lis[index].style.display="block";
     }
        
     function changeImg1(){
        for(var i=0;i<lis1.length;i++){
            lis1[i].style.display="none";
        }
        lis1[index].style.display="block";
     }

     function changeImg2(){
        for(var i=0;i<lis2.length;i++){
            lis2[i].style.display="none";
        }
        lis2[index].style.display="block";
     }

      function changeImg3(){
        for(var i=0;i<lis3.length;i++){
            lis3[i].style.display="none";
        }
        lis3[index].style.display="block";
     }
     
      function changeImg4(){
        for(var i=0;i<lis4.length;i++){
            lis4[i].style.display="none";
        }
        lis4[index].style.display="block";
     }

     function changeImg5(){
        for(var i=0;i<lis5.length;i++){
            lis5[i].style.display="none";
        }
        lis5[index].style.display="block";
     }
    
    
    
}
/*调用整个函数*/
slideImg();


/*图片放大效果*/
/*为每个轮播图设置一个放大变小函数，使他们的功能互不干扰*/
/*第一个轮播图放大效果*/
    var image1=document.getElementById("image1");
    var image2=document.getElementById("image2");
    var image3=document.getElementById("image3");
    var image4=document.getElementById("image4");
    var image5=document.getElementById("image5");


    function bigger0(){
      image1.style.width="454px";
      image1.style.height="270px";

      image2.style.width="444px";
      image2.style.height="270px";

      image3.style.width="444px";
      image3.style.height="270px";

      image4.style.width="444px";
      image4.style.height="270px";

      image5.style.width="444px";
      image5.style.height="270px";


    }
    function smaller0(){
      image1.style.width="296px";
      image1.style.height="180px";

      image2.style.width="296px";
      image2.style.height="180px";

      image3.style.width="296px";
      image3.style.height="180px";

      image4.style.width="296px";
      image4.style.height="180px";

      image5.style.width="296px";
      image5.style.height="180px";

    }

/*第二个轮播图放大效果*/

    var image11=document.getElementById("image11");
    var image21=document.getElementById("image21");
    var image31=document.getElementById("image31");
    var image41=document.getElementById("image41");
    var image51=document.getElementById("image51");

     function bigger1(){
      image11.style.width="444px";
      image11.style.height="270px";

      image21.style.width="444px";
      image21.style.height="270px";

      image31.style.width="444px";
      image31.style.height="270px";

      image41.style.width="444px";
      image41.style.height="270px";

      image51.style.width="444px";
      image51.style.height="270px";
    }
    function smaller1(){
      image11.style.width="296px";
      image11.style.height="180px";

      image21.style.width="296px";
      image21.style.height="180px";

      image31.style.width="296px";
      image31.style.height="180px";

      image41.style.width="296px";
      image41.style.height="180px";

      image51.style.width="296px";
      image51.style.height="180px";

    }


/*第三个轮播图放大效果*/
    var image12=document.getElementById("image12");
    var image22=document.getElementById("image22");
    var image32=document.getElementById("image32");
    var image42=document.getElementById("image42");
    var image52=document.getElementById("image52");

     function bigger2(){
      image12.style.width="444px";
      image12.style.height="270px";

      image22.style.width="444px";
      image22.style.height="270px";

      image32.style.width="444px";
      image32.style.height="270px";

      image42.style.width="444px";
      image42.style.height="270px";

      image52.style.width="444px";
      image52.style.height="270px";

     
    }
    function smaller2(){
      image12.style.width="296px";
      image12.style.height="180px";

      image22.style.width="296px";
      image22.style.height="180px";

      image32.style.width="296px";
      image32.style.height="180px";

      image42.style.width="296px";
      image42.style.height="180px";

      image52.style.width="296px";
      image52.style.height="180px";

    }


/*第四个轮播图放大效果*/
    var image13=document.getElementById("image13");
    var image23=document.getElementById("image23");
    var image33=document.getElementById("image33");
    var image43=document.getElementById("image43");
    var image53=document.getElementById("image53");

     function bigger3(){
      image13.style.width="444px";
      image13.style.height="270px";

      image23.style.width="444px";
      image23.style.height="270px";

      image33.style.width="444px";
      image33.style.height="270px";

      image43.style.width="444px";
      image43.style.height="270px";

      image53.style.width="444px";
      image53.style.height="270px";

    }
    function smaller3(){
      image13.style.width="296px";
      image13.style.height="180px";

      image23.style.width="296px";
      image23.style.height="180px";

      image33.style.width="296px";
      image33.style.height="180px";

      image43.style.width="296px";
      image43.style.height="180px";

      image53.style.width="296px";
      image53.style.height="180px";
    }


/*第五个轮播图放大效果*/

    var image14=document.getElementById("image14");
    var image24=document.getElementById("image24");
    var image34=document.getElementById("image34");
    var image44=document.getElementById("image44");
    var image54=document.getElementById("image54");

 function bigger4(){
      image14.style.width="444px";
      image14.style.height="270px";

      image24.style.width="444px";
      image24.style.height="270px";

      image34.style.width="444px";
      image34.style.height="270px";

      image44.style.width="444px";
      image44.style.height="270px";

      image54.style.width="444px";
      image54.style.height="270px";

    }
    function smaller4(){
      image14.style.width="296px";
      image14.style.height="180px";

      image24.style.width="296px";
      image24.style.height="180px";

      image34.style.width="296px";
      image34.style.height="180px";

      image44.style.width="296px";
      image44.style.height="180px";

      image54.style.width="296px";
      image54.style.height="180px";
    }

/*第六个轮播图放大效果
*/
    var image15=document.getElementById("image15");
    var image25=document.getElementById("image25");
    var image35=document.getElementById("image35");
    var image45=document.getElementById("image45");
    var image55=document.getElementById("image55");

    function bigger5(){
       image15.style.width="444px";
      image15.style.height="270px";

      image25.style.width="444px";
      image25.style.height="270px";

      image35.style.width="444px";
      image35.style.height="270px";

      image45.style.width="444px";
      image45.style.height="270px";

      image55.style.width="444px";
      image55.style.height="270px";
    }
    function smaller5(){
      
      image15.style.width="296px";
      image15.style.height="180px";

      image25.style.width="296px";
      image25.style.height="180px";

      image35.style.width="296px";
      image35.style.height="180px";

      image45.style.width="296px";
      image45.style.height="180px";

      image55.style.width="296px";
      image55.style.height="180px";
    }

