

function addListeners() {

	document.querySelector("#home").addEventListener("click", toggleContent,false);
	document.querySelector("#documentos").addEventListener("click", toggleContent,false);

}

function toggleContent(e) {
	if (!e)
        e = window.event;
    var sender = e.srcElement || e.target;

    while (sender && sender.nodeName.toLowerCase() != "li")
        sender = sender.parentNode;

     var myId = sender.id;
     myId+="Content";
     
     var showings = document.querySelectorAll(".show");
     for (var x = 0 ; x < showings.length ; x++) {
     	var showing = showings[x];
     	showing.classList.remove("show");
     	showing.classList.add("hide");
     }
     var toShow = document.getElementById(myId);
     
     toShow.classList.remove("hide");
	 toShow.classList.add("show");
     
}





document.addEventListener("DOMContentLoaded", function(event) { 
  addListeners();
});