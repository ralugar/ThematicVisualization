// LEGEND 

// Students
var legend_students = document.createElement('canvas');
var radius4 = Math.sqrt((10000/30)/Math.PI);
var size4 = radius4*2;
legend_students.width = size4;
legend_students.height = size4;
var context4= legend_students.getContext('2d');
var centerX4= legend_students.width / 2;
var centerY4= legend_students.height / 2;
var startingAngle4 = -Math.PI;
var endingAngle4 = Math.PI;
var counterclockwise = false;
context4.arc(centerX4, centerY4, radius4, startingAngle4, endingAngle4, counterclockwise);
context4.fillStyle = 'hsl(195, 70%, 50%)';
context4.fill();

var legend_students2 = document.createElement('canvas');
var radius42 = Math.sqrt((50000/30)/Math.PI);
var size42 = radius42*2;
legend_students2.width = size42;
legend_students2.height = size42;
var context42= legend_students2.getContext('2d');
var centerX42= legend_students2.width / 2;
var centerY42= legend_students2.height / 2;
var startingAngle42 = -Math.PI;
var endingAngle42 = Math.PI;
var counterclockwise = false;
context42.arc(centerX42, centerY42, radius42, startingAngle42, endingAngle42, counterclockwise);
context42.fillStyle = 'hsl(195, 70%, 50%)';
context42.fill();

var legend_students3 = document.createElement('canvas');
var radius43 = Math.sqrt((100000/30)/Math.PI);
var size43 = radius43*2;
legend_students3.width = size43;
legend_students3.height = size43;
var context43= legend_students3.getContext('2d');
var centerX43= legend_students3.width / 2;
var centerY43= legend_students3.height / 2;
var startingAngle43 = -Math.PI;
var endingAngle43 = Math.PI;
var counterclockwise = false;
context43.arc(centerX43, centerY43, radius43, startingAngle43, endingAngle43, counterclockwise);
context43.fillStyle = 'hsl(195, 70%, 50%)';
context43.fill();

// Fees
var legend_fees = document.createElement('canvas');
var radius5 = Math.sqrt((10000000/50000)/Math.PI);
var size5 = radius5*2;
legend_fees.width = size5;
legend_fees.height = size5;
var context5= legend_fees.getContext('2d');
var centerX5= legend_fees.width / 2;
var centerY5= legend_fees.height / 2;
var startingAngle5 = -Math.PI;
var endingAngle5 = Math.PI;
var counterclockwise = false;
context5.arc(centerX5, centerY5, radius5, startingAngle5, endingAngle5, counterclockwise);
context5.fillStyle = 'hsl(30, 70%, 50%)';
context5.fill();

var legend_fees2 = document.createElement('canvas');
var radius52 = Math.sqrt((100000000/50000)/Math.PI);
var size52 = radius52*2;
legend_fees2.width = size52;
legend_fees2.height = size52;
var context52= legend_fees2.getContext('2d');
var centerX52= legend_fees2.width / 2;
var centerY52= legend_fees2.height / 2;
var startingAngle52 = -Math.PI;
var endingAngle52 = Math.PI;
var counterclockwise = false;
context52.arc(centerX52, centerY52, radius52, startingAngle52, endingAngle52, counterclockwise);
context52.fillStyle = 'hsl(30, 70%, 50%)';
context52.fill();

var legend_fees3 = document.createElement('canvas');
var radius53 = Math.sqrt((200000000/50000)/Math.PI);
var size53 = radius53*2;
legend_fees3.width = size53;
legend_fees3.height = size53;
var context53= legend_fees3.getContext('2d');
var centerX53= legend_fees3.width / 2;
var centerY53= legend_fees3.height / 2;
var startingAngle53 = -Math.PI;
var endingAngle53 = Math.PI;
var counterclockwise = false;
context53.arc(centerX53, centerY53, radius53, startingAngle53, endingAngle53, counterclockwise);
context53.fillStyle = 'hsl(30, 70%, 50%)';
context53.fill();

