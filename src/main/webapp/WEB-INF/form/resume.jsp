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
											<img alt="" src="${webPath}/assets/img/loading.gif" class='isLoading'>
										</div>
										<div class="col col-12">
											<label>联系人</label>
											<input name="linkName" class="linkName" />
										</div>
										
									</div>
									
									<div class="row">
										<div class="col col-24">
											<label>申请恢复营业事由</label>
											<input name="reopenBusinessReason">
										</div>
									</div>
									
									<div class="row">
										<div class="col col-12 ">
											<label class="ecoTypeLable">申请恢复营业日期</label> 
											<input name='applyRestoreManagerDate' class="applyDate" /> 
										</div>
										<div class="col col-12 ">
											<label class="ecoTypeLable">原停业日期</label> 
											<input name='originalCloseBusinessDateS' style="width: 108px;" class='disabled' disabled="disabled"  autoFill='true' /> 至 
											<input name='originalCloseBusinessDateE' style="width: 108px;" class='disabled' disabled="disabled"  autoFill='true' />
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
												style="height: 40px; line-height: 40px;padding:0px;">申请表</span>
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
											<span class="fileLable">负责人（经营者）身份证-正面</span>
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
											<span class="fileLable">负责人（经营者）身份证-反面</span>
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

								<div style="margin: 30px 0px;" class="row agreedContainer" >
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

<script src="${webPath}/assets/js/distpicker.data.js"></script>
<script src="${webPath}/assets/js/distpicker.js"></script>
<script>
$(function() {
	 var param = $.getQueryParam();
	 if(param.i==2){
		$.createScript("${webPath}/assets/js/closeView.js");
	 }else if(param.i==1){
		$.createScript("${webPath}/assets/js/resumeEdit.js");
	 }else{
		$.createScript("${webPath}/assets/js/resumeAdd.js");
	 }
});
</script>
</html>