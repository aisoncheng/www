<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@include file="../base/base.jsp"%>



<style type="text/css">

.applyTable{
      font-size: 13px;
}

.key,.returnReason{
    text-align: center
}

.options a{
	margin-left: 15px;
    color: #00bfff;
}

.revoke{
	width: 450px;
	height: 220px;
	overflow: hidden;
}
.revoke .revoleItem{
	width: 100%;
	overflow: hidden;
	margin-top: 15px;
}
.revoke .revoleItem label {
	width: 87px;
	float: left;
	text-align: right;
	padding-right: 10px;
}
.revoke .revoleItem div{
	width: 330px;
	float: left;
}
.revoke .revoleItem.buttonItem{
	width: 150px;
	float: right;
	margin-right: 24px;
}
.revoke .revoleItem.buttonItem .buttonBig{
	margin-left: 10px;
}

.quxiaoBtn{
	color: gray !important;
    background-color: #f7f7f7 !important;
    border-color: #d9d9d9 !important;
}

</style>

</head>
<body>
	<div class="container">
		<%@include file="../base/header.jsp"%>

					<div class="containerMy" data-reactid=".0.1">
						<div class="containerBody applyTable" data-reactid=".0.1.0">
							<h2 class="applyTitle" data-reactid=".0.1.0.0">查看当前申请</h2>
							<div data-reactid=".0.1.0.1">
								<table class="tableComponet" data-reactid=".0.1.0.1.0">
									<thead data-reactid=".0.1.0.1.0.0">
										<tr data-reactid=".0.1.0.1.0.0.0">
											<th class="key" data-reactid=".0.1.0.1.0.0.0.$0">序号</th>
											<th class="" data-reactid=".0.1.0.1.0.0.0.$1">申请人</th>
											<th class="" data-reactid=".0.1.0.1.0.0.0.$2">申请状态</th>
											<th class="bizAddrStreet" data-reactid=".0.1.0.1.0.0.0.$3">经营地址</th>
											<th class="" data-reactid=".0.1.0.1.0.0.0.$4">申请时间</th>
											<th class="" data-reactid=".0.1.0.1.0.0.0.$5">审查时间</th>
											<th class="returnReason" data-reactid=".0.1.0.1.0.0.0.$6">审查意见</th>
											<th class="options" data-reactid=".0.1.0.1.0.0.0.$7">操作</th>
										</tr>
									</thead>
									<tbody data-reactid=".0.1.0.1.0.1">
									
									</tbody>
								</table>
							</div>
						</div>
					</div>

	</div>
	
	
	
	<div class="revoke hidden">
		<div class='revoleItem'>
			<label>撤回说明：</label>
			<div>对于受理后的申请，会尽量通知证件管理员进行撤回操作，如果审批已经进入办结阶段，则撤回可能不会成功。</div>
		</div>
		<div class='revoleItem'>
			<label><span style="color: red;">*</span>&nbsp;撤回原因：</label>
			<div>
				<textarea rows="5" cols="42" id='reason'></textarea>
			</div>
		</div>
		<div class='revoleItem buttonItem'>
			<a class='buttonBig sureBtn disabled'>确定</a>
			<a class='buttonBig quxiaoBtn'>取消</a>
		</div>
	</div>
</body>

