chrome.runtime.onInstalled.addListener(function(){
        
    chrome.contextMenus.create({
        id: "new twitter",
        title: "bookmarkを検索する",
    })
})


chrome.contextMenus.onClicked.addListener(function(info){
    window.open("https://twitter.com/i/bookmarks","_blank");{
        const url = "https://twitter.com/i/bookmarks/"+ event.selectionText
        chrome.tabs.create({url})
    }
})