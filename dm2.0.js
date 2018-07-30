// 利用jQuery 重构，变化不大
  $(document).ready(function(){
      var width = $(".dm_screen").width()
      var height = $(".dm_screen").height()



      var send = function() {
          var text = $('.dm_text').val()
          $(".dm_text").val("")

          var t = `<div class='dm_screen_content' id='id-${text}'>${text}</div>`
          $('.dm_screen').append(t)


          var id = `#id-${text}`
          var dm_content =$(id)
          var dm_height = (height-20)*Math.random()
          log('debug 1 contnt',dm_content)
          log('debug2', typeof(dm_height),dm_height)
          // 先把弹幕内容append 到html 中，再设置css属性
          dm_content.css({
              top:dm_height,
              color:getRandomColor()
          });

          dm_content.animate({left:"20px"},10000,function(){
              $(this).remove();
          });

      }
      var getRandomColor = function() {
          return '#'+((Math.random() * 0x1000000 << 0).toString(16))
      }

      $(".dm_text").keypress(function(event){
           if (event.keyCode == "13") {
               $(".bt_sub").trigger('click');
           }
      })

      $(".bt_sub").click(function(){
          send();
      })

      $(".bt_del").click(function(){
          $(".dm_screen").empty()
      })
  })
