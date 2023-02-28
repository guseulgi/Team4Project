function fnc_adn_jQuery_info(callbackFunc) {
	var adn_jquery_url = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.js';
	var adn_jQuery_chk_cnt = 0;
	var adn_status_jquery = false;
	var load_script_status = false;
	var load_script_start = false;
	if (!window.jQuery) {
		var adn_jquery_yet = setInterval(function() {
			if (window.jQuery) {
				clearInterval(adn_jquery_yet);
				callbackFunc()
			}
			if(adn_jQuery_chk_cnt<10) adn_jQuery_chk_cnt++;
			else{

				if(load_script_status==false && load_script_start==false)
				{
					load_script_start = true;
					var c=document.createElement("script");
					c.type="text/javascript";
					c.charset='UTF-8';
					c.defer=true;
					if(c.readyState){
						c.onreadystatechange=function(){
							if(c.readyState=="loaded" || c.readyState=="complete"){
								c.onreadystatechange=null;
								load_script_status = true;
							}
						}
					}else{
						c.onload=function(){
							load_script_status = true;
						}
					}
					c.src=adn_jquery_url;
					document.getElementsByTagName("head")[0].appendChild(c);
					c.onerror=function(){
						load_script_status = false;
					}

				}
			}
		}, 100)
	} else {
		callbackFunc()
	}
}

function fnc_adn_health_info(callbackFunc)
{
	var _adn_chk_todays = new Date();
	var _adn_chk_dd = _adn_chk_todays.getDate();
	var _adn_chk_mm =  (_adn_chk_todays.getMonth()+1);
	var _adn_chk_yyyy = _adn_chk_todays.getFullYear();
	var _adn_chk_hours = _adn_chk_todays.getHours();
	var _adn_chk_mins = _adn_chk_todays.getMinutes();


	var _adn_health_chk_min = parseInt(_adn_chk_mins)+10;
	if(parseInt(_adn_health_chk_min)>=60) {
		_adn_health_chk_min = _adn_health_chk_min-60;
		_adn_chk_hours = parseInt(_adn_chk_hours)+1;
	}
	if(parseInt(_adn_chk_hours)>23)
	{
		_adn_chk_hours = 0;
		_adn_chk_mm = parseInt(_adn_chk_mm)+1;
	}
	if(parseInt(_adn_chk_dd)<10) _adn_chk_dd='0'+_adn_chk_dd;
	if(parseInt(_adn_chk_mm)<10) _adn_chk_mm='0'+_adn_chk_mm;

	if(parseInt(_adn_chk_hours)<10) _adn_chk_hours='0'+_adn_chk_hours;

	if(parseInt(_adn_chk_mins)<10) _adn_chk_mins='0'+_adn_chk_mins;

	if(parseInt(_adn_health_chk_min)<10) _adn_health_chk_min='0'+_adn_health_chk_min;

	_adn_chk_full_date = _adn_chk_yyyy+_adn_chk_mm+_adn_chk_dd+_adn_chk_hours+_adn_chk_mins;
	_adn_health_chk_full_date = _adn_chk_yyyy+_adn_chk_mm+_adn_chk_dd+_adn_chk_hours+_adn_health_chk_min;

	var adn_health_val = localStorage.getItem('adn_health_chk_time');
	if (typeof(adn_health_val) != "undefined" && adn_health_val != null)
	{
		if(parseInt(_adn_chk_full_date) < parseInt(adn_health_val)) return null;
	}

	if (window.ActiveXObject) {
		try {
			var xhr = new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			try {
				var xhr = new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e1) {
				var xhr = null;
			}
		}
	} else if (window.XMLHttpRequest) {
		var xhr = new XMLHttpRequest();
	} else {
		var xhr = null;
	}




	try{

		if(adn_health_flag!="loading" && adn_health_flag!="ok"){
			if (typeof xhr  !== "null") {
				xhr.open('GET', 'https://kn.acrosspf.com/adn_health_jsonp_chk.ad?g=tags&t='+Math.floor(Math.random()*99999999999));
				xhr.timeout = 10000;

				xhr.onload = function () {

					if(xhr.readyState == 4){
						if(xhr.status == 200){
							adn_health_flag = "ok";
							localStorage.removeItem('adn_health_chk_time');
							callbackFunc();
						}
					}
				};
				xhr.onerror = function() {
					adn_health_flag = "error";
					localStorage.setItem('adn_health_chk_time', _adn_health_chk_full_date);
					xhr.abort();
				};
				xhr.ontimeout = function (e) {
					adn_health_flag = "timeout";
					localStorage.setItem('adn_health_chk_time', _adn_health_chk_full_date);
					xhr.abort();
				};
				adn_health_flag = "loading";
				xhr.send(null);
			}
		}
		else if(adn_health_flag=="ok"){
			localStorage.removeItem('adn_health_chk_time');
			callbackFunc();
		}
		else if(adn_health_flag=="loading"){
			var adn_health_yet = setInterval(function() {
				if (adn_health_flag=="ok") {
					clearInterval(adn_health_yet);
					callbackFunc()
				}
			}, 100)
		}

	}catch(e){}
}

