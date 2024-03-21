$(function(){
  // cssメソッドでq1セレクタの文字の色を緑に変更
  $('#q1').css('color','green');
  // onメソッドの中でclickイベントを用いる
  $('#q2').on('click',function(){
    // this構文を用いて、クリックされた要素の背景をピンクに変更
    $(this).css('background','pink');
  });
  // onメソッドの中でclickイベントを用いる
  $('#q3').on('click',function(){
    // this構文を用いて、クリックされた要素をフェードアウトメソッドにミリ秒を指定してフェードアウトさせる
    $(this).fadeOut(3000);
  });
  // onメソッドの中でclickイベントを用いる
  $('#q4').on('click',function(){
    // addClassメソッドを用いて、largeクラスを追加する
    $(this).addClass('large');
  });
  // onメソッドの中でclickイベントを用いる
  $('#q5').on('click',function(){
    // prependメソッド→指定した要素の中の一番最初に追加、appendメソッド→指定した要素の中の一番最後に追加
    $(this).prepend("DOMの中の前").append("DOMの中の後")
    // beforeメソッド→指定した要素の上（前）に追加、afterメソッド→指定した要素の下（後ろ）に追加
    .before("DOMの前").after("DOMの後")
  });
  // onメソッドの中でclickイベントを用いる
  $('#q6').on('click',function(){
    // animateメソッドで引数に連想配列を指定して、アニメーションをつける
    $(this).animate({ 'margin-top': 100,
    'margin-left': 100 },
    //秒数はミリ秒を指定
    2000)
  });
  // onメソッドの中でclickイベントを用いる
  $('#q7').on('click',function(){
    // クリックした要素のidをコンソールに表示
    console.log(this);
  });
  // onメソッドの中でhoverイベントを用いる
  $('#q8').on({
    'mouseenter': function(){
      // 第一引数として、マウスを乗せたときにaddClassでlargeクラスを追加
      $(this).addClass('large');
    },
    'mouseleave': function(){
      // 第二引数として、マウスを外したときにremoveClsssでlargeクラスを取り除く
      $(this).removeClass('large');
    }
  });
  // onメソッドの中でclickイベントを用いる
  $('#q9 li').on('click',function(){
    //定数にクリックしたインデックス番号を代入
    const num = $(this).index();
    // アラートにインデックス番号を表示
    alert(num);
  });
  // onメソッドの中でclickイベントを用いる
  $('#q10 li').on('click',function(){
    //定数にクリックしたインデックス番号を代入
    const num2 = $(this).index();
    // q10で取得したインデックス番号と等しいq11のインデックス番号をコンソールに表示
    console.log($('#q11 li').eq(num2));
    // q11のインデックス番号に値する要素にaddClassでlarge-textのクラスを追加
    $('#q11 li').eq(num2).addClass('large-text');
  });
});