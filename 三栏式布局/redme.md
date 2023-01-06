## 三栏式布局

> 左右两列定宽，中间自适应

### 1. 浮动 + margin
~~~ html
<div class="container">
    <div class="left"></div>
    <div class="right"></div>
    <div class="main"></div>
</div>
~~~
~~~ css
.container{
    width: 100%;
    border:2px solid black;
}
.left{
    width: 300px;
    height: 300px;
    background-color: gold;
    float: left;
}
.right{
    width: 400px;
    height: 400px;
    background-color: goldenrod;
    float: right;
}
.main{
    background-color: green;
    height: 600px;
    margin-left: 300px;
    margin-right: 400px;
}
~~~

### 2. 浮动 + BFC
~~~ css
.container{
    width: 100%;
    border:2px solid black;
}
.left{
    width: 300px;
    height: 300px;
    background-color: gold;
    float: left;
}
.right{
    width: 400px;
    height: 400px;
    background-color: goldenrod;
    float: right;
}
.main{
    background-color: green;
    height: 600px;
    overflow: hidden;
}
~~~
### 3. flex
~~~ css
.container{
    width: 100%;
    border:2px solid black;
    display: flex;
}
.left{
    width: 300px;
    height: 300px;
    background-color: gold;
    float: left;
}
.right{
    width: 400px;
    height: 400px;
    background-color: goldenrod;
    float: right;
}
.main{
    background-color: green;
    height: 600px;
    flex: 1;
}
~~~
~~~ html
<div class="container">
    <div class="left"></div>
    <div class="main"></div>
    <div class="right"></div>
</div>
~~~
### 4. tab布局

### 5. 定位实现
~~~ css
.container{
            width: 100%;
    border:2px solid black;
    position: relative;
}
.left{
    width: 200px;
    height: 300px;
    background-color: gold;
    position: absolute;
    left: 0;
}
.right{
    width: 200px;
    height: 400px;
    background-color: goldenrod;
    position: absolute;
    right: 0;
}
.main{
    background-color: green;
    height: 600px;
    margin-left: 200px;
    margin-right: 200px;
}
~~~
### 6. 圣杯布局


### 7. 双飞翼布局

