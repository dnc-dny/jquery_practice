$(function(){
  // navクラスのliセレクタにクリックイベントを用いる
  $('.nav li').click(function(){
    // navクラスのliセレクタの、クリックした要素のインデックス番号を変数に代入
    const num = $('.nav li').index(this);
    // descriptionクラスのliセレクタに、is-hiddenクラスを追加して、表示されている要素を非表示にする
    $('.description li').addClass('.is-hidden');
    // descriptionクラスのliセレクタに、navクラスのliセレクタのクリックしたインデックス番号と
    // 同じインデックス番号からis-hiddenクラスを取り除くことで、表示させる
    $('.description li').eq(num).removeClass('.is-hidden');
  });
});