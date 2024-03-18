$(function(){
  // dropdwnクラスのliセレクタにhoverイベントを用いる
  $('.dropdwn li').hover(
    // hoverイベントの第一引数として、マウスを乗せたときの動作を指定
    function(){
      // マウスを乗せたセレクタの一階層下の子要素に対して、現在実行している動作を停止させ、
      // slideDownメソッドで上から下へ表示する
      $(this).children('ul').stop().slideDown();
    },
    // hoverイベントの第二引数として、マウスを外したときの動作を指定
    function(){
      // マウスを乗せたセレクタの一階層下の子要素に対して、現在実行している動作を停止させ、
      // slideUpメソッドで下から上へ非表示にする
      $(this).children('ul').stop().slideUp();
    }
  );
});