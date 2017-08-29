	$(function() {

		
		$(".changqi").click(function(){
			if(this.checked){
				$(".tenancyDate").attr('disabled',"disabled").addClass('disabled').val('');
			}else{
				$(".tenancyDate").removeAttr('disabled').removeClass('disabled');
			}
		});
		
		$(".bizAddrAdc").dist();
		$("input[name='postAddrAdc']").dist();
		
		$("input[name='picCidType']").select({data:$.picType,key:'label',valKey:'value',initVal:{ label:'身份证',value:2801 }});
		
		$(".biPeriod").asDatepicker({
			lang : 'zh'
		});
		$(".tenancyDate").asDatepicker({
			lang : 'zh',
			mode : 'range'
		});
		
		
		$('#distpicker').distpicker({
			province : '浙江省',
			city : '杭州市',
			district : '西湖区'
		});

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
								"<img src='${webPath}/assets/img/loading.gif'>"+
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
			var fileData = $.extend([],cfg.files.newBus);
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
			
			var  data = $(".layui-form").serialize();
			
			var formData = {};
			var datas = data.split('&');
			$(datas).each(function(i,v){
				var vs = v.split('=');
				formData[vs[0]] = vs[1];
			});
			
			var tenancyDates = (formData.tenancyDate+"").split('++~++');
			formData.tenancyBegin = tenancyDates[0];
			formData.tenancyEnd = tenancyDates[1];
			delete formData.tenancyDate;
			formData.postLinkName = user.username;
			formData.postLinkTel = user.mobile;
			formData.applyType = '1001';
			formData.bizRange = '1501,1502';
			formData.bizAddrAdc = $("input[name='bizAddrAdc']").attr('data-code');
			
			
			//获取行政区划
			
			var  postData = {rlicPreAcceptInfo: formData, applyMaterialArray: fileData};
			$.ajaxPost({
				url:cfg.basePath+"/licPreGns/submitApplyZJ",
				data:{jsonStr:JSON.stringify(postData)},
				ok:function(msg){
					//msg.data
					//缓存信息在sessio中
					$.ajaxPost({
						url: '${webPath}/saveReply',
						data:{preAcceptUuid:msg.data.preAcceptUuid,reply:JSON.stringify(msg.data)},
						ok:function(){
							window.location.href = '${webPath}/reply/new?id='+msg.data.preAcceptUuid;
						}
					});
				}
			});
			//.layui-form
		});
	});