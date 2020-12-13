//Create a Modal Box
	// Get the modal
	var modal = document.getElementById("myModal");
	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	// When the user clicks the button, open the modal 
	btn.onclick = function() {		
		let x = document.getElementById('x').value;
		let y = document.getElementById('y').value;
		console.log("x = " + x + "; y = " + y);
		console.log(parseInt(x));
		let xBool, yBool;
		if(x.length != 1 || isNaN(x) || 
			parseInt(x) < 1 || parseInt(x) > 9){
			document.getElementById("x").classList.add('is-invalid');
			xBool = false;
		}else{
			document.getElementById("x").classList.remove('is-invalid');
			xBool = true;
		}
		if(y.length != 1 || isNaN(y) || 
			parseInt(y) < 1 || parseInt(y) > 9 ){
			document.getElementById("y").classList.add('is-invalid');
			yBool = false;
		}else{
			document.getElementById("y").classList.remove('is-invalid');
			yBool = true;
		}
		if(xBool && yBool){
			modal.style.display = "block";
			createTable(++x, ++y);
		}
	}
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
		removeElementById("table1");
	}
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
			removeElementById("table1");
		}
	}



function createTable(x, y) {
	let divTbl = document.getElementById("tableOfFun");
	let table = document.createElement("table");
	table.setAttribute("id", "table1");
	table.style.width = "100%";
	table.setAttribute("border", '1');
	// table.style.padding = "20px;"

	let tBody = document.createElement("tbody");
	for (let i = 0; i < y; i++){
		let tr = document.createElement("tr");
		for (var j = 0; j < x; j++){
			let td = document.createElement('td');
			if(i == 0){
				if(j != 0){
					td.appendChild(document.createTextNode("X = " + j.toString()));
					td.classList.add('b');
				}
			}else if(j == 0){
				td.appendChild(document.createTextNode("Y = " + i.toString()));
				td.classList.add('b');
			}
			if(i != 0 && j != 0){
				td.appendChild(document.createTextNode(i * j));
			}
			tr.appendChild(td);
		}
		tBody.appendChild(tr);
	}
	table.appendChild(tBody);
	divTbl.appendChild(table);
}

function removeElementById(elementId) {
	var element = document.getElementById(elementId);
	element.parentNode.removeChild(element);
}