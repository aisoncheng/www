<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@include file="../base/base.jsp"%>
<script type="text/javascript"
	src="${webPath}/assets/js/jquery-asDatepicker.min.js"></script>
<script type="text/javascript"
	src="${webPath}/assets/js/jquery.validate.js"></script>

<script type="text/javascript" src="${webPath}/assets/js/uploadImg.js"></script>

<link href="${webPath}/assets/css/asDatepicker.css" type="text/css"
	rel="stylesheet">
<link href="${webPath}/assets/css/upload.css" type="text/css"
	rel="stylesheet">


<style type="text/css">
.formButtons {
	width: 200px;
	margin: 0 auto;
}

.formButtons button {
	margin-right: 10px;
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
										<div class="col col-24">
											<label>企业（字号）名称</label> <input name='entName' />
										</div>
									</div>

									<div class="row">
										<div class="col col-12">
											<label>经营地址</label>
											<input name="bizAddrAdc" class='bizAddrAdc' />
										
										</div>
										<div class="col col-12">
											<label>街道地址</label> <input name='bizAddrStreet' />
										</div>
									</div>

									<div class="row">
										<div class="col col-24">
											<label>经营范围</label> <input value="卷烟零售,雪茄烟零售"
												disabled="disabled" class="disabled" name="bizRange" />
										</div>
									</div>
									<div class="row">
										<div class="col col-24 ">
											<label class="ecoTypeLable">经济类型</label>
											<div class="ecoType">
												<div class="radioBody">
													<input name='ecoType' type='radio' value="1401" /><span>国有</span>
												</div>
												<div class="radioBody">
													<input name='ecoType' type='radio' value="1402" /><span>集体</span>
												</div>
												<div class="radioBody">
													<input name='ecoType' type='radio' value="1403" /><span>个体</span>
												</div>
												<div class="radioBody">
													<input name='ecoType' type='radio' value="1404" /><span>合伙</span>
												</div>
												<div class="radioBody">
													<input name='ecoType' type='radio' value="1405" /><span>股份制(合作)</span>
												</div>
												<div class="radioBody">
													<input name='ecoType' type='radio' value="1406" /><span>个人独资</span>
												</div>
												<div class="radioBody">
													<input name='ecoType' type='radio' value="1407" /><span>有限责任</span>
												</div>
												<div class="radioBody">
													<input name='ecoType' type='radio' value="1408" /><span>外商投资</span>
												</div>
												<div class="radioBody">
													<input name='ecoType' type='radio' value="1409" /><span>股份有限公司</span>
												</div>
												<div class="radioBody">
													<input name='ecoType' type='radio' value="1410" /><span>其他</span>
												</div>
												<div>
													<input name='ecoTypeOther' style="width: 80px;"
														class='hidden otherEcoType' />
												</div>
											</div>
										</div>
									</div>

									<div class="row">
										<div class="col col-12">
											<label>工商营业执照编码</label> <input name='biId' />
										</div>
										<div class="col col-12">
											<label>有效期</label> <input name='biPeriod' class='biPeriod' />
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
												name='tenancyDate' style="width: 250px;" class='tenancyDate disabled'  disabled="disabled" />
										</div>
									</div>

									<div class="row">
										<div class="col col-12">
											<label>负责人</label> <input name='picName' />
										</div>
										<div class="col col-12">
											<label>证件类型</label>
											<input  name="picCidType"  />
											<!-- <select name="picCidType">
												<option value="2801">身份证</option>
												<option value="2802">户口本</option>
												<option value="2803">驾照</option>
												<option value="2804">护照</option>
												<option value="2805">其他</option>
											</select> -->
										</div>
									</div>

									<div class="row">
										<div class="col col-24 ">
											<label class="ecoTypeLable">证件号码</label> <input
												name='picCidNo' />
										</div>
									</div>

									<div class="row">
										<div class="col col-12">
											<label>身份证住址</label> <input name='picCidAddrStreet' />
										</div>
										<div class="col col-12">
											<label>现住地址</label> <input name='picAddrStreet' />
										</div>
									</div>

									<div class="row">
										<div class="col col-12">
											<label>联系人</label> <input name='linkName' />
										</div>
										<div class="col col-12">
											<label>联系电话</label> <input name='lineTel' />
										</div>
									</div>


									<div class="row">
										<div class="col col-12">
											<label>邮寄地址</label> <input name='postAddrAdc' />
										</div>
										<div class="col col-12">
											<label>邮寄地址(街道)</label> <input name='postAddrStreet' />
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
												style="height: 40px; line-height: 40px;padding: 0px">申请表</span>
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
$(function(){
	
	 var param = $.getQueryParam();
	 if(param.i==2){
		$.createScript("${webPath}/assets/js/changeView.js");
	 }else if(param.i==1){
		 $.createScript("${webPath}/assets/js/changeEdit.js");
	 }else{
		 $.createScript("${webPath}/assets/js/newAdd.js");
	 }
});
</script>

<script src="${webPath}/assets/js/distpicker.data.js"></script>
<script src="${webPath}/assets/js/distpicker.js"></script>
</html>