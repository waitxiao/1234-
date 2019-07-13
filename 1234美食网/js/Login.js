
		var windowWidth=window.screen.width;
		var windowHeight=window.screen.height;
		function createSnow() {
			var left=0;
			var top=0;

			//初始化一个随机数，使雪花在屏幕中
			var left_random=Math.random()*windowWidth;
			var top_random=Math.random()*windowHeight;
			var div=document.createElement("div");
			div.className="snow";
			div.style.transform = 'scale('+(Math.random())+')';//随机缩放
			document.body.appendChild(div);

			//定时器，雪花飘落
			setInterval(function(){
				//布满整个屏幕，向右移动
				div.style.left=left_random+left+'px';
				//布满整个屏幕，向下移动
				div.style.top=top_random+top+'px';
				//移动的距离
				left+=0.2;
				top+=0.2;

				if(left_random+left>=windowWidth){
					left_random=Math.random();
					left=0;
				}
				if(top_random+top>=windowHeight){
					top_random=Math.random();
					top=0;
				}
			},10);	

		}
		for(var i=0;i<200;i++){
		createSnow();
	 }
