package com.icss.dis.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class RouterController {
	
	@RequestMapping("/form/{uri}")
	public  String from(@PathVariable("uri") String uri){

		return "form/"+uri;
	}
	
	
	@RequestMapping("/notice/{pifx}")
	public  String notice(@PathVariable("pifx") String pifx){
		return "notice/notice";
	}
	
	@RequestMapping("/reply/{pifx}")
	public  String reply(@PathVariable("pifx") String pifx){
		return "reply/reply";
	}
	
	
	@RequestMapping("/condition/{pifx}")
	public  String condition(@PathVariable("pifx") String pifx){
		return "condition/condition";
	}
	
	//存放提交成功后的 数据
	@ResponseBody
	@RequestMapping("/saveReply")
	public  Object saveReply(HttpServletRequest request,String reply,String preAcceptUuid){
		request.getSession().setAttribute(preAcceptUuid, reply);
		return "{code:200,message:'成功'}";
	}
	
	//存放提交成功后的 数据
	@ResponseBody
	@RequestMapping("/getReply")
	public  ResponseResult getReply(HttpServletRequest request,String preAcceptUuid){
		
		return new ResponseResult().success(request.getSession().getAttribute(preAcceptUuid));
	}
	
}
