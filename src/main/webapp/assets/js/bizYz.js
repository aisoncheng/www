$(document).ready(function(){
	
	 $(".radioBody").click(function(){
		 var input = $(this).find('input');
		 $('.layui-form').valid(input);
	 });
});