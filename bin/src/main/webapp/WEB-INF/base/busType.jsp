<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    
<style>
.titlSpan{
	font-size: 24px;
	line-height: 38px;
}
</style>
<div class="containerTop">
	<img src="${webPath}/assets/img/icon_house.gif" alt="" />
	<div class="containerTopRight">
		<span class="titlSpan">烟草专卖零售许可证(<span class="busApplyName"></span>)</span> <span
			class="busiSpan">事项编码：<span class="busApplyCode" style="width: 130px;"></span></span>
	</div>
</div>


 <script type="text/javascript">

 $(function(){
	
    var apply =cfg.applyWays[$.applyType()];
	
    $(".busApplyName").html(apply.name);
    $(".busApplyCode").html(apply.code);
 })
 
</script>