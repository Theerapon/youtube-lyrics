// Get the current tab
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // Send a message to the content script in the current tab
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
      console.log(response.farewell);
    });
  });
  