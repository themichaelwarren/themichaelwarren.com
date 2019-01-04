  window.onload = function() {
    init()
  };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQHwLPmBd9RBI-lal_bjLhAvtBT0EdBzaGOkuHqwncFA8g4l_umkFjyHKY-yDIzegMP5BMqg270iCyU/pubhtml';

  function init() {
    Tabletop.init({
      key: public_spreadsheet_url,
      callback: showInfo,
      simpleSheet: true
    })
  }

  function showInfo(data, tabletop) {
    var tr;
    for (var i = 0; i < data.length; i++) {
      tr = $('<tr/>');
      tr.append("<td>" + data[i].Date + "</td>");
      tr.append("<td>" + data[i].Artist + "</td>");
      tr.append("<td>" + data[i].Title + "</td>");
      tr.append("<td>" + data[i].YouTube + "</td>");
      $('table').append(tr);
    }
    console.log(data);
  }