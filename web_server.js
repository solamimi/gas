function doGet(){
  return HtmlService.createTemplateFromFile("index").evaluate();
}

//クライアントにわたすデータの作成
function setVueDatas() {
  var keyword_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Keywords");
  var words = keyword_sheet.getRange("A:A").getValues().flat();
  // ヘッダー削除
  words.shift();

  var user_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Users");
  var user_matrix = user_sheet.getRange("A:B").getValues();
  // ヘッダー削除
  user_matrix.shift();
  var user_obj = []
  for (let i = 0; i < user_matrix.length; i++) {
    user_obj.push(
      {
        id: user_matrix[i][0],
        name: user_matrix[i][1]
      }
    );
  }


  data = {
    riyoushas: user_obj,
    listen_words: words
  };
  return data;
}
