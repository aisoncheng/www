$(document).ready(function(){
		//layer.myerror();
		//订阅user对应的 对象	
		pubsub.subscribe("user",function(key,data){
			$(".picName").val(data.username);
			$(".lineTel").val(data.mobile);
			$(".linkName").val(data.username);
		});
	 
		$(".applyCloseBusinessDate").asDatepicker({
			lang : 'zh',
			mode : 'range'
		});
		
		$(".applyDate").asDatepicker({
			lang : 'zh',
			mode : 'single'
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
						$("input[name='originalCloseBusinessDateS']").val(data.applyCloseBusinessDateStart);
						$("input[name='originalCloseBusinessDateE']").val(data.applyCloseBusinessDateEnd);
						$(".linkName").val(data.managerName);
					}	
				}});
			}
		});
		//表单验证
		$(".layui-form").validate(biz.yzOption(
			{
				rules : {
					picName : 'required',
					linkName : "required",
					lineTel : 'required',
					retailLicNo:"required",
					closeBusinessReason:"required",
					applyCloseBusinessDate:"required"
				},
				messages : {
					picName : '申请人获取失败',
					linkName : "请输入联系人",
					lineTel : '联系电话获取失败',
					retailLicNo:"请选择许可证",
					closeBusinessReason:"请填写停业事由",
					applyCloseBusinessDate:"请选择停业时间"
				}
			}

		));
		
		
		//文件上传
		biz.upload();
		
		$('.submitBtn').click(function() {
			//验证表单 
			var  sendData = biz.formValidate();
			if(!sendData){
				return false;
			}
			
			var formData = sendData.rlicPreAcceptInfo;
			var applyCloseBusinessDate = (formData.applyCloseBusinessDate+"").split('~');
			formData.applyCloseBusinessDateS = $.trim(applyCloseBusinessDate[0]);
			formData.applyCloseBusinessDateE = $.trim(applyCloseBusinessDate[1]);
			delete formData.applyCloseBusinessDate;
			
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
			formData.postLinkName = formData.linkName;
			formData.postLinkTel = formData.lineTel;
			//获取行政区划
			
			sendData.rlicPreAcceptInfo = formData;
			$.ajaxPost({
				url:cfg.basePath+"/licPreGns/submitApplyZJ",
				data:{jsonStr:JSON.stringify(sendData)},
				ok:function(msg){
					//msg.data
					//缓存信息在sessio中
					$.ajaxPost({
						url: base+'/saveReply',
						data:{preAcceptUuid:msg.data.preAcceptUuid,reply:JSON.stringify(msg.data)},
						ok:function(){
							window.location.href = base+"/reply/"+$.applyType()+"?id="+msg.data.preAcceptUuid;
						}
					});
				}
			});
		});

	});