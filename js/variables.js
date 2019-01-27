// CHANGE VARIABLE
    var rad4 = document.variables2.var;
    var prev4 = null;
    for(var i = 0; i < rad4.length; i++) {
        rad4[i].addEventListener('change', function() {
            if(this !== prev4) {
                prev4 = this;
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
			document.getElementById('text6').innerHTML = '';
			
			var inputStudents2 = rad4[0].checked;
			var inputFees2 = rad4[1].checked;
			var inputSpent2 = rad4[2].checked;
			
			var inputs2 = [inputStudents2,inputFees2,inputSpent2];
			//console.log(inputs);
			if (inputs2[0]== true & inputs2[1]== false & inputs2[2]== false ) {
				var variable02 = 'students';
			    window.info_vara2 = variable02;
				console.log('students');
				
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
			}
			
			else if (inputs2[0]== false & inputs2[1]== true & inputs2[2]== false) {
				var variable02 = 'fees';
			    window.info_vara2 = variable02;
				console.log('fees');
				
				document.getElementById('text1').innerHTML = '';
				document.getElementById('text2').innerHTML = 'Fees (milions of euros)';
				document.getElementById('text3').innerHTML = '';
				document.getElementById('text4').innerHTML = '';
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
			}
			
			else if (inputs2[0]== false & inputs2[1]== false & inputs2[2]== true) {
				var variable02 = 'spent';
			    window.info_vara2 = variable02;
				console.log('spent');
				
				document.getElementById('text1').innerHTML = '';
				document.getElementById('text2').innerHTML = '';
				document.getElementById('text3').innerHTML = 'Spent (milions of euros)';
				document.getElementById('text4').innerHTML = '';
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
			
			else if (inputs2[0]== false & inputs2[1]== true & inputs2[2]== true) {
				variable02 = 'spent_fees';
				window.info_vara2 = variable02;
				
				document.getElementById('text1').innerHTML = '';
				document.getElementById('text2').innerHTML = '';
				document.getElementById('text3').innerHTML = '';
				document.getElementById('text4').innerHTML = 'Spent (milions of euros)';
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
			}
			
			else if (inputs2[0]== true & inputs2[1]== true & inputs2[2]== false) {
				variable02 = 'students_fees';
				window.info_vara2 = variable02;
				
				document.getElementById('text1').innerHTML = 'Thousands of students';
				document.getElementById('text2').innerHTML = 'Fees (milions of euros)';
				document.getElementById('text3').innerHTML = '';
				document.getElementById('text4').innerHTML = '';
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
			}
			
			else if (inputs2[0]== true & inputs2[1]== false & inputs2[2]== true) {
				variable02 = 'students_spent';
				window.info_vara2 = variable02;
				
				document.getElementById('text1').innerHTML = 'Thousands of students';
				document.getElementById('text2').innerHTML = '';
				document.getElementById('text3').innerHTML = 'Spent (milions of euros)';
				document.getElementById('text4').innerHTML = '';
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
			}
			
			else if (inputs2[0]== true & inputs2[1]== true & inputs2[2]== true) {
				variable02 = 'all';
				window.info_vara2 = variable02;
				
				document.getElementById('text1').innerHTML = 'Thousands of students';
				document.getElementById('text2').innerHTML = '';
				document.getElementById('text3').innerHTML = '';
				document.getElementById('text4').innerHTML = 'Spent (milions of euros)';
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
			}
			
			else {
				var variable02 = '';
			    window.info_vara2 = variable02;
			}
			
			loop2();
        });
} 


	// FUNCTION LOOP
	var loop2 = function() {
				var array = [];
			var array21 = [];
			var array22 = [];
			var array31 = [];
			var array32 = [];
			var array41 = [];
			var array42 = [];
			var array51 = [];
			var array52 = [];
			var array53 = [];
			
			for (var i = 0; i < centroids.features.length; i++) { 
			
				if (window.info_vara2 == "spent_fees") {
					var variable1 = centroids.features[i].properties['spent'][window.year_var];
					var variable2 = centroids.features[i].properties['fees'][window.year_var];
				}
				
				else if (window.info_vara2 == "students_fees") {
					var variable1 = centroids.features[i].properties['students'][window.year_var];
					var variable2 = centroids.features[i].properties['fees'][window.year_var];
				}
				
				else if (window.info_vara2 == "students_spent") {
					var variable1 = centroids.features[i].properties['students'][window.year_var];
					var variable2 = centroids.features[i].properties['spent'][window.year_var];
				}
				
				else if (window.info_vara2 == "all") {
					var variable1 = centroids.features[i].properties['students'][window.year_var];
					var variable2 = centroids.features[i].properties['fees'][window.year_var];
					var variable3 = centroids.features[i].properties['spent'][window.year_var];
				}
				
				else if (window.info_vara2 == "") {
					var variable =1;
				}
				
				else if (window.info_vara2 == "scholarships") {
					var variable =0;
				}
				
				else if (window.info_vara2 == "students" || window.info_vara2 == "fees" || window.info_vara2 == "spent") {
					var variable = centroids.features[i].properties[window.info_vara2][window.year_var];
				}	
				  
				// PARAMETERS
				  
				if (window.info_vara2 == '' || window.info_vara2 == 'scholarships') {
					radio = 0;
					color = '#e67417';
				}

				if (window.info_vara2 == 'fees') {
					param = 50000;
					area = variable/param;
					radio = Math.sqrt(area/Math.PI);console.log(radio);
					color = '#e67417';
				}
				
				if (window.info_vara2 == 'students') {
					param = 30;
					area = variable/param;
					radio = Math.sqrt(area/Math.PI);
					color = '#29b1cc';
				}
				
				if (window.info_vara2 == 'spent') {
					param = 50000;
					area = (variable/10)/param;
					radio = Math.sqrt(area/Math.PI);
					color = '#5fcc29';
				}
				
				if (window.info_vara2 == 'spent_fees') {
					param1 = 50000;
					area1 = (variable1/10)/param1;
					radio1 = Math.sqrt(area1/Math.PI);
					color1 = '#5fcc29';
					param2 = 50000;
					area2 = variable2/param2;
					radio2 = Math.sqrt(area2/Math.PI);
					color2 = '#e67417';
				}
				
				if (window.info_vara2 == 'students_fees') {
					param1 = 30;
					area1 = variable1/param1;
					radio1 = Math.sqrt(area1/Math.PI);
					color1 = '#29b1cc';
					param2 = 50000;
					area2 = variable2/param2;
					radio2 = Math.sqrt(area2/Math.PI);
					color2 = '#e67417';
				}
				
				if (window.info_vara2 == 'students_spent') {
					param1 = 30;
					area1 = variable1/param1;
					radio1 = Math.sqrt(area1/Math.PI);
					color1 = '#29b1cc';
					param2 = 50000;
					area2 = (variable2/10)/param2;
					radio2 = Math.sqrt(area2/Math.PI);
					color2 = '#5fcc29';
				}
				
				if (window.info_vara2 == 'all') {
					param1 = 30;
					area1 = variable1/param1;
					radio1 = Math.sqrt(area1/Math.PI);
					color1 = '#29b1cc';
					param2 = 50000;
					area2 = variable2/param2;
					radio2 = Math.sqrt(area2/Math.PI);
					color2 = '#e67417';
					param3 = 50000;
					area3 = (variable3/10)/param3;
					radio3 = Math.sqrt(area3/Math.PI);
					color3 = '#5fcc29';
				}
				
				// STYLES
				
				if (window.info_vara2 == 'spent_fees') {
					var canvas = document.createElement('canvas');
					var size = 300;
					canvas.width = size;
					canvas.height = size;
					var context = canvas.getContext('2d');
					var centerX = canvas.width / 2;
					var centerY = canvas.height / 2;
					var radius = radio1;
					var startingAngle = Math.PI / 2;
					var endingAngle = -Math.PI / 2;
					var counterclockwise = false;
					context.arc(centerX, centerY, radius, startingAngle,
						endingAngle, counterclockwise);
					context.fillStyle = color1;
					context.fill();
					
					var canvas2 = document.createElement('canvas');
					var size = 300;
					canvas2.width = size;
					canvas2.height = size;
					var context2 = canvas2.getContext('2d');
					var centerX2 = canvas2.width / 2;
					var centerY2 = canvas2.height / 2;
					var radius2 = radio2;
					var startingAngle2 = -Math.PI / 2;
					var endingAngle2 = Math.PI / 2;
					var counterclockwise = false;
					context2.arc(centerX2, centerY2, radius2, startingAngle2,
						endingAngle2, counterclockwise);
					context2.fillStyle = color2;
					context2.fill();
					
					var style_circle21 = new ol.style.Style({
					  image: new ol.style.Icon({
						img: canvas,
						imgSize: [size, size]
					  })
					});
					
					var style_circle22 = new ol.style.Style({
					  image: new ol.style.Icon({
						img: canvas2,
						imgSize: [size, size]
					  })
					});
					
					array21.push(style_circle21);
					array22.push(style_circle22);
					
					var styleCircle2 = {
					  '01': [array21[0],array22[0]],
					  '02': [array21[1],array22[1]],
					  '03':  [array21[2],array22[2]],
					  '04':  [array21[3],array22[3]],
					  '05':  [array21[4],array22[4]],
					  '06':  [array21[5],array22[5]],
					  '07':  [array21[6],array22[6]],
					  '08':  [array21[7],array22[7]],
					  '09':  [array21[8],array22[8]],
					  '10':  [array21[9],array22[9]],
					  '11':  [array21[10],array22[10]],
					  '12':  [array21[11],array22[11]],
					  '13':  [array21[12],array22[12]],
					  '14':  [array21[13],array22[13]],
					  '15':  [array21[14],array22[14]],
					  '16':  [array21[15],array22[15]],
					  '17': [array21[16],array22[16]]
					};
					
				}
				
				//
				
				else if (window.info_vara2 == 'students_fees') {
					var canvas = document.createElement('canvas');
					var size = 300;
					canvas.width = size;
					canvas.height = size;
					var context = canvas.getContext('2d');
					var centerX = canvas.width / 2;
					var centerY = canvas.height / 2;
					var radius = radio1;
					var startingAngle = Math.PI ;
					var endingAngle = -Math.PI ;
					var counterclockwise = false;
					context.arc(centerX, centerY, radius, startingAngle,
						endingAngle, counterclockwise);
					context.fillStyle = color1;
					context.fill();
					
					var canvas2 = document.createElement('canvas');
					var size = 300;
					canvas2.width = size;
					canvas2.height = size;
					var context2 = canvas2.getContext('2d');
					var centerX2 = canvas2.width / 2;
					var centerY2 = canvas2.height / 2;
					var radius2 = radio2;
					var startingAngle2 = -Math.PI;
					var endingAngle2 = Math.PI;
					var counterclockwise = false;
					context2.arc(centerX2, centerY2, radius2, startingAngle2,
						endingAngle2, counterclockwise);
					context2.fillStyle = color2;
					context2.fill();
					if (radio1>radio2) {index1 = 50; index2 = 100;}
					else {index1 = 100; index2 = 50;}
					var style_circle31 = new ol.style.Style({
					  image: new ol.style.Icon({
						img: canvas,
						imgSize: [size, size]
					  }),
					  zIndex: index1
					});
					
					var style_circle32 = new ol.style.Style({
					  image: new ol.style.Icon({
						img: canvas2,
						imgSize: [size, size]
					  }),
					  zIndex: index2
					});
					
					array31.push(style_circle31);
					array32.push(style_circle32);
					
					var styleCircle3 = {
					  '01': [array31[0],array32[0]],
					  '02': [array31[1],array32[1]],
					  '03':  [array31[2],array32[2]],
					  '04':  [array31[3],array32[3]],
					  '05':  [array31[4],array32[4]],
					  '06':  [array31[5],array32[5]],
					  '07':  [array31[6],array32[6]],
					  '08':  [array31[7],array32[7]],
					  '09':  [array31[8],array32[8]],
					  '10':  [array31[9],array32[9]],
					  '11':  [array31[10],array32[10]],
					  '12':  [array31[11],array32[11]],
					  '13':  [array31[12],array32[12]],
					  '14':  [array31[13],array32[13]],
					  '15':  [array31[14],array32[14]],
					  '16':  [array31[15],array32[15]],
					  '17': [array31[16],array32[16]]
					};
					
				}
				
				//
				
				else if (window.info_vara2 == 'students_spent') {
					var canvas = document.createElement('canvas');
					var size = 300;
					canvas.width = size;
					canvas.height = size;
					var context = canvas.getContext('2d');
					var centerX = canvas.width / 2;
					var centerY = canvas.height / 2;
					var radius = radio1;
					var startingAngle = Math.PI ;
					var endingAngle = -Math.PI ;
					var counterclockwise = false;
					context.arc(centerX, centerY, radius, startingAngle,
						endingAngle, counterclockwise);
					context.fillStyle = color1;
					context.fill();
					
					var canvas2 = document.createElement('canvas');
					var size = 300;
					canvas2.width = size;
					canvas2.height = size;
					var context2 = canvas2.getContext('2d');
					var centerX2 = canvas2.width / 2;
					var centerY2 = canvas2.height / 2;
					var radius2 = radio2;
					var startingAngle2 = -Math.PI;
					var endingAngle2 = Math.PI;
					var counterclockwise = false;
					context2.arc(centerX2, centerY2, radius2, startingAngle2,
						endingAngle2, counterclockwise);
					context2.fillStyle = color2;
					context2.fill();
					
					if (radio1>radio2) {index1 = 50; index2 = 100;}
					else {index1 = 100; index2 = 50;}
					var style_circle41 = new ol.style.Style({
					  image: new ol.style.Icon({
						img: canvas,
						imgSize: [size, size]
					  }),
					  zIndex: index1
					});
					
					var style_circle42 = new ol.style.Style({
					  image: new ol.style.Icon({
						img: canvas2,
						imgSize: [size, size]
					  }),
					  zIndex: index2
					});
					
					array41.push(style_circle41);
					array42.push(style_circle42);
					
					var styleCircle4 = {
					  '01': [array41[0],array42[0]],
					  '02': [array41[1],array42[1]],
					  '03':  [array41[2],array42[2]],
					  '04':  [array41[3],array42[3]],
					  '05':  [array41[4],array42[4]],
					  '06':  [array41[5],array42[5]],
					  '07':  [array41[6],array42[6]],
					  '08':  [array41[7],array42[7]],
					  '09':  [array41[8],array42[8]],
					  '10':  [array41[9],array42[9]],
					  '11':  [array41[10],array42[10]],
					  '12':  [array41[11],array42[11]],
					  '13':  [array41[12],array42[12]],
					  '14':  [array41[13],array42[13]],
					  '15':  [array41[14],array42[14]],
					  '16':  [array41[15],array42[15]],
					  '17': [array41[16],array42[16]]
					};
					
				}
				
				//
				
				else if (window.info_vara2 == 'all') {
					var canvas = document.createElement('canvas');
					var size = 300;
					canvas.width = size;
					canvas.height = size;
					var context = canvas.getContext('2d');
					var centerX = canvas.width / 2;
					var centerY = canvas.height / 2;
					var radius = radio1;
					var startingAngle = Math.PI ;
					var endingAngle = -Math.PI ;
					var counterclockwise = false;
					context.arc(centerX, centerY, radius, startingAngle,
						endingAngle, counterclockwise);
					context.fillStyle = color1;
					context.fill();
					
					var canvas2 = document.createElement('canvas');
					var size = 300;
					canvas2.width = size;
					canvas2.height = size;
					var context2 = canvas2.getContext('2d');
					var centerX2 = canvas2.width / 2;
					var centerY2 = canvas2.height / 2;
					var radius2 = radio2;
					var startingAngle2 = Math.PI/2;
					var endingAngle2 = -Math.PI/2;
					var counterclockwise = false;
					context2.arc(centerX2, centerY2, radius2, startingAngle2,
						endingAngle2, counterclockwise);
					context2.fillStyle = color2;
					context2.fill();
					
					var canvas3 = document.createElement('canvas');
					var size = 300;
					canvas3.width = size;
					canvas3.height = size;
					var context3 = canvas3.getContext('2d');
					var centerX3 = canvas3.width / 2;
					var centerY3 = canvas3.height / 2;
					var radius3 = radio3;
					var startingAngle3 = -Math.PI/2;
					var endingAngle3 = Math.PI/2;
					var counterclockwise = false;
					context3.arc(centerX3, centerY3, radius3, startingAngle3,
						endingAngle3, counterclockwise);
					context3.fillStyle = color3;
					context3.fill();
									
					var style_circle51 = new ol.style.Style({
					  image: new ol.style.Icon({
						img: canvas,
						imgSize: [size, size]
					  })
					});
					
					var style_circle52 = new ol.style.Style({
					  image: new ol.style.Icon({
						img: canvas2,
						imgSize: [size, size]
					  })
					});
					
					var style_circle53 = new ol.style.Style({
					  image: new ol.style.Icon({
						img: canvas3,
						imgSize: [size, size]
					  })
					});
					
					array51.push(style_circle51);
					array52.push(style_circle52);
					array53.push(style_circle53);
					
					var styleCircle5 = {
					  '01': [array51[0],array52[0],array53[0]],
					  '02': [array51[1],array52[1],array53[1]],
					  '03':  [array51[2],array52[2],array53[2]],
					  '04':  [array51[3],array52[3],array53[3]],
					  '05':  [array51[4],array52[4],array53[4]],
					  '06':  [array51[5],array52[5],array53[5]],
					  '07':  [array51[6],array52[6],array53[6]],
					  '08':  [array51[7],array52[7],array53[7]],
					  '09':  [array51[8],array52[8],array53[8]],
					  '10':  [array51[9],array52[9],array53[9]],
					  '11':  [array51[10],array52[10],array53[10]],
					  '12':  [array51[11],array52[11],array53[11]],
					  '13':  [array51[12],array52[12],array53[12]],
					  '14':  [array51[13],array52[13],array53[13]],
					  '15':  [array51[14],array52[14],array53[14]],
					  '16':  [array51[15],array52[15],array53[15]],
					  '17': [array51[16],array52[16],array53[16]]
					};
					
				}
				
				//
				
				else {
				console.log(radio);
					var style_circle = 
						new ol.style.Style({
						image: new ol.style.Circle({
							radius: radio,
							fill: new ol.style.Fill({color: color})
						})             
					});
					
					array.push(style_circle);
					
					var styleCircle = {
					  '01': array[0],
					  '02': array[1],
					  '03':  array[2],
					  '04':  array[3],
					  '05':  array[4],
					  '06':  array[5],
					  '07':  array[6],
					  '08':  array[7],
					  '09':  array[8],
					  '10':  array[9],
					  '11':  array[10],
					  '12':  array[11],
					  '13':  array[12],
					  '14':  array[13],
					  '15':  array[14],
					  '16':  array[15],
					  '17': array[16]
					};
				
				}
				
			}
			
			// STYLE FUNCTIONS
			
			var styleFunctionCircle = function(feature) {
			  return styleCircle[feature.getProperties()['Codigo']];
			};
			
			var styleFunctionCircle2 = function(feature) {
			  return styleCircle2[feature.getProperties()['Codigo']];
			};
			
			var styleFunctionCircle3 = function(feature) {
			  return styleCircle3[feature.getProperties()['Codigo']];
			};
			
			var styleFunctionCircle4 = function(feature) {
			  return styleCircle4[feature.getProperties()['Codigo']];
			};
			
			var styleFunctionCircle5 = function(feature) {
			  return styleCircle5[feature.getProperties()['Codigo']];
			};
			
			// APPLY STYLES
			
			if (window.info_vara2 == 'spent_fees') {
			
				olMap3.getLayers().forEach(function(layer) {
				if (layer.get('name') == 'centroids3') {
					layer.setStyle(styleFunctionCircle2);
				}
				
				});	
			}
			
			else if (window.info_vara2 == 'students_fees') {
			
				olMap3.getLayers().forEach(function(layer) {
				if (layer.get('name') == 'centroids3') {
					layer.setStyle(styleFunctionCircle3);
				}
				
				});	
			}
			
			else if (window.info_vara2 == 'students_spent') {
			
				olMap3.getLayers().forEach(function(layer) {
				if (layer.get('name') == 'centroids3') {
					layer.setStyle(styleFunctionCircle4);
				}
				
				});	
			}
			
			else if (window.info_vara2 == 'all') {
			
				olMap3.getLayers().forEach(function(layer) {
				if (layer.get('name') == 'centroids3') {
					layer.setStyle(styleFunctionCircle5);
				}
				
				});	
			}
			
			else {
				olMap3.getLayers().forEach(function(layer) {
				if (layer.get('name') == 'centroids3') {
					console.log('else');
					layer.setStyle(styleFunctionCircle);
				}
				
				
				});
			}
			
	};