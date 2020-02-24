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


function doPost(e){

//  var sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1n6JuemDoSar0rIGVcvtjcTa-L2Gs6wcolUios5CiWmo/edit#gid=0").getSheetByName("シート1");
//  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Listened");
  var sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/15uqxj5YSYxbc-wK7hi-b65GrrT9n-0eJ8hNXfhBsiqE/edit#gid=0").getSheetByName("Listened");
  var date = new Date();
  var recode_date = e.parameter.date;
  var record_type = e.parameter.type;
  var record_text = e.parameter.text;
  var record_user = e.parameter.user;
  var record_value1 = e.parameter.value1;
  var record_value2 = e.parameter.value2;
  var record_value3 = e.parameter.value3;
  var record_value4 = e.parameter.value4;


  var array = [recode_date, record_user, record_type, record_type + " " + record_text, record_value1, record_value2, record_value3, record_value4, date];
  sheet.appendRow(array);
    
  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(JSON.stringify({ message: "success!" }));
 
  return output;  

}
