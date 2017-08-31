$(document).ready(function(){
		
		
	var param = $.getQueryParam();
	//如果是有数据的
	if(param.id){
		
		//如果是查看
		if(param.i==2){
			$(".isloading,.isLoading").hide();
			$('.realContent *[name]').addClass('disabled').attr('disabled','disabled');
			$('.rc-upload a.primary.button').addClass('disabled');
			$(".formButtons").hide();
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

				
				$(".postAddrAdc").dist({initVal:rlicPreAcceptInfo.postAddrAdc});
				
				//回显文件
				biz.viewFile(param,files);
				$(".agreed").prop('checked',true);
				
				/**
				 *处理补办选项是否呗选中 
				 **/
				$(".checkboxDiv input[type='checkbox']").each(function(){
					var sendData = $(this).attr('data-send');
					if(parseInt(rlicPreAcceptInfo[sendData])==1 ){
						$(this).prop('checked',true);
					}
				});
				if(rlicPreAcceptInfo.isTakeBack==2){
					$('.rlicLoseReasonRadio').prop('checked',true);
				}
				if(rlicPreAcceptInfo.isTakeBack==3){
					$('.rlicDamageReasonRadio').prop('checked',true);
				}
				
			}
		});
	
	}
	 //订阅user对应的 对象	
	 pubsub.subscribe("user",function(key,data){
		 $(".picName").val(data.username);
		 $(".lineTel").val(data.mobile);
	 });

	 
	 
	
});