$(document).ready(function(){
		
		
	var param = $.getQueryParam();
	//如果是有数据的
	if(param.id){
		
		//如果是查看
		if(param.i==2){
			$(".isloading,.isLoading").hide();
			$('.realContent *[name]').addClass('disabled').attr('disabled','disabled');
			$('.rc-upload a.primary.button').addClass('disabled');
			$(".formButtons, .agreedContainer").hide();
			$(".checkbox,input[type='checkbox']").addClass('disabled').attr('disabled','disabled');
		}
		
		//查询后台数据
		$.ajaxPost({
			url:'/licPreGns/getPreAttrInfo',
			data:{applyId:param.id},
			ok:function(msg){
				var rlicPreAcceptInfo = msg.data.rlicPreAcceptInfo;
				var files = msg.data.applyMaterialArray;
				$('.realContent *[name]').not("input[type='radio']").each(function(i,v){
					 $(this).val(rlicPreAcceptInfo[this.name]);
				});

				if(rlicPreAcceptInfo.applyCloseBusinessDateS && rlicPreAcceptInfo.applyCloseBusinessDateE){
					$(".applyCloseBusinessDate").val(rlicPreAcceptInfo.applyCloseBusinessDateS+" ~ "+rlicPreAcceptInfo.applyCloseBusinessDateE);
				}
				//回显文件
				biz.viewFile(param,files);
				
				$(".agreed").prop('checked',true);
			}
		});
	
	}
	 //订阅user对应的 对象	
	 pubsub.subscribe("user",function(key,data){
		 $(".picName").val(data.username);
		 $(".lineTel").val(data.mobile);
	 });

	
});