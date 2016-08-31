// content.js
alert("Hello from your Chrome extension!")

// content.js
var firstHref = $("a[href^='http']").eq(0).attr("href");
console.log(firstHref);


$('.audio_page_player_shuffle').click();

// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");
      console.log(firstHref);
    }
  }
);
