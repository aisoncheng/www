$(document).ready(function(){
		//layer.myerror();
		//订阅user对应的 对象	
		pubsub.subscribe("user",function(key,data){
			$(".picName").val(data.username);
			$(".lineTel").val(data.mobile);
			$(".linkName").val(data.username);
		});
		
		
		var lic = {};
		//查询许可证信息
	 	$.ajaxPost({
			url:cfg.basePath+'/licPreGns/findTLicRlicInfoListZJ',
			data:{applyType:$.getApplyTypCode()},
			ok:function(msg){
				var lics = msg.data;
				$(".retailLicNoDiv img").hide();
				
				$(".retailLicNoDiv .retailLicNo").removeClass('disabled').removeAttr('disabled');
				
				if(lics.length==0){
					layer.myerror('没有查找到许可证信息不能办理该业务');
					return false;
				}
				for(var i=0;i<lics.length;i++){
					lics[i].disabled = lics[i].isCanApply=='0' ? true:false;
				}
				$(".retailLicNo").select({data:lics,key:'licNo',valKey:'licNo',cb:function(data){
					if(data.disabled){
						layer.myerror("证号为【"+data.licNo+"】的许可证不可办理此业务,原因：【"+data.notApplyReason+"】");
					}else{
						lic = data;
						$(".linkName").val(data.managerName);
					}	
				}});
			}
		});
	 	
	 	
	 	$(".checkboxDiv").click(function(){
	 		var checkbox = $(this).find("input[type='checkbox']");
	 		if(checkbox.hasClass('disabled')){
	 			return false;
	 		}
	 		
	 		 var checked = checkbox.data('checked');
	 		 if(checked){
	 			checkbox.prop('checked',false);
	 			checkbox.data('checked',false);
	 		 }else{
	 			checkbox.prop('checked',true);
	 			checkbox.data('checked',true);
	 		 }
	 	});
	 	
	 	$(".firstRadioDiv").each(function(i,v){
	 		
	 		 $(this).click(function(e){
	 	 		var radio = $(this).find("input[type='radio']");
	 	 		$(".firstRadioDiv input[type='radio']").prop('checked',false);
	 	 		radio.prop('checked',true);
	 	 		
	 	 		$('.checkboxItem *').addClass('disabled').attr('disabled','disabled').prop('checked',false);
	 	 		$('.checkboxItem ').eq(i).find('*').removeClass('disabled').removeAttr('disabled');
	 	 		
	 	 		$(".reasonItem input[type='text']").addClass('disabled').attr('disabled','disabled');
	 	 		$(".reasonItem input[type='text']").eq(i).removeClass('disabled').removeAttr('disabled');
	 	 		
	 	 		$(".reasonItem .icon,.reasonItem label.error").hide();
	 	 		$('.reasonItem input.error').removeClass('error').val('');
	 	 		//error
	 	 	});
	 	});
	 	
	 	$("input[name='postAddrAdc']").dist();
		//表单验证
		$(".layui-form").validate(biz.yzOption({
			rules : {
				picName : 'required',
				linkName : "required",
				lineTel : 'required',
				retailLicNo:"required",	
				rlicLoseReason:{
					required:'.rlicLoseReasonRadio:checked'
				},
				rlicDamageReason:{
					required:'.rlicDamageReasonRadio:checked'
				},
				renewType:'required',
				postAddrAdc:"required",
				postAddrStreet:"required",
				rlicOriginIsLose:{
					required:function(){
						
						if($('.rlicLoseReasonRadio').is(':checked') && $(".checkboxItem:first input[type='checkbox']:checked").length==0){
							
							return true;
						}else{
							return false;
						}
					}
				},
				rlicCopyIsLose:{
					required:function(){
						if($('.rlicLoseReasonRadio').is(':checked') && $(".checkboxItem:first input[type='checkbox']:checked").length==0){
							return true;
						}else{
							return false;
						}
					}
				},
				rlicOriginIsDamage:{
					required:function(){
						if($('.rlicDamageReasonRadio').is(':checked') && $(".checkboxItem:last input[type='checkbox']:checked").length==0){
							return true;
						}else{
							return false;
						}
					}
				},
				rlicCopyIsDamage:{
					required:function(){
						if($('.rlicDamageReasonRadio').is(':checked') && $(".checkboxItem:last input[type='checkbox']:checked").length==0){
							return true;
						}else{
							return false;
						}
					}
				}
			},
			messages : {
				picName : '申请人获取失败',
				linkName : "请输入联系人",
				lineTel : '联系电话获取失败',
				retailLicNo:"请选择许可证",
				rlicLoseReason:'请输入遗失情由',
				rlicDamageReason:'请输入损毁情由',
				renewType:'请选择补办类型',
				postAddrAdc:"请选择邮寄地址",
				postAddrStreet:"请输入邮寄的详细地址",
				rlicOriginIsLose:"请选择需要补办的证件",
				rlicCopyIsLose:"请选择需要补办的证件",
				rlicOriginIsDamage:"请选择需要补办的证件",
				rlicCopyIsDamage:"请选择需要补办的证件"
			}
		}));
		
		
		//文件上传
		biz.upload();
		
		$('.submitBtn').click(function() {
			//验证表单 
			var  sendData = biz.formValidate();
			if(!sendData){
				return false;
			}
			
			var formData = sendData.rlicPreAcceptInfo;

			formData.bizAddrAdc = $("input[name='bizAddrAdc']").attr('data-code');
			
			/**
			 * 
		        "retailLicNo":"330102219293",
		        "entName":"艾成松",
		        "bizAddrAdc":"330000,330200,330201",
		        "bizAddrStreet":"街道地址",
		        "bizRange":"1501,1502",
		        "ecoType":1410,
		        "ecoTypeOther":"12123",
		        "biId":"1313123",
		        "biPeriod":"2017-11-30",
		        "placeOwnership":2505,
		        "tenancyBegin":"2017-08-30",
		        "tenancyEnd":"2017-10-26",
		        "picName":"负责人",
		        "picCidType":2801,
		        "picCidNo":"36252319861019161X",
		        "picCidAddrStreet":"身份证住址",
		        "picAddrStreet":"现住地址",
		        "linkName":"艾成松",
		        "lineTel":"18268107023",
		        "rlicOriginIsLose":"1",
		        "rlicCopyIsLose":"0",
		        "rlicLoseReason":"遗失情由",
		        "rlicOriginIsDamage":"0",
		        "rlicCopyIsDamage":"0",
		        "rlicDamageReason":"",
		        "postAddrAdc":"330000,330100,330103",
		        "postAddrStreet":"浙江省杭州市下城区 *邮寄地址",
		        "postLinkName":"艾成松",
		        "postLinkTel":"18268107023", 
			 * 
			 * 
			 */
			formData.entName = lic.companyName; // 填充额外的信息
			formData.bizAddrAdc = lic.rlicAdcFull;
			formData.bizAddrStreet = lic.retailAddress;
			formData.ecoType = lic.ecoType;
			formData.ecoTypeOther = lic.ecoTypeOther;
			formData.picCidType = lic.retailCidType;
			formData.picCidNo = lic.retailCidNo;
			formData.picCidAddrStreet = lic.retailCidAddress;
			formData.picAddrStreet = lic.retailAddress;
			formData.lineTel = lic.retailTel;
			formData.biId = lic.induCommBusinessLicenceNumber;
			formData.biPeriod = lic.busiMgrLicValidity;
			formData.placeOwnership = lic.groundOwnership;
			formData.postLinkName = user.username;
			formData.postLinkTel = user.mobile;
			delete formData.renewType;
			
			
			$(".checkboxDiv input[type='checkbox']").each(function(){
				
				 var sendName = $(this).attr('data-send');
				 delete formData[sendName];
				 if($(this).is(':checked')){
					 formData[sendName] = 1
				 }else{
					 formData[sendName] = 0;
				 }
			});
			//获取行政区划
			sendData.rlicPreAcceptInfo = formData;
			$.ajaxPost({
				url:cfg.basePath+"/licPreGns/submitApplyZJ",
				data:{jsonStr:JSON.stringify(sendData)},
				ok:function(msg){
					//msg.data
					//缓存信息在sessio中
					if(msg.code==200){
						$.ajaxPost({
							url: base+'/saveReply',
							data:{preAcceptUuid:msg.data.preAcceptUuid,reply:JSON.stringify(msg.data)},
							ok:function(){
								window.location.href = base+"/reply/"+$.applyType()+"?id="+msg.data.preAcceptUuid;
							}
						});
					}
				}
			});
		});

	});