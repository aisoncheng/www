$(document).ready(function(){
		
		
	var param = $.getQueryParam();
	//如果是有数据的
	if(param.id){
		
		//如果是查看
		if(param.i==2){
			$(".isloading").hide();
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
				$("input[name='placeOwnership']").each(function(i,v){
					if(parseInt($(this).val())==rlicPreAcceptInfo.placeOwnership){
						$(this).prop('checked',true);
					}
				});
				
				$("input[name='ecoType']").each(function(){
					if($(this).val()==rlicPreAcceptInfo.ecoType){
						$(this).prop('checked',true);
					}
				});
				
				if(rlicPreAcceptInfo.ecoType==1410){
					$("input[name='ecoTypeOther']").show();
				}
				
				
				$(".bizAddrAdc").dist({initVal:rlicPreAcceptInfo.bizAddrAdc});
				$("input[name='postAddrAdc']").dist({initVal:rlicPreAcceptInfo.postAddrAdc});
				
				
				if(rlicPreAcceptInfo.tenancyBegin && rlicPreAcceptInfo.tenancyEnd){
					$(".tenancyDate").val(rlicPreAcceptInfo.tenancyBegin+" ~ "+rlicPreAcceptInfo.tenancyEnd);
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

	$("input[name='picCidType']").select({data:$.picType,key:'label',valKey:'value',initVal:{ label:'身份证',value:2801 }});
});