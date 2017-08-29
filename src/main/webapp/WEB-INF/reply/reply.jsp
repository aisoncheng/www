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
<title>Insert title here</title>

<style type="text/css">
.replyContainer{
  width: 100%;
  font-size: 14px;
}

.replyContainer h1 {
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: normal;
  padding: 5px 0px;

}
.replyContainer p{
  font-size: 14px;
  line-height: 30px;
  padding-right: 20px;
}
.replyContainer p.nr{
  padding-left: 30px;
}
.replyContainer p.end{
  text-align: right;
  padding-right: 30px;
  font-weight: bold;
}
.replyContainer .applyNo{
  font-size: 16px;
  font-weight: 500;
}
.replyContainer .applyFileList{
  margin-top: 20px;
  margin-bottom: 40px;
}
.replyContainer .applyFileList ul{
  margin-left:30px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.replyContainer .tag{
    background: #2db7f5;
    border-radius: 4px;
    color: white;
}
.preAcceptNo{
	font-size: 12px;
    font-weight: bold;
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
							
							
							<div class="replyContainer">
					            <h1>申请答复书</h1>
					            <div>
					                <p ><span class="applicantName"></span>：</p>
					                <p class="nr"><span>您于</span><span class="receiveTime"></span><span>向本局提出的新办烟草专卖零售许可证申请，已被自动受理，受理编号：</span><span class="preAcceptNo"></span><span>。</span> </p>
					                <p class="nr">本局将在一个工作日内进行复核，若发现您的申请材料内容有误或不属于本局法定职权范围的，将通过短信并电话联系，告知您通过撤回申请。若您未及时撤回申请的，我局将依法终止办理。</p>
					                <p class="end receiveUnit"></p>
					                <p class="end receiveTime"></p>
					            </div>
					            <div class="applyNo">申报号：<span class="column1"></span>， 查询密码：<span class="column2"></span></div>
					            <div class="applyFileList">
					                <div>
					                <div class="tag" color="#2db7f5" style="width: 120px;height: 30px; line-height: 30px; font-size: 14px;text-align: center; ">已提交材料清单</div>
					                <ul>
					                    <li>1.申请表</li>
					                    <li>2.负责人（经营者）身份证-正面</li>
					                    <li>3.负责人（经营者）身份证-反面</li>
					                    <li>4.工商营业执照</li>
					                </ul>
					                </div>
					                <div>
					                <div class="tag" color="#2db7f5" style="width: 120px; height: 30px; line-height: 30px;font-size: 14px; text-align: center;">办事指引</div>
					                <ul class="fileLi">
					                    <li ><span>办理部门：</span><span class="orgName"></span></li>
					                    <li ><span>工作时间：</span><span class="workTime"></span></li>
					                    <li ><span>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</span><span class="orgAddr"></span></li>
					                    <li ><span>联系电话：</span><span class="phoneNo"></span></li>
					                </ul>
					                </div>
					            </div>
					            <div>
					                <div class="buttonContainer" style="width: 80px; margin: 0 auto;">
										<a class="primary buttonBig closeReply">关闭</a>
									</div>
					            </div>
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
		 
		var param =  $.getQueryParam();
		
		 
		 $.ajaxPost({
			 url:'${webPath}/getReply',
			 data:{preAcceptUuid:param.id},
			 ok:function(msg){
				 var reply = $.parseJSON(msg.data);
				 for(name in reply){
					 $("."+name).html(reply[name]);
				 } 
				 var orgInfo  = reply.tLPreOrgInfo;
				 for(name in orgInfo){
					 $("."+name).html(orgInfo[name]);
				 }
			 }
		 });
		 
		 
		 $(".closeReply").click(function(){
			 window.location.href = "http://www.zjzwfw.gov.cn/";
		 });
		 
	 })
	 
</script>


</html>