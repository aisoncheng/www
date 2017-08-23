package com.icss.dis.controller;


public class ResponseResult {

	private Integer status;
	private String code;
	private String message;
	private Object data;

	public static ResponseResult SUCCESS = new ResponseResult().success();

	public static ResponseResult FAILED = new ResponseResult().failed();

	public ResponseResult() {

	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

	public ResponseResult failed() {
		this.code = "400";
		this.message = "失败";
		this.status = 0;
		return this;
	}
	
	public ResponseResult success(Object data) {
		this.code = "200";
		this.status = 1;
		this.message = "成功";
		this.data = data;
		return this;
	}
	
	public ResponseResult success() {
		this.code = "200";
		this.status = 1;
		this.message = "成功";
		return this;
	}

	

}
