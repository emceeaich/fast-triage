// mozilla license boilerplate here

var apiToken = null; // passed back to content script for fetches

chrome.runtime.onMessage.addListener(notify);

function notify(message) {

  if (window.BUGZILLA && window.BUGZILLA.api_token) {
    apiToken = window.BUGZILLA.api_token;
  }

  chrome.tabs.query({currentWindow: true, active: true},
                    sendMessageToTab);
}

function sendMessageToTab(tabs) {
  if (tabs.length > 0) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      {apiToken: apiToken}
    );
  }
}
