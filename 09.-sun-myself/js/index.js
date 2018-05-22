var box = my$('box');
var screen = box.children[0];
var ul = screen.children[0];
var ol = screen.children[1];
var arr = my$('arr');
var arrLeft = my$('left');
var arrRight = my$('right');
var imgWidth = screen.offsetWidth;
var count = ul.children.length;
for(var i = 0; i < count; i++) {
    var li = document.createElement('li');
    ol.appendChild(li);
    setInnerText(li, i + 1);
    li.onclick = liClick;
    li.setAttribute('index', i);
}
function liClick() {
    for (var i = 0; i < ol.children.length; i++) {
        var li = ol.children[i];
        li.className = '';
    }
    this.className = 'current';
    var liIndex = parseInt(this.getAttribute('index'));
    animate(ul, -liIndex * imgWidth);
    index = liIndex;
}
ol.children[0].className = 'current';
box.onmouseenter = function () {
    arr.style.display = 'block';
    clearInterval(timerId);
}
box.onmouseleave = function () {
    arr.style.display = 'none';
    timerId = setInterval(function () {
        arrRight.click();
    }, 2000);
}
var index = 0;
arrRight.onclick = function () {
    if (index === count) {
        ul.style.left = '0px';
        index = 0;
    }
    index++;
    if (index < count) {
        ol.children[index].click();
    }else {
        animate(ul, -index * imgWidth);
        for (var i = 0; i < ol.children.length; i++) {
            var li = ol.children[i];
            li.className = '';
        }
        ol.children[0].className = 'current';
    }
}
arrLeft.onclick = function () {
    if (index === 0) {
        index = count;
        ul.style.left = -index * imgWidth + 'px';
    }
    index--;
    ol.children[index].click();
}
var firstLi = ul.children[0];
var cloneLi = firstLi.cloneNode(true);
ul.appendChild(cloneLi);
var timerId = setInterval(function () {
    arrRight.click();
}, 2000);