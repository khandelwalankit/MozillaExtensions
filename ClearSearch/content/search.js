/* Author : Arul
   Date : Aug 25, 2013
   Mod 08/25 : Removed globals, added comments */

/*Clear search box*/
function clearSearch()
{
	if(Cc["@mozilla.org/preferences-service;1"]
		.getService(Ci.nsIPrefBranch)
		.getBoolPref("pref.privacy.clearsearch")){
		 	document.getAnonymousElementByAttribute(
				document.getElementById("searchbar"),
				"anonid",
				"searchbar-textbox")
			.value = "";
		}
}


/*Eventlistener to capture search-go-button*/
document.getAnonymousElementByAttribute(
		document.getElementById("searchbar"),
		"anonid",
		"search-go-button")
	.addEventListener('click',function(){
		clearSearch();
	}
);




/* Eventlistener to capture "Enter" key-press*/
document.getAnonymousElementByAttribute(
		document.getElementById("searchbar"),
		"anonid",
		"searchbar-textbox")
	.addEventListener('keypress',function(event){
		if(event.keyCode == "13"){
			clearSearch();
		}
	}
);

