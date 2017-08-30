(function(){

	
	var numZw =  {1:"一",2:"二",3:"三",4:"四",5:"五",6:"六",7:"七",8:"八",9:"九",0:"零"}
	
	
	
	var ecoType = [
	                { label: '国有', value: 1401 },
	                { label: '集体', value: 1402 },
	                { label: '个体', value: 1403 },
	                { label: '合伙', value: 1404 },
	                { label: '股份制(合作)', value: 1405 },
	                { label: '个人独资', value: 1406 },
	                { label: '有限责任', value: 1407 },
	                { label: '外商投资', value: 1408 },
	                { label: '股份有限公司', value: 1409 },
	                { label: '其他', value: 1410 },
	              ];
      var PlaceOwnerAll = [
				        { label: '自有', value: 2501 },
				        { label: '租赁', value: 2502 },
				        { label: '无偿使用', value: 2503 },
				        { label: '租赁长期', value: 2504 },
				        { label: '无偿使用长期', value: 2505 },
				      ];
      var PlaceOwner = [
				        { label: '自有', value: 2501 },
				        { label: '租赁', value: 2502 },
				        { label: '无偿使用', value: 2503 },
				        { label: '租赁(长期)', value: 2504 },
				        { label: '无偿使用(长期)', value: 2505 }
				      ];
	
      var picType = [
                       { label:'身份证',value:2801 },
                       { label:'户口本',value:2802 },
                       { label:'驾照',value:2803 },
                       { label:'护照',value:2804 },
                       { label:'其他',value:2805 }
                    ];
	
	$.extend({
			createScript: function(src){
				var script=document.createElement("script");  
				script.setAttribute("type", "text/javascript");  
				script.setAttribute("src", src);  
				var html = document.getElementsByTagName("html");  
				html[0].appendChild(script);  
			},
			picType:picType,
		
			/**
			 * 获取经济类型
			 **/
			getEcoTypeByCode:function(code) {
			  var name = '';
			  
			  $(ecoType).each(function(i,v){
				   if (code === v.value) {
				      name = v.label;
				      return false;
				   }
			  });
			  return name;
			},
			ajaxPost:function(param){
				 jQuery.support.cors = true;
				 if(param.url.indexOf('http://')==-1){
					 param.url = cfg.basePath+param.url;
				 }
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
						
						 if(msg.code!=200||msg.code!='200'){
							 layer.alert(msg.message,{title:'友情提醒'});
						 }
						 param.ok && param.ok(msg);
					 },
					 error:function(msg,b,c){
						 console.log(msg,b,c);
						 layer.alert('系统繁忙【'+c+'】',{title:'友情提醒'});
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
			  var queryString = location.search;
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
			  var size = 0;
			  $(cookies).each(function(i,v){
				  var ck = v.split('=');
				  cookieJson[$.trim(ck[0])] = $.trim(ck[1]);
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
			},
			/**
			 *传递行政区划编码获取中文名字 
			 **/
			getDistByCodes:function(codes){
				
				var codeArray = codes.split(',');
				var name = "";
				
				var city = window.city[86];
				
				name +=city[codeArray[0]];
				
				city = window.city[codeArray[0]];
				
				var i = 0;
				while(++i<codeArray.length && city){
					if(city[codeArray[i]]){
						name +="/"+city[codeArray[i]];
					}
					
					city = window.city[codeArray[i]];
				}
				return name;
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
		for(name in data ){
			
			var pro = '';
			var disabled = false;
			
			
			if(typeof data[name] === "string"){
				pro = data[name];
			}else{
				pro = data[name].label;
				disabled = data[name].disabled;
			}
			
			var classDisabled = disabled?'disabled':'';
			
			
			if(hasNext(name)){
				li+="<li title='"+pro+"' data-code='"+name+"' class='"+classDisabled+"'>"+
				"<span class='itemName'>"+pro+"</span>"+
				"<span class='itemArrow'>&gt;</span>"+
				"</li>";
			}else{
				li+="<li title='"+pro+"' data-code='"+name+"' class='"+classDisabled+"'>"+
				"<span class='itemName'>"+pro+"</span>"+
				"</li>";
			}
		}
		
		
		//将禁用的移到下面 未禁用的在上面
		ul.append(li);
		
		ul.find('li').each(function(i,v){
			
			if($(v).hasClass('disabled')){
				$(v).insertAfter(ul.find('li:last'));
			}
			
		});
		
	
		return ul;
	}
	
	
	
	
	
	$.fn.extend({
		
		
		/**
		 * 
		 *获取表单参数 
		 **/
		getFormData:function(){
			var fromData = {};
			$(this).find('*[name]').each(function(){
				var v = $(this).val();
				fromData[this.name] = v;
			});
			return fromData;
		},
		
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

			var parent = target.parent();
			target.css({position:"relative"});
			var text = $("<span id='"+target.attr('name')+"'></span>");
			

			//console.log(target.css);
			
			text.css({width:(width-9)+'px',height:(height-4)+'px','display':'block','position':'absolute','top':(pos.top+2)+'px',
					 'left':(pos.left+2)+'px','z-index':'888',"backgroundColor":"#fff","lineHeight":height+"px",'padding-left':'5px'});
			
			$("body").append(text);

			
			
			
			if(target.hasClass('disabled')||target.attr('disabled')){
				text.addClass('disabled');
			}
			
			if(param.initVal){
				target.val(param.initVal[param.valKey]);//.attr('data-value',param.initVal[param.valKey]);
				text.html(param.initVal[param.key]);
			}
			
		
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
			text.click(function(){
				if(target.hasClass('disabled')){
					return false;
				}
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
					target.val(data[param.valKey]);
					text.html(data[param.key]);
					mySelect.hide();
				}
			});
			
			$(document).click(function(e){
				if($(e.target).parents('.mySelect').length==0 && !$(e.target).is(text)){
					mySelect.hide();
				}
			});
			
		},
		
		/**
		 *禁用某些不让选择的地址 
		 *封装一下不需要每个地方都去调用 
		 *传递一个回掉函数  函数接受一个参数..处理之后的city json对象
		 *
		 ***** 注意此方法包含业务逻辑.. 
		 **/
		partDist:function(param){
			var those = this;
			pubsub.subscribe('org',function(key,data){
				var limitCity = $.extend(true,{},window.city);
				var cityTemp = limitCity[86];
				for(name in cityTemp){
					if(name!=data.procode){
						cityTemp[name] = {label:cityTemp[name],disabled:true};
					}else{
						var admdi = limitCity[name];
						for(key in admdi){
							if(key != data.admdivcode ){
								admdi[key] = {label:admdi[key],disabled:true};
							}
						}
					}
				}
				param = param || {};
				param.city = limitCity;
				$(those).dist(param);
				//cb(limitCity);
			});
		},
		
		/**
		 *地址的三联选择 
		 *添加一个span 在上层挡住input 这样值就是code 而不是中文
		 *param : {city:{},initVal:'1121,2121,21212'}  //city不传则使用默认的
		 **/
		dist:function(param){
			
			var target = $(this);
			target.attr("readOnly",true);
			//定位
			var position = $(this).offset();
			var dist = $("<div class='dist'></div>");
			$("body").append(dist);
			var height = $(this).outerHeight();
			var width = $(this).outerWidth();
			dist.css({"top":(position.top+height+5)+'px',"left":position.left});
			
			
			var city =  {};
			
			try {
				city = param.city|| window.city;
			} catch (e) {
				city = window.city;
			}
			
			
			//生成第一个ul
			var ul = getDistUl(city[86]);
			dist.append(ul);
			
			
			//添加一个span
			target.css({position:"relative"});
			var text = $("<span id='"+target.attr('name')+"'></span>");
			text.css({width:(width-9)+'px',height:(height-4)+'px','display':'block','position':'absolute','top':(position.top+2)+'px',
					 'left':(position.left+2)+'px','z-index':'888',"backgroundColor":"#fff","lineHeight":height+"px",'padding-left':'5px'});
			
			
			if(target.hasClass('disabled')||target.attr('disabled')){
				text.addClass('disabled');
			}
			
			
			$("body").append(text);
			
			if(param && param.initVal){
				target.val(param.initVal);
				text.html($.getDistByCodes(param.initVal));
			}
			
			
			
			
			var flag = true;
			text.click(function(){
				if(target.hasClass('disabled')){
					return false;
				}
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
				
				if($(this).hasClass('disabled')){
					return false;
				}
				
				var ul = $(this).parents('ul');
				ul.find('li').removeClass('active');
				$(this).addClass('active');
				ul.nextAll().remove();
				
				var cityCode = $(this).attr('data-code');
				var newUl = getDistUl(city[cityCode]);
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
					text.html(infos.name.join('/'));
					target.val(infos.code.join(','));
				}
			});
			
			$(document).click(function(e){
				if($(e.target).parents('.dist').length==0 && !$(e.target).is(text)){
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

	/**
	 *逻辑是这样的 
	 *将回调函数放置在某个全局的变量中.. key val的形式.. key为需要订阅的消息名称 类似key 
	 *当某个操作 发布了这个消息的时候 调用这个回掉方法.. 
	 * 
	 **/
	var pubsub = (function(){
	    var q = {}
	        topics = {},
	        subUid = -1;
	    	vals = {};
	    //发布消息
	    q.publish = function(topic, args) {
	    	vals[topic] = args;
	        if(!topics[topic]) {return;}
	        var subs = topics[topic],
	            len = subs.length;
	        while(len--) {
	            subs[len].func(topic, args);
	        }
	        return this;
	    };
	    //订阅事件
	    q.subscribe = function(topic, func) {
	        topics[topic] = topics[topic] ? topics[topic] : [];
	        var token = (++subUid).toString();
	        topics[topic].push({
	            token : token,
	            func : func
	        });
	        //如果是先发布了消息 后再订阅.. 
	        if(vals[topic]){
	        	func(topic,vals[topic]);
	        }
	        return token;
	    };
	    return q;
	    //取消订阅就不写了，遍历topics，然后通过保存前面返回token，删除指定元素
	})();
	w.pubsub = pubsub;
	
	
	//查询人员信息
	$.ajaxPost({
		url:cfg.basePath+"/licPreGns/getUserInfoZJ",
		ok:function(msg){
		  if(msg.code==200){
			  console.log(msg,'人员信息');
			  w.user = msg.data;
			  pubsub.publish("user", msg.data);
		  }
		}
	});
	//查询行政区划信息
	$.ajaxPost({
		url:cfg.basePath+"/licPreGns/getBizRegion",
		ok:function(msg){
		  if(msg.code==200){
			  console.log(msg,'行政区划');
			  pubsub.publish("org", msg.data);
		  }
		}
	});
	
	
	
})(window)


////触发的事件
//var logmsg = function(topics, data) {
//    console.log("logging:" + topics + ":" + data);
//}
////监听指定的消息'msgName'
//var sub = pubsub.subscribe('msgName', logmsg);
////发布消息'msgName'
//pubsub.publish('msgName', 'hello world');
////发布无人监听的消息'msgName1'
//pubsub.publish('anotherMsgName', 'me too!');







