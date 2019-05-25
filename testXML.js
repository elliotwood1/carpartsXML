$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "carpartsfeedawin.xml",
    // url: "http://www.affiliatewindow.com/DTD/affiliate/datafeed.1.5.dtd",
    dataType: "xml",
    success: parseXml
  });
});

function parseXml(xml) {
  $("#container").html(
    "<ul id='content' data-role='listview' data-inset='true'></ul>"
  );
  $(xml)
    .find("prod")
    .each(function() {
      $("#container").append(
        "<li><a href='" +
          $(this)
            .find("awTrack")
            .text() +
          "'><img src='" +
          $(this)
            .find("mImage")
            .text() +
          "'/><h2>" +
          $(this)
            .find("mCat")
            .text() +
          "</h2><p>" +
          $(this)
            .find("buynow")
            .text() +
          "</p></a></li>"
      );
    });
}
