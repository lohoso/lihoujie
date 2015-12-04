window.onload=function(){
	var articleAd=document.getElementById("article-ad");
	var divs=articleAd.getElementsByTagName("div");
	var ol=articleAd.getElementsByTagName("ol")[0];//获得articleAd下面的ol元素
	var lis=ol.getElementsByTagName("li");
	var article=document.getElementsByTagName("article")[0];//获得页面中的article元素，当轮播到相应广告时改变其背景颜色
	var i=0;//默然第一张图片显示
	var color="";
	function step(){
		divs[i].removeAttribute("class");//轮播之前，移除第一张默认的图片
		lis[i].removeAttribute("class");//当轮播到相应的广告时，改变对应ol下面的li的样式------移除class属性
		i++;
		i==5&&(i=0);
		if(divs[i].setAttribute&&lis[i].setAttribute){//其他浏览器
			divs[i].setAttribute("class","show");//轮播广告
			lis[i].setAttribute("class","current");//当轮播到相应的广告时，改变对应ol下面的li的样式------添加class属性值为current的样式
		}else{//兼容ie浏览器
			divs[i].attributes["class"]="show";
			lis[i].attributes["class"]="current";
		}
		switch(i){//当轮播到相应广告时改变article的背景颜色
			case 0:color="#9401ff";break;
			case 1:color="#dbdbdb";break;
			case 2:color="#e0e0e0";break;
			case 3:color="#e2482e";break;
			case 4:color="#e93263";break;
		}
		article.style.background=color;
	}
	var timer=setInterval(step,2000);
	ol.onmouseover=function(){
		clearInterval(timer);
		timer=null;
	}
	ol.onmouseout=function(){
		timer=setInterval(step,2000);
	}
	for(var j=0;j<lis.length;j++){
		lis[j].addEventListener("mouseover",change,false);
		lis[j].addEventListener("mouseout",moveout,false);
	}
	function change(){
		for(var i=0;i<lis.length;i++){//检查每个li如果有current样式，则移除
			if(lis[i].hasAttribute("class")){
				lis[i].removeAttribute("class");
			}
			if(divs[i].hasAttribute("class")){
				divs[i].removeAttribute("class");
			}
		}
		if(this.setAttribute){
			this.setAttribute("class","current");
		}else{
			this.attributes["class"]="current";
		}
		var n=this.innerHTML;
		switch(n-1){
			case 0:color="#9401ff";break;
			case 1:color="#dbdbdb";break;
			case 2:color="#e0e0e0";break;
			case 3:color="#e2482e";break;
			case 4:color="#e93263";break;
		}
		article.style.background=color;
		if(divs[n-1].setAttribute){
			divs[n-1].setAttribute("class","show");
		}else{
			divs[n-1].attributes["class"]="show";
		}
	}
	function moveout(){
		this.removeAttribute("class");
	}
}
