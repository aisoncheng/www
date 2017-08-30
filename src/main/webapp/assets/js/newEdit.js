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
				
				
				$(".bizAddrAdc").partDist({initVal:rlicPreAcceptInfo.bizAddrAdc});
				$("input[name='postAddrAdc']").dist({initVal:rlicPreAcceptInfo.postAddrAdc});
				
				
				if(rlicPreAcceptInfo.tenancyBegin && rlicPreAcceptInfo.tenancyEnd){
					$(".tenancyDate").val(rlicPreAcceptInfo.tenancyBegin+" ~ "+rlicPreAcceptInfo.tenancyEnd).removeClass('disabled').removeAttr('disabled');
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
	
	$(".radioBody").click(function() {
		var val = $(this).data('checked');
		var radio = $(this).find("input[type='radio']");
		if (!val) {
			radio.prop('checked', 'true');
			$(this).data('checked', 1);
		} else {
			radio.prop('checked', 'false');
			$(this).data('checked', 0);
		}
		
		var name = radio.attr('name');
		var radioVal = radio.val();
		if(name=='placeOwnership'){
			//2502
			if (radioVal == '2502') {
				$('.tenancyDate').removeAttr('disabled').removeClass('disabled');
			} else {
				$('.tenancyDate').attr('disabled','disabled').addClass('disabled').val('');
				$('.tenancyDate').parent().find('.icon').hide();
			}
			
		}else{
			if (radioVal == '1410') {
				$('.otherEcoType').show();
			} else {
				$('.otherEcoType').hide();
			}
		}

	});

	
	$(".layui-form").validate({
		rules : {
			entName :"required",
			bizaddrStreet :"required",
			bizAddrAdc:"required",
			ecoType : "required",
			bizId : "required",
			biPeriod : "required",
			placeOwnership : "required",
			tenancyDate : {
				required : function() {
					return $(".changqi:checked").length > 0 ? false : true;
				}
			},
			otherEcoType : {
				required : true
			},
			picName : 'required',
			picCidType : 'required',
			picCidNo : 'required',
			picCidAddrStreet : 'required',
			picAddrStreet : 'required',
			linkName : "required",
			lineTel : 'required',
			postAddrAdc : 'required',
			postAddrStreet : 'required'

		},
		messages : {
			entName : "请输入企业名称",
			bizaddrStreet : "请输入经营地址",
			bizAddrAdc:"请选择经营地址",
			ecoType : "请选择经济类型",
			bizId : "请输入工商营业执照",
			biPeriod : "请选择工商营业执照时间",
			placeOwnership : "请选择场地归属",
			tenancyDate : "请选择租赁时间范围",
			otherEcoType : "请输入其他经济类型",
			picName : "请输入负责人姓名",
			picCidType : '请选择证件类型',
			picCidNo : '请输入证件号码',
			picCidAddrStreet : '请输入身份证住址',
			picAddrStreet : '请输入现住地址',
			linkName : "请输入联系人",
			lineTel : '请输入联系人电话',
			postAddrAdc : '请选择邮寄地址',
			postAddrStreet : '请选择邮寄地址详情'
		},
		onkeyup : function(a, b) {
			$.validator.defaults.onkeyup.call(this, a, b);
			var name = a.name;
			//不合法
			var parent = $(a).parent();
			var icon = parent.find('i.icon');
			if (icon.length == 0) {
				$(a).after("<i class='icon'></i>");
			}
			if (this.invalid[name]) {
				icon.removeClass('success').addClass('error');
			} else {
				icon.removeClass('error').addClass('success');
			}
		},
		success : function(a, b) {
			var parent = $(a).parent();
			var icon = parent.find('i.icon');
			if (icon.length == 0) {
				$(a).after("<i class='icon success'></i>");
			} else {
				icon.removeClass('error').addClass('success');
			}
		},
		errorPlacement : function(error, element) {
			error.appendTo(element.parent());
			var parent = element.parent();
			var icon = parent.find('i.icon');
			if (icon.length == 0) {
				parent.append("<i class='icon error'></i>");
			} else {
				icon.removeClass('success').addClass('error');
			}
		}
	});
	
	
	//文件上传
	biz.upload();
	
	$('.submitBtn').click(function() {
		var  sendData = biz.formValidate();
		if(!sendData){
			return false;
		}
		
		var formData = sendData.rlicPreAcceptInfo;
		var tenancyDates = (formData.tenancyDate+"").split('~');
		formData.tenancyBegin = $.trim(tenancyDates[0]);
		formData.tenancyEnd = $.trim(tenancyDates[1]);
		delete formData.tenancyDate;
		formData.postLinkName = user.username;
		formData.postLinkTel = user.mobile;
		formData.applyType = '1001';
		formData.bizRange = '1501,1502';
		formData.placeOwnership = $("input[name='placeOwnership']:checked").val();
		formData.ecoType = $("input[name='ecoType']:checked").val();
		//formData.bizAddrAdc = $("input[name='bizAddrAdc']").attr('data-code');

		sendData.rlicPreAcceptInfo = formData;
		$.ajaxPost({
			url:cfg.basePath+"/licPreGns/submitApplyZJ",
			data:{jsonStr:JSON.stringify(postData)},
			ok:function(msg){
				//msg.data
				//缓存信息在sessio中
				$.ajaxPost({
					url: base+'/saveReply',
					data:{preAcceptUuid:msg.data.preAcceptUuid,reply:JSON.stringify(msg.data)},
					ok:function(){
						window.location.href = base+'/reply/new?id='+msg.data.preAcceptUuid;
					}
				});
			}
		});
		//.layui-form
	});
});