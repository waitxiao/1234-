
$(function(){
			var str;
			function get(){
				$.ajax({
					url:'https://api.jisuapi.com/recipe/search',
					data:{keyword:'粽子',
				    appkey:'5f762b39da50eef7',
				     },
					type:'get',
					dataType:'jsonp',
					
					success:function(data){
		
						console.log(data);
						str="";
						console.log(str);
						
						var step=data.result.list[0].process;
						//console.log(data.result.list[0].process.length);
						str+='<li class="wr"><img src="./image/西瓜.png">&nbsp&nbsp'+data.result.list[0].name+'</li>';
						for(var i=0;i<step.length;i++){
		
							str+='<li class="wr"><img src="./image/西瓜.png">&nbsp'+data.result.list[0].process[i].pcontent+'</li>';
		
						}
						console.log(str);
						$('.tab').html(str);
		
					}
				})
			}
			get();
		})