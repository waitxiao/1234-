
	$(function(){
		var str;
		function get(){
			$.ajax({
				url:'https://api.apiopen.top/recommendPoetry',
				type:'get',
				dataType:'json',
				success:function(data){
					console.log(data);
					str='';
					str+='<marquee scrollAmount=2 width=600 onmouseover=stop() onmouseout=start()><p class="sistences">'+data.result.content+'</p></marquee>';
					console.log(str);
					 $('.box1').html(str);
				}
			})
		}
		get();


	})