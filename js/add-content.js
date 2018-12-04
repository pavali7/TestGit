/*Komentarz*/
//TO też
var today = new Date();
var hourNow = today.getHours();
var greeting;

	if (hourNow > 18) {
		greeting = "Dobry wieczór!";}
	else if (hourNow > 12){
		greeting = "Dzien dobry";} 
	else if (hourNow > 0){
		greeting = "dzien dobry";}
	else {
		greeting = "Witamy";}
	document.write('<h3>'+greeting+'</h3>');
