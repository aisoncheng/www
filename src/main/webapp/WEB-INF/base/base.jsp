<%@ page language="java" contentType="text/html; charset=utf-8"
	isELIgnored="false"
    pageEncoding="utf-8"%>
    
<%
	String webPath = "http://localhost:8088/mvc";
	pageContext.setAttribute("webPath", webPath);
%>

<script type="text/javascript"  >var base = "${webPath}";</script>

<script type="text/javascript" src="${webPath}/assets/js/city.js"></script>
<script type="text/javascript" src="${webPath}/assets/layui/layui.js"></script>
<script type="text/javascript" src="${webPath}/assets/js/jquery.js"></script>
<script type="text/javascript" src="${webPath}/assets/layui/layer.js"></script>
<script type="text/javascript" src="${webPath}/assets/js/cfg.js"></script>
<script type="text/javascript" src="${webPath}/assets/js/tools.js"></script>
<script type="text/javascript" src="${webPath}/assets/js/biz.js"></script>



<link href="${webPath}/assets/css/base.css" type="text/css" rel="stylesheet">
<link href="${webPath}/assets/css/header.css" type="text/css" rel="stylesheet"> 
<title>烟草专卖许可证用户集成</title>