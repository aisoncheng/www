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
#newEcoTypeOther-error{
	top:65px;
}
#newPicName-error{
	padding-left: 10px;
}
.addrChangeReasonp {
    cursor: pointer;
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
										
										<div class="col col-12 retailLicNoDiv">
											<label>许可证号</label> 
											<input name="retailLicNo" class="retailLicNo disabled"  readonly="readonly" disabled="disabled"/>
											<img alt="" src="${webPath}/assets/img/loading.gif" class="isLoading">
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
												<label class='radioBody'>
													<input name='placeOwnership' type='radio' value="2501" /><span>自有</span>
												</label>
												<label class='radioBody'>
													<input name='placeOwnership' type='radio' value="2502" /><span>租赁</span>
												</label>
												<label class='radioBody'>
													<input name='placeOwnership' type='radio' value="2503" /><span>无偿使用</span>
												</label>
												<label class='radioBody'>
													<input name='placeOwnership' type='radio' value="2504" /><span>租赁长期</span>
												</label>
												<label class='radioBody'>
													<input name='placeOwnership' type='radio' value="2505" /><span>无偿使用长期</span>
												</label>
											</div>
										</div>
									</div>


									<div class="row">
										<div class="col col-24 ">
											<label class="ecoTypeLable">租赁/无偿使用期限</label> 
											<input name='tenancyDate' style="width: 250px;" class='tenancyDate tenancyDate' disabled="disabled"  />
										</div>
									</div>

									<div class="tag" style="float: left;margin-bottom: 20px; padding-left: 20px;">
										<label>
											以下为变更项，如需变更请填写对应的变更项
										</label>
									</div>
									
									<div class="sectionDiv disabled" style="float: left;">
										<div class="sectionTitle entNameIsChangeTitle"><input class="checkbox entNameIsChange"  type="checkbox" data-change='entNameIsChange' />企业(字号)名称变更</div>
										<div class="row" style="margin-top: 20px;">
											<div class="col col-24">
												<label>企业（字号）名称</label> 
												<input name='newEntName' disabled="disabled"  class="disabled"/>
											</div>
										</div>
									</div>
									
									
									<div class="sectionDiv disabled" style="float: left;">
										<div class="sectionTitle"><input class="checkbox picIsChange"  type="checkbox" data-change='picIsChange' />法定代表人(负责人)、经营者姓名变更</div>
										<div class="row faren" style="margin-top: 20px;">
											<div class=" col" style="width: 50%">
												<input name='newPicName' disabled="disabled"  class="disabled" style="width: 385px" placeholder='法定代表人(负责人)、经营者姓名' />
											</div>
											<div class=" col" style="width: 20%">
												<input name="newPicCidType" style="width: 143px; position: relative;" class="newPicCidType disabled" disabled="disabled">
											</div>
											<div class=" col" style="width: 30%">
												<input name='newPicCidNo' disabled="disabled"  class="disabled" style="width: 225px;" placeholder='身份证号码'  />
											</div>
										</div>
									</div>
									
									
									<div class="sectionDiv disabled" style="float: left;">
										<div class="sectionTitle bizAddrIsChangeTile"><input class="checkbox bizAddrIsChange" data-change='bizAddrIsChange' type="checkbox" />经营地址名称变更</div>
										<div class="col col-24">
											<label style="float: left;">经营地址类型变更</label> 
											<p style="float: left; margin-top: 10px;" class="addrChangeReasonp">
												<input style="width: 14px;height: 14px;" name="addrChangeReason"  type="radio" value="1" class='radio' >
												<span>经营地址名称变更（仅适用于经营地址名称的变更；实际地址发生改变的，请申请新办。）</span>
											</p>
											<p style="float: left;" class="addrChangeReasonp">
												<input  style="width: 14px;height: 14px;" name="addrChangeReason"  type="radio" value="2" class='radio' >
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
										<div class="sectionTitle"><input class="checkbox ecoTypeIsChange"  type="checkbox" data-change='ecoTypeIsChange' />变更经济类型</div>
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
$(function(){
	
	 var param = $.getQueryParam();
	 if(param.i==2){
		$.createScript("${webPath}/assets/js/extendView.js");
	 }else if(param.i==1){
		$.createScript("${webPath}/assets/js/extendEidt.js");
	 }else{
		$.createScript("${webPath}/assets/js/extendAdd.js");
	 }
	 
	
});
</script>

<script src="${webPath}/assets/js/distpicker.data.js"></script>
<script src="${webPath}/assets/js/distpicker.js"></script>
</html>