<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@include file="../base/base.jsp"%>
<title>Insert title here</title>
<link href="${webPath}/assets/css/notice.css" type="text/css" rel="stylesheet"> 
</head>
<body>
	<div class="container">
		<%@include file="../base/header.jsp"%>
		<div class="containerMy">
			<div class="containerBody">
				<%@include file="../base/busType.jsp" %>
				<div class="containerCenter">
					<%@include file="../base/step.jsp" %>
					<div class="containerRight">
						<div class="realContent">
						        <!-- 审批条件 -->
								<div class="datumLable">
									 <span class="datumLableTitle">审批条件</span>
									 <span class="datumLableComment">
									   <span>&nbsp;&nbsp;&nbsp;</span>
									   <span>办理该项业务，需满足以下申请条件才能进行业务的办理。</span>
									</span>
								</div>
								<div>
									<span class="noticeSpan">（一）有与经营烟草制品零售业务相适应的资金；</span>
									<span class="noticeSpan">（二）有与住所相独立的固定经营场所；</span>
									<span class="noticeSpan">（三）符合当地烟草制品零售点合理布局的要求。</span>
								</div>
								 <!-- 材料收取 -->
								<div class="datumLable">
									 <span class="datumLableTitle">收取材料 </span>
								</div>
								<div class="condition">
									
								</div>
								 
								<div class="buttons" style="margin-left: -60px">
									<button type="button" class="buttonBig nexButton" >  
										<span>下一步</span>
									</button>
								</div>
							</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="phoneV hidden">
		<ul>
			<li class="phoneNumber">
				<label>手机号</label>
				<input name="phone" />
				<span class="sendMsg">发送验证码</span>
			</li>
			<li>
				<label>验证码</label>
				<input class="disabled"  name="yzm" disabled="disabled"/>
			</li>
		</ul>
		
		<div class="button">
			<button type="button" class="buttonBig cancel"><span>取消</span></button>
			<button type="button" class="buttonBig sure disabled"><span>确定</span></button>
		</div>
	</div>
	
</body>

<script type="text/javascript">
	 $(function(){
         
		 var index = 0;
		 $(cfg.files.newBus).each(function(i,v){
			 
			 if(v.materialNameTitle != 'identificationCard1'){
				 var name = v.materialName;
				 if(v.materialNameTitle=='identificationCard2'){
					 name = '负责人（经营者）身份证';
				 }
				 $(".condition").append("<span class='noticeSpan'>（"+$.num2Zw(index+1)+"）"+name+"</span>");
				 index++;
			 }
		 });
		 
		 console.log($.getApplyTypCode());
		 $(".nexButton").click(function(){
			 window.location.href = base+'/form/'+$.applyType()
		 });
	 });
</script>
</html>