$(document).ready(function(){
		
	var lic = {};
	var param = $.getQueryParam();
	
	$("input[name='biPeriod']").asDatepicker({
		lang : 'zh',
	});
	$(".tenancyDate").asDatepicker({
		lang : 'zh',
		mode : 'range',
		initVal:''
	});
	//如果是有数据的
	if(param.id){
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
				$(".entNameLic").val(rlicPreAcceptInfo.companyName||rlicPreAcceptInfo.entName);
				$(".managerNameLic").val(rlicPreAcceptInfo.picName);
				$(".bizAddrStreetLic").val(rlicPreAcceptInfo.bizAddrStreet);
				$(".ecoTypeLic").val(rlicPreAcceptInfo.ecoTypeOther ? rlicPreAcceptInfo.ecoTypeOther : $.getEcoTypeByCode(rlicPreAcceptInfo.ecoType));
				$(".postAddrAdc").dist({initVal:rlicPreAcceptInfo.postAddrAdc});
				
				
				rlicPreAcceptInfo.newEcoType &&  $(".newEcoTypeOther").show().val(rlicPreAcceptInfo.newEcoTypeOther);
				
				//变更项是否被选中
				$(".sectionTitle input[type='checkbox']").each(function(i,v){
					var changeType =  $(this).attr("data-change");
					if(rlicPreAcceptInfo[changeType]==1){
						$(this).prop('checked',true);
					}
				});
				
				
				$("input[name='placeOwnership']").each(function(i,v){
					if($(this).val()==rlicPreAcceptInfo.placeOwnership){
						$(this).prop('checked',true);
					}
				});
				
				$("input[name='newEcoType']").each(function(i,v){
					if($(this).val()==rlicPreAcceptInfo.newEcoType){
						$(this).prop('checked',true);
					}
				});
				
				if(rlicPreAcceptInfo.tenancyBegin && rlicPreAcceptInfo.tenancyEnd){
					$(".tenancyDate").val(rlicPreAcceptInfo.tenancyBegin+" ~ "+rlicPreAcceptInfo.tenancyEnd);
				}
				
				$("input[name='newBizAddrAdc']").dist({initVal:rlicPreAcceptInfo.newBizAddrAdc});
				
				$("input[name='addrChangeReason']").each(function(i,v){
					
					 if($(this).val()==rlicPreAcceptInfo.addrChangeReason){
						 $(this).prop('checked',true);
					 }
				});
				
				//添加文件
				
				$(files).each(function(i,v){
						
					
					var  showImg = $("div[materialnametitle= '"+v.materialNameTitle+"'] .showImg");
					var fileItem = v.applyMaterialAttArray;
					
					if(showImg.length>0){
						//<div class="imgParent"><img src="http://10.44.21.96:9090/REGIEAPP_LIC_WEB/licPreGns/filePreview?filePath=group1/M00/01/F4/CgMtFVmj3giAEdnuAADtQihzwNA372.png&amp;ccesstoken=8aac95e05e13632c015e2780ff350023&amp;orgCode=10330101" layer-index="0"><i class="icon close" style="background-position: -17px 0px;"></i></div>
						for(var i=0;i<fileItem.length;i++){
							var img  = $("<div class='imgParent'>"+
									"<img src='"+cfg.basePath+'/licPreGns/filePreview?filePath='+fileItem[i].applyMaterialAttPath +"'>"+
									"<i class='icon close hidden' style='background-position: -17px 0px;"+(param.i==2?'display:none':'')+"'>"+
									"</i>"+
								   "</div>");
							img.find('img').data('img',fileItem[i]);
							showImg.append(img);
						}
					}else{
					 // 添加文件项
						var uploadItem = $("<div class='row uploadRow businessLicense' >"+
								"<div class='col labelCol' style='margin-left: 0%; width: 16.666666666666664%;'>"+
								"<span class='fileLable'>"+v.materialName+"</span>"+
							"</div>"+
							"<div class='col contentCol' style='margin-left: 0%; width: 83.33333333333334%;'>"+
								"<div class='contentColInner' materialnametitle='"+v.materialNameTitle+"'>"+
									"<div class='rc-upload'>"+
										"<input type='file' multiple='' id='file_"+(i+10)+"' name='fileUrl' >"+
										"<div class='buttonContainer'>"+
											"<a class='primary button'>开始上传</a>"+
										"</div>"+
									"</div>"+
									"<div class='showImg'>"+
										
									"</div>"+
								"</div>"+
							"</div>"+
						"</div>");
						
						showImg = uploadItem.find('.showImg');
						for(var i=0;i<fileItem.length;i++){
							var img  = $("<div class='imgParent'>"+
									"<img src='"+cfg.basePath+'/licPreGns/filePreview?filePath='+fileItem[i].applyMaterialAttPath +"'>"+
									"<i class='icon close hidden' style='background-position: -17px 0px;"+(param.i==2?'display:none':'')+"'>"+
									"</i>"+
								   "</div>");
							img.find('img').data('img',fileItem[i]);
							showImg.append(img);
						}
						
						$('.uploadContainer').append(uploadItem);
					}
	
				});
				
				//判断文件是否可以上传
				$('.rc-upload').each(function(){
					
					var file = $(this).find("input[type='file']");
					var count = file.attr('count');
					var a = $(this).find('.buttonContainer a');
					var len = $(this).next('.showImg').find('img').length
					if(count &&  parseInt(count)>=len){
						file.hide();
						a.addClass('disabled');
					}
					
				});
				
				
				layer.photos({
				    photos: '.showImg'
				   ,anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
				}); 
				
				$(".agreed").prop('checked',true);
				
				
				$(".sectionTitle input[type='checkbox']").each(function(){
					var parent = $(this).parents('.sectionDiv');
					if($(this).is(":checked")){
						parent.find('*').removeClass('disabled').removeAttr("disabled");
					}
					
				});
				
				
				
				
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
						var initVal = {licNo:$(".retailLicNo").val(),licNo:$(".retailLicNo").val()}
						$(".retailLicNo").select({data:lics,key:'licNo',valKey:'licNo',initVal:initVal,cb:function(data){
							if(data.disabled){
								layer.myerror("证号为【"+data.licNo+"】的许可证不可办理此业务,原因：【"+data.notApplyReason+"】");
							}else{
								lic = data;
								$(".entNameLic").val(data.companyName);
								$(".managerNameLic").val(data.managerName);
								$(".bizAddrStreetLic").val(data.businessAddr);
								$(".ecoTypeLic").val(data.ecoTypeOther ? data.ecoTypeOther : $.getEcoTypeByCode(data.ecoType));
								$("input[name='biId']").val(data.induCommBusinessLicenceNumber);
							}	
						}});
					}
				});	

			}
		});
	
	}
	 //订阅user对应的 对象	
	 pubsub.subscribe("user",function(key,data){
		 $(".picName").val(data.username);
		 $(".lineTel").val(data.mobile);
	 });
	 
	 
	
	 
	 
	 //radio 按钮逻辑控制
	 $(".radioBody").click(function() {
		var val = $(this).data('checked');
		var radio = $(this).find("input[type='radio']");
		
		if(radio.hasClass('disabled')){
			return false;
		}
		

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
			}
			
		}else{
			if (radioVal == '1410') {
				$('.newEcoTypeOther').show();
			} else {
				$('.newEcoTypeOther').hide();
			}
		}
	});
	
	 
	
	 
	//变更项是否被选中
	//处理各种点击启用禁用
	$(".sectionTitle").click(function(e){
		 var checkbox = $(this).find("input[type='checkbox']");
		
		 var target = $(e.target);
		 if(!target.hasClass('checkbox')){
			 if(checkbox.is(":checked")){
				 checkbox.prop('checked',false);
			 }else{
				 checkbox.prop('checked',true);
			 }
		 }else{
			 checkbox = target;
		 }
		
		var parent = checkbox.parents(".sectionDiv");
		var checked = checkbox.is(":checked");
		
		if(checked){
			parent.removeClass('disabled').removeAttr("disabled");
			parent.find('*').not(".sectionTitle,.newPicCidType").removeClass('disabled').removeAttr("disabled");
		}else{
			parent.addClass('disabled').attr("disabled","disabled");
			parent.find('*').not(".sectionTitle,.newPicCidType").addClass('disabled').attr("disabled","disabled").prop("checked",false);
			parent.find("input[type='text']").val('');
			parent.find('.icon').hide();
		}
	});
	
	
	
	$(".addrChangeReasonp").click(function(i,v){
		var val = $(this).data('checked');
		var radio = $(this).find("input[type='radio']");
		if(radio.hasClass('disabled')){
			return false;
		}
		
		if (!val) {
			radio.prop('checked', 'true');
			$(this).data('checked', 1);
		} else {
			radio.prop('checked', 'false');
			$(this).data('checked', 0);
		}
		var radioVal = radio.val();
		$("div[data-way='addr'],.relocation,.newLic,.businessLicense").remove();
		if(radioVal==2){
			//businessLicense  changed 工商营业执照（变更后）
			//企业变更  工商营业执照新
			// relocation  拆迁安置协议等证明材料
			
			// newLic  工商营业执照（新地址）
			$('.uploadContainer').append("<div class='row uploadRow relocation' data-way='addr'>"+
										"<div class='col labelCol' style='margin-left: 0%; width: 16.666666666666664%;'>"+
											"<span class='fileLable'>拆迁安置协议等证明材料</span>"+
										"</div>"+
										"<div class='col contentCol' style='margin-left: 0%; width: 83.33333333333334%;'>"+
											"<div class='contentColInner' materialnametitle='relocation'>"+
												"<div class='rc-upload'>"+
													"<input type='file' multiple='' id='file_4' name='fileUrl'>"+
													"<div class='buttonContainer'>"+
														"<a class='primary button'>开始上传</a>"+
													"</div>"+
												"</div>"+
												"<div class='showImg'>"+
													
												"</div>"+
											"</div>"+
										"</div>"+
									"</div>");
			
			$('.uploadContainer').append("<div class='row uploadRow newLic' data-way='addr'>"+
					"<div class='col labelCol' style='margin-left: 0%; width: 16.666666666666664%;'>"+
						"<span class='fileLable'>工商营业执照（新地址）</span>"+
					"</div>"+
					"<div class='col contentCol' style='margin-left: 0%; width: 83.33333333333334%;'>"+
						"<div class='contentColInner' materialnametitle='newLic'>"+
							"<div class='rc-upload'>"+
								"<input type='file' multiple='' id='file_5' name='fileUrl' >"+
								"<div class='buttonContainer'>"+
									"<a class='primary button'>开始上传</a>"+
								"</div>"+
							"</div>"+
							"<div class='showImg'>"+
								
							"</div>"+
						"</div>"+
					"</div>"+
				"</div>");
			
		}else{
			$('.uploadContainer').append("<div class='row uploadRow businessLicense' data-way='addr'>"+
					"<div class='col labelCol' style='margin-left: 0%; width: 16.666666666666664%;'>"+
						"<span class='fileLable'>工商营业执照（变更后）</span>"+
					"</div>"+
					"<div class='col contentCol' style='margin-left: 0%; width: 83.33333333333334%;'>"+
						"<div class='contentColInner' materialnametitle='businessLicense'>"+
							"<div class='rc-upload'>"+
								"<input type='file' multiple='' id='file_6' name='fileUrl'>"+
								"<div class='buttonContainer'>"+
									"<a class='primary button'>开始上传</a>"+
								"</div>"+
							"</div>"+
							"<div class='showImg'>"+
								
							"</div>"+
						"</div>"+
					"</div>"+
				"</div>");
			
			
		}
		
	});
	
	$(".entNameIsChangeTitle").click(function(){
		
		  var checkbox = $(this).find("input[type='checkbox']");
		 // var checed = checkbox.data("checked");
		  var busin = $(".businessLicense");
		
		  //console.log();
		  if(checkbox.is(":checked")){
			 
			  if(busin.length==0){
				  $('.uploadContainer').append("<div class='row uploadRow businessLicense' data-way='entName'>"+
							"<div class='col labelCol' style='margin-left: 0%; width: 16.666666666666664%;'>"+
								"<span class='fileLable'>工商营业执照（变更后）</span>"+
							"</div>"+
							"<div class='col contentCol' style='margin-left: 0%; width: 83.33333333333334%;'>"+
								"<div class='contentColInner' materialnametitle='businessLicense'>"+
									"<div class='rc-upload'>"+
										"<input type='file' multiple='' id='file_6' name='fileUrl'>"+
										"<div class='buttonContainer'>"+
											"<a class='primary button'>开始上传</a>"+
										"</div>"+
									"</div>"+
									"<div class='showImg'>"+
										
									"</div>"+
								"</div>"+
							"</div>"+
						"</div>");
			  }
			  
		  }else{
			  //如果是点击企业名称来的 则删除
			 if( busin.attr('data-way')=='entName'){
				 busin.remove();
			 }
		  }

	});
	
	
	
	
	$(".layui-form").validate({
		rules : {
			entName : "required",
			bizaddrStreet : "required",
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
			postAddrStreet : 'required',
			retailLicNo:"required",
			newEntName:"required",
			newPicName:{
				required:".picIsChange:checked",
				maxlength:6
			},
			newEcoTypeOther:"required",
			newPicCidNo:"required"

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
			postAddrStreet : '请选择邮寄地址详情',
			retailLicNo:"请选择许可证号",
			newEntName:"请输入新的企业/字号名称",
			newPicName:{
				required:"法定代表人(负责人)、经营者姓名",
				maxlength:"法定代表人(负责人)、经营者姓名最长不得超过6个字"
			},
			newEcoTypeOther:"请输入经济类型其他",
			newPicCidNo:"请输入身份证号码"
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
								"<img src="+base+"/assets/img/loading.gif>"+
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
		$(".uploadContainer").on('click',".icon.close",function(){
			var parent =  $(this).parents(".contentColInner");
			var imgParent = $(this).parents('.imgParent');
			imgParent.remove();
			parent.find("input[type='file']").show();
			parent.find('.buttonContainer .button').removeClass('disabled');
		});
	 

	$(".newPicCidType").select({data:$.picType,key:'label',valKey:'value',initVal:{ label:'身份证',value:2801 }});
	
	
	$('.submitBtn').click(function() {
		
		
		
		//验证表单 
		var formFlag = $(".layui-form").valid();
		if(!formFlag){
			return false;
		}
		
		//验证文件
		var fileData = [];
		//fileData.shift();
		var fileFlag = true;
		$('.uploadRow').not(":first").each(function(i,v){
			 var materialNameTitle = $(this).find('.contentColInner').attr('materialNameTitle');
			 var imgs = $(this).find('img');
			 var input = $(this).find("input[type='file']");
			 var label = $(this).find('.fileLable').text();
			 var count =  input.attr('count') || 999;
			 
			 var file = {
					 materialNameTitle: materialNameTitle,
	                 fileSeqNo: i,
	                 isFileCatalog: 1,
	                 pageNum: 1,
	                 count: count,
	                 allowFix: 'jpg,jpeg,gif,png',
	                 applyMaterialAttArray: [],
	                 materialName: label
					 
			 };
	
				 
			 
			 var imgDatas = [];
			 imgs.each(function(i,v){
				 var imgData = $(this).data('img');
				
				 if(imgData){
					 var postImg = {};
					 postImg.seqNo = i;
					 postImg.picName = imgData.picName;
					 postImg.applyMaterialAttPath = imgData.applyMaterialAttPath;
					 imgDatas.push(postImg);
				 } 
			 });
			
			 if(imgDatas.length==0){
				 layer.alert("请上传【"+label+"】",{title:"友情提醒"});
				 fileFlag = false;
				 return false;
			 }
			 
			 file.applyMaterialAttArray =  imgDatas;
			 fileData.push(file);
		});
		if(!fileFlag){
			return fileFlag;
		}
		
		//验证声明$(".agreed:checked")
		
		if($(".agreed:checked").length==0){
			layer.alert("请点击同意按钮",{title:"友情提醒"});
			return false;
		}
		
		var  formData = $(".layui-form").getFormData();
		
		var tenancyDates = (formData.tenancyDate+"").split('~');
		formData.tenancyBegin = $.trim(tenancyDates[0]);
		formData.tenancyEnd = $.trim(tenancyDates[1]);
		
		delete formData.tenancyDate;
		formData.applyType = '1002';
		formData.bizRange = '1501,1502';
		formData.bizAddrAdc = $("input[name='bizAddrAdc']").attr('data-code');
		
		
		
		formData.entName = lic.companyName; // 填充额外的信息
		formData.bizAddrAdc = lic.rlicAdcFull;
		formData.bizAddrStreet = lic.businessAddr;
		formData.ecoType = lic.ecoType;
		formData.ecoTypeOther = lic.ecoTypeOther;
		formData.picCidType = lic.retailCidType;
		formData.picCidNo = lic.retailCidNo;
		formData.picCidAddrStreet = lic.retailCidAddress;
		formData.picAddrStreet = lic.retailAddress;
		formData.lineTel = lic.retailTel;
		formData.bizRangeIsChange = 0; //没有变更项..
		formData.postLinkName = window.user.username;
		formData.postLinkTel = window.user.mobile;
		
		
		formData.newEcoType  = $("input[name='newEcoType']:checked").val();
		formData.placeOwnership  = $("input[name='placeOwnership']:checked").val();
		
		
		
		//企业名称是否变更
		if($(".entNameIsChange").is(":checked")){
			formData.entNameIsChange = 1;
		}else{
			formData.entNameIsChange = 1;
		}
		//法人等是否变更
		if($(".picIsChange").is(":checked")){
			formData.picIsChange = 1;
		}else{
			formData.picIsChange = 0;
		}
		//经济类型是否变更
		if($(".ecoTypeIsChange").is(":checked")){
			formData.ecoTypeIsChange = 1;
		}else{
			formData.ecoTypeIsChange = 0;
		}
		
		//经营地址是否变更
		if($(".bizAddrIsChange").is(":checked")){
			formData.bizAddrIsChange = 1;
		}else{
			formData.bizAddrIsChange = 0;
		}

		//获取行政区划
		
		var  postData = {rlicPreAcceptInfo: formData, applyMaterialArray: fileData};
		$.ajaxPost({
			url:cfg.basePath+"/licPreGns/submitApplyZJ",
			data:{jsonStr:JSON.stringify(postData)},
			ok:function(msg){
				
				//msg.data
				//缓存信息在sessio中
				if(msg.code==200){
					$.ajaxPost({
						url: base+'/saveReply',
						data:{preAcceptUuid:msg.data.preAcceptUuid,reply:JSON.stringify(msg.data)},
						ok:function(){
							window.location.href = base+'/reply/change?id='+msg.data.preAcceptUuid;
						}
					});
				}
			}
		});
		//.layui-form
	});

});