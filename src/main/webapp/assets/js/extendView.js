$(document).ready(function(){
		
		
	var param = $.getQueryParam();
	//如果是有数据的
	if(param.id){
		
		//如果是查看
		if(param.i==2){
			$(".isLoading").hide();
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
				$(".entNameLic").val(rlicPreAcceptInfo.companyName||rlicPreAcceptInfo.entName);
				$(".managerNameLic").val(rlicPreAcceptInfo.picName);
				$(".bizAddrStreetLic").val(rlicPreAcceptInfo.bizAddrStreet);
				$(".ecoTypeLic").val(rlicPreAcceptInfo.ecoTypeOther ? rlicPreAcceptInfo.ecoTypeOther : $.getEcoTypeByCode(rlicPreAcceptInfo.ecoType));
				$(".postAddrAdc").dist({initVal:rlicPreAcceptInfo.postAddrAdc});
				
				rlicPreAcceptInfo.newEcoTypeOther &&  $(".newEcoTypeOther").show().val(rlicPreAcceptInfo.newEcoTypeOther);
				
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
							showImg.append("<div class='imgParent'>"+
											"<img src='"+cfg.basePath+'/licPreGns/filePreview?filePath='+fileItem[i].applyMaterialAttPath +"'>"+
											"<i class='icon close hidden' style='background-position: -17px 0px;"+(param.i==2?'display:none':'')+"'>"+
											"</i>"+
										   "</div>");
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
										"<input type='file' multiple='' id='file_6' name='fileUrl' class='disabled' disabled='disabled'>"+
										"<div class='buttonContainer'>"+
											"<a class='primary button disabled'>开始上传</a>"+
										"</div>"+
									"</div>"+
									"<div class='showImg'>"+
										
									"</div>"+
								"</div>"+
							"</div>"+
						"</div>");
						
						showImg = uploadItem.find('.showImg');
						for(var i=0;i<fileItem.length;i++){
							showImg.append("<div class='imgParent'>"+
											"<img src='"+cfg.basePath+'/licPreGns/filePreview?filePath='+fileItem[i].applyMaterialAttPath +"'>"+
											"<i class='icon close hidden' style='background-position: -17px 0px;"+(param.i==2?'display:none':'')+"'>"+
											"</i>"+
										   "</div>");
						}
						
						$('.uploadContainer').append(uploadItem);
					}
	
				});
				
				layer.photos({
				    photos: '.showImg'
				   ,anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
				}); 
				
				$(".agreed").prop('checked',true);
			}
		});
	
	}
	 //订阅user对应的 对象	
	 pubsub.subscribe("user",function(key,data){
		 $(".picName").val(data.username);
		 $(".lineTel").val(data.mobile);
	 });

	$(".newPicCidType").select({data:$.picType,key:'label',valKey:'value',initVal:{ label:'身份证',value:2801 }});
});