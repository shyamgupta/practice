// Prints an ordered list

function printList(array_var){
	var listHTML = '<ol>';
	for(var i=0;i<array_var.length;i++){
		listHTML += '<li>'+ array_var[i] + '</li>';
	}
	listHTML += '</ol>';
}
var name = ["John","Rita","Jack","Henry"];
printList(name);