if(typeof adn_health_flag=="undefined") var adn_health_flag = "";

if(typeof adn_proc_flag=="undefined") var adn_proc_flag = false;

if(typeof adn_load_flag=="undefined") var adn_load_flag=false;

/*if(typeof adn_flag=="undefined") var adn_flag=false;*/
if(typeof adn_status=="undefined") var adn_status=0;
if(typeof adn_send=="undefined") var adn_send=0;
if(typeof log_status=="undefined")var log_status=false;
adn_status++;

if(!document.getElementById("adn_container")){
	var _adn_tmp_div=document.createElement("DIV");
	_adn_tmp_div.setAttribute("id", "adn_container");
	_adn_tmp_div.setAttribute("style", "display:none");
	document.getElementsByTagName("body")[0].appendChild(_adn_tmp_div);
}

var _adn_r=document.referrer;
var _adn_l=document.location;
var _adn_h=document.location.hostname;
var _adn_t=Math.round((new Date()).getTime() / 1000);
var _adn_p="https://";
var _adn_id="";
var _adn_cinfo="";
var _adn_uid="";
var _adn_ucode="";
var _adn_items="";
var _adn_chk_todays = new Date();
var _adn_chk_dd = _adn_chk_todays.getDate();
var _adn_chk_mm =  (_adn_chk_todays.getMonth()+1);
var _adn_chk_yyyy = _adn_chk_todays.getFullYear();
if(_adn_chk_dd<10) _adn_chk_dd='0'+_adn_chk_dd;
if(_adn_chk_mm<10) _adn_chk_mm='0'+_adn_chk_mm;
_adn_chk_full_date = _adn_chk_yyyy+_adn_chk_mm+_adn_chk_dd;

/* 세션 storage UV용 Start */
window.sStorage = window.sessionStorage || (function() {
	// window.sStorage = (function() {
	var winObj = opener || window; //opener가 있으면 팝업창으로 열렸으므로 부모 창을 사용
	var data = JSON.parse(winObj.top.name || '{}');
	var fn = {
		length : Object.keys(data).length,
		setItem : function(key, value) {
			data[key] = value + '';
			winObj.top.name = JSON.stringify(data);
			fn.length++;
		},
		getItem : function(key) {
			return data[key] || null;
		},
		key : function(idx) {
			return Object.keys(data)[idx] || null; //Object.keys() 는 IE9 이상을 지원하므로 IE8 이하 브라우저 환경에선 수정되어야함
		},
		removeItem : function(key) {
			delete data[key];
			winObj.top.name = JSON.stringify(data);
			fn.length--;
		},
		clear : function() {
			winObj.top.name = '{}';
			fn.length = 0;
		}
	};
	return fn;
})();

var across_adn_s_storage  = sStorage.getItem("across_adn_visit_check");
var is_acorss_adn_visit = false;
if( across_adn_s_storage == "" || across_adn_s_storage == null ||  typeof  across_adn_s_storage == undefined) {
	across_adn_s_storage = 0;
	is_acorss_adn_visit = true;
}
sStorage.setItem("across_adn_visit_check", parseInt(across_adn_s_storage)+1);
/* 세션 storage UV용 End */

var across_adn_order_cnt = localStorage.getItem('adn_order_cnt');
if( across_adn_order_cnt == "" || across_adn_order_cnt == null || typeof  across_adn_order_cnt == undefined ) {
	across_adn_order_cnt  = 0;
}

var across_adn_order_dates = localStorage.getItem('adn_order_dates');
if( across_adn_order_dates == "" || across_adn_order_dates == null || typeof  across_adn_order_dates == undefined ) {
	across_adn_order_dates  = "";
}


var across_adn_cart_items_info = "";

var adn_messaging_visit_val = localStorage.getItem('adn_messaging_visit');
if (typeof(adn_messaging_visit_val) != "undefined" && adn_messaging_visit_val != null)
{
	if(is_acorss_adn_visit)
	{
		var save_visit_val = parseInt(adn_messaging_visit_val)+1;
		localStorage.setItem('adn_messaging_visit', save_visit_val);
	}
}
else
{
	if(is_acorss_adn_visit)
	{
		var save_visit_val = "1";
		localStorage.setItem('adn_messaging_visit', save_visit_val);
	}
}

