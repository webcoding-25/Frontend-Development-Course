let textBox = document.getElementById('textBox');
let output = document.getElementById('outputBox');

// Count Length

function countLength(){
	let text = textBox.value;
	output.innerText = text.length ;
}

// Trim method

function trim(){
	let text = textBox.value.trim();
	output.innerText = text;
}

// To uppercase

function uppercase() {
	let text = textBox.value.toUpperCase();
	output.innerText = text;
}

function lowercase() {
	let text = textBox.value.toLowerCase();
	output.innerText = text;
}

// Count Words

function countWord(){
	let text = textBox.value.trim();

	if(text === ""){
		output.innerText = "Total Words: 0";
		return ;
	}

	let words = text.split(" ")
	output.innerText = words.length ;
}

