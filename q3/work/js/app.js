$(function(){
  // drawer_buttonクラス（右上のボタン）にクリックイベントを用いる
  $('.drawer_button').click(function(){
    // toggleClassメソッドでactiveを指定することで、✕のボタンが表示・非表示される
    $(this).toggleClass('active');
    // drawer_bgクラスにfadeClassメソッド指定することで、画面がフェードアウト・インする
    $('.drawer_bg').fadeToggle();
    // navセレクタにtoggleClassメソッドでopenを指定することで、メニューが表示・非表示される
    $('nav').toggleClass('open');
  });
  // drawer_bg（メニューが表示されている時の画面）クラスにクリックイベントを用いる
  $('.drawer_bg').click(function(){
    // hideメソッドで画面を隠す
    $(this).hide();
    // drawer_buttonクラスからremoveClassメソッドでactiveクラスを取り除くことで、✕のボタンが消える
    $('.drawer_button').removeClass('active');
    // navセレクタからremoveClassメソッドでopenクラスを取り除くことで、メニューが消える
    $('nav').removeClass('open');
  });
});