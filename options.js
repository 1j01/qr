
// I'm using the horrible "named elements get dumped into the global namespace" "feature"

function update_options(){
	chrome.storage.sync.set({
		m: blackmagic.checked,
		p: pagecontext.checked
	}, function(){
		status.textContent = 'Options saved.';
		setTimeout(function(){
			status.textContent = '';
		}, 1000);
	});
}

function load_options(){
	chrome.storage.sync.get({
		p: false,
		m: false
	}, function(items){
		blackmagic.checked = items.m;
		pagecontext.checked = items.p;
	});
}

load_options();
blackmagic.onchange = update_options;
pagecontext.onchange = update_options;
