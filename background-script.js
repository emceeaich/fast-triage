// mozilla license boilerplate here

chrome.runtime.onMessage.addListener(notify);

function notify(message) {

  chrome.notifications.create({
    "type": "basic",
    "title": "The content page just contacted the background script",
    "message": message.hello
  });

  chrome.tabs.query({currentWindow: true, active: true},
                    sendMessageToTab);

}

function sendMessageToTab(tabs) {
  if (tabs.length > 0) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      {hello: "ohai!"}
    );
  }
}
