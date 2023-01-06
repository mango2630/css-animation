// 获取元素对应的属性值
function getStyle(obj,attr){ 
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr]; 
} 

// 获取伪类元素的属性值
function getWeiLei(obj, weilei, attr) {
    return getComputedStyle(obj, weilei).getPropertyValue(attr)
}
// 修改伪类元素的属性值
function setWeiLei(obj, weilei, attr, value) {
    
}

// 保留几位有效数字
function valid(num, n){
    return Math.round(num*10**n)/10**n;
}

function randomInt(min, max){
    var little = Math.min(min,max);
    var big = Math.max(min,max);

    return Math.round(Math.random()*(big-little))+little;
}

// 封装的动画库
function doMove(obj, option, time = 300, endFn = function(){
    // alert("执行完了！")
    console.log("执行完啦");
}){
    var arr = [];
    for (item in option) {
        var oj = {};
        oj.attr = item;
        oj.end = option[item];
        oj.start = parseFloat(getStyle(obj, item));
        oj.step = valid((oj.end - oj.start) * 1000 / time / 60, 2);

        arr.push(oj);
    }
    cancelAnimationFrame(obj.timer);
    obj.timer = requestAnimationFrame(function goto() {
        
        for (var i = 0; i < arr.length; i ++) {
            var len = parseFloat(getStyle(obj, arr[i].attr)) + arr[i].step;
            if (len >= arr[i].end && arr[i].step > 0 || len <= arr[i].end && arr[i].step < 0) {
                len = arr[i].end;
            }

            obj.style[arr[i].attr] = (arr[i].attr == "opacity" ? len : len + "px");

        }

        obj.timer = requestAnimationFrame(goto);
        if (len == arr[arr.length - 1].end) {
            cancelAnimationFrame(obj.timer);
            endFn();
        }

        // var stop = 0;
        // for (var i = 0; i < arr.length; i ++) {
        //     if (arr[i].stop) {
        //         stop ++;
        //     }
        // }
        // if (stop == arr.length) {
        //     cancelAnimationFrame(timer);
        //     endFn();
        // }
    })
}

// 返回时间格式
// 参数可写课不写
function timefm(myTime = new Date()){
    // var myTime = t || new Date(); 
    var iYear = myTime.getFullYear(); //获取年 
    var iMonth = myTime.getMonth()+1; //获取月，月份是0-11的数字，需要在结果上+1 
    var iDate = myTime.getDate(); //获取日 
    var iWeek = myTime.getDay(); //获取星期，星期是0-6的数字需要变换一下才能用 
    var weeks = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]; 
    var sWeek = weeks[iWeek]; 
    var iHours = myTime.getHours(); //获取时 
    var iMin = myTime.getMinutes(); //获取分 
    var iSec = myTime.getSeconds(); //获取秒 
    var iMsec = myTime.getMilliseconds(); //获取毫秒

    return tFormat(iYear) +'/'+tFormat(iMonth)+'/'+tFormat(iDate)+' '+sWeek+' '+tFormat(iHours)+':'+tFormat(iMin)+':'+tFormat(iSec); 
}

// 时间前边补零
function tFormat(n){ //个位数前面补0 
    return n < 10 ? "0" + n : "" + n; 
}


// 封装一个函数，返回这个月的天数
// 参数：年，月
function getMouthDay(y, m) {
    // 2020-10-09 0:0:0
    var time = new Date(y + "-" + tFormat(m + 1) + "-01 0:0:0");
    console.log(time.getDate() - 1, time.getMonth() + 1);
    time.setDate(time.getDate() - 1);
    console.log(time.getMonth() + 1, time.getDate());
    return time.getDate()
}

// 通过时间戳获取时间 天-时-分-秒
// 参数为 要求倒计时的时间
function getDate(futureTime){
    var nowDate = new Date();
    var diffTime = Math.round((futureTime.valueOf() - nowDate.valueOf()) / 1000); // 秒数
    var day = Math.floor(diffTime / 86400); //天数
    var hour = Math.floor(diffTime % 86400 / 3600); // 小时数
    var minute = Math.floor(diffTime % 86400 % 3600 / 60);
    var second = Math.floor(diffTime % 60);

    return day + "天" + hour + "：" + minute + "：" + second;
}


// 参照窗口的位置
// 获得obj元素距离窗口水平和垂直距离
function offsetWindow(obj){
    var nowLeft = obj.offsetLeft;
    var nowTop = obj.offsetLeft;

    /* 
        offsetLeft: 不包含父 border
        clientLeft 相当于左边框
    */
    while(obj.offsetParent){
        obj = obj.offsetParent;
        nowLeft += obj.clientLeft + obj.offsetLeft;
        nowTop += obj.clientTop + obj.offsetTop;
    }
    return [nowLeft, nowTop];
}

/* 
    浏览器窗口设置：
    参数 attr， 是获得attr的值；
    参数：attr,value， 设置 attr的值。
*/
function winOption(attr,value){ 
    // 取值
    if(typeof value=='undefined'){ 
        return document.documentElement[attr] || document.body[attr]; 
    } 

    // 返回值
    document.documentElement[attr] = value; 
    document.body[attr] = value; 
} 


/* 兄弟元素节点的相关操作 */
function nextElement(ele){ //封装下一个兄弟节点 
    return ele.nextElementSibling || ele.nextSibling; 
} 
function prevElement(ele){ //封装上一个兄弟节点 
    return ele.previousElementSibling || ele.previousSibling; 
} 
function eleIndexof(ele,index){ //封装(父元素的)第n个兄弟节点 
    return ele.parentNode.children[index]; 
}
// nodeType 去除 空格（空文本 text元素）
// nextAll(之后所有兄弟节点)
function nextAll(obj) {
    var arr = [];
    while (nextElement(obj)) {
        arr.push(nextElement(obj));
        obj = nextElement(obj);
    }
    console.log(arr);
    return arr;
}
// nextAll(oLi);

// preAll(之前所有兄弟节点)
function preAll(obj) {
    var arr = [];
    while(prevElement(obj)) {
        if (prevElement(obj).nodeType == 1) {
            arr.unshift(prevElement(obj));
            
        }  
        obj = prevElement(obj);
    }
    return arr;
}
// preAll(oLi);

// siblingsAll(所有兄弟节点)
function siblingsAll(obj) {
    var arr = [];
    arr = [...preAll(obj), ...nextAll(obj)]
    console.log(arr);
    return arr;
}
// siblingsAll(oLi);