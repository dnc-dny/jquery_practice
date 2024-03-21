$(function(){
  // select-boxクラスにonメソッドを用いてchangeイベントを指定する
  // →クリックすると何らかのイベント処理が実行される
  $('.select-box').on('change',function(){
    // クリックしたvalue属性を取得し、定数に代入
    const value = $(this).val();
    // food-listクラスの子要素を、定数に代入
    const list = $('.food-list li');
    // value属性がallの場合はfood-listクラスの子要素を全て表示する
    'all' === value ? list.show() :
    // value属性がallで無い場合に、food-listクラスの子要素を対象にeachメソッドで繰り返し処理を実行する
    // e→イベントオブジェクト（クリックした要素を取得）、text→food-listクラスの子要素のテキスト
    $.each(list, function(e, text){
      // food-listクラスの子要素のテキストの属性を、定数に代入
      const type = $(text).data('category-type');
      // クリックしたvalue属性とfood-listクラスの子要素テキストの属性が一致した場合はテキストを表示
      value === type ? $(text).show() :
      // 一致しなかった場合はテキストを隠す
      $(text).hide();
    });
  });
});