function firstChar(text) {
  for(let i of text){
	  if(i !== " "){
		  return i
	  }
  }
return ""
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
