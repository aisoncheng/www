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
								<div class="formDiv">
									<div class="row">
										<div class="col col-12">
											<label>申请人</label>
											<input name="picName" class='picName disabled' disabled="disabled"  autoFill='true' />
										</div>
										<div class="col col-12">
											<label>联系电话</label> 
											<input name="lineTel" class='disabled lineTel' disabled="disabled"  autoFill='true'/>
										</div>
									</div>
									
									<div class="row">
										<div class="col col-12">
											<label>企业/字号名称：</label>
											<input   class='disabled entNameLic'  autoFill='true' disabled="disabled"/>
										</div>
										<div class="col col-12">
											<label>负责人/经营者：</label> 
											<input   class="disabled managerNameLic" autoFill='true' disabled="disabled"/>
										</div>
									</div>
									
									<div class="row">
										<div class="col col-12">
											<label>经营地址：</label>
											<input   class='disabled bizAddrStreetLic'  autoFill='true' disabled="disabled"/>
										</div>
										<div class="col col-12">
											<label>经济类型：</label> 
											<input  class="disabled ecoTypeLic" autoFill='true' disabled="disabled"/>
										</div>
									</div>

									<div class="row">
										<div class="col col-12 retailLicNoDiv">
											<label>许可证号</label> 
											<input name="retailLicNo" class="retailLicNo disabled"  readonly="readonly" disabled="disabled"/>
											<img alt="" src="${webPath}/assets/img/loading.gif">
										</div>
										<div class="col col-12">
											<label>联系人</label>
											<input name="linkName"  />
										</div>
										
									</div>
									
									<div class="row">
										<div class="col col-12">
											<label>邮寄地址</label>
											<input name="postAddrAdc"  class='postAddrAdc' />
										</div>
										<div class="col col-12">
											<label>邮寄街道</label> 
											<input name="postAddrStreet" />
										</div>
									</div>
									
								
									
									<div class="row">
										<div class="col col-12">
											<label>工商营业执照</label>
											<input name="biId"   />
										</div>
										<div class="col col-12">
											<label>有效期</label> 
											<input name="biPeriod"  readonly="readonly" data-type='date'/>
										</div>
									</div>
									
									<div class="row">
										<div class="col col-24 ">
											<label class="ecoTypeLable">场地归属</label>
											<div class="ecoType">
												<div class="radioBody">
													<input name='placeOwnership' type='radio' value="2501" /><span>自有</span>
												</div>
												<div class="radioBody">
													<input name='placeOwnership' type='radio' value="2502" /><span>租赁</span>
												</div>
												<div class="radioBody">
													<input name='placeOwnership' type='radio' value="2503" /><span>无偿使用</span>
												</div>
												<div class="radioBody">
													<input name='placeOwnership' type='radio' value="2504" /><span>租赁长期</span>
												</div>
												<div class="radioBody">
													<input name='placeOwnership' type='radio' value="2505" /><span>无偿使用长期</span>
												</div>
											</div>
										</div>
									</div>


									<div class="row">
										<div class="col col-24 ">
											<label class="ecoTypeLable">租赁/无偿使用期限</label> <input
												name='tenancyDate' style="width: 250px;" class='tenancyDate' />
											<input type='checkbox'  class='changqi'>
											长期
										</div>
									</div>
									
									
									
									<div class="tag" style="float: left;margin-bottom: 20px">
										<span style="margin-left: 20px;">以下为变更项</span>
									</div>
									
									
									<div class="sectionDiv disabled" style="float: left;">
										<div class="sectionTitle"><input class="checkbox" class="entNameIsChange" type="checkbox" />企业(字号)名称变更</div>
										<div class="row" style="margin-top: 20px;">
											<div class="col col-24">
												<label>企业（字号）名称</label> 
												<input name='newEntName' disabled="disabled"  class="disabled"/>
											</div>
										</div>
									</div>
									
									
									<div class="sectionDiv disabled" style="float: left;">
										<div class="sectionTitle"><input class="checkbox" class="picIsChange" type="checkbox" />法定代表人(负责人)、经营者姓名变更</div>
										<div class="row faren" style="margin-top: 20px;">
											<div class=" col" style="width: 50%">
												<input name='newPicName' disabled="disabled"  class="disabled" style="width: 385px" placeholder='法定代表人(负责人)、经营者姓名' />
											</div>
											<div class=" col" style="width: 20%">
												<input  name="newPicCidType"  style="width: 143px;" class='newPicCidType disabled' disabled="disabled"/>
											</div>
											<div class=" col" style="width: 30%">
												<input name='newPicCidNo' disabled="disabled"  class="disabled" style="width: 225px;" placeholder='身份证号码'  />
											</div>
										</div>
									</div>
									
									
									<div class="sectionDiv disabled" style="float: left;">
										<div class="sectionTitle"><input class="checkbox bizAddrIsChange" type="checkbox" />经营地址名称变更</div>
										<div class="col col-24">
											<label style="float: left;">经营地址类型变更</label> 
											<p style="float: left; margin-top: 10px;">
												<input style="width: 14px;height: 14px;" name="addrChangeReason"  type="radio" value="1">
												<span>经营地址名称变更（仅适用于经营地址名称的变更；实际地址发生改变的，请申请新办。）</span>
											</p>
											<p style="float: left;">
												<input  style="width: 14px;height: 14px;" name="addrChangeReason"  type="radio" value="2">
												<span>拆迁导致的经营地址变更（仅适用于因道路规划、城市建设等客观原因造成的经营地址改变。）</span>
											</p>
										</div>
										<div class="row">
											<div class="col col-12">
												<label>新经营地址</label>
												<input name="newBizAddrAdc" readonly="readonly"  />
											</div>
											<div class="col col-12">
												<label>新经营地址(街道)</label> 
												<input name="newBizAddrStreet"  />
											</div>
										</div>
									</div>
									
									
									<div class="sectionDiv disabled" style="float: left;">
										<div class="sectionTitle"><input class="checkbox ecoTypeIsChange"  type="checkbox" />变更经济类型</div>
										<div class="row">
										<div class="col col-24 " style="margin-top: 30px;">
											<label class="ecoTypeLable">经济类型</label>
											<div class="ecoType">
												<div class="radioBody">
													<input name='newEcoType' type='radio' value="1401" /><span>国有</span>
												</div>
												<div class="radioBody">
													<input name='newEcoType' type='radio' value="1402" /><span>集体</span>
												</div>
												<div class="radioBody">
													<input name='newEcoType' type='radio' value="1403" /><span>个体</span>
												</div>
												<div class="radioBody">
													<input name='newEcoType' type='radio' value="1404" /><span>合伙</span>
												</div>
												<div class="radioBody">
													<input name='newEcoType' type='radio' value="1405" /><span>股份制(合作)</span>
												</div>
												<div class="radioBody">
													<input name='newEcoType' type='radio' value="1406" /><span>个人独资</span>
												</div>
												<div class="radioBody">
													<input name='newEcoType' type='radio' value="1407" /><span>有限责任</span>
												</div>
												<div class="radioBody">
													<input name='newEcoType' type='radio' value="1408" /><span>外商投资</span>
												</div>
												<div class="radioBody">
													<input name='newEcoType' type='radio' value="1409" /><span>股份有限公司</span>
												</div>
												<div class="radioBody">
													<input name='newEcoType' type='radio' value="1410" /><span>其他</span>
												</div>
												<div>
													<input name='newEcoTypeOther' style="width: 80px;"
														class='hidden newEcoTypeOther' />
												</div>
											</div>
										</div>
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

									<div class="row uploadRow">
										<div class="col labelCol"
											style="margin-left: 0%; width: 16.666666666666664%;">
											<span class="fileLable">工商营业执照</span>
										</div>
										<div class="col contentCol"
											style="margin-left: 0%; width: 83.33333333333334%;">
											<div class="contentColInner"   materialNameTitle = 'businessLicense'>
												<div class="rc-upload">
													<input type="file" multiple="" id="file_3" name='fileUrl' />
													<div class="buttonContainer">
														<a class="primary button">开始上传</a>
													</div>
												</div>
												<div class="showImg">
													
												</div>
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
	 });
	
	
	$(".newPicCidType").select({data:$.picType,key:'label',valKey:'value',initVal:{ label:'身份证',value:2801 }});
	$('.postAddrAdc').dist();
	$("input[name='newBizAddrAdc']").dist();
	
	$("input[name='biPeriod']").asDatepicker({
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
					console.log(lic);
					$(".entNameLic").val(data.companyName);
					$(".managerNameLic").val(data.managerName);
					$(".bizAddrStreetLic").val(data.businessAddr);
					$(".ecoTypeLic").val(data.ecoTypeOther ? data.ecoTypeOther : $.getEcoTypeByCode(data.ecoType));
					$("input[name='biId']").val(data.induCommBusinessLicenceNumber);
				}	
			}});
		}
	});
		
		
	//初始化的时候禁用所有	
	$(".sectionDiv *").not(".sectionTitle").addClass('disabled').attr("disabled","disabled");
		
		
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
			parent.find('*').not(".sectionTitle,.newPicCidType").addClass('disabled').attr("disabled","disabled").val('');
			parent.find('.icon').hide();
		}
	});
		
		
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
		var radioVal = radio.val();
		if (radioVal == '1410') {
			$('.otherEcoType').show();
		} else {
			$('.otherEcoType').hide();
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
			newEntName:"required"

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
			newEntName:"请输入新的企业/字号名称"
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
			
			var tenancyDates = (formData.tenancyDate+"").split('~');
			formData.tenancyBegin = tenancyDates[0];
			formData.tenancyEnd = tenancyDates[1];
			
			delete formData.tenancyDate;
			formData.applyType = '1002';
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
			
			
			//picIsChange
			
			//entNameIsChange
			/**
		    "newEntName":"",
	        "picIsChange":"0",
	        "newPicName":"",
	        "bizAddrIsChange":"0",
	        "newBizAddrStreet":"",
	        "bizRangeIsChange":0,
	        "ecoTypeIsChange":"0",
	        "newEcoTypeOther":"",
	        "postAddrAdc":"330000,330100,330101",
	        "postAddrStreet":"浙江省杭州市市辖区 3123123",
	        "postLinkName":"周宇",
	        "postLinkTel":"13179140612",
	        "addrChangeReason":"",
	        "newBizAddrAdc":",,",
			
			*/
			
			
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