var box = document.getElementsByClassName('wrap')[0];
function init() {

  //盒子宽度
  var width = box.offsetWidth;
  // 计算格子数
  var count = parseInt(width / 50 * 5);
  for (var i = 0; i < count; i++) {
    // 随机尺寸
    var size = parseInt(ran(60, 120) / 10);
    //爱心div
    var ele = document.createElement('div');
    ele.classList.add('item');
    ele.style.width = size + 'px';
    ele.style.height = size + 'px';
    ele.style.left = ran(0, 95) + '%';
    ele.style.top = ran(20, 80) + '%';
    ele.style.animationDelay = ran(0, 30) / 10 + 's';
    box.appendChild(ele);
  }
}
function ran(min, max) {
  min = parseInt(min);
  max = parseInt(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

init();