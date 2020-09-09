var button = document.querySelector("#enter");
var input = document.querySelector("#userinput");
var ul = document.querySelector("ul")
var li = document.querySelectorAll("li");


button.addEventListener("click", clickItems);




function clickItems() {
	if (input.value.length > 0){
	var li = document.createElement("li")
	li.appendChild(document.createTextNode("input".value));
	ul.appendChild(li);
	input.value="";
	}

}


function addRadio() {
	var radio = document.createElement("input.type")
	input.type="radio";
	li.appendChild(radio);
}


function myfunction() {
  $("#delete").remove()
}
