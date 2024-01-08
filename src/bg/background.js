// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

console.log('Background script is running!');
//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });

  // Listen for messages from content scripts or other parts of the extension
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === 'updateTab') {
      console.log('Background script received a message to update the tab.');
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        
        let newUsername=request.username
        
        var newUrl = `https://www.instagram.com/${newUsername}?source=extension`
        if(newUsername){
          chrome.tabs.update(tabs[0].id, {url: newUrl});
        }
     });
     
  }
});

