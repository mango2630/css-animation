
// 获取元素
/* 我就是个憨批！！！ */
let box = document.getElementsByClassName('box')[0];
let main = document.getElementsByClassName('main');
let imgs = document.querySelectorAll('.main > img')
let last = document.querySelector('.last')
let next = document.querySelector('.next')
let nums = document.querySelectorAll('.circle > ol > li')

// 初始化变量
let index = 0;
let timer;

play()

// 自动播放
function play(){
    timer = setInterval(autoPlay, 2000);
}

// 停止自动播放
box.onmouseover = function () { 
    clearInterval(timer);
}


// 开启自动播放
box.onmouseleave = function () {  
    timer = setInterval(autoPlay, 2000);
}

// next
next.onclick = function(){
    let classIndex;
    imgs.forEach((item, id) => {
        if(item.className){
            classIndex = id;
        }
    })
    if(classIndex < imgs.length-1){
        changePic(classIndex + 1)
    }else {
        classIndex = 0;
        changePic(classIndex)
    }
}

// last
last.onclick = function(){
    let classIndex;
    imgs.forEach((item, id) => {
        if(item.className){
            classIndex = id;
        }
    })
    if(classIndex > 0){
        changePic(classIndex - 1)
    }else {
        classIndex = imgs.length - 1;
        changePic(classIndex)
    }
}

// 遍历所有数字导航实现划过切换至对应图片
for(let i = 0; i < nums.length; i ++){
    nums[i].onclick = function(){
        changePic(i)
    }
}


// 自动播放函数
function autoPlay(){
    if(++index >= imgs.length){
        index = 0;
    }
    changePic(index)
}

// 定义图片切换函数
function changePic(curIndex) {
    for(let i = 0; i < imgs.length; i ++){
        imgs[i].className = '';
        nums[i].className = '';
    }
    imgs[curIndex].className = 'current';
    nums[curIndex].className = 'current'
}

