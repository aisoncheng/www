(function(){

	
	var numZw =  {1:"一",2:"二",3:"三",4:"四",5:"五",6:"六",7:"七",8:"八",9:"九",0:"零"}
	var applyType = {'new':1001};
	
	$.extend({
			ajaxPost:function(param){
				 $.ajax({
					 headers: {
						 accesstoken: $.getCookieAcce(),
						 orgCode: $.getCookieOrg()
					 },
					 url:param.url,
					 type:param.type||'post',
					 data:param.data,
					 dataType:'json',
					 success:function(msg){
						 if(msg.code!=200){
							 layer.alert(msg.message,{title:'友情提醒'});
						 }
						 param.ok && param.ok(msg);
					 },
					 error:function(msg){
						 param.fail && param.fail(msg);
					 }
				 });
			},
			//获取申请类型
			applyType:function(){
				var pathname = location.href.replace(base,'');
				pathname = pathname.substring(1);
				var wh = pathname.indexOf("?");
				if(wh>0){
					pathname = pathname.substring(0,wh);
				}
				var pathNames = pathname.split('/');
				return pathNames ? pathNames.length==2 ? pathNames[1]:null:null;
			},
			//获取申请类型编码
			getApplyTypCode :function(){
				var apply  = cfg.applyWays[$.applyType()];
				return apply ? apply.apply : null;
			},
			//数字转成中文数字
			num2Zw:function(i){
				return numZw[i];
			},
			/**
			 * 设置cookie
			 **/
			setCookie:function(name, val) {
			  var exp = new Date();
			  exp.setTime(exp.getTime() + (30 * 60 * 1000)); // 30分钟过期
			  document.cookie = name + '=' + val + ';expires=' + exp.toGMTString() + ';path=/';
			},
			/**
			 * 
			 * @param {any} name 
			 * @returns 
			 * 所有的参数设置进cookie
			 */
			setParamsCookie:function() {
			  var params = $.getQueryParam();
			  for (name in params) {
			    $.setCookie(name, params[name]);
			  }
			},
			/**
			 *获取queryString的参数
			 **/
			getQueryParam:function(name) {
			  let queryString = location.search;
			  if (!queryString) {
			    return {};
			  }
			  queryString = queryString.substring(1);
			  var queryArray = queryString.split('&');
			  var queryParam = {};
			  $(queryArray).each(function(i,v){
				    var queryItem = v.split('=');
				    if (queryItem.length === 2) {
				      queryParam[queryItem[0]] = queryItem[1];
				    }
			  });
			  return !name ? queryParam : queryParam[name];
			},
			/**
			 * 传递key获取cookie
			 **/
			getCookie:function (key) {
			  var all = $.getAllCookie();
			  return all.size === 0 ? null : all[key];
			},
			/**
			 * 获取所有的cookie
			 **/
			getAllCookie:function () {
			  var cookieStr = document.cookie;
			  if (!cookieStr) {
			    return { size: 0 };
			  }
			  var cookies = cookieStr.split(';');
			  var cookieJson = { size: 0 };
			  let size = 0;
			  $(cookies).each(function(i,v){
				  var ck = v.split('=');
				  cookieJson[ck[0].trim()] = ck[1].trim();
				  size++;
			  });
			  cookieJson.size = size;
			  return cookieJson;
			},
			/**
			 * accesstoken
			 **/
			getCookieAcce:function () {
			  return $.getCookie('accesstoken');
			},
			/**
			 * accesstoken
			 **/
			getCookieOrg:function() {
			  return $.getCookie('orgCode');
			}
			
	 });
	
	
	
	

	//判断是否有下级
	var hasNext = function(code){
		return window.city[code] ? true : false;
	}
	
	//传递一个地址信息进去 返回一个ul
	var getDistUl = function (data){
		
		if(!data){
			return false;
		}
		var ul = $("<ul>"+"</ul>");
		var li = '';
		var china = window.city[86];
		for(name in data ){
			var pro = data[name];
			if(hasNext(name)){
				li+="<li title='"+pro+"' data-code='"+name+"'>"+
				"<span class='itemName'>"+pro+"</span>"+
				"<span class='itemArrow'>&gt;</span>"+
				"</li>";
			}else{
				li+="<li title='"+pro+"' data-code='"+name+"'>"+
				"<span class='itemName'>"+pro+"</span>"+
				"</li>";
			}
			
		}
		ul.append(li);
		return ul;
	}
	
	
	
	
	
	$.fn.extend({
		
		//下拉选
		/**
		 * 
		 *接收的参数类似 
		 *data 数组 每个元素是一个json对象
		 *{data:数据数组,key:展示哪个字段,valKey:指是哪个字段}
		 **/
		select:function(param){
			var target = $(this);
			
			var width = target.outerWidth();
			var pos = target.offset();
			var height = target.outerHeight();
			
			
		
			var mySelect = $("<div class='mySelect' style='width:"+width+"px;height:200px;top:"+(pos.top+height+5)+"px;left:"+pos.left+"px;display:none;'>"+
					             "<div class='options'>"+
					                "<ul>"+
					                "</ul>"+
					             "</div>"+
					         "</div>");
			
			$('body').append(mySelect);
			
			var options = mySelect.find('.options ul');
			for(var i=0;i<param.data.length;i++){
				var json = param.data[i];
				
				var li = $("<li value='"+json[param.valKey]+"'>"+json[param.key]+"</li>");
				li.data("data",json);
				if(json.disabled){
					li.addClass('disabled');
				}
				options.append(li);
			}
			
			var  flag = false;
			target.click(function(){
				if(mySelect.css('display')=='none'){
					mySelect.show();
				}else{
					mySelect.hide();
				}
			});
			
			mySelect.on("click","li",function(){
				
				var data = $(this).data('data');
				param.cb && param.cb(data);
				
				var val = $(this).attr("value");
				if($(this).hasClass('disabled')){
					return false;
				}else{
					target.val(val);
					mySelect.hide();
				}
			});
			
			
			$(document).click(function(e){
				if($(e.target).parents('.mySelect').length==0 && !$(e.target).is(target)){
					mySelect.hide();
				}
			});
			
		},
		dist:function(){
			var target = $(this);
			target.attr("readOnly",true);
			//定位
			var position = $(this).offset();
			var dist = $("<div class='dist'></div>");
			$("body").append(dist);
			var height = $(this).outerHeight();
			dist.css({"top":(position.top+height+5)+'px',"left":position.left});
			
			//生成第一个ul
			var ul = getDistUl(window.city[86]);
			dist.append(ul);
			
			
			var flag = true;
			target.click(function(){
				console.log(flag);
				if(flag){
					dist.show();
					dist.animate({height:250},200,function(){
						flag = !flag;
					});
				}else{
					dist.animate({height:0},200,function(){
						dist.hide();
						flag = !flag;
					});
				}
				
			});
			// 注册事件
			dist.on('click','li',function(){
				var ul = $(this).parents('ul');
				ul.find('li').removeClass('active');
				$(this).addClass('active');
				ul.nextAll().remove();
				
				var cityCode = $(this).attr('data-code');
				var newUl = getDistUl(window.city[cityCode]);
				if(newUl){
					ul.after(newUl);
				}else{
					 // 没有下级的时候就选这个
					var infos = {code:[],name:[]};
					dist.find("li.active").each(function(){
						infos.code.push($(this).attr('data-code'));
						infos.name.push($(this).attr('title'));
					});
					dist.animate({height:0},200,function(){
						dist.hide();
						flag = !flag;
					});
					target.val(infos.name.join('/'));
					target.attr('data-code',infos.code.join(','));
				}
			});
			
			$(document).click(function(e){
				if($(e.target).parents('.dist').length==0 && !$(e.target).is(target)){
					dist.hide();
				}
			});
			
		}
	});
		
})($);


//每次页面刷新加载设置一次cookie
$.setParamsCookie();

//请求一次人员信息
(function(w){
	$.ajaxPost({
		url:cfg.basePath+"/licPreGns/getUserInfoZJ",
		ok:function(msg){
		  if(msg.code==200){
			  w.user = msg.data;
		  }
		}
	});
})(window)