function _getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if(!results) return null;
	if(!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function fnc_adn_search_find_txt() {
	if (location.pathname == "/shop/shopbrand.html") {
		try {
			var adn_searh_txt = "";
			var frm = document.getElementsByName('form_search');
			if (frm.length > 0) {
				adn_searh_txt = frm[0].prize1.value
			}
			if($(".item-wrap > .item-cont").length > 0) {
				fn_adn_shop_search(adn_searh_txt)
			}
			else if($(".prd-thumb").length > 0) {
				fn_adn_shop_search(adn_searh_txt)
			}
		} catch (exception) {}
	} else if (location.pathname == "/m/search.html") {
		try {
			var adn_searh_txt = "";
			var frm = document.getElementsByName('search');
			if (frm.length > 0) {
				adn_searh_txt = frm[0].s.value
			}
			if ($(".listPic").length > 0) {
				fn_adn_shop_search(adn_searh_txt)
			}
		} catch (exception) {}
	} else if (location.pathname == "/product/search.html") {
		try {
			var adn_searh_txt = "";
			adn_searh_txt = _getParameterByName("keyword", document.location.href);
			if ($(".prdImg").length > 0) {
				fn_adn_shop_search(adn_searh_txt)
			}
			if ($(".thumbnail").length > 0) {
				fn_adn_shop_search(adn_searh_txt)
			}
		} catch (exception) {}
	} else if (location.pathname == "/goods/goods_search.php") {
		try {
			var adn_searh_txt = "";
			var frm = document.getElementsByName('frmSearch');
			if (frm.length > 0) {
				adn_searh_txt = _getParameterByName("keyword", document.location.href)
			}
			if ($(".item_cont").length > 0) {
				fn_adn_shop_search(adn_searh_txt)
			}
		} catch (exception) {}
	} else if (location.pathname == "/searchResult.do") {
		try {
			var adn_searh_txt = "";
			var frm = document.getElementsByName('fm');
			if (frm.length > 0) {
				adn_searh_txt = _getParameterByName("searchStr", document.location.href)
			}
			if ($(".pimg").length > 0) {
				fn_adn_shop_search(adn_searh_txt)
			}else if ($(".img_box1").length > 0) {
				fn_adn_shop_search(adn_searh_txt)
			}
		} catch (exception) {}
	} else {
		try {
			if(_getParameterByName("mod", document.location.href)=="search")
			{
				adn_searh_txt = _getParameterByName("keyword", document.location.href);
				if ($(".wrap1").length > 0) {
					fn_adn_shop_search(adn_searh_txt)
				}
			}
		}catch(e){}
	}
}

function fnc_adn_addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload()
			}
			func()
		}
	}
}

function across_adn_uv_check()
{
	var across_adn_uv_dates = sStorage.getItem('across_adn_uv_dates');
	var dates = _adn_chk_yyyy+_adn_chk_mm+_adn_chk_dd;
	//console.log("1 across_adn_order_info=>"+across_adn_uv_dates);
	if( across_adn_uv_dates == "" || across_adn_uv_dates == null  ) {
		sStorage.setItem('across_adn_uv_dates', dates);
		return false;
	}
	else if(across_adn_uv_dates==dates)
	{
		return true;
	}
	else
	{
		return false;
	}
	
}


function across_adn_uv_uid_check(uid)
{

	var across_adn_uv_uids = sStorage.getItem('across_adn_uv_uids');
	
	var dates = _adn_chk_yyyy+_adn_chk_mm+_adn_chk_dd;
	//console.log("1 across_adn_order_info=>"+across_adn_uv_dates);
	if( across_adn_uv_uids == "" || across_adn_uv_uids == null  ) {
		sStorage.setItem('across_adn_uv_uids', uid+"^"+dates);
		return false;
	}
	else 
	{
		var is_uv_uids = false;
		var is_uv_chk_uid = "";
		var is_uv_chk_dates = "";
		var arr_uids = across_adn_uv_uids.split("@");
		for (var i = 0; i < arr_uids.length; i++) {
			// console.log(arr_uids[i]);
			var arr_uv_uids = arr_uids[i].split("^");
			
			// console.log(arr_uv_uids);
			if(arr_uv_uids[0]==uid){
				is_uv_uids = true;
				
				is_uv_chk_uid = arr_uv_uids[0];
				is_uv_chk_dates = arr_uv_uids[1];
				break;
			}
		}
		if(is_uv_uids==false)
		{
			sStorage.setItem('across_adn_uv_uids', across_adn_uv_uids+"@"+uid+"^"+dates);
			return false;
		}else{
			if(is_uv_chk_dates!=dates)
			{
				sStorage.setItem('across_adn_uv_uids', across_adn_uv_uids.replace(uid+"^"+is_uv_chk_dates, uid+"^"+dates) );
				return false;
			}
		}
		return true;
		/*
		if(arr_uids[0]==uid && arr_uids[1]==dates){
		 	return true;
		}else{
			sStorage.setItem('across_adn_uv_uids', uid+"^"+dates);
			return false;
		}
		*/
	}

}


function fnc_adn_jQueryLoad()
{
	var adn_jquery_url = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.js';
	var adn_jQuery_chk_cnt = 0;
	var adn_status_jquery = false;
	var load_script_status = false;
	if (!window.jQuery) {
		var adn_closed_jquery_yet = setInterval(function() {
			if (window.jQuery) {
				clearInterval(adn_closed_jquery_yet);
				fnc_adn_search_find_txt()
			}
			if(adn_jQuery_chk_cnt<10) adn_jQuery_chk_cnt++;
			else{

				if(load_script_status==false)
				{
					var c=document.createElement("script");
					c.type="text/javascript";
					c.charset='UTF-8';
					c.defer=true;
					if(c.readyState){
						c.onreadystatechange=function(){
							if(c.readyState=="loaded" || c.readyState=="complete"){
								c.onreadystatechange=null;
								fnc_adn_search_find_txt()
							}
						}
					}else{
						c.onload=function(){
							fnc_adn_search_find_txt()
						}
					}
					c.src=adn_jquery_url;
					document.getElementsByTagName("head")[0].appendChild(c);
					c.onerror=function(){

					}
					load_script_status = true;
				}
			}
		}, 100)
	}else{
		fnc_adn_search_find_txt()
	}
}


