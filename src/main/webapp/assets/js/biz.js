(function(w){
	
	
	var biz = {
			/**
			 *验证文件是否合法 
			 *如果合法返回文件json 可以用于直接提交.. 
			 *如果不合法返回false
			 **/
			getFile:function(){
				
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
						//{"code":200,"message":"成功","data":{"id":"8a83ad965e130655015e314be5a501d4","name":"QQ图片20170828112215.png","sufix":"png","path":"group1/M00/01/F6/CgMtFVmmOEqAfipeAADtQihzwNA370.png","size":60738,"enKey":""}}
						 if(imgData){
							 var postImg = {};
							 postImg.seqNo = i;
							 postImg.picName = imgData.picName||imgData.name;
							 postImg.applyMaterialAttPath = imgData.applyMaterialAttPath||imgData.path;
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
				}else{
					return fileData;
				}
				
			},
			/**
			 *验证表单 
			 **/
			formValidate:function(){
				//验证表单 
				var formFlag = $(".layui-form").valid();
				if(!formFlag){
					return false;
				}
				
				//验证文件 封装在一个方法里面
				var fileData =  biz.getFile();
				if(!fileData){
					return fileFlag;
				}
				//验证声明$(".agreed:checked")
				if($(".agreed:checked").length==0){
					layer.alert("请点击同意按钮",{title:"友情提醒"});
					return false;
				}
				var  formData = $(".layui-form").getFormData();
				
				formData.applyType = $.getApplyTypCode();
				formData.bizRange = '1501,1502';
				
				return  {rlicPreAcceptInfo: formData, applyMaterialArray: fileData};
			},
			/**
			 * 
			 *文件上传通用 
			 **/
			upload:function(){
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
			},
			/**
			 *展示和编辑页面
			 *回显文件的通用Js 
			 * @param param 为queryString的json对象
			 * @param files 为后台查询出来的文件json 对象
			 **/
			viewFile:function(param,files){
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
			},
			/**
			 *验证触发 
			 **/
			yzOption:function(param){
				
				var options = {
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
				}
				param = param || {};
			
				return $.extend(param,options);
		}
	}
	
	w.biz = biz;
	
	
})(window);