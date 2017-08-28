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
						
				          <div class="containerBody applyTable">
				            <h2 class="applyTitle">查看当前申请</h2>
				            <div>
				                <table class='tableComponet'>
				                   <thead>
				                       {this.state.thead}
				                   </thead>
				                   <tbody>
				                       {this.state.data}
				                   </tbody>
				                </table>
				            </div>
				          </div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	
</body>

<script type="text/javascript">
	
</script>
</html>