function fn_adn_orders_info(v1, v2)
{
	var across_adn_order_info = localStorage.getItem('adn_order_info');
	var acorss_adn_order_cnt  = localStorage.getItem('adn_order_cnt');
	var acorss_adn_order_price  = localStorage.getItem('adn_order_price');

	//console.log("1 across_adn_order_info=>"+across_adn_order_info);
	if( across_adn_order_info == "" || across_adn_order_info == null  ) {
		localStorage.setItem('adn_order_info', v1);
		localStorage.setItem('adn_order_dates', _adn_chk_yyyy+_adn_chk_mm+_adn_chk_dd);
		if( acorss_adn_order_cnt == "" || acorss_adn_order_cnt == null  ) {
			localStorage.setItem('adn_order_cnt', 1);
			localStorage.setItem('adn_order_price', v2);
		}else{
			localStorage.setItem('adn_order_cnt', (parseInt(acorss_adn_order_cnt)+1));
			localStorage.setItem('adn_order_price', (parseInt(acorss_adn_order_price)+parseInt(v2)));
		}

	}else{

		if(across_adn_order_info!=v1){

			localStorage.setItem('adn_order_info', v1);
			localStorage.setItem('adn_order_dates', _adn_chk_yyyy+_adn_chk_mm+_adn_chk_dd);

			if( acorss_adn_order_cnt == "" || acorss_adn_order_cnt == null  ) {
				localStorage.setItem('adn_order_cnt', 1);
				localStorage.setItem('adn_order_price', v2);
			}else{
				localStorage.setItem('adn_order_cnt', (parseInt(acorss_adn_order_cnt)+1));
				localStorage.setItem('adn_order_price', (parseInt(acorss_adn_order_price)+parseInt(v2)));
			}
		}
	}
}



function fn_adn_order_items_info(v1, v2)
{
	var arr_ord_items = v2.split("#");
	if(arr_ord_items.length>=1){
		var inum = 0;
		var arr_result_ord_items = new Array();
		var str_cart_item = "";
		if(across_adn_cart_items_info!="")
		{
			var arr_cart_items = across_adn_cart_items_info.split("^");

			jQuery.each(arr_cart_items,function(key_cart,value_cart) {
				var is_cart_items_diff = false;
				jQuery.each(arr_ord_items,function(key,value) {
					if(value){
						var ord_item_detail = value.split("^");
						if(ord_item_detail[0]==value_cart){
							is_cart_items_diff = true;
						}
					}
				});
				if(is_cart_items_diff==false)
				{
					arr_result_ord_items[inum] = value_cart;
					inum++;
				}


			});

			inum = 0;

			jQuery.each(arr_result_ord_items,function(key_cart,value_cart) {
				if(inum>0) str_cart_item += "^";
				str_cart_item += value_cart;
				inum++;
			});
		}
		if(str_cart_item){
			localStorage.setItem('adn_cart_items_info', str_cart_item);
		}else{
			localStorage.setItem('adn_cart_items_info', "");
		}
	}

}


function fn_adn_shop_search(k) {
	var adn_search_chk = false;
	var adn_search_info = "";
	var last_adn_search = "";
	try {
		var adn_search_val = localStorage.getItem('adn_shop_search');
		if (typeof(adn_search_val) != "undefined" && adn_search_val != null) {
			var adn_search_arr = adn_search_val.split("^@^");
			for (var i = 0; i < adn_search_arr.length; i++) {
				if (adn_search_arr[i] != "") {
					if (adn_search_arr[i] == k) {
						last_adn_search = k;
						adn_search_chk = true
					} else adn_search_chk = false;
					if (!adn_search_chk) {
						if (adn_search_info != "") adn_search_info += "^@^" + adn_search_arr[i];
						else adn_search_info += adn_search_arr[i]
					}
				}
				if (i > 10) break
			}
		}
		if (last_adn_search != "") {
			if (adn_search_info != "") adn_search_info = last_adn_search + "^@^" + adn_search_info;
			else adn_search_info = last_adn_search
		} else {
			if (adn_search_info != "") adn_search_info = k + "^@^" + adn_search_info;
			else adn_search_info = k
		}
		localStorage.setItem('adn_shop_search', adn_search_info)
	} catch (exception) {}
}

