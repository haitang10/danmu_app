
  $(document).ready(function(){
  var width = $(".dm_screen").width();
  var height = $(".dm_screen").height();
  var getRandomColor = function() {
      return '#'+((Math.random() * 0x1000000 << 0).toString(16))
  };
  var send = function() {
      var content = $('dm_text').val();
      $(".dm_text").val("");
      var dm = $('<div class="dm_screen_content">'+content+'</div>');
      dm_height = (height-20)*Math.random()
      dm.css({
          top:dm_height,
          color:getRandomColor()
      });
      $(".dm_screen").append(dm);
      dm.animate({left:"20px"},10000,function(){
          $(this).remove();
      });
  }
  $(".dm_text").keypress(function(event){
       if (event.keyCode == "13") {
           $(".bt_sub").trigger('click');
       }
  });
  $(".bt_sub").click(function(){
      send();
  });
  $(".bt_del").click(function(){
      $(".dm_screen").empty();
  });
