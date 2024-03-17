$(function(){
  // modal_open_buttonセレクタにクリックイベントを用いる
  $('.modal_open_button').click(function(){
    // modal_winセレクタにfadeInメソッドを指定→modal_open_buttonをクリックしたら、modal_winがフェードイン
    $('.modal_win').fadeIn();
  });
  // modal_close_buttonセレクタにクリックイベントを用いる
  $('.modal_close_button').click(function(){
    // modal_winセレクタにfadeOutメソッドを指定→modal_close_buttonをクリックしたら、modal_winがフェードアウト
    $('.modal_win').fadeOut();
  });
});
