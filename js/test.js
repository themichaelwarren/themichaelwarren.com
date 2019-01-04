  window.onload = function() {
    init()
  };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1AcAVPfsCuwicfgaT8LPd6bDScRJrCd0ryJncYmWFvpk/pubhtml';

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
      tr.append("<td>" + data[i].Destinations + "</td>");
      tr.append("<td>" + data[i].Hospitality + "</td>");
      tr.append("<td>" + data[i].Taxi + "</td>");
            tr.append("<td>" + data[i].Hotel + "</td>");
            tr.append("<td>" + data[i].ThankYou + "</td>");
      $('table').append(tr);
    }
    console.log(data);
  }