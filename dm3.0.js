$(document).ready(function() {
  //提示：已经在页面导航部分的Settings中的JavaScript部分引入了wildog.js和jquery.js
  //在www.wildog.com 注册一个账号，创建一个应用，自动生成一个url,替换下边url即可
  var ref = new Wilddog("https://danwu.wilddogio.com/messages");
  var arr = []
  var height = $('.dm_screen').height()

  // 随机获取颜色
  var getRandomColor = function() {
      return '#' + (function(h) {
        return new Array(7 - h.length).join("0") + h
      })((Math.random() * 0x1000000 << 0).toString(16))
    }

  //把数据提交到野狗云
  $(".bt_sub").click(function() {
    var text = $(".dm_text").val();
    ref.child('message').push(text);
    $(".dm_text").val('');
  });

  //响应按键点击事件
  $(".dm_text").keypress(function(event) {
    if (event.keyCode == "13") {
      $(".bt_sub").trigger('click');
    }
  });

  //响应按键清除事件
  $(".bt_del").click(function() {
    ref.remove();
    arr = [];
    $('.dm_screen').empty(); //$('.dm_screen').innerHTML = ''
  });

  //监听云端数据变更，云端数据变化，弹幕框里数据也跟着变化。
  ref.child('message').on('child_added', function(snapshot) {
    var text = snapshot.val();
    arr.push(text) // 保持arr 和云端数据一致
    // 添加弹幕到墙上
    var t = `<div class='dm_screen_content' id='id-${text}'>${text}</div>`
    $('.dm_screen').append(t)

    var id = `#id-${text}`
    var dm_content =$(id)
    moveDm(dm_content)
  });

  // 添加css,并从弹幕墙移除内容
  var moveDm = function(dm) {
    var dm_height = (height-20)*Math.random()
    log('debug 10',dm_height)
    dm.css({
      //left: _left,
      top: dm_height,
      color: getRandomColor()
    })
    var time = 20000 + 10000 * Math.random();
    dm.animate({ left: "5px"}, time, function() {
      dm.remove();
    });
  }


  // 随机从云端获取数据添加到弹幕墙,arr 和云端数据保持一致，
  // 为了不引起冲突，从云端随机添加的dm 取一个新ID
  var i = 0
  var getAndRun = function() {

    if (arr.length > 0) {
        i = i+1
        var n = Math.floor(Math.random() * arr.length + 1) - 1;
        var text = arr[n]
        var t = `<div class='dm_screen_content' id='id-random${i}-${text}'>${text}</div>`
        $('.dm_screen').append(t)

        var id = `#id-random${i}-${text}`
        log('debug id',id)
        var dm_content =$(id)
        moveDm(dm_content)


    }

    setTimeout(getAndRun, 6000)
  }

  jQuery.fx.interval = 50
  getAndRun()

});