var across_rb_adn_uid = "";
var across_rb_adn_uid_status = false;
function tag_param(){
	if(adn_send<adn_status){

		if(rb_adn_uid)
		{
			across_rb_adn_uid = localStorage.getItem('rb_adn_uid');

			try{
				if (typeof(across_rb_adn_uid) === "undefined" || across_rb_adn_uid === null) {
					across_rb_adn_uid = rb_adn_uid;
					localStorage.setItem("rb_adn_uid", rb_adn_uid);
				} else {
					if(rb_adn_uid!=across_rb_adn_uid)
					{
						across_rb_adn_uid = rb_adn_uid;
						localStorage.setItem("rb_adn_uid", rb_adn_uid);
					}
				}
			}catch(e){}
		}

		for(var k in adn_param){if(adn_param.hasOwnProperty(k)){
			for(var p in adn_param[k]){if(adn_param[k].hasOwnProperty(p)){
				if(adn_param[k][p]["ut"]=="Home")
				{
					if(across_adn_uv_uid_check(adn_param[k][p]["ui"])==false)
					{
						tagINFO(adn_param[k][p]["ut"], adn_param[k][p]["ui"], adn_param[k][p]["uo"], adn_param[k][p]["up"], adn_param[k][p]["items"]);	
					}
				}
				else
				{
					tagINFO(adn_param[k][p]["ut"], adn_param[k][p]["ui"], adn_param[k][p]["uo"], adn_param[k][p]["up"], adn_param[k][p]["items"]);
				}

			}
				
			}}}}adn_proc_flag=true;}

function _getCookie(a){var b=a + "=";var x=0;while(x <= document.cookie.length){var y=(x + b.length);if(document.cookie.substring(x, y)==b){if((endOfCookie=document.cookie.indexOf(";", y))==-1){endOfCookie=document.cookie.length;}return unescape(document.cookie.substring(y, endOfCookie));}x=document.cookie.indexOf(" ", x) + 1;if(x==0){break;}}return "";}
function _setCookie(a, b, c){var d=new Date();d.setTime(d.getTime() + (1000 * 60 * 60 * 24 * c));document.cookie=a + "=" + b + ";path=/;expires=" + d.toGMTString() + ";";}
function _adn_h_setCookie(a, b, c){var d=new Date();d.setTime(d.getTime() + (1000 * 60 * 60 * c ));document.cookie=a + "=" + b + ";path=/;expires=" + d.toGMTString() + ";";}
function _adn_obj(){var a="adn_wrap_" + Math.floor(Math.random()*99999999999);var b=document.createElement("DIV");b.setAttribute("id", a);b.setAttribute("style", "display:none");document.getElementById("adn_container").appendChild(b);return a;}
function _adn_frm_send(c, d)
{
	try{
		var a=document.createElement("iframe");
		a.frameBorder="0";
		a.scrolling="no";
		a.width="0px";
		a.height="0px";
		a.setAttribute("src", d);
		document.getElementById(c).appendChild(a);
	}catch (exception){}
}
function fn_adn_items_cookies(items) {
	try {
		var items_chk = false;
		var items_info = "";
		var last_items = "";
		var a = _getCookie("adn_items");
		var items_arr = a.split("^");
		for (var i = 0; i < items_arr.length; i++) {
			if (items_arr[i] != "") {
				b = items_arr[i].split("|");
				if (b[0] == items) {
					b[1] = parseInt(b[1]) + 1;
					last_items = b[0] + "|" + b[1];
					items_chk = true
				} else items_chk = false;
				if (!items_chk) {
					if (items_info != "") items_info += "^" + b[0] + "|" + b[1];
					else items_info += b[0] + "|" + b[1]
				}
			}
			if (i > 100) break
		}
		if (last_items != "") {
			if (items_info != "") items_info = last_items + "^" + items_info;
			else items_info = last_items
		} else {
			if (items_info != "") items_info = items + "|" + 1 + "^" + items_info;
			else items_info = items + "|" + 1
		}
		_setCookie("adn_items", items_info, 30);
		return items_info
	} catch (e) {}
}
function fnc_adn_replaceAll(str, searchStr, replaceStr) {
	return str.split(searchStr).join(replaceStr);
}

