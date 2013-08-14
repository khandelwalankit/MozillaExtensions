/*
* Set - Ankit
*/
  setSearchBox: function clearSearch()
  {
    let clearSearchCheckbox = document.getElementId("clearSearch");
    if (!clearSearchCheckbox.checked)
       document.getElementById("pref.privacy.clearsearch").value=false;
    else
       document.getElementById("pref.privacy.clearsearch").value=true;
    
    return document.getElementById("pref.privacy.clearsearch").value
  },
/*
* Completed - Ankit
*/