<script type="text/javascript">
	
	 $(function(){
		 
		 
			
		 
		 function getStatus(text){
			var status = text.preAcceptStatus;
	        if(status==0||status==1){
	            return '材料审核中';
	        }
	        if(status==3){
	            return '已受理';
	        }
	        if(status==2){
	            return '已退回';
	        }
	        if(status==-1){
	            return '取消';
	        }
	        if(status==-2){
	            return '已撤回';
	        }
	        if(status==4){
	            return '已办结';
	        }
	        return status;
			 
		 }
		 
		 function getReason(text){
		    var status = text.preAcceptStatus;
	        if(status==3){
	            return '材料审核中';
	        }
	        return text.returnReason;
		 }
		 
		 
		 $.ajaxPost({
			 url:'/licPreGns/getPreApplyList',
			 data:{applyType:$.getApplyTypCode()},
			 ok:function(msg){
				var data = msg.data;
				$(data).each(function(i,v){
					
					var status = getStatus(v);
					
					// {text.preAcceptStatus !== 2 && text.preAcceptStatus !== -1 ? <a href="javascript:void(0)" className={text.preAcceptStatus === -2 ? 'disabled' : ''}>[撤回]</a> : '' }
			        //{text.preAcceptStatus === 2 || text.preAcceptStatus === -1 ? <a href="javascript:void(0)" className={text.preAcceptStatus === -1 ? 'disabled' : ''}>[取消]</a> : '' }
					
			        var tr = $("<tr >"+
							"<td class='key' width='50'>"+(i+1)+"</td>"+
							"<td class='' width='70'>"+v.picName+"</td>"+
							"<td class='' width='80''>"+status+"</td>"+
							"<td class='bizAddrStreet' width='200'>"+v.bizAddrStreet+"</td>"+
							"<td class='' width='100'>"+v.createTime+"</td>"+
							"<td class='' width='100'>"+(v.usedTime||'')+"</td>"+
							"<td class='returnReason' width='200'>"+getReason(v)+"</td>"+
							"<td class='options' width='205'>"+
								"<div class='optionsDiv'>"+
									"<a href='${webPath}/form/"+$.applyType()+"?id="+v.preAcceptUuid+"&i=2' target='_blank'>[查看]</a>"+
								"</div>"+
						  "</td>"+
						"</tr>");
			        
			        
					var  options = tr.find('.optionsDiv');
					var edit = $('<a>[编辑]</a>');
					if(v.preAcceptStatus != 2){
						edit.attr('href','javascript:void(0)').addClass('disabled');
					}else{
						edit.attr('href',"${webPath}/form/"+$.applyType()+"?id="+v.preAcceptUuid+"&i=1");
					}
					options.append(edit);
					//显示撤回
					if(v.preAcceptStatus !=2 && v.preAcceptStatus != -1 ){
						var chehui = $("<a href='javascript:void(0)' class='chehui' data-id='"+v.preAcceptUuid+"' data-status='"+v.preAcceptStatus+"'>[撤回]</a>");
						if(v.preAcceptStatus == -2 || v.preAcceptStatus == 4){
							chehui.addClass('disabled');
						}
						options.append(chehui);
					}
					
					
					 //显示取消
					if(v.preAcceptStatus == 2 || v.preAcceptStatus == -1 ){
						var quxiao = $("<a href='javascript:void(0)' class='quxiao' data-id='"+v.preAcceptUuid+"' data-status='"+v.preAcceptStatus+"'>[取消]</a>");
						if(v.preAcceptStatus == -1 ){
							quxiao.addClass('disabled');
						}
						options.append(quxiao);
					}
					
					$(".tableComponet tbody").append(tr);
				});
			 }
		 });
		 
 		 function sendRevoke(data,cb){
 			 $.ajaxPost({
				 url:'/licPreGns/applyRevoke',
				 data:data,
				 ok:function(msg){
					 cb(msg);
				 }
			 });
		 }
		 // data.column3 = "";
 		 
		 $('.tableComponet').on('click','.chehui',function(){ 
			 
			 if($(this).hasClass('disabled')){
				 return false;
			 }
			 
			 var status = $(this).attr("data-status");
			 var id = $(this).attr("data-id");
			 status = parseInt(status);
			 var those = $(this);
			 layer.myconfirm('确定撤回当前申请吗？',{icon:3}, function(index){
				 layer.close(index);
				 var data = {preAcceptUuid:id,preAcceptStatus:-2};
				 if(status==3 || status ==2){
					var openIndex =layer.open({
						  type: 1,
						  title:'撤回申请',
						  area:["450px","270px"],
						  closeBtn: 0, //不显示关闭按钮
						  anim: 4, //5
						  shadeClose: false, //开启遮罩关闭
						  content: $(".revoke"),
						  success:function(a){
							  
							  layer.tips('请填写撤回原因',a.find('.sureBtn'),{
								  tips: [4, '#57c5f7'],
								  time: 4000
							  });
							  
							   a.find('.quxiaoBtn').unbind().click(function(){
								   layer.close(openIndex);
							   });
							   var sureBtn = a.find('.sureBtn');
							   sureBtn.unbind().click(function(){
								   if($(this).hasClass('disabled')){
										 return false;
									}
								   data.column3 = $("#reason").val();
								   sendRevoke(data,function(msg){
									 if(msg.code==200){
										 those.addClass('disabled');
										 those.parents('tr').find('td').eq(2).html('已撤回');
										 layer.close(openIndex);
									 }
								   }); 
								   
							   }).addClass('disabled');
							   
							   a.find('#reason').keyup(function(){
								   var val = $(this).val();
								   if($.trim(val)){
									   sureBtn.removeClass('disabled');
								   }else{
									   sureBtn.addClass('disabled');
									   layer.tips('请填写撤回原因',sureBtn,{
											  tips: [4, '#57c5f7'],
											  time: 1500
									   });
								   }
								   
							   })
							   
						  }
					 });
 
				 }else{
					  sendRevoke(data,function(msg){
						 if(msg.code==200){
							 those.addClass('disabled');
							 those.parents('tr').find('td').eq(2).html('已撤回');
						 }
					 }); 
				 }
				
			 },function(index){
				 layer.close(index);
			 });  
		 });
		 
		 
		
		 
		
	 });
	
</script>
</html>