var closure = document.getElementById("closure");
var ulBox = closure.children[0];
var lis = ulBox.children;
var olBox = closure.children[1];
var olLis = olBox.children;
var arrow = document.getElementById("arrow");
var clickLeft = document.getElementById("clickLeft");
var clickRight = document.getElementById("clickRight");
var num = 0;
var timer = null;
// 1.0 给ol里面的li注册事件
 for (var i = 0; i < olLis.length; i++) {
 	olLis[i].index = i
 	olLis[i].onclick = function() {
 		autoPlay(this, lis[this.index]);
 		num = this.index;
 	}
 }
 // 2.0 鼠标经过大盒子，显示左右箭头
 closure.onmouseenter = function() {
 	clearInterval(timer)
	arrow.style = "display: block;";
 }
 closure.onmouseleave = function() {
	arrow.style = "display: none;";
	timer = setInterval(clickRight.onclick, 1500)
 }
  // 3.0 点击右箭头
  clickRight.onclick = function() {
  	num++;
  	if(num > lis.length - 1) {
  		num = 0;
  	}
  	autoPlay(olLis[num], lis[num]);
  }
  clickLeft.onclick = function() {
  	num--;
  	if(num < 0) {
  		num = lis.length - 1;
  	}
  	autoPlay(olLis[num], lis[num]);
  }
  function autoPlay(obj1, obj2) {
  	// 排他思想， 先去掉所有人的样式
 	for (var i = 0; i < olLis.length; i++) {
 		olLis[i].removeAttribute("class");
 		animate(lis[i], {
 			"opacity" : 0
 		})
 	}
 	// 再单独给自己设置样式
 	obj1.className = "active";
 	animate(obj2, {
 			"opacity" : 1
 		})
  }
  // 4.0 设置自动轮播
  timer = setInterval(clickRight.onclick, 1500)