function tagINFO(t,u,o,p,obj)
{
	_adn_ucode=u;
	if(typeof t=="undefined") t="Home";
	if(typeof o=="undefined") o="";
	if(typeof p=="undefined") p="";
	if(typeof adn_ui != "undefined"){
		if(adn_ui==u){
			try {
				_setCookie("_adn_ck_", encodeURIComponent(u + "|" + adn_ci + "|" + adn_gi + "|" + adn_ii + "|" + adn_pi + "|" + adn_ki + "|" + adn_wd), 31);
				_adn_cinfo=encodeURIComponent(u + "|" + adn_ci + "|" + adn_gi + "|" + adn_ii + "|" + adn_pi + "|" + adn_ki + "|" + adn_wd);
			} catch (exception){}
			var _adn_inflow = false;
			try {
				if(_adn_r!="")
				{
					if(_adn_r.indexOf("acrosspf.com") != -1) {
						var a=_getCookie("_adn_flow_ck_");
						if(a == "")
						{
							if(_adn_inflow==false){
								_adn_h_setCookie("_adn_flow_ck_", "1", 3);

								var c="https://kn.acrosspf.com/log/inflow.ad?ad_ids="+across_rb_adn_uid+"&ui=" + u + "&ci=" + adn_ci + "&gi=" + adn_gi + "&ii=" + adn_ii + "&pi=" + adn_pi + "&ts=" + Math.floor(Math.random()*99999999999);
								_adn_inflow = true;
								var a=_adn_obj();
								_adn_frm_send(a, c);
							}}}}} catch (exception){}
			try {
				var b=unescape(a).split("|");
				var c="https://kn.acrosspf.com/adn_tracking.ad?ad_ids="+across_rb_adn_uid+"&c_id=" + u + "&c_camp=" + adn_ci + "&c_group" + adn_gi + "&c_items=" + adn_ii + "&c_papers=" + adn_pi + "&c_kwd=" + encodeURIComponent(adn_ki) + "&ref=" + encodeURIComponent(_adn_r) + "&loc=" + encodeURIComponent(document.location) + "&domain=" + encodeURIComponent(_adn_h) + "&ts=" + _adn_t + "&ll=1";
				_adn_id=adn_ui;
				if(log_status==false)
				{
					var a=_adn_obj();
					/*_adn_frm_send(a, c);*/
					log_status=true;
				}
			} catch (exception){}}}
	else
	{
		var a=_getCookie("_adn_ck_");
		if(a != ""){
			try {
				var b=unescape(a).split("|");
				_adn_cinfo=a

				var c="https://kn.acrosspf.com/adn_tracking.ad?ad_ids="+across_rb_adn_uid+"&c_id=" + b[0] + "&c_camp=" + b[1] + "&c_group" + b[2] + "&c_items=" + b[3] + "&c_papers=" + b[4] + "&c_kwd=" + encodeURIComponent(b[5]) + "&ref=" + encodeURIComponent(_adn_r) + "&loc=" + encodeURIComponent(document.location) + "&domain=" + encodeURIComponent(_adn_h) + "&ts=" + _adn_t + "&ll=1";
				_adn_id=b[0];
				if(log_status==false)
				{
					var a=_adn_obj();
					/*_adn_frm_send(a, c);*/
					log_status=true;
				}} catch (exception){}}}
	var items_data="";
	for (var k in obj){
		if( obj.hasOwnProperty(k) ){
			items_data += obj[k]["i"];
			if(typeof obj[k]["s"] !== "undefined") items_data += "^"+obj[k]["s"];
			else items_data += "^";
			if(typeof obj[k]["c"] !== "undefined") items_data += "^"+obj[k]["c"];
			else items_data += "^";
			if(typeof obj[k]["q"] !== "undefined") items_data += "^"+obj[k]["q"];
			else items_data += "^";
			if(typeof obj[k]["p"] !== "undefined") items_data += "^"+obj[k]["p"];
			else items_data += "^";
			items_data = items_data.replace(/\t/g, '');
			if(t=="Item") _adn_items=obj[k]["i"];
		}
		items_data += "@@";}
	var b="https://kn.acrosspf.com/ads_1.0.2.ad?ad_ids="+across_rb_adn_uid+"&u="+u+"&t="+t+"&o="+o+"&p="+p+"&i="+encodeURIComponent(items_data)+"&r="+Math.floor(Math.random()*99999999999);
	var a=_adn_obj();
	_adn_frm_send(a, b);
	if(t=="Purchase"){
		var g=""; if(_adn_id) { g=1; } else { g=0;} var a=_getCookie("_adn_ck_");if(a != ""){ _adn_cinfo=a; }
		var purchase_items_data="";
		try{
			for (var k in adn_order_items_param){
				if( adn_order_items_param.hasOwnProperty(k) ){
					purchase_items_data += adn_order_items_param[k][0]["items"][0]["i"]+"^"+adn_order_items_param[k][0]["items"][0]["a"]+"^"+adn_order_items_param[k][0]["items"][0]["p"].replace(/,/g, '');
					purchase_items_data = purchase_items_data.replace(/\t/g, '');
				}
				purchase_items_data += "#";}
//console.log(purchase_items_data);
		}catch(e){}
		fn_adn_orders_info(o, p);
		if(purchase_items_data){
			fn_adn_order_items_info(o, purchase_items_data);
		}
		var b="https://kn.acrosspf.com/adn_order_1.0.2.ad?ad_ids="+across_rb_adn_uid+"&u="+u+"&o="+o+"&p="+p+"&g="+g+"&c="+_adn_cinfo+"&i="+encodeURIComponent(purchase_items_data)+"&r="+Math.floor(Math.random()*99999999999);
		var u=_adn_obj();
		_adn_frm_send(u, b);
	}else if(t=="Complete"){
		var c=_adn_obj();
		var g="";
		if(_adn_id) {
			g=1;
			var b="https://kn.acrosspf.com/adn_complete_1.0.2.ad?ad_ids="+across_rb_adn_uid+"&u="+u+"&o="+o+"&c="+_adn_cinfo+"&g="+g+"&r="+Math.floor(Math.random()*99999999999);
			_adn_frm_send(c, b);
		}else{
			g=0;
			var e=_getCookie("_adn_ck_");
			if(e != ""){
				try {
					var f=unescape(e).split("|");
					var b="https://kn.acrosspf.com/adn_complete_1.0.2.ad?ad_ids="+across_rb_adn_uid+"&u="+u+"&o="+o+"&g=&c="+e+"&r="+Math.floor(Math.random()*99999999999);
					_adn_frm_send(c, b);
				} catch (exception){}
			}
		}
	}else if(t=="Item"){
		var adn_panel_cnt = "0";
		try{
			adn_panel_cnt = adn_panel_param.length;
		} catch (exception){}
		try{
			adn_panel_cnt = adn_mobile_panel_param.length;
		} catch (exception){}

		var items_data="";
		if(adn_panel_cnt==0)
		{
			for (var k in obj){
				if( obj.hasOwnProperty(k) ){
//items_data += obj[k]["i"]+"^";
					fn_adn_items_cookies(obj[k]["i"]);
//var b="https://kn.acrosspf.com/adn_items.ad?u="+u+"&uid="+_adn_uid+"&items="+obj[k]["i"]+"&r="+Math.floor(Math.random()*99999999999);var u=_adn_obj();_adn_frm_send(u, b);
					break;
				}
			}
		}
	}else if(t=="Cart"){
		//console.log(items_data);
		if(items_data)
		{
			var save_cart_items = fnc_adn_replaceAll(items_data, "^^@@", '^');
			//console.log("save_cart_items=>"+save_cart_items);
			if(save_cart_items)
			{
				localStorage.setItem('adn_cart_items_info', save_cart_items);
			}

			across_adn_cart_items_info = localStorage.getItem('adn_cart_items_info');
			if( across_adn_cart_items_info == "" || across_adn_cart_items_info == null  ) {
				across_adn_cart_items_info  = "";
			}
		}

	}
	adn_send++;
}
/*
function adn_btn_ok(u, o){
var b=document.referrer;
try {
if(_adn_id){var d="https://kn.acrosspf.com/adn_complete.ad?u="+u+"&o="+o+"&g=1&c="+_adn_cinfo+"&r="+Math.floor(Math.random()*99999999999);
} else {var e=_getCookie("_adn_ck_");
if(e != ""){
try {var f=unescape(e).split("|");var d="https://kn.acrosspf.com/adn_complete.ad?u="+u+"&o="+o+"&g=&c="+e+"&r="+Math.floor(Math.random()*99999999999);} catch (exception){}
}}
if (typeof(d) != "undefined" && d != null){
	var a=_adn_obj();
	_adn_frm_send(a, d);}
} catch (exception){}}
*/
function fnc_adn_getXMLHttpRequest() {
	if (window.ActiveXObject) {
		try {
			return new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			try {
				return new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e1) {
				return null;
			}
		}
	} else if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	} else {
		return null;
	}
}

