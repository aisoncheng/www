$(document).ready(function(){
		//layer.myerror();
		//订阅user对应的 对象	
		pubsub.subscribe("user",function(key,data){
			$(".picName").val(data.username);
			$(".lineTel").val(data.mobile);
			$(".linkName").val(data.username);
		});
		
		
		
		
		var lic = {};
		
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

					if(rlicPreAcceptInfo.applyCloseBusinessDateS && rlicPreAcceptInfo.applyCloseBusinessDateE){
						$(".applyCloseBusinessDate").val(rlicPreAcceptInfo.applyCloseBusinessDateS+" ~ "+rlicPreAcceptInfo.applyCloseBusinessDateE);
					}
					//回显文件
					biz.viewFile(param,files);
					$(".agreed").prop('checked',true);
					
					
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
								if(rlicPreAcceptInfo.retailLicNo==lics[i].licNo){
									lic = lics[i];
								}
							}
							$(".retailLicNo").select({data:lics,key:'licNo',initVal:{'licNo':rlicPreAcceptInfo.retailLicNo},valKey:'licNo',cb:function(data){
								if(data.disabled){
									layer.myerror("证号为【"+data.licNo+"】的许可证不可办理此业务,原因：【"+data.notApplyReason+"】");
								}else{
									lic = data;
									$(".linkName").val(data.managerName);
								}	
							}})
						}
					});
				}
			});
		
		}


		$(".applyCloseBusinessDate").asDatepicker({
			lang : 'zh',
			mode : 'range'
		});
		

		//表单验证
		$(".layui-form").validate({
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
			//验证表单 
			var  sendData = biz.formValidate();
			if(!sendData){
				return false;
			}
			
			var formData = sendData.rlicPreAcceptInfo;

			
			formData.bizAddrAdc = $("input[name='bizAddrAdc']").attr('data-code');
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