# 两栏式布局
- 左列定宽，右列自适应
- 左列不定宽，右列自适应

## 1. 左列定宽，右列自适应

~~~ html
<div class="container">
    <div class="left">定宽左部分</div>
    <div class="right">自适应右部分</div>
</div>
~~~

### 方法一：浮动 + `margin`
~~~ css
.container{
    width: 70%;
    border: 2px solid red;
}
.left{
    width: 300px;
    background-color: rgba(217, 255, 0, 0.815);
    height: 300px;
    float: left;
}
.right{
    background-color: rgba(137, 43, 226, 0.952);
    height: 500px;
    /* 未加margin之前为假的两栏式布局 */
    margin-left: 300px;
}
~~~

### 方法二：浮动 + BFC

~~~ css
.container{
    width: 70%;
    border: 2px solid red;
}
.left{
    width: 300px;
    background-color: rgba(217, 255, 0, 0.815);
    height: 300px;
    float: left;
}
.right{
    background-color: rgba(137, 43, 226, 0.952);
    height: 500px;
    /* 触发BFC：环绕浮动元素！ */
    overflow: hidden;
}
~~~

### 方法三：定位
~~~ css
.container{
    width: 70%;
    border: 2px solid red;
    /* 相对定位：相对自己原本位置！ */
    position: relative;
}
.left{
    width: 300px;
    background-color: rgba(217, 255, 0, 0.815);
    height: 300px;
    /* 设置绝对定位 */
    position: absolute;
    left: 0px;
}
.right{
    background-color: rgba(137, 43, 226, 0.952);
    height: 500px;

    /* way1: */
    /* margin-left: 300px; */


    /* way2: [需要清除浮动]*/
    position: absolute;
    left: 300px;
    right: 0;
}
~~~

### 方法四：flex 布局
~~~ css
.container{
    width: 70%;
    border: 2px solid red;
    display: flex;
}
.left{
    width: 300px;
    background-color: rgba(217, 255, 0, 0.815);
    height: 300px;
}
.right{
    background-color: rgba(137, 43, 226, 0.952);
    height: 500px;
    /* flex:1; 填充容器剩余空间，达到自适应 */
    flex: 1;
}
~~~

### 方法五：浮动 + 父外边距
~~~ css
 .container{
    width: 70%;
    border: 2px solid red;
}
/* 清除浮动 */
.container::after{
    display: block;
    content: '';
    clear: both;
}
.left{
    width: 300px;
    height: 300px;
    background-color: yellow;
    float: left;
    margin-right: -100%;
}
.right{
    width: 100%;
    height: 500px;
    float: left;
}
.content{
    height: 100%;
    background-color: green;
    margin-left: 300px;
}
~~~

### 方法六：浮动布局
~~~ css
.container{
    width: 70%;
    border: 2px solid black;
    display: table;
}
.left{
    width: 300px;
    height: 300px;
    /* 平分整个父元素的width */
    display: table-cell;
    background-color: yellow;
}
.right{
    display: table-cell;
    height: 500px;
    background-color: blue;
}
~~~

## 2. 左列不定宽，右列自适应

### 方法一：flex

~~~ css
.container{
    width: 70%;
    border: 2px solid black;
    display: flex;
}
.left{
    width: 300px;
    height: 300px;
    background-color: yellow;
}
.right{
    flex: 1;
    height: 500px;
    background-color: blue;
}
~~~

### 方法二：浮动 + BFC

~~~ css
.container{
    width: 70%;
    border: 2px solid black;
}
.left{
    width: 300px;
    height: 300px;
    background-color: yellow;
    float: left;
}
.right{
    height: 500px;
    background-color: blue;
    overflow: hidden;
}
~~~