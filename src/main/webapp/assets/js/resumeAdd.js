$(document).ready(function(){
	//layer.myerror();
	//订阅user对应的 对象	
	pubsub.subscribe("user",function(key,data){
		$(".picName").val(data.username);
		$(".lineTel").val(data.mobile);
		$(".linkName").val(data.username);
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
					console.log("许可证信息", data);
					$("input[name='originalCloseBusinessDateS']").val(data.applyCloseBusinessDateStart);
					$("input[name='originalCloseBusinessDateE']").val(data.applyCloseBusinessDateEnd);
					$(".linkName").val(data.managerName);
				}	
			}});
		}
	});
	//表单验证
	$(".layui-form").validate({
		rules : {
			picName : 'required',
			linkName : "required",
			lineTel : 'required',
			retailLicNo:"required",
			reopenBusinessReason:"required",
			applyCloseBusinessDate:"required"
		},
		messages : {
			picName : '申请人获取失败',
			linkName : "请输入联系人",
			lineTel : '联系电话获取失败',
			retailLicNo:"请选择许可证",
			reopenBusinessReason:"请填写恢复营业事由",
			applyCloseBusinessDate:"请选择恢复营业日期"
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
	
	var flag = false;
	new File(
			{
				el : '.contentColInner input',
				eve : 'change',
				alow : [ 'jpg', 'png', 'gif', 'jpeg' ],
				url : cfg.basePath+"/licPreGns/fileUpload?accesstoken="+$.getCookieAcce()+"&orgCode="+$.getCookieOrg(),
				callBack : function(id, a) {
					var taget = $("#"+id);
					var parent = taget.parents(".contentColInner");
					var showImg = parent.find('.showImg');
					var url  = cfg.basePath+"/licPreGns/filePreview?filePath="+a.data.path+"&ccesstoken="+$.getCookieAcce()+"&orgCode="+$.getCookieOrg();
					
					var lastimg = showImg.find('.imgParent:last');
					lastimg.find('img').attr({'src':url});
					lastimg.find('img').data('img',a.data);
					lastimg.find('.icon').show();
					
					if(!flag){
						layer.photos({
						    photos: '.showImg'
						   ,anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
						}); 
						flag = true;
					}
					taget.val('');
					
					
				},
				before:function(a,b,c){
					
					var taget = $(this);
					var targetCount = taget.attr('count');
					targetCount = targetCount ? parseInt(targetCount) : 9999;
					
					var parent = taget.parents(".contentColInner");
					var showImg = parent.find('.showImg');
					//判断是否能够上传文件 超过了数量
					if(showImg.find('img').length>=targetCount){
						return false;
					}
					showImg.append("<div class='imgParent'>"+
							"<img src='"+base+"/assets/img/loading.gif'>"+
							 "<i class='icon close' style='background-position: -17px 0px;display:none;'></i>"+
							"</div>");
					
					
					if(showImg.find('img').length>=targetCount){
						parent.find("input[type='file']").hide();
						parent.find('.buttonContainer .button').addClass('disabled');
					}
					
					return true;
				}
			});

	//删除文件 icon close
	$(".showImg").on('click',".icon.close",function(){
		var parent =  $(this).parents(".contentColInner");
		var imgParent = $(this).parents('.imgParent');
		imgParent.remove();
		parent.find("input[type='file']").show();
		parent.find('.buttonContainer .button').removeClass('disabled');
	});
	
	$('.submitBtn').click(function() {
		//验证表单 
		var formFlag = $(".layui-form").valid();
		if(!formFlag){
			return false;
		}
		
		//验证文件
		var fileData = $.extend([],cfg.files.resume);
		fileData.shift();
		$('.contentColInner').each(function(i,v){
			 var materialNameTitle = $(this).attr('materialNameTitle');
			 var imgs = $(this).find('img');
			 var imgType = fileData[i];
			 var count =  imgType.count;
			 var imgDatas = [];
			 imgs.each(function(i,v){
				 var imgData = $(this).data('img');
				 if(imgData){
					 var postImg = {};
					 postImg.seqNo = i;
					 postImg.picName = imgData.name;
					 postImg.applyMaterialAttPath = imgData.path;
					 imgDatas.push(postImg);
				 } 
			 });
			 if(imgDatas.length==0){
				 layer.alert("请上传【"+imgType.materialName+"】",{title:"友情提醒"});
				 return false;
			 }
			 
			 fileData[i].applyMaterialAttArray = imgDatas; 
		});
		
		//验证声明$(".agreed:checked")
		
		if($(".agreed:checked").length==0){
			layer.alert("请点击同意按钮",{title:"友情提醒"});
			return false;
		}
		
		var  formData = $(".layui-form").getFormData();
		
		/* var formData = {};
		var datas = data.split('&');
		$(datas).each(function(i,v){
			var vs = v.split('=');
			formData[vs[0]] = vs[1];
		}); */
		
		formData.applyType = $.getApplyTypCode();
		formData.bizRange = '1501,1502';
		// formData.bizAddrAdc = $("input[name='bizAddrAdc']").attr('data-code');
		
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
		formData.bizRangeIsChange = 0; //没有变更项..
		
		var  postData = {rlicPreAcceptInfo: formData, applyMaterialArray: fileData};
		console.log(JSON.stringify(postData));
		$.ajaxPost({
			url:cfg.basePath+"/licPreGns/submitApplyZJ",
			data:{jsonStr:JSON.stringify(postData)},
			ok:function(msg){
				//msg.data
				//缓存信息在sessio中
				$.ajaxPost({
					url: base + '/saveReply',
					data:{preAcceptUuid:msg.data.preAcceptUuid,reply:JSON.stringify(msg.data)},
					ok:function(){
						window.location.href = base+"/reply/"+$.applyType()+"?id="+msg.data.preAcceptUuid;
					}
				});
			}
		});
		//.layui-form
	});

});
