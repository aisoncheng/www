<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@include file="../base/base.jsp"%>
<script type="text/javascript" src="${webPath}/assets/js/jquery-asDatepicker.min.js"></script>
<script type="text/javascript" src="${webPath}/assets/js/jquery.validate.js"></script>
<script type="text/javascript" src="${webPath}/assets/js/uploadImg.js"></script>
<link href="${webPath}/assets/css/asDatepicker.css" type="text/css" rel="stylesheet">
<link href="${webPath}/assets/css/upload.css" type="text/css" rel="stylesheet">
<title>烟草专卖许可证用户集成</title>
<style type="text/css">

.faren .col{
	float: left;
}
.retailLicNoDiv{
	position:relative;
}
.retailLicNoDiv img{
	position: absolute;
	top: 11px;
	right: 30px;
	right: 43px\9;
}
</style>
</head>
<body>
	<div class="container">
		<%@include file="../base/header.jsp"%>
		<div class="containerMy">
			<div class="containerBody">
				<%@include file="../base/busType.jsp"%>
				<div class="containerCenter">
					<%@include file="../base/step.jsp"%>
					<div class="containerRight">
						<!-- 实际的每个页面的内容写在这个里面 -->
						<div class="realContent">
							<form class="layui-form">
								<!-- 基本信息 -->
								<div style="margin-bottom: 20px;">
									<img src="${webPath}/assets/img/basicInfo.png">
								</div>
								
								<div class="row">
									<div class="col col-12">
										<label>申请人</label>
										<input name="picName" class='picName disabled' disabled="disabled"  autoFill='true' />
									</div>
									<div class="col col-12 retailLicNoDiv">
										<label>许可证号</label> 
										<input name="retailLicNo" class="retailLicNo disabled"  readonly="readonly" disabled="disabled"/>
										<img alt="" src="${webPath}/assets/img/loading.gif">
									</div>
								</div>
									
								<div class="formDiv">
									<div class="row">
										<div class="col col-12">
											<label>联系人</label>
											<input name="linkName" class="linkName" />
										</div>
										<div class="col col-12">
											<label>联系电话</label> 
											<input name="lineTel" class='disabled lineTel' disabled="disabled"  autoFill='true'/>
										</div>
									</div>
									
									<div class="row">
										<div class="col col-24">
											<label>申请恢复营业事由</label>
											<input name="reopenBusinessReason" />
										</div>
									</div>
									
									<div class="row">
										<div class="col col-12 ">
											<label class="ecoTypeLable">原停业日期</label> 
											<input name='applyCloseBusinessDateS' style="width: 100px;" class='disabled' disabled="disabled"  autoFill='true' /> 至 
											<input name='applyCloseBusinessDateE' style="width: 100px;" class='disabled' disabled="disabled"  autoFill='true' />
										</div>
									</div>
									
									<div class="row">
										<div class="col col-12 ">
											<label class="ecoTypeLable">申请恢复营业日期</label> 
											<input name='applyRestoreManagerDate' class="applyRestoreManagerDate" style="width: 100px;" /> 
										</div>
									</div>
								</div>
								</form>
								<!-- 申报材料-->
								<div style="margin-bottom: 20px;">
									<img src="${webPath}/assets/img/materials.png">
								</div>


								<div class="uploadContainer">
									<div class="row uploadRow">
										<div class="col labelCol"
											style="margin-left: 0%; width: 16.666666666666664%;">
											<span class="fileLable"
												style="height: 40px; line-height: 40px;">申请表</span>
										</div>
										<div class="col contentCol"
											style="margin-left: 0%; width: 83.33333333333334%;">
											<div
												style="height: 40px; line-height: 40px; border-left: 1px dotted rgb(202, 195, 195);">
												<a style="margin-left: 15px;" class="autoCreate">自动生成</a>
											</div>
										</div>
									</div>
									<div class="row uploadRow">
										<div class="col labelCol"
											style="margin-left: 0%; width: 16.666666666666664%;">
											<span class="fileLable">身份证-正面</span>
										</div>
										<div class="col contentCol"
											style="margin-left: 0%; width: 83.33333333333334%;">
											<div class="contentColInner"  materialNameTitle = 'identificationCard1'>
												<div class="rc-upload">
													<input type="file" multiple="" id="file_1" name='fileUrl' count='1' />
													<div class="buttonContainer">
														<a class="primary button"> 开始上传</a>
													</div>
												</div>
												<div class="showImg"></div>
											</div>
										</div>
									</div>

									<div class="row uploadRow">
										<div class="col labelCol"
											style="margin-left: 0%; width: 16.666666666666664%;">
											<span class="fileLable">身份证-反面</span>
										</div>
										<div class="col contentCol"
											style="margin-left: 0%; width: 83.33333333333334%;">
											<div class="contentColInner"  materialNameTitle = 'identificationCard2'>
												<div class="rc-upload">
													<input type="file" multiple="" id="file_2" name='fileUrl' count='1' />
													<div class="buttonContainer">
														<a class="primary button">开始上传</a>
													</div>
												</div>
												<div class="showImg"></div>
											</div>
										</div>
									</div>
								</div>

								<div style="margin: 30px 0px;" class="row ">
									<div class="col " style="margin-left: 0%; width: 100%;">
										<div
											style="border: 1px dotted rgb(202, 195, 195); border-radiux: 5px; padding: 10px;">
											<p style="padding: 5px;">申请人承诺：</p>
											<p style="padding: 5px;">以上信息经本人核对，确认无误。本申请人所提交的文件、证件以及有关材料全部真实、</p>
											<p style="padding: 5px;">有效，上传附件与原件一致。如果申请过程中存在虚假、欺骗等不法行为，本申请人愿承担由此引起的一切法律责任。</p>
											<div style="height: 30px;">
												<div class="checkboxContainer  "
													style="float: right; margin-right: 30px; margin-top: 15px;">
												  <input type="checkbox" class="agreed"/><span style="position: relative;top: -5px;left:3px">同意</span>
												</div>
											</div>
										</div>
									</div>
								</div>


								<div class="formButtons">
									<button type="button" class="buttonBig ">
										<span>保存草稿</span>
									</button>
									<button type="button" class="buttonBig submitBtn ">
										<span>提交申请</span>
									</button>
								</div>
							
						</div>
						<!-- 实际的每个页面的内容写在这个里面 end -->
					</div>
				</div>
			</div>
		</div>
	</div>







