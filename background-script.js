// mozilla license boilerplate here

console.log("in background script");

var isActive = true;  // false; 
var message;

chrome.runtime.onMessage.addListener(notify);
chrome.browserAction.onClicked.addListener(manageState);

function notify(message) {
  message = { active: isActive };
  chrome.tabs.query({ currentWindow: true, active: true },
                    sendMessageToTab);
}

function manageState(function(tab) {
    isActive = !isActive;
    console.log("active", isActive);
    if (isActive) {
        message = { active: isActive };
        chrome.tabs.query({ currentWindow: true, active: true }, 
            sendMessageToTab);
    }
});

function sendMessageToTab(tabs) {
  if (tabs.length > 0) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      message;
    );
  }
}
