
function onClickHandler(info, tab){
	var size = 512;
	var margin = 10;
	var url = "https://api.qrserver.com/v1/create-qr-code/"
		+"?data="+encodeURIComponent(info.linkUrl)
		+"&size="+size+"x"+size
		+"&margin="+margin;
	
	chrome.windows.create({
		url: url,
		type: "popup",
		width: size + margin*2,
		height: size + margin*2 + 20
	});
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onInstalled.addListener(function(){
	var id = chrome.contextMenus.create({
		id: "qrlink",
		title: "QR from link",
		contexts: ["link"]
	});
});
