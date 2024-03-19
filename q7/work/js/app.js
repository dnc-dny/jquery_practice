$(function(){
  // btn__submitクラスにonメソッドを用いてclickイベントを指定する
  $('.btn__submit').on('click',function(){
    // 項目名をコンソールに表示
    console.log("名字");
    // family__nameに入力した値をコンソールに表示
    console.log($("#family__name").val());
    // 項目名をコンソールに表示
    console.log("名前");
    // given__nameに入力した値をコンソールに表示
    console.log($("#given__name").val());
    // 項目名をコンソールに表示
    console.log("生年月日");
    // year,month,dayで選択した値と、「年」「月」「日」を合体したものをコンソールに表示
    console.log($(".year").val() + "年" + $(".month").val() + "月" + $(".day").val() + "日");
    // 項目名をコンソールに表示
    console.log("性別");
    // genderのnameが付いた要素を対象に、選択した値をコンソールに表示
    console.log($('input[name="gender"]:checked').val());
    // 項目名をコンソールに表示
    console.log("職業");
    // occupationで選択した値をコンソールに表示
    console.log($(".occupation").val());
    // 項目名をコンソールに表示
    console.log("アカウント名");
    // account__nameに入力した値をコンソールに表示
    console.log($("#account__name").val());
    // 項目名をコンソールに表示
    console.log("メールアドレス");
    // emailに入力した値をコンソールに表示
    console.log($("#email").val());
    // 項目名をコンソールに表示
    console.log("パスワード");
    // passwordに入力した値をコンソールに表示
    console.log($("#password").val());
    // 項目名をコンソールに表示
    console.log("確認用パスワード");
    // duplication__passwordに入力した値をコンソールに表示
    console.log($("#duplication__password").val());
    // 項目名をコンソールに表示
    console.log("住所");
    // addressに入力した値をコンソールに表示
    console.log($("#address").val());
    // 項目名をコンソールに表示
    console.log("電話番号");
    // telに入力した値をコンソールに表示
    console.log($("#tel").val());
    // 項目名をコンソールに表示
    console.log("購読情報");
    // subscriptionのnameが付いた要素を対象に、選択した値をコンソールに表示
    console.log($('input[name="subscription"]:checked').val());
  });
});