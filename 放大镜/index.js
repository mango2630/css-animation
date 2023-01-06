window.onload = function(){
    var event = document.getElementsByClassName('event')[0];
    console.log(event);

    event.addEventListener("mousemove", function (e) {
        // e: 鼠标
        // 让鼠标始终在 mask 中心
        
        let mask = document.getElementsByClassName("mask")[0];
        let big = document.getElementsByClassName("bigger")[0];
        // mask.offsetWidth -- 320
        
        let left = e.offsetX - mask.offsetWidth / 2;
        let top = e.offsetY - mask.offsetHeight / 2;

        // 约束范围
        if(left <= 0) left = 0;
        if(left >= mask.offsetWidth) left = mask.offsetWidth;
        if(top <= 0) top = 0;
        if(top >= mask.offsetHeight) top = mask.offsetHeight;

        //修改元素的left|top属性值
        mask.style.left = left+'px';
        mask.style.top = top+'px';
        big.style.left = - 2 * left+'px';
        big.style.top = -2 * top +'px';
    })
    
}