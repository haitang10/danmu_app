---
title: 一个简单的弹幕墙
tags:
  - jQuery
  - 野狗云

date: 2018-10-06 19:44:17
categories: 项目
password:
---
这是一个弹幕app
先用原生js实现，再用jQuery实现,最后增加云端数据保存提取功能。
预览地址：
[http://haitang10.top/danmu_app/](http://haitang10.top/danmu_app/)

![](https://haitang10-blog.oss-cn-beijing.aliyuncs.com/%E5%BC%B9%E5%B9%95.JPG)


<!-- more -->

页面很简单，一个弹幕框，一个输入框，一个发射按钮和清屏按钮
要实现的功能：
            1. 输入框输入内容点击发射，内容在弹幕墙出现高度随机。
            2. 点击清屏，弹幕墙所有内容消失
            3. 弹幕内容颜色随机，在弹幕墙的位置随机，并且向左端移动，消失。
             （1.0 和 2.0 版本 弹幕从最右端出现）
1.0 和 2.0 版本具体步骤：：
            1. 给发射按钮和清屏按钮绑定事件，调用send函数和empty函数
            2. send 函数把输入框内容发送到弹幕墙里面，颜色随机，高度随机。

3.0 版本 功能更新：
            新增两个保存数据的变量，一个空数组 arry, 一个野狗云后台对象 ref.message
            点击发送弹幕，就会将输入的值保存进云端对象 ref.message 里，
            监听云端数据，ref.message 发生变化， 弹幕墙里的数据也发生变化。
            （主要是新增弹幕）
            同时后台也一直从 ref.message 中每隔一段时间随机抽取一条弹幕显示出来。
3.0 版本 具体步骤：
                1. 新建空数组 arry 和对象 ref
                2. 点击sub 按钮把数据提交到野狗云 ref.message
                3. 响应键盘enter 键和 del 按钮时间，点击del 清空ref 和arr,  以及弹幕墙内容。
                4. 监听云端数据变化，ref.message 新增数据节点后，获取数据，添加到arr中，
                  并向dm_screen 中append 弹幕内容，同时调用 moveOBj 函数，完成增加css 功能。
                5. 随机从云端获取数据添加到弹幕墙。
                （此功能为间接实现，在4 中，arr 和ref.message 始终保持一致。 ）
//1.0版本为原生js,2.0版本为jQu


// 1,onclick and click , onclick is event,while click is a method

//2, Event 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态。
//  事件通常与函数结合使用，函数不会在事件发生前被执行！
//  event.target 是触发事件的元素

// 键盘输入enter 触发发射按钮
// w(".s_txt").keypress(function(event) {
//   if (event.keyCode == "13") {
//     $(".s_sub").trigger('click');
//   }
// });



参考资料：