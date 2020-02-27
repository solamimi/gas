// UnUsed!!
function overwriteUserList() {

  /**
  // スプレッドシートの情報を取得する
  // https://qiita.com/kobaboy/items/610263087d9c85d8458e
  **/

  //スプレッドシートのID　→「https://docs.google.com/spreadsheets/d/△△△/edit#gid=0」の△△△を↓に記述
  var sheet = SpreadsheetApp.openById('15uqxj5YSYxbc-wK7hi-b65GrrT9n-0eJ8hNXfhBsiqE').getSheetByName('Users');

  // B行の2行目からコンテンツをもつ最後の行までの値を配列で取得する
  var colB = sheet.getRange(2, 2, sheet.getLastRow() - 1).getValues();

  /**
  // Googleフォームのプルダウン内の値を上書きする
  // 
  **/

  // GoogleフォームのIDを設定　→「https://docs.google.com/forms/d/〇〇〇/edit」の〇〇〇を↓に記述
  var form = FormApp.openById('1qgtAWxTGo0El1KxqOkM8SLSlSY2Bz8MsR-3fpsRNcOg');

  // 質問項目がプルダウンのもののみ取得
  var items = form.getItems(FormApp.ItemType.LIST);

  items.forEach(function(item){
    // 質問項目が「対象利用者」を含むものに対して、スプレッドシートの内容を反映する
    if(item.getTitle().match(/対象利用者.*$/)){
      var listItemQuestion = item.asListItem();
      var choices = [];

      colB.forEach(function(name){
        if(name != ""){
          choices.push(listItemQuestion.createChoice(name));
        }
      });

      // プルダウンの選択肢を上書きする
      listItemQuestion.setChoices(choices);
    }
  });

}