// Spent
var legend_spent = document.createElement('canvas');
var radius6 = Math.sqrt(((100000000/10)/50000)/Math.PI);
var size6 = radius6*2;
legend_spent.width = size6;
legend_spent.height = size6;
var context6= legend_spent.getContext('2d');
var centerX6= legend_spent.width / 2;
var centerY6= legend_spent.height / 2;
var startingAngle6 = -Math.PI;
var endingAngle6 = Math.PI;
var counterclockwise = false;
context6.arc(centerX6, centerY6, radius6, startingAngle6, endingAngle6, counterclockwise);
context6.fillStyle = 'hsl(100, 70%, 50%)';
context6.fill();

var legend_spent2 = document.createElement('canvas');
var radius62 = Math.sqrt(((1000000000/10)/50000)/Math.PI);
var size62 = radius62*2;
legend_spent2.width = size62;
legend_spent2.height = size62;
var context62= legend_spent2.getContext('2d');
var centerX62= legend_spent2.width / 2;
var centerY62= legend_spent2.height / 2;
var startingAngle62 = -Math.PI;
var endingAngle62 = Math.PI;
var counterclockwise = false;
context62.arc(centerX62, centerY62, radius62, startingAngle62, endingAngle62, counterclockwise);
context62.fillStyle = 'hsl(100, 70%, 50%)';
context62.fill();

var legend_spent3 = document.createElement('canvas');
var radius63 = Math.sqrt(((2000000000/10)/50000)/Math.PI);
var size63 = radius63*2;
legend_spent3.width = size63;
legend_spent3.height = size63;
var context63= legend_spent3.getContext('2d');
var centerX63= legend_spent3.width / 2;
var centerY63= legend_spent3.height / 2;
var startingAngle63 = -Math.PI;
var endingAngle63 = Math.PI;
var counterclockwise = false;
context63.arc(centerX63, centerY63, radius63, startingAngle63, endingAngle63, counterclockwise);
context63.fillStyle = 'hsl(100, 70%, 50%)';
context63.fill();

// Spent + fees
var legend_spent_fees = document.createElement('canvas');
var radius7 = radius6;
var size7 = radius7*2;
legend_spent_fees.width = size7;
legend_spent_fees.height = size7;
var context7 = legend_spent_fees.getContext('2d');
var centerX7 = legend_spent_fees.width / 2;
var centerY7 = legend_spent_fees.height / 2;
var startingAngle7 = Math.PI / 2;
var endingAngle7 = -Math.PI / 2;
var counterclockwise = false;
context7.arc(centerX7, centerY7, radius7, startingAngle7,
	endingAngle7, counterclockwise);
context7.fillStyle = 'hsl(100, 70%, 50%)';
context7.fill();

var legend_spent_fees2 = document.createElement('canvas');
var radius72 = radius62;
var size72 = radius72*2;
legend_spent_fees2.width = size72;
legend_spent_fees2.height = size72;
var context72 = legend_spent_fees2.getContext('2d');
var centerX72 = legend_spent_fees2.width / 2;
var centerY72 = legend_spent_fees2.height / 2;
var startingAngle72 = Math.PI / 2;
var endingAngle72 = -Math.PI / 2;
var counterclockwise = false;
context72.arc(centerX72, centerY72, radius72, startingAngle72,
	endingAngle72, counterclockwise);
context72.fillStyle = 'hsl(100, 70%, 50%)';
context72.fill();

var legend_spent_fees3 = document.createElement('canvas');
var radius73 = radius63;
var size73 = radius73*2;
legend_spent_fees3.width = size73;
legend_spent_fees3.height = size73;
var context73 = legend_spent_fees3.getContext('2d');
var centerX73 = legend_spent_fees3.width / 2;
var centerY73 = legend_spent_fees3.height / 2;
var startingAngle73 = Math.PI / 2;
var endingAngle73 = -Math.PI / 2;
var counterclockwise = false;
context73.arc(centerX73, centerY73, radius73, startingAngle73,
	endingAngle73, counterclockwise);
context73.fillStyle = 'hsl(100, 70%, 50%)';
context73.fill();

var legend_spent_fees21 = document.createElement('canvas');
var radius8 = radius5;
var size8 = radius8*2;
legend_spent_fees21.width = size8;
legend_spent_fees21.height = size8;
var context8 = legend_spent_fees21.getContext('2d');
var centerX8 = legend_spent_fees21.width / 2;
var centerY8 = legend_spent_fees21.height / 2;
var startingAngle8 = -Math.PI / 2;
var endingAngle8 = Math.PI / 2;
var counterclockwise = false;
context8.arc(centerX8, centerY8, radius8, startingAngle8,
	endingAngle8, counterclockwise);
