function createChart() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Graph");
  var range = sheet.getRange("D:E");
  var chart =
    sheet.newChart(
      ).setChartType(
        Charts.ChartType.TIMELINE
      ).addRange(
        range
      ).setPosition(
        1,4,0,0
      ).build();
  //グラフをシートに挿入します
  sheet.insertChart(chart);
}