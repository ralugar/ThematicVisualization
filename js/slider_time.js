 // SLIDER TIME
  var slider = document.getElementById("myRange");

slider.oninput = function() {
  console.log(this.value);
  window.year_var = this.value;
  document.getElementById('year_text').innerHTML = window.year_var;
 
  
  if (document.getElementById('olMap').style.zIndex == 0) {
	if (window.info_var == 'scholarships') {
		functionScholarchips();
		if (query==true) {selectQuery();}
	} 
	
	else {
		loop();
		if (query==true) {selectQuery();}
	}
  }

  else {
	loop2();
	functionScholarchips2();
	if (query==true) {selectQuery();}
  }

}
// SLIDER TIME