context8.fillStyle = 'hsl(30, 70%, 50%)';
context8.fill();

var legend_spent_fees22 = document.createElement('canvas');
var radius82 = radius52;
var size82 = radius82*2;
legend_spent_fees22.width = size82;
legend_spent_fees22.height = size82;
var context82 = legend_spent_fees22.getContext('2d');
var centerX82 = legend_spent_fees22.width / 2;
var centerY82 = legend_spent_fees22.height / 2;
var startingAngle82 = -Math.PI / 2;
var endingAngle82 = Math.PI / 2;
var counterclockwise = false;
context82.arc(centerX82, centerY82, radius82, startingAngle82,
	endingAngle82, counterclockwise);
context82.fillStyle = 'hsl(30, 70%, 50%)';
context82.fill();

var legend_spent_fees23 = document.createElement('canvas');
var radius83 = radius53;
var size83 = radius83*2;
legend_spent_fees23.width = size83;
legend_spent_fees23.height = size83;
var context83 = legend_spent_fees23.getContext('2d');
var centerX83 = legend_spent_fees23.width / 2;
var centerY83 = legend_spent_fees3.height / 2;
var startingAngle83 = -Math.PI / 2;
var endingAngle83 = Math.PI / 2;
var counterclockwise = false;
context83.arc(centerX83, centerY83, radius83, startingAngle83,
	endingAngle83, counterclockwise);
