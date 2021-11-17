async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true, url: "https://*/*"};
  let [tab] = await chrome.tabs.query(queryOptions);
  if (tab) {
    return tab;
  } else {
    throw new Error(tab);
  }
}

const insertCSS = "";

chrome.tabs.onHighlighted.addListener(() => {
  getCurrentTab().then((tab) => {
    const tabId = tab.id;
    if (typeof tabId === "number") {
      chrome.scripting.insertCSS({css: insertCSS,target: {tabId: tabId}});
    }
  })
});