function adn_btn_ok(u, o) {
	var b=document.referrer;
	try {
		if(_adn_id){
			var d="https://kn.acrosspf.com/adn_complete_1.0.2.ad?ad_ids="+across_rb_adn_uid+"&u="+u+"&o="+o+"&g=1&c="+_adn_cinfo+"&r="+Math.floor(Math.random()*99999999999);
		} else {
			var e=_getCookie("_adn_ck_");
			if(e != ""){
				try {
					var f=unescape(e).split("|");
					var d="https://kn.acrosspf.com/adn_complete_1.0.2.ad?ad_ids="+across_rb_adn_uid+"&u="+u+"&o="+o+"&g=&c="+e+"&r="+Math.floor(Math.random()*99999999999);
				} catch (exception){}
			}
		}
		if (typeof(d) != "undefined" && d != null){
			//console.log("ADN_db전환1");
			var httpRequest = fnc_adn_getXMLHttpRequest();
			httpRequest.open("GET",d,true);
			httpRequest.send(null);
			//console.log("ADN_db전환2=>"+b);

		}
	} catch (exception){}
}

var is_cartbtn = false;
var is_wishbtn = false;
function adn_handle_cartbtn()
{
	if(_adn_items!="")
	{
		if(!is_cartbtn){
			try{
				var is_cart_opt = true;

				if(is_cart_opt)
				{
					var c="https://kn.acrosspf.com/adn_btn.ad?ad_ids="+across_rb_adn_uid+"&ui=" + _adn_ucode + "&t=cart&i=" + _adn_items + "&ts=" + Math.floor(Math.random()*99999999999);
					var a=_adn_obj();
					_adn_frm_send(a, c);

					is_cartbtn = true;
				}
			}catch(e){}

		}
	}
}

function adn_handle_wishbtn()
{
	if(_adn_items!="")
	{
		if(!is_wishbtn){
			try{
				var c="https://kn.acrosspf.com/adn_btn.ad?ad_ids="+across_rb_adn_uid+"&ui=" + _adn_ucode + "&t=wish&i=" + _adn_items + "&ts=" + Math.floor(Math.random()*99999999999);
				var a=_adn_obj();
				_adn_frm_send(a, c);

				is_wishbtn = true;
			}catch(e){}
		}
	}
}



