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
				<%@include file="../base/busType.jsp"%>
				<div class="containerCenter">
					<%@include file="../base/step.jsp"%>
					<div class="containerRight">
						<div class="">
								<div class="datumLable">
									 <span class="datumLableTitle">网上申请须知</span>
									 <span class="datumLableComment">
									   <span>&nbsp;&nbsp;&nbsp;</span>
									   <span>为方便您申请烟草专卖零售许可证，现开通网上申请功能，请您在申请前仔细阅读本须知。</span>
									</span>
								</div>
								<span class="noticeSpan">1、请填报本人/单位真实信息；</span>
								<span class="noticeSpan">2、请勿填写与烟草专卖零售许可证申办无关的信息；</span>
								<span class="noticeSpan">3、请勿传输不符合国家法律、法规的资料；</span>
								<span class="noticeSpan">4、如您是为法人分支机构提出申请，请以相应分支机构认证登录后提出申请，并提供相应分支机构的材料；</span>
								<span class="noticeSpan">5、请认真填写申请信息，以便核对，填表信息如不完整或不真实您将无法成功办理，并可能因提供虚假材料而1年内无法提出申请。</span>
									
								<div class="checkBox">
									<input type="checkbox" >
									<span>我已阅读并同意</span>
								</div>		
								 
								<div class="buttons">
									<button type="button" class="buttonBig disabled history"  data-nam ="history" msg="没有正在申请的记录"> 
										<span>查看当前申请</span>
									</button>
									<button type="button" class="buttonBig disabled nextButton"   data-name="next" msg="请勾选阅读并同意">
										<span>继续申请</span>
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
		 
		 var checked = false;
		 var hasHistory = false;
		 var layerOpen ;
		 //
		 
		 //加载的时候先判断是否存在正在申请的业务
		 $.ajaxPost({
			 url:'/licPreGns/hasHistoryApply',
			 data:{applyType:$.getApplyTypCode()},
			 ok:function(msg){
				 if(msg.code==200 && msg.data && msg.data.length>0){
					 $(".history").removeClass('disabled').click(function(){
						 window.open('${webPath}/list/'+$.applyType());
					 });
				 }
			 }
		 });
		 
		 
		 
		 $(".buttons .buttonBig").mouseover(function(){
			  var msg = $(this).attr("msg");
			  if(!$(this).hasClass("disabled")){
				  return false;
			  }
			  var index = layer.tips(msg,this,{
				  tips: [1, '#57c5f7'],
				  time: 1000
			  });
		 });
		 $(".checkBox").click(function(){
			  var box = $(this).find("input");
			  checked = !checked;
			  box.prop("checked",checked);
			  if(checked){
				  layerOpen = layer.open({
					  type: 1,
					  title:'联系人手机号验证',
					  area:["375px","216px"],
					  closeBtn: 0, //不显示关闭按钮
					  anim: 2,
					  shadeClose: true, //开启遮罩关闭
					  content: $(".phoneV"),
					  success:function(){
						  $(".nextButton").removeClass("disabled");
					  }
					});
			  }
		 });
		 
		 
		 
		 // 下一步
		 $(".nextButton").click(function(){ 
			 var hasClass = $(this).hasClass("disabled");
			 if(hasClass){
				 return false;
			 }else{
				 window.location.href = "${webPath}/condition/"+$.applyType();
			 }
		 });
		 //layerOpen
		 
		 $(".cancel").click(function(){
			 layer.close(layerOpen);
		 });
		 
		 $(".phoneNumber").click(function(){
			 console.log(12);
		 });;
		
		 //发送验证码
		 $(".sendMsg").click(function(){
			 var val = $("input[name='phone']").val();
			 if(!/\d{11}$/.test(val)){
				 layer.alert('请输入正确的手机号码', {
					  icon: 2,
					  title:'提示'
				 });
			 }else{
				 //发送请求  
				 
				 
				 $("input[name='yzm']").removeClass("disabled").removeAttr("disabled");
				 $("input[name='phone']").addClass("disabled").attr("disabled","disabled");
			 }
			 
			 
		 });
		 
		 $("input[name='yzm']").keyup(function(){
			 var val = $(this).val();
			 if($.trim(val).length==6){
				 $(".sure").removeClass("disabled");
			 }else{
				 $(".sure").addClass("disabled");
			 }
		 });
		 
		 
		 //验证手机号码
		 function vPhone(){
			 
			 return 
		 }
	 });
</script>
</html>