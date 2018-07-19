
function getFileExtension(input){
	var output = input.split(".");
	//console.log(output);
	if (output.length > 1){	
	} else {
		return "NOT VALID";
	}
	//console.log(output[1]);
	return output[1];
}



console.assert(getFileExtension("logos.sketch") === "sketch")
console.assert(getFileExtension("avatar.png") === "png")
console.assert(getFileExtension("noextension") === "NOT VALID")