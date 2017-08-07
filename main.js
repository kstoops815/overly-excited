console.log("hello world");

var sentence = ["The", "cow", "jumped", "over", "the", "white", "fence", "to", "his", "freedom"];


function addExcitement(theWordArray){
	var theWordArray="";
	for(i=0; i<sentence.length; i++){
	theWordArray += sentence[i] + " ";
	console.log(theWordArray);
	}
}
addExcitement(sentence);

//document.getElementById("sentence").innerHTML = addExcitement();


