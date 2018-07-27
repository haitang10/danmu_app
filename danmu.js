


// acquire the height and wdth of the dm_screen
var height = w('.dm_screen').offsetHeight
var width = w('.dm_screen').offsetWidth

var bt_sub = w('.bt_sub')
var dm_text = w('.dm_text')
var bt_del = w('.bt_del')
var dm_screen = w('.dm_screen')
// 随机获取颜色
var getRandomColor = function() {
        return '#'+((Math.random() * 0x1000000 << 0).toString(16))
    };

bindEvent(bt_sub, 'click', function(event){
  var text = dm_text.value
  dm_text.value = ''
  log(text)
  send(text)
})

//Event 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态。
//事件通常与函数结合使用，函数不会在事件发生前被执行！
// event.target 是触发事件的元素
// 输入完内容后，按enter发送内容
bindEvent(dm_text, 'keypress', function(event){
  if(event.keyCode=='13'){
    var text = dm_text.value
    send(text)
  }
})

bindEvent(bt_del, 'click', function(){
  dm_screen.innerHTML = ''
})

var send = function(text) {

  var t = `
    <div class='dm_screen_content' id='id-${text}'>${text}
    </div>
      `

  appendHtml(dm_screen, t)
  var id = `#id-${text}`
  var content =w(id)
  var content_height = (height-20)*Math.random()
  log('debug 1 contnt',content)
  log('debug2', typeof(content_height),content_height)
  // content.css({
  //   color: getRandomColor(),
  //   top:content_height
  // })
  content.style.color = getRandomColor()
  // content_height 的数据类型是number ，所以要加上 px
  content.style.top = content_height + 'px'


  $('.dm_screen_content').animate({left:"10px"},12000,function(){
    w(this).remove();
});
}
