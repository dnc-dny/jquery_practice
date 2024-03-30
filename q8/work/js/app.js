$(function () {
  // 通信が成功した際の関数
  function result(event) {
    // messageクラスを取り除き、メッセージを削除
    $(".message").remove();
    // responseの変数宣言
    var response;
    // 入力した値の結果が空の状態が1以上であると、undefinedを返し、そうでない場合は検索結果の数を表示する場合
    if (0 < null === (response = event[0].items) ? void 0 : response.length) {
      // 上記一致する場合は入力した値を対象に繰り返し処理を実行
      $.each(event[0].items, function (a,create) {
        // HTMLを追加し、定数に代入
        const text =
          '<li class="lists-item"><div class="list-inner"><p>タイトル：' +
          // タイトルが一致ならそのタイトルを、一致しなかったら文言を追加
          ((create.title ? create.title : "タイトルなし") + "</p><p>作者：") +
          // 作者が一致ならその作者を、一致しなかったら文言を追加
          ((create["dc:creator"] ? create["dc:creator"] : "作者なし") +
            "</p><p>出版社：") +
          // 出版社が一致ならその出版社を、一致しなかったら文言を追加
          ((create["dc:publisher"] ? create["dc:publisher"][0] : "出版社なし") +
            '</p><a href="') +
          // リクエストされたURIにリンクを追加
          (create["@id"] + '" target="_blank">書籍情報</a></div></li>');
        // listsクラスに定数textのHTML要素を追加
        $(".lists").prepend(text);
      });
    } else {
      // 条件に該当しない場合はlistsクラスの前に文言を追加
      $(".lists").before(
        '<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>'
      );
    }
  };
  // 通信が失敗した際の関数
  function error(response) {
    // listsクラスの子要素を削除する
    $(".lists").empty();
    // メッセージクラスを取り除いてメッセージを削除する
    $(".message").remove();
    // レスポンス内容が0だった場合、listsクラスの前にメッセージを追加
    if (response.status === 0) {
      $(".lists").before(
        '<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>'
      );
    } else if (response.status === 400) {
      // レスポンス内容が0ではなく400の場合、listsクラスの前にメッセージを追加
      $(".lists").before(
        '<div class="message">検索結果が多数見つかりました。<br>別のキーワードで検索して下さい。</div>'
      );
    } else {
      // レスポンス内容が0でも400でも無い場合、listsクラスの前にメッセージを追加
      $(".lists").before(
        '<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>'
      );
    }
  };
  // ページ数の初期値が1 の情報を定数に代入
  let pageCount = 1;
  // 検索結果に表示される書籍 の情報を空にして定数に代入
  const book = "";
  // 検索ボタンにonメソッドを用いてclickイベントを指定する
  $(".search-btn").on("click", function () {
    // 検索ボックスに入力した値を取得し、定数に代入
    const searchWord = $("#search-input").val();
    // 検索ボックスに入力した値が違う検索ワードの場合は、ページ数を1に戻し、listsの子要素を削除
    if (searchWord !== book) {
      pageCount = 1;
      $(".lists").empty();
    } else {
      // 同じ検索ワードで検索を行う場合はページ数に1を足す
      pageCount++;
    }
    // Ajaxの実行
    $.ajax({
      url: `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
      method: "GET", // 通信成功したときの処理
    })
    .done(function (response) {
      // レスポンス内容を引数に指定し、関数resultの呼び出し
      result(response["@graph"]);
    })
    .fail(function (response) {
      // 通信失敗したときの処理
      error(response); // レスポンス内容を引数に指定し、関数errorの呼び出し
    });
  });
  $(".reset-btn").on("click", function () {
    // リセットボタンにonメソッドを用いてclickイベントを指定する
    // listsクラスの子要素を削除する
    $(".lists").empty();
    // messageクラスを取り除いて表示されているメッセージを消す
    $(".message").remove();
    // search-inputに入力された値を空にする
    $("#search-input").val("");
  });
});