</body>


<script type="text/javascript">
	$(document).ready(function(){
		//layer.myerror();
		//订阅user对应的 对象	
		pubsub.subscribe("user",function(key,data){
			$(".picName").val(data.username);
			$(".lineTel").val(data.mobile);
			$(".linkName").val(data.username);
		});
	 
		$(".applyRestoreManagerDate").asDatepicker({
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
			
			var  formData = $(".layui-form").getFormData();
			
			/* var formData = {};
			var datas = data.split('&');
			$(datas).each(function(i,v){
				var vs = v.split('=');
				formData[vs[0]] = vs[1];
			}); */
			
			var applyCloseBusinessDate = (formData.applyCloseBusinessDate+"").split('~');
			formData.applyCloseBusinessDateS = applyCloseBusinessDate[0];
			formData.applyCloseBusinessDateE = applyCloseBusinessDate[1];
			
			delete formData.tenancyDate;
			formData.applyType = '1004';
			formData.bizRange = '1501,1502';
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
			formData.bizRangeIsChange = 0; //没有变更项..
			
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
							//window.location.href = '${webPath}/reply/new?id='+msg.data.preAcceptUuid;
						}
					});
				}
			});
			//.layui-form
		});

	});
</script>

<script src="${webPath}/assets/js/distpicker.data.js"></script>
<script src="${webPath}/assets/js/distpicker.js"></script>
</html>