document.getElementById("captureBtn").addEventListener("click", () => {
    chrome.tabs.captureVisibleTab(null, { format: "png" }, (dataUrl) => {
        const img = document.getElementById("screenshotImg");
        img.src = dataUrl;
        img.style.display = "block";
    });
});
