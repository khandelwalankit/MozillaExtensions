var temp = document.getElementById("searchbar");
var searchButton = document.getAnonymousElementByAttribute(temp,"anonid", "search-go-button");
var searchTxtBox = document.getAnonymousElementByAttribute(temp,"anonid", "searchbar-textbox");

function clearSearch()
{
	if(Cc["@mozilla.org/preferences-service;1"].getService(Ci.nsIPrefBranch).getBoolPref("pref.privacy.clearsearch")){
	 	searchTxtBox.value = "";
	}
}

searchButton.addEventListener('click',function(){
	clearSearch();
});

searchTxtBox.addEventListener('keypress',function(event){
	if(event.keyCode == "13"){
		clearSearch();
	}
});

