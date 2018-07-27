这是一个弹幕app
先用原生js实现，再用jQuery实现
页面很简单，一个弹幕框，一个输入框，一个发射按钮和清屏按钮
要实现的功能： 1，输入框输入内容点击发射，内容在弹幕墙出现，
             2，点击清屏，弹幕墙所有内容消失
             3，弹幕内容颜色随机，在弹幕墙的位置随机

点击发送弹幕，就会将输入的值保存进一个数组里，并且将当前输入的在弹幕显示框显示出来，
同时后台也一直从该数组中每隔一段时间随机抽取一条记录显示出来。
点击清屏弹幕会清空弹幕墙并且停止后台的读取，同时将按钮上的字变成启动弹幕。
而在弹幕墙关闭的时候点击发送弹幕，也会启动弹幕墙。
具体步骤：1，给发射按钮和清屏按钮绑定事件，调用send函数和empty函数


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
