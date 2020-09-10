var button = document.querySelector("#enter");
var input = document.querySelector("#userinput");
var ul = document.querySelector("ul")



button.addEventListener("click", clickItems);




function clickItems() {
	if (input.value.length){
	var li = document.createElement("li")
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
	}




		var btn = document.createElement("button");
		btn.appendChild(document.createTextNode("delete"));
		li.appendChild(btn);
		btn.onclick = removeParent;
	}


 
