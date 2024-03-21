// API
// const settings = {
//   "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
//   "method": "GET",
// }
// $.ajax(settings).done(function (response) {
//   const result = response['@graph'];
//   displayResult(result)
// }).fail(function (err) {
//   displayError(err)
// });

$(function(){
  function result(event) {
    // messageクラスを取り除き、メッセージを削除
    $(".message").remove();
    // レスポンス内容
    var response;
    // 入力した値が1以上検索結果として存在する
    0 < (null == (response = event[0].items) ? void 0 : response.length) ?
    // 上記一致する場合は入力した値を対象に繰り返し処理を実行
    $.each(event[0].items, function (h, c) {
      // HTMLを追加し、定数に代入
      const text = '<li class="lists-item"><div class="list-inner"><p>タイトル：' +
      // タイトルが一致ならそのタイトルを、一致しなかったら文言を追加
      ((c.title ? c.title : "タイトルなし") + "</p><p>作者：") +
      // 作者が一致ならその作者を、一致しなかったら文言を追加
      ((c["dc:creator"] ? c["dc:creator"] : "作者なし") + "</p><p>出版社") +
      // 出版社が一致ならその出版社を、一致しなかったら文言を追加
      ((c["dc:publisher"] ? c["dc:publisher"][0] : "出版社なし") + '</p><a href="') +
      // リクエストされたURIにリンクを追加
      (c.link["@id"] + '" target="_blank">書籍情報</a></div></li>');
      // listsクラスに変数textのHTML要素を追加
      $(".lists").prepend(text);
    })
    // 一致しない場合は、listsクラスの前に文言を追加
    : $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>')
  }
  // ページ数の初期値が1 の情報を定数に代入
  const pageCount = 1;
  // 検索結果に表示される書籍 の情報を空にして定数に代入
  const book = "";
  // 検索ボタンにonメソッドを用いてclickイベントを指定する
  $(".search-btn").on("click", function () {
    // 検索ボックスに入力した値を取得し、定数に代入
    const searchWord = $("#search-input").val();
    // 検索ボックスに入力した値と書籍の情報が一致しなかった場合は、ページ数は1、listsの子要素を削除
    searchWord !== book ? (pageCount = 1, $(".lists").empty(), book = e) :
    // 一致した場合は、ページ数に1を足す
    pageCount++;
    // Ajaxの実行
    $.ajax({
      url: "https://ci.nii.ac.jp/books/opensearch/search?title=" +
        e + "&format=json&p=" + pageCount + "&count=20", method: "GET"
    // 通信成功したときの処理
    }).done(function (response) {
      // レスポンス内容を引数に指定し、関数resultの呼び出し
      result(response["@graph"])
    // 通信失敗したときの処理
    }).fail(function (response) {
      // listsクラスの子要素を削除する
      $(".lists").empty();
      // メッセージクラスを取り除いてメッセージを削除する
      $(".message").remove();
      // レスポンス内容が0だった場合、listsクラスの前にメッセージを追加
      0 === response.status ? $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>') :
      // レスポンス内容が0ではなく400の場合、listsクラスの前にメッセージを追加
      400 === response.status ? $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>') :
        // レスポンス内容が0でも400でも無い場合、listsクラスの前にメッセージを追加
        $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>')
    });
  });
  // リセットボタンにonメソッドを用いてclickイベントを指定する
  $(".reset-btn").on("click", function () {
    // ページ数は1
    pageCount = 1;
    // 書籍の情報は空にする
    book = "";
    // listsクラスの子要素を削除する
    $(".lists").empty();
    // messageクラスを取り除いて表示されているメッセージを消す
    $(".message").remove();
    // search-inputに入力された値を空にする
    $("#search-input").val("");
  });
});