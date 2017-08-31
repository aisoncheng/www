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

.renewRadio input.radio,.renewRadio .checkbox{
	width: 14px;
	height: 14px;	
	position: relative;
	top: 2px;
}
.renewTypeLabel{
	float: left;
}
.renewTypeDiv{
	display: inline-block;
	float: left;
	padding: 7px 0px;
	margin-left: 5px;
}
.renewRadio{
	margin-bottom: 55px;
}

.renewRadio div{
	float: left;
	margin-right: 5px;
}

.checkboxItem span {
	margin-left: 5px;
	margin-right: 5px;
}
.firstRadioDiv{
	cursor: pointer;
}
.checkboxDiv {
	display: inline-block;
	cursor: pointer;
}
#renewType-error{
	top:90px;
}
.reasonItem{
	margin-bottom: 20px;
	position: relative;
}

.checkboxDiv label.error{
	top: 85px;
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
									<div class="col col-12">
										<label>联系电话</label> 
										<input name="lineTel" class='disabled lineTel' disabled="disabled"  autoFill='true'/>
									</div>
								</div>
									
								<div class="formDiv">
									<div class="row">
									
										<div class="col col-12 retailLicNoDiv">
											<label>许可证号</label> 
											<input name="retailLicNo" class="retailLicNo disabled"  readonly="readonly" disabled="disabled"/>
											<img alt="" src="${webPath}/assets/img/loading.gif" class="isLoading">
										</div>
										<div class="col col-12">
											<label>联系人</label>
											<input name="linkName" class="linkName" />
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
											<label class='renewTypeLabel'>补办</label>
											<div class='renewTypeDiv'>
												<div class='renewRadio'>
													<div class='firstRadioDiv'>
														<input type="radio" class='radio rlicLoseReasonRadio' name="renewType"/>
														<span>遗失</span>
													</div>
													<div class='checkboxItem'>
													    <div><i>（&nbsp;&nbsp;</i></div>
														<div class='checkboxDiv'><input name='rlicOriginIsLose' type="checkbox" class='checkbox disabled ' data-send='rlicOriginIsLose'/><span class='disabled'>许可证正本</span></div>
														<div class='checkboxDiv'><input name='rlicCopyIsLose' type="checkbox" class='checkbox disabled ' data-send='rlicCopyIsLose' /><span class='disabled'>副本</span></div>
														<div><i>）</i></div>
													</div>
												</div>
												
												<div class='renewRadio'>
													<div class='firstRadioDiv'>
														<input type="radio" class='radio rlicDamageReasonRadio' name="renewType" />
														<span>损毁</span>
													</div>
													<div class='checkboxItem'>
														 <div><i>（&nbsp;&nbsp;</i></div>
														 <div class='checkboxDiv'><input type="checkbox" name='rlicOriginIsDamage' class='checkbox disabled ' data-send='rlicOriginIsDamage'/><span class='disabled'>许可证正本</span></div>
														 <div class='checkboxDiv'><input type="checkbox" name ='rlicCopyIsDamage' class='checkbox disabled ' data-send='rlicCopyIsDamage' /><span class='disabled'>副本</span></div>
														 <div><i>）</i></div>
													</div>
												</div>
											</div>
										</div>
										<div class='col col-12'>
											<div class='reasonItem'>
												<label>遗失情由</label>
												<input type="text" disabled="disabled" class='disabled'  name='rlicLoseReason'/>
											</div>
											
											<div class='reasonItem'>
												<label>损毁情由</label>
												<input type="text" disabled="disabled" class='disabled' name='rlicDamageReason' />
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
										<div class="col labelCol firstUploadItem"
											style="margin-left: 0%; width: 16.666666666666664%;">
											<span class="fileLable" style="height: 40px; line-height: 40px;">申请表</span>
										</div>
										<div class="col contentCol" style="margin-left: 0%; width: 83.33333333333334%;">
											<div style="height: 40px; line-height: 40px; border-left: 1px dotted rgb(202, 195, 195);">
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
$(function(){
	
	 var param = $.getQueryParam();
	 if(param.i==2){
		$.createScript("${webPath}/assets/js/renewView.js");
	 }else if(param.i==1){
		 $.createScript("${webPath}/assets/js/renewEdit.js");
	 }else{
		 $.createScript("${webPath}/assets/js/renewAdd.js");
	 }
});
	
</script>

<script src="${webPath}/assets/js/distpicker.data.js"></script>
<script src="${webPath}/assets/js/distpicker.js"></script>
</html>