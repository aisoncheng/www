
   jQuery.extend({
	    createUploadIframe: function(id, uri)
		{
			//create frame
		var frameId = 'jUploadFrame' + id;
		var iframeHtml = '<iframe id="' + frameId + '" name="' + frameId + '" style="position:absolute; top:-9999px; left:-9999px"';
		if(window.ActiveXObject)
		{
			if(typeof uri== 'boolean'){
				iframeHtml += ' src="' + 'javascript:false' + '"';

			}
			else if(typeof uri== 'string'){
				iframeHtml += ' src="' + uri + '"';

			}	
		}
		iframeHtml += ' />';
		jQuery(iframeHtml).appendTo(document.body);

		return jQuery('#' + frameId).get(0);			
    },
    createUploadForm: function(id,fileElementId,data,fileElement)
	{
		//create form	
		var formId = 'jUploadForm' + id;
		var fileId = 'jUploadFile' + id;
		var form = jQuery('<form  action="" method="POST" name="' + formId + '" id="' + formId + '" enctype="multipart/form-data"></form>');	
		if(data)
		{
			for(var i in data)
			{
				jQuery('<input type="hidden" name="' + i + '" value="' + data[i] + '" />').appendTo(form);
			}			
		}
		var oldElement;
		if(fileElement == null)
			oldElement = jQuery('#' + fileElementId);
		else
			oldElement = fileElement;
		
		var newElement = jQuery(oldElement).clone();
		jQuery(oldElement).attr('id', fileId);
		jQuery(oldElement).before(newElement);
		jQuery(oldElement).appendTo(form);
		
		//set attributes
		jQuery(form).css('position', 'absolute');
		jQuery(form).css('top', '-1200px');
		jQuery(form).css('left', '-1200px');
		jQuery(form).appendTo('body');		
		return form;
    },

    ajaxFileUpload: function(s) {
        // TODO introduce global settings, allowing the client to modify them for all requests, not only timeout		
        s = jQuery.extend({}, jQuery.ajaxSettings, s);
        var id = new Date().getTime()        
		var form = jQuery.createUploadForm(id, s.fileElementId, (typeof(s.data)=='undefined'?false:s.data),s.fileElement);
		var io = jQuery.createUploadIframe(id, s.secureuri);
		var frameId = 'jUploadFrame' + id;
		var formId = 'jUploadForm' + id;		
        // Watch for a new set of requests
        if ( s.global && ! jQuery.active++ )
		{
			jQuery.event.trigger( "ajaxStart" );
		}            
        var requestDone = false;
        // Create the request object
        var xml = {}   
        if ( s.global )
            jQuery.event.trigger("ajaxSend", [xml, s]);
        // Wait for a response to come back
        var uploadCallback = function(isTimeout)
		{			
			var io = document.getElementById(frameId);
            try 
			{				
				if(io.contentWindow)
				{
					 xml.responseText = io.contentWindow.document.body?io.contentWindow.document.body.innerHTML:null;
                	 xml.responseXML = io.contentWindow.document.XMLDocument?io.contentWindow.document.XMLDocument:io.contentWindow.document;
					 
				}else if(io.contentDocument)
				{
					 xml.responseText = io.contentDocument.document.body?io.contentDocument.document.body.innerHTML:null;
                	 xml.responseXML = io.contentDocument.document.XMLDocument?io.contentDocument.document.XMLDocument:io.contentDocument.document;
				}						
            }catch(e)
			{
				jQuery.handleError(s, xml, null, e);
			}
            if ( xml || isTimeout == "timeout") 
			{				
                requestDone = true;
                var status;
                try {
                    status = isTimeout != "timeout" ? "success" : "error";
                    // Make sure that the request was successful or notmodified
                    if ( status != "error" )
					{
                        // process the data (runs the xml through httpData regardless of callback)
                        var data = jQuery.uploadHttpData( xml, s.dataType );    
                        // If a local callback was specified, fire it and pass it the data
                        if ( s.success )
                            s.success( data, status );
    
                        // Fire the global callback
                        if( s.global )
                            jQuery.event.trigger( "ajaxSuccess", [xml, s] );
                    } else
                        jQuery.handleError(s, xml, status);
                } catch(e) 
				{
                    status = "error";
                    jQuery.handleError(s, xml, status, e);
                }

                // The request was completed
                if( s.global )
                    jQuery.event.trigger( "ajaxComplete", [xml, s] );

                // Handle the global AJAX counter
                if ( s.global && ! --jQuery.active )
                    jQuery.event.trigger( "ajaxStop" );

                // Process result
                if ( s.complete )
                    s.complete(xml, status);

                jQuery(io).unbind()

                setTimeout(function()
									{	try 
										{
											jQuery(io).remove();
											jQuery(form).remove();	
											
										} catch(e) 
										{
											jQuery.handleError(s, xml, null, e);
										}									

									}, 100)

                xml = null

            }
        }
        // Timeout checker
        if ( s.timeout > 0 ) 
		{
            setTimeout(function(){
                // Check to see if the request is still happening
                if( !requestDone ) uploadCallback( "timeout" );
            }, s.timeout);
        }
        try 
		{

			var form = jQuery('#' + formId);
			jQuery(form).attr('action', s.url);
			jQuery(form).attr('method', 'POST');
			jQuery(form).attr('target', frameId);
            if(form.encoding)
			{
				jQuery(form).attr('encoding', 'multipart/form-data');      			
            }
            else
			{	
				jQuery(form).attr('enctype', 'multipart/form-data');			
            }			
            jQuery(form).submit();

        } catch(e) 
		{			
            jQuery.handleError(s, xml, null, e);
        }
		
		jQuery('#' + frameId).load(uploadCallback);
        return {abort: function(){
			try
			{
				jQuery('#' + frameId).remove();
				jQuery(form).remove();
			}
			catch(e){}
		}};
    },

    uploadHttpData: function( r, type ) {
       
    	var data = !type;
        data = type == "xml" ? r.responseXML : r.responseText;
        var start = data.indexOf(">");  
        if(start != -1) {  
          var end = data.indexOf("<", start + 1);  
          if(end != -1) {  
            data = data.substring(start + 1, end);  
           }  
        }  
        
       if ( type == "script" )
           jQuery.globalEval( data );
        // Get the JavaScript object, if JSON is used.
        if ( type == "json" ){
             data= eval( "data = " + data); 
        }		
        //	data = jQuery.parseJSON(jQuery(data).text());//jQuery.parseJSON($(data).text());
        // evaluate scripts within html
      if ( type == "html" )
           jQuery("<div>").html(data).evalScripts();

        return data;
    },
	
	handleError: function( s, xml, status, e ) {
		// If a local callback was specified, fire it
		if ( s.error )
			s.error( xml, status, e );

		// Fire the global callback
		if ( s.global )
			jQuery.event.trigger( "ajaxError", [xml, s, e] );
	}
});
   



   
   var File = function(param){
	   this.init(param);
   }
   
   
   window.File = File;
   /**
    *new uploadImg({
    *	eve: 触发的事件 change   必须
    *	el : 触发事件的元素 input的id   必须
    *   alow： 允许上传的图片    可选
    *   url ：上传的后台地址   必须
    *   before：上传之前调用 返回false则不在上传了   可选
    *   data ：一个方法 返回值是一个发送到后台的参数.. 可选
    *   callBack: 上传成功之后的回调   可选  ( ob,data,param.el,status ) ob 是input
    *}); 
    * 
    **/
   
   File.prototype={
		   
	     init:function(param){
	    	var p = {};
	    	
	    	$.extend(p,param);
	    	this.param = p;
		    $(document).on(param.eve,param.el,function(){
		    	
		    	var  name=$(this).val(),
				     fix=name.substring(name.lastIndexOf(".")+1),
				     flag=false;
				if(!param.url){
					layer.alert("请配置上传地址 ",{title:"友情提醒"});
					return false;
				}
		    	
		    	 if(param.alow&&param.alow.length>0){
			    	for(var i=0;i<param.alow.length;i++){
							if(fix==param.alow[i]){
								flag=true;
								break;
							}
						  }
					 if(param.alow&&param.alow.length>0&&!flag){
						 layer.alert("请选择 "+param.alow.join("，")+"类型的文件",{title:"友情提醒"});
						 return false;
					 }
		    	 }
				  var ob=this;
				  if(param.before&&!param.before.call(ob)){
					 return false;
				  }
				  var data=param.data?param.data.call(ob):{};
				  var ob = $(this);
				  var id = this.id;
				  $.ajaxFileUpload({
					url:param.url,
					secureuri:false,
					async:true, 
					fileElementId:ob.attr("id"), 
					dataType:"json",
					data:data,
					success:function(data, status){
						param.callBack(id,data,param.el,status);
						$(ob).val("");
					},
					error:function(a,b,c){
						console.log(a,b,c);
					}
				  });
			});
		    
		    return this;
		 },
	     dele:function(param){
				
	    	 $(document).on(param.eve,param.el,function(){
					  var ob=this;
					  if(param.before&&!param.before.call(ob)){
						 return false;
					  }
					  if(param.elOnlny){
						   $(this).parents("li").remove();
						   return false;
					  }
					  var data=param.data?param.data.call(ob):{};
					  $.ajax({
							 url:param.url,
							 async:true,
							 dataType:"json",
							 data:data,
							 success:function(a,v){
								 param.callBack.call(ob,a,v);
							 },
							 erro:function(a,v){
								 param.callBack.call(ob,a,v);
							 }
						 });
				});	
			return this;
		 },
		isLoading:function(imgs){
			  var flag=true;
			  imgs.each(function(i,v){
				   
				   if($(v).attr("src").indexOf("loading")>0){
						flag=false;
					   return false;
				   }
			  });
		  return flag;
		}
   }
  

   
	     