fnc_adn_jQuery_info(function() {

	fnc_adn_health_info(function() {


		try {
			$( document ).ready(function() {
				fnc_adn_search_find_txt();
			});
		}catch(e){
			fnc_adn_addLoadEvent(fnc_adn_jQueryLoad);
		}


		try {
			if(_adn_r.indexOf("naver.com") != -1) {
				var q = _getParameterByName("query", _adn_r);
				if(q){
					var _adn_k=function(){try{/*var q=$('#q').val();*/if(q!=''){q=q.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g,"");q=encodeURIComponent(q);if(q!=''){var u='https://kn.acrosspf.com/adn_k_1.0.2.ad?ad_ids='+across_rb_adn_uid+'&k='+q;$.ajax({type:'get',url:u,data:{todo:"jsonp"},dataType:"jsonp",crossDomain:true,cache:false,success:function(d){}});}}}catch(e){}};
					$( document ).ready(_adn_k);
				}
				var q2 = _getParameterByName("oquery", _adn_r);
				if(q2){
					var _adn_k2=function(){try{/*var q=$('#q').val();*/if(q2!=''){q2=q2.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g,"");q2=encodeURIComponent(q2);if(q2!=''){var u='https://kn.acrosspf.com/adn_k_1.0.2.ad?ad_ids='+across_rb_adn_uid+'&k='+q2;$.ajax({type:'get',url:u,data:{todo:"jsonp"},dataType:"jsonp",crossDomain:true,cache:false,success:function(d){}});}}}catch(e){}};
					$( document ).ready(_adn_k2);
				}

			}else if(_adn_r.indexOf("daum.net") != -1) {
				var q = _getParameterByName("q", _adn_r);
				if(q){
					var _adn_k=function(){try{/*var q=$('#q').val();*/if(q!=''){q=q.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g,"");q=encodeURIComponent(q);if(q!=''){var u='https://kn.acrosspf.com/adn_k_1.0.2.ad?ad_ids='+across_rb_adn_uid+'&k='+q;$.ajax({type:'get',url:u,data:{todo:"jsonp"},dataType:"jsonp",crossDomain:true,cache:false,success:function(d){}});}}}catch(e){}};
					$( document ).ready(_adn_k);
				}
			}else if(_adn_r.indexOf("nate.com") != -1) {
				var q = _getParameterByName("q", _adn_r);
				if(q){
					var _adn_k=function(){try{/*var q=$('#q').val();*/if(q!=''){q=q.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g,"");q=encodeURIComponent(q);if(q!=''){var u='https://kn.acrosspf.com/adn_k_1.0.2.ad?ad_ids='+across_rb_adn_uid+'&k='+q;$.ajax({type:'get',url:u,data:{todo:"jsonp"},dataType:"jsonp",crossDomain:true,cache:false,success:function(d){}});}}}catch(e){}};
					$( document ).ready(_adn_k);
				}
			}else if(_adn_r.indexOf("google.co.kr") != -1) {
				var q = _getParameterByName("q", _adn_r);
				if(q){
					var _adn_k=function(){try{/*var q=$('#q').val();*/if(q!=''){q=q.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g,"");q=encodeURIComponent(q);if(q!=''){var u='https://kn.acrosspf.com/adn_k_1.0.2.ad?ad_ids='+across_rb_adn_uid+'&k='+q;$.ajax({type:'get',url:u,data:{todo:"jsonp"},dataType:"jsonp",crossDomain:true,cache:false,success:function(d){}});}}}catch(e){}};
					$( document ).ready(_adn_k);
				}
			}else if(_adn_r.indexOf("zum.com") != -1) {
				var q = _getParameterByName("query", _adn_r);
				if(q){
					var _adn_k=function(){try{/*var q=$('#q').val();*/if(q!=''){q=q.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g,"");q=encodeURIComponent(q);if(q!=''){var u='https://kn.acrosspf.com/adn_k_1.0.2.ad?ad_ids='+across_rb_adn_uid+'&k='+q;$.ajax({type:'get',url:u,data:{todo:"jsonp"},dataType:"jsonp",crossDomain:true,cache:false,success:function(d){}});}}}catch(e){}};
					$( document ).ready(_adn_k);
				}
			}
		} catch (exception){}

		across_rb_adn_uid = localStorage.getItem('rb_adn_uid');

		across_rb_adn_uid_status = false;
		try{
			if (typeof(across_rb_adn_uid) === "undefined" || across_rb_adn_uid === null) {
				across_rb_adn_uid = "";
			}
		}catch(e){}

		var c=document.createElement("script");
		c.type="text/javascript";
		c.charset='UTF-8';
		c.defer=true;
		if(c.readyState){c.onreadystatechange=function(){if(c.readyState=="loaded" || c.readyState=="complete"){c.onreadystatechange=null;adn_load_flag=true;tag_param();}}
		}else{c.onload=function(){adn_load_flag=true;tag_param();}}
		c.src='https://kn.acrosspf.com/adn_check_1.0.2.ad?rb_adn_uid='+across_rb_adn_uid;
		document.getElementsByTagName("head")[0].appendChild(c);
		c.onerror=function(){adn_load_flag=false;}


		try{
			jQuery('.cart .cartBtn').click(function(){
				adn_handle_cartbtn();
			});
		}catch(e){}
		try{
			jQuery('#cartBtn').click(function(){
				adn_handle_cartbtn();
			});
		}catch(e){}
		try{
			jQuery('#btn_cart').click(function(){
				adn_handle_cartbtn();
			});
		}catch(e){}
		try{
			jQuery('.btn_add_cart').click(function(){
				adn_handle_cartbtn();
			});
		}catch(e){}


		try{
			document.getElementById('wishBtn').addEventListener('click', adn_handle_wishbtn);
		}catch(e){}

	});

});