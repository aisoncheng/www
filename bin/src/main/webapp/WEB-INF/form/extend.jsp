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
<style type="text/css">

.faren .col{
	float: left;
}
.ecoType label {
	width: auto;
	padding-top: 0px;
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
										<div class="col col-12 retailLicNoDiv">
											<label>许可证号</label> 
											<input name="retailLicNo" class="retailLicNo disabled"  readonly="readonly" disabled="disabled"/>
											<img alt="" src="${webPath}/assets/img/loading.gif">
										</div>
									</div>
									
									<div class="row">
										<div class="col col-12">
											<label>联系人</label>
											<input name="linkName"  />
										</div>
										<div class="col col-12">
											<label>联系电话</label> 
											<input name="lineTel" class='disabled lineTel' disabled="disabled"  autoFill='true'/>
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
												<label>
													<input name='placeOwnership' type='radio' value="2501" /><span>自有</span>
												</label>
												<label>
													<input name='placeOwnership' type='radio' value="2502" /><span>租赁</span>
												</label>
												<label>
													<input name='placeOwnership' type='radio' value="2503" /><span>无偿使用</span>
												</label>
												<label>
													<input name='placeOwnership' type='radio' value="2504" /><span>租赁长期</span>
												</label>
												<label>
													<input name='placeOwnership' type='radio' value="2505" /><span>无偿使用长期</span>
												</label>
											</div>
										</div>
									</div>


									<div class="row">
										<div class="col col-24 ">
											<label class="ecoTypeLable">租赁/无偿使用期限</label> 
											<input name='tenancyDate' style="width: 250px;" class='tenancyDate' />
											<input type='checkbox' name='changqi' class='changqi'>长期
										</div>
									</div>

									<div class="tag" style="float: left;margin-bottom: 20px; padding-left: 20px;">
										<label>
											<input type="checkbox" class="checkbox changeCheckbox" name="isChange">同时申请变更：
										</label>
									</div>
									
									<div id="allChanges">
									<div class="sectionDiv" style="float: left;">
										<div class="sectionTitle"><input class="checkbox changeCheckbox" name="entNameIsChange" type="checkbox" />企业(字号)名称变更</div>
										<div class="row" style="margin-top: 20px;">
											<div class="col col-24">
												<label>企业（字号）名称</label> 
												<input name='newEntName' />
											</div>
										</div>
									</div>
									
									
									<div class="sectionDiv" style="float: left;">
										<div class="sectionTitle"><input class="checkbox changeCheckbox" name="picIsChange" type="checkbox" />法定代表人(负责人)、经营者姓名变更</div>
										<div class="row faren" style="margin-top: 20px;">
											<div class=" col" style="width: 50%">
												<input name="newPicName" style="width: 385px" placeholder='法定代表人(负责人)、经营者姓名' />
											</div>
											<div class=" col" style="width: 20%">
												<select name="newPicCidType" style="width: 160px;height: 30px;">
													<option>身份证</option>
												</select>
											</div>
											<div class=" col" style="width: 30%">
												<input name='newPicCidNo' style="width: 225px;" placeholder='身份证号码'  />
											</div>
										</div>
									</div>
									
									<div class="sectionDiv" style="float: left;">
										<div class="sectionTitle"><input class="checkbox changeCheckbox" name="bizAddrIsChange" type="checkbox" />经营地址名称变更为</div>
										<div class="row" style="margin-top: 20px;">
											<div class="col col-24">
												<label style="width:100%;text-align:left;margin-left: 10px;">
													<input type="radio" name="addrChangeReason">
													经营地址名称变更<span style="color: #a5a1a1;">（仅适用于经营地址名称的变更；实际地址发生改变的，请申请新办。）</span>
												</label> 
												<br>
												<label style="width:100%;text-align:left;margin-left: 10px;">
													<input type="radio" name="addrChangeReason">
													拆迁导致的经营地址变更<span style="color: #a5a1a1;">（仅适用于因道路规划、城市建设等客观原因造成的经营地址改变。）</span>
												</label> 
											</div>
										</div>
										<div class="row">
											<div class="col col-12">
												<label>经营地址</label>
												<input name="newBizAddrAdc" />
											</div>
											<div class="col col-12">
												<label>街道地址</label>
												<input name="newBizAddrStreet" />
											</div>
										</div>
									</div>
									
									<div class="sectionDiv" style="float: left;">
										<div class="sectionTitle"><input class="checkbox changeCheckbox" name="ecoTypeIsChange" type="checkbox" />变更经济类型</div>
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
													<input name='newEcoTypeOther' style="width: 120px;"
														class='hidden otherEcoType' />
												</div>
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


								<div class="formButtons" style="text-align: center;">
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
	$(function() {
		var user;
		//订阅user对应的 对象	
		 pubsub.subscribe("user",function(key,data){
			 user = data;
			 $(".picName").val(data.username);
			 $(".lineTel").val(data.mobile);
			 console.log(data);
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
					if (!lics[i].disabled) {
						console.log('许可证信息', lics[i]);
					}
				}
				$(".retailLicNo").select({data:lics,key:'licNo',valKey:'licNo',cb:function(data){
					if(data.disabled){
						layer.myerror("证号为【"+data.licNo+"】的许可证不可办理此业务,原因：【"+data.notApplyReason+"】");
					}else{
						$(".entNameLic").val(data.companyName);
						$(".managerNameLic").val(data.managerName);
						$(".bizAddrStreetLic").val(data.businessAddr);
						$(".ecoTypeLic").val(data.ecoTypeOther ? data.ecoTypeOther : $.getEcoTypeByCode(data.ecoType));
					}	
				}});
			}
		});
		
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
			var radioVal = radio.val();
			if (radioVal == '1410') {
				$('.otherEcoType').show();
			} else {
				$('.otherEcoType').hide();
			}
		});

		$(".layui-form").validate({
			rules : {
				picName : 'required',
				retailLicNo: 'required',
				linkName : "required",
				lineTel : 'required',
				postAddrAdc : 'required',
				postAddrStreet : 'required',
				// bizId : "required",
				// biPeriod : "required",
				// placeOwnership : "required",
				tenancyDate : {
					required : function() {
						return $(".changqi:checked").length > 0 ? false : true;
					}
				},
				newEntName : {
					required : function() {
						return !!$("input[name='entNameIsChange']").prop("checked");
					}
				},
				newPicName : {
					required : function() {
						return !!$("input[name='picIsChange']").prop("checked");
					}
				},
				newPicCidType : {
					required : function() {
						return !!$("input[name='picIsChange']").prop("checked");
					}
				},
				newPicCidNo : {
					required : function() {
						return !!$("input[name='picIsChange']").prop("checked");
					}
				},
				addrChangeReason : {
					required : function() {
						return !!$("input[name='bizAddrIsChange']").prop("checked");
					}
				},
				newBizAddrAdc : {
					required : function() {
						return !!$("input[name='bizAddrIsChange']").prop("checked");
					}
				},
				newBizAddrStreet : {
					required : function() {
						return !!$("input[name='bizAddrIsChange']").prop("checked");
					}
				},
				newEcoType : {
					required : function() {
						return !!$("input[name='ecoTypeIsChange']").prop("checked");
					}
				},
				newEcoTypeOther : {
					required : function() {
						return !!$("input[name='ecoTypeIsChange']").prop("checked");
					},
					maxlength: 20
				}
			},
			messages : {
				picName : "请输入负责人姓名",
				retailLicNo: "请选择许可证号",
				linkName : "请输入联系人",
				lineTel : '请输入联系人电话',
				postAddrAdc : '请选择邮寄地址',
				postAddrStreet : '请选择邮寄地址详情',
				// bizId : "请输入工商营业执照",
				// biPeriod : "请选择工商营业执照时间",
				// placeOwnership : "请选择场地归属",
				tenancyDate : "请选择租赁时间范围",
				newEntName: "请输入企业（字号）名称",
				newPicName: "请输入法定代表人(负责人)、经营者姓名",
				newPicCidType: "请选择证件类型",
				newPicCidNo: "请输入证件号码",
				addrChangeReason : '请选择经营地址名称变更类型',
				newBizAddrAdc : '请输入经营地址',
				newBizAddrStreet : '请输入经营街道地址',
				newEcoType : '请选择经济类型',
				newEcoTypeOther : '请输入其他经济类型'
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
		// 变更项设置为diabled
		$("#allChanges").find("input,extarea,select").attr({disabled:'disabled'});
		// 绑定checkbox选择
		$(".changeCheckbox").click(function(){
			if (!this.checked && this.name == 'isChange') {
				$("#allChanges").find("input:radio, input:checkbox").prop({'checked': false, disabled:'disabled'});
				$("#allChanges").find("input:text, select").val('');
				$("#allChanges").find("input:text,extarea,select").attr({disabled:'disabled'});
			} else if(!this.checked && this.name != 'isChange') {
				$(this).parents(".sectionDiv").find("input:radio, input:checkbox").prop({'checked': false, disabled:'disabled'});
				$(this).parents(".sectionDiv").find("input:text, select").val('');
				$(this).parents(".sectionDiv").find("input:text,extarea,select").attr({disabled:'disabled'});
			} else if (this.checked && this.name == 'isChange') {
				$("#allChanges").find(".changeCheckbox").removeAttr('disabled');
			} else if (this.checked && this.name != 'isChange') {
				$(this).parents(".sectionDiv").find("input,textarea,select").removeAttr('disabled');
			}
		});
		// 场地权属
		$("input[name='placeOwnership']").click(function(){
			if (this.value == '2502' || this.value == '2503') {
				$("input[name='tenancyDate'],input[name='changqi']").removeAttr('disabled');
			} else {
				$("input[name='tenancyDate']").val('');
				$("input[name='tenancyDate']").attr('disabled', 'disabled');
				$("input[name='changqi']").prop({'checked':false, 'disabled':'disabled'});
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
			// 处理表单序列化乱码
			data = decodeURIComponent(data,true);
			
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
			formData.applyType = '1003';
			formData.bizRange = '1501,1502';
			formData.bizAddrAdc = $("input[name='bizAddrAdc']").attr('data-code');
			
			
			//获取行政区划
			
			var  postData = {rlicPreAcceptInfo: formData, applyMaterialArray: fileData};
			console.log('申请数据', postData);
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
</script>

<script src="${webPath}/assets/js/distpicker.data.js"></script>
<script src="${webPath}/assets/js/distpicker.js"></script>
</html>