context83.fillStyle = 'hsl(30, 70%, 50%)';
context83.fill();	
	
	// CHANGE VARIABLE
    var rad2 = document.variables.var;
    var prev2 = null;
    for(var i = 0; i < rad2.length; i++) {
        rad2[i].addEventListener('change', function() {
            if(this !== prev2) {
                prev2 = this;
            }
			
			var legend1 = document.getElementById('canvas_container1');
			var legend11 = document.getElementById('canvas_container11');
			var legend12 = document.getElementById('canvas_container12');
			var legend13 = document.getElementById('canvas_container13');
			while (legend11.firstChild) { legend11.removeChild(legend11.firstChild); }
			while (legend12.firstChild) { legend12.removeChild(legend12.firstChild); }
			while (legend13.firstChild) { legend13.removeChild(legend13.firstChild); }
			
			var legend21 = document.getElementById('canvas_container21');
			var legend22 = document.getElementById('canvas_container22');
			var legend23 = document.getElementById('canvas_container23');
			while (legend21.firstChild) { legend21.removeChild(legend21.firstChild); }
			while (legend22.firstChild) { legend22.removeChild(legend22.firstChild); }
			while (legend23.firstChild) { legend23.removeChild(legend23.firstChild); }
			
			var legend31 = document.getElementById('canvas_container31');
			var legend32 = document.getElementById('canvas_container32');
			var legend33 = document.getElementById('canvas_container33');
			while (legend31.firstChild) { legend31.removeChild(legend31.firstChild); }
			while (legend32.firstChild) { legend32.removeChild(legend32.firstChild); }
			while (legend33.firstChild) { legend33.removeChild(legend33.firstChild); }
			
			var legend41 = document.getElementById('canvas_container41');
			var legend42 = document.getElementById('canvas_container42');
			var legend43 = document.getElementById('canvas_container43');
			while (legend41.firstChild) { legend41.removeChild(legend41.firstChild); }
			while (legend42.firstChild) { legend42.removeChild(legend42.firstChild); }
			while (legend43.firstChild) { legend43.removeChild(legend43.firstChild); }
			
			var legend51 = document.getElementById('canvas_container51');
			var legend52 = document.getElementById('canvas_container52');
			var legend53 = document.getElementById('canvas_container53');
			while (legend51.firstChild) { legend51.removeChild(legend51.firstChild); }
			while (legend52.firstChild) { legend52.removeChild(legend52.firstChild); }
			while (legend53.firstChild) { legend53.removeChild(legend53.firstChild); }
			
			var legend61 = document.getElementById('canvas_container61');
			var legend62 = document.getElementById('canvas_container62');
			var legend63 = document.getElementById('canvas_container63');
			while (legend61.firstChild) { legend61.removeChild(legend61.firstChild); }
			while (legend62.firstChild) { legend62.removeChild(legend62.firstChild); }
			while (legend63.firstChild) { legend63.removeChild(legend63.firstChild); }
			
			document.getElementById('text1').innerHTML = '';
			document.getElementById('text2').innerHTML = '';
			document.getElementById('text3').innerHTML = '';
			document.getElementById('text4').innerHTML = '';
			document.getElementById('text5').innerHTML = '';
			document.getElementById('text6').innerHTML = '';
		
			var inputStudents = rad2[0].checked;
			var inputFees = rad2[1].checked;
			var inputSpent = rad2[2].checked;
			rad.checked = false;
			
			var inputs = [inputStudents,inputFees,inputSpent];
			console.log(inputs);
			if (inputs[0]== true & inputs[1]== false & inputs[2]== false ) {
				var variable0 = 'students';
			    window.info_var = variable0;
				document.getElementById('text1').innerHTML = 'Thousands of students';
				document.getElementById('text2').innerHTML = '';
				document.getElementById('text3').innerHTML = '';
				document.getElementById('text4').innerHTML = '';
				document.getElementById('text5').innerHTML = '';
				document.getElementById('text6').innerHTML = '';
				
				document.getElementById('canvas_container11').appendChild(legend_students);
				var text = document.createElement('p');	text.innerHTML = '10'; text.style.textAlign = 'center';
				document.getElementById('canvas_container11').appendChild(text);
				document.getElementById('canvas_container12').appendChild(legend_students2);
				var text = document.createElement('p');	text.innerHTML = '50'; text.style.textAlign = 'center';
				document.getElementById('canvas_container12').appendChild(text);
				document.getElementById('canvas_container13').appendChild(legend_students3);
				var text = document.createElement('p');	text.innerHTML = '100'; text.style.textAlign = 'center';
				document.getElementById('canvas_container13').appendChild(text);
				console.log('students');
			}
			
			else if (inputs[0]== false & inputs[1]== true & inputs[2]== false) {
				var variable0 = 'fees';
				
				document.getElementById('text1').innerHTML = '';
				document.getElementById('text2').innerHTML = 'Fees (milions of euros)';
				document.getElementById('text3').innerHTML = '';
				document.getElementById('text4').innerHTML = '';
				document.getElementById('text5').innerHTML = '';
				document.getElementById('text6').innerHTML = '';
				
				document.getElementById('canvas_container21').appendChild(legend_fees);
				var text = document.createElement('p');	text.innerHTML = '10'; text.style.textAlign = 'center';
				document.getElementById('canvas_container21').appendChild(text);
				document.getElementById('canvas_container22').appendChild(legend_fees2);
				var text = document.createElement('p');	text.innerHTML = '100'; text.style.textAlign = 'center';
				document.getElementById('canvas_container22').appendChild(text);
				document.getElementById('canvas_container23').appendChild(legend_fees3);
				var text = document.createElement('p');	text.innerHTML = '200'; text.style.textAlign = 'center';
				document.getElementById('canvas_container23').appendChild(text);
			    window.info_var = variable0;
			}
			
			else if (inputs[0]== false & inputs[1]== false & inputs[2]== true) {
				var variable0 = 'spent';
			    window.info_var = variable0;
				
				document.getElementById('text1').innerHTML = '';
				document.getElementById('text2').innerHTML = '';
				document.getElementById('text3').innerHTML = 'Spent (milions of euros)';
				document.getElementById('text4').innerHTML = '';
				document.getElementById('text5').innerHTML = '';
				document.getElementById('text6').innerHTML = '';
				
				document.getElementById('canvas_container31').appendChild(legend_spent);
				var text = document.createElement('p');	text.innerHTML = '100'; text.style.textAlign = 'center';
				document.getElementById('canvas_container31').appendChild(text);
				document.getElementById('canvas_container32').appendChild(legend_spent2);
				var text = document.createElement('p');	text.innerHTML = '1000'; text.style.textAlign = 'center';
				document.getElementById('canvas_container32').appendChild(text);
				document.getElementById('canvas_container33').appendChild(legend_spent3);
				var text = document.createElement('p');	text.innerHTML = '2000'; text.style.textAlign = 'center';
				document.getElementById('canvas_container33').appendChild(text);
			}
			
			else if (inputs[0]== false & inputs[1]== true & inputs[2]== true) {
				variable0 = 'spent_fees';
				
				document.getElementById('text1').innerHTML = '';
				document.getElementById('text2').innerHTML = '';
				document.getElementById('text3').innerHTML = '';
				document.getElementById('text4').innerHTML = 'Spent (milions of euros)';
				document.getElementById('text5').innerHTML = '';
				document.getElementById('text6').innerHTML = 'Fees (milions of euros)';
				
				document.getElementById('canvas_container41').appendChild(legend_spent_fees);
				var text = document.createElement('p');	text.innerHTML = '100'; text.style.textAlign = 'center';
				document.getElementById('canvas_container41').appendChild(text);
				document.getElementById('canvas_container42').appendChild(legend_spent_fees2);
				var text = document.createElement('p');	text.innerHTML = '1000'; text.style.textAlign = 'center';
				document.getElementById('canvas_container42').appendChild(text);
				document.getElementById('canvas_container43').appendChild(legend_spent_fees3);
				var text = document.createElement('p');	text.innerHTML = '2000'; text.style.textAlign = 'center';
				document.getElementById('canvas_container43').appendChild(text);
				
				document.getElementById('canvas_container61').appendChild(legend_spent_fees21);
				var text = document.createElement('p');	text.innerHTML = '10'; text.style.textAlign = 'center';
				document.getElementById('canvas_container61').appendChild(text);
				document.getElementById('canvas_container62').appendChild(legend_spent_fees22);
				var text = document.createElement('p');	text.innerHTML = '100'; text.style.textAlign = 'center';
				document.getElementById('canvas_container62').appendChild(text);
				document.getElementById('canvas_container63').appendChild(legend_spent_fees23);
				var text = document.createElement('p');	text.innerHTML = '200'; text.style.textAlign = 'center';
				document.getElementById('canvas_container63').appendChild(text);


				window.info_var = variable0;
			}
			
			else if (inputs[0]== true & inputs[1]== true & inputs[2]== false) {
				variable0 = 'students_fees';
				
				document.getElementById('text1').innerHTML = 'Thousands of students';
				document.getElementById('text2').innerHTML = 'Fees (milions of euros)';
				document.getElementById('text3').innerHTML = '';
				document.getElementById('text4').innerHTML = '';
				document.getElementById('text5').innerHTML = '';
				document.getElementById('text6').innerHTML = '';
				
				document.getElementById('canvas_container11').appendChild(legend_students);
				var text = document.createElement('p');	text.innerHTML = '10'; text.style.textAlign = 'center';
				document.getElementById('canvas_container11').appendChild(text);
				document.getElementById('canvas_container12').appendChild(legend_students2);
				var text = document.createElement('p');	text.innerHTML = '50'; text.style.textAlign = 'center';
				document.getElementById('canvas_container12').appendChild(text);
				document.getElementById('canvas_container13').appendChild(legend_students3);
				var text = document.createElement('p');	text.innerHTML = '100'; text.style.textAlign = 'center';
				document.getElementById('canvas_container13').appendChild(text);
				
				document.getElementById('canvas_container21').appendChild(legend_fees);
				var text = document.createElement('p');	text.innerHTML = '10'; text.style.textAlign = 'center';
				document.getElementById('canvas_container21').appendChild(text);
				document.getElementById('canvas_container22').appendChild(legend_fees2);
				var text = document.createElement('p');	text.innerHTML = '50'; text.style.textAlign = 'center';
				document.getElementById('canvas_container22').appendChild(text);
				document.getElementById('canvas_container23').appendChild(legend_fees3);
				var text = document.createElement('p');	text.innerHTML = '100'; text.style.textAlign = 'center';
				document.getElementById('canvas_container23').appendChild(text);
				window.info_var = variable0;
			}
			
			else if (inputs[0]== true & inputs[1]== false & inputs[2]== true) {
				variable0 = 'students_spent';
				
				document.getElementById('text1').innerHTML = 'Thousands of students';
				document.getElementById('text2').innerHTML = '';
				document.getElementById('text3').innerHTML = 'Spent (milions of euros)';
				document.getElementById('text4').innerHTML = '';
				document.getElementById('text5').innerHTML = '';
				document.getElementById('text6').innerHTML = '';
				
				document.getElementById('canvas_container11').appendChild(legend_students);
				var text = document.createElement('p');	text.innerHTML = '10'; text.style.textAlign = 'center';
				document.getElementById('canvas_container11').appendChild(text);
				document.getElementById('canvas_container12').appendChild(legend_students2);
				var text = document.createElement('p');	text.innerHTML = '50'; text.style.textAlign = 'center';
				document.getElementById('canvas_container12').appendChild(text);
				document.getElementById('canvas_container13').appendChild(legend_students3);
				var text = document.createElement('p');	text.innerHTML = '100'; text.style.textAlign = 'center';
				document.getElementById('canvas_container13').appendChild(text);
				
				document.getElementById('canvas_container31').appendChild(legend_spent);
				var text = document.createElement('p');	text.innerHTML = '10'; text.style.textAlign = 'center';
				document.getElementById('canvas_container31').appendChild(text);
				document.getElementById('canvas_container32').appendChild(legend_spent2);
				var text = document.createElement('p');	text.innerHTML = '50'; text.style.textAlign = 'center';
				document.getElementById('canvas_container32').appendChild(text);
				document.getElementById('canvas_container33').appendChild(legend_spent3);
				var text = document.createElement('p');	text.innerHTML = '100'; text.style.textAlign = 'center';
				document.getElementById('canvas_container33').appendChild(text);
				window.info_var = variable0;
			}
			
			else if (inputs[0]== true & inputs[1]== true & inputs[2]== true) {
				variable0 = 'all';
				
				document.getElementById('text1').innerHTML = 'Thousands of students';
				document.getElementById('text2').innerHTML = '';
				document.getElementById('text3').innerHTML = '';
				document.getElementById('text4').innerHTML = 'Spent (milions of euros)';
				document.getElementById('text5').innerHTML = '';
				document.getElementById('text6').innerHTML = 'Fees (milions of euros)';
				
				document.getElementById('canvas_container11').appendChild(legend_students);
				var text = document.createElement('p');	text.innerHTML = '10'; text.style.textAlign = 'center';
				document.getElementById('canvas_container11').appendChild(text);
				document.getElementById('canvas_container12').appendChild(legend_students2);
				var text = document.createElement('p');	text.innerHTML = '50'; text.style.textAlign = 'center';
				document.getElementById('canvas_container12').appendChild(text);
				document.getElementById('canvas_container13').appendChild(legend_students3);
				var text = document.createElement('p');	text.innerHTML = '100'; text.style.textAlign = 'center';
				document.getElementById('canvas_container13').appendChild(text);
				
				document.getElementById('canvas_container41').appendChild(legend_spent_fees);
				var text = document.createElement('p');	text.innerHTML = '100'; text.style.textAlign = 'center';
				document.getElementById('canvas_container41').appendChild(text);
				document.getElementById('canvas_container42').appendChild(legend_spent_fees2);
				var text = document.createElement('p');	text.innerHTML = '1000'; text.style.textAlign = 'center';
				document.getElementById('canvas_container42').appendChild(text);
				document.getElementById('canvas_container43').appendChild(legend_spent_fees3);
				var text = document.createElement('p');	text.innerHTML = '2000'; text.style.textAlign = 'center';
				document.getElementById('canvas_container43').appendChild(text);
				
				document.getElementById('canvas_container61').appendChild(legend_spent_fees21);
				var text = document.createElement('p');	text.innerHTML = '10'; text.style.textAlign = 'center';
				document.getElementById('canvas_container61').appendChild(text);
				document.getElementById('canvas_container62').appendChild(legend_spent_fees22);
				var text = document.createElement('p');	text.innerHTML = '10'; text.style.textAlign = 'center';
				document.getElementById('canvas_container62').appendChild(text);
				document.getElementById('canvas_container63').appendChild(legend_spent_fees23);
				var text = document.createElement('p');	text.innerHTML = '200'; text.style.textAlign = 'center';
				document.getElementById('canvas_container63').appendChild(text);

				
				window.info_var = variable0;
			}
			
			else {
				var variable0 = '';
			    window.info_var = variable0
			}
			
			loop();
        });
} 