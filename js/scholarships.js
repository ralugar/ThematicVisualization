// scholarships, square 1
var  legend_scholarships = document.createElement('canvas');
var size = 90;
legend_scholarships.width = size;
legend_scholarships.height = size;
var context = legend_scholarships.getContext('2d');
var centerX = legend_scholarships.width / 4 ;
var centerY = legend_scholarships.height / 2;

context.rect(centerX, centerY, 45, 45);
context.fillStyle = 'hsl(290, 70%, 50%)';
context.strokeStyle = 'black';
context.lineWidth = 1;
context.fill(); 
context.stroke();

// scholarships, square 2
var  legend_scholarships2 = document.createElement('canvas');
var size2 = 30;
legend_scholarships2.width = size2;
legend_scholarships2.height = size2;
var context2 = legend_scholarships2.getContext('2d');
var centerX2 = legend_scholarships2.width / 4;
var centerY2 = legend_scholarships2.height / 2;

context2.rect(centerX2, centerY2, 15, 15);
context2.fillStyle = 'hsl(290, 70%, 50%)';
context2.strokeStyle = 'black';
context2.lineWidth = 1;
context2.fill(); 
context2.stroke();

// scholarships, square 3
var  legend_scholarships3 = document.createElement('canvas');
var size3 = 10;
legend_scholarships3.width = size3;
legend_scholarships3.height = size3;
var context3 = legend_scholarships3.getContext('2d');
var centerX3 = legend_scholarships3.width / 4;
var centerY3 = legend_scholarships3.height / 2;

context3.rect(centerX3, centerY3, 5, 5);
context3.fillStyle = 'hsl(290, 70%, 50%)';
context3.strokeStyle = 'black';
context3.lineWidth = 1;
context3.fill(); 
context3.stroke();
	
	// SCHOLARSHIPS STYLE
var functionScholarchips = function() {

	array_square = [];
	// "COIN" STYLE 
	for (var i = 0; i < centroids.features.length; i++) { 

		var variable = centroids.features[i].properties['scholarships'][window.year_var];
		//console.log(window.year_var);
		//console.log(variable);

		// "COIN" LOOP
		var ofsetX = 0;
		var ofsetY = 0;
		var side0 = 45;
		var side1 = 15;
		var side2 = 5;

		var color = 'hsl(290, 70%, 50%)';

		var  canvas = document.createElement('canvas');
		var size = 300;
		canvas.width = size;
		canvas.height = size;
		var context = canvas.getContext('2d');
		var centerX = canvas.width / 2.2;
		var centerY = canvas.height / 2 ;

		if (variable[0] != 0) {
			var cont0 = 0;
			for (var j = 0; j< variable[0]; j++) {
			
				context.rect(centerX+ofsetX, centerY+ofsetY, side0, -side0);
				context.fillStyle = color;
				context.strokeStyle = 'black';
				context.lineWidth = 2;
				context.fill(); 
				context.stroke();
				
				ofsetX = ofsetX + side0;
				cont0 = cont0 + 1;

				if (cont0%3 == 0) {
					ofsetX = 0;
					ofsetY = ofsetY + side0;
				}

			}

			ofsetX = 0;
			ofsetY = ofsetY + side1;
			
		}

		if (variable[1] != 0) {
			var cont1 = 0;
			for (var j = 0; j< variable[1]; j++) {
				
				context.rect(centerX+ofsetX, centerY+ofsetY, side1, -side1);
				context.fillStyle = color;
				context.strokeStyle = 'black';
				context.lineWidth = 0.5;
				context.fill(); 
				context.stroke();
				
				ofsetX = ofsetX + side1;
				cont1 = cont1 + 1;

				if (cont1%3 == 0) {
					ofsetX = 0;
					ofsetY = ofsetY + side1;
				}						
			
			}
			
			if (cont1 == 3) {
				ofsetX = 0;
				ofsetY = ofsetY - side1;
			}
			
			if (cont1 == 6) {
				ofsetX = 0;
				ofsetY = ofsetY - side1 + side2;
			}
			
			else {
				ofsetX = 0;
				ofsetY = ofsetY + side2;
			}
			
		}

		if (variable[2] != 0) {
			var cont2 = 0;
			for (var j = 0; j< variable[2]; j++) {
			
				context.rect(centerX+ofsetX, centerY+ofsetY, side2, -side2);
				context.fillStyle = color;
				context.strokeStyle = 'black';
				context.lineWidth = 0.5;
				context.fill(); 
				context.stroke();
				
				ofsetX = ofsetX + side2;
				cont2 = cont2 + 1;

				if (cont2%3 == 0) {
					ofsetX = 0;
					ofsetY = ofsetY + side2;
				}

			}
			
		}
						
		var style_square = new ol.style.Style({
		  image: new ol.style.Icon({
			img: canvas,
			imgSize: [size, size]
		  })
		});
				
		array_square.push(style_square);

		var styleSquare = {
		  '01': array_square[0],
		  '02': array_square[1],
		  '03':  array_square[2],
		  '04':  array_square[3],
		  '05':  array_square[4],
		  '06':  array_square[5],
		  '07':  array_square[6],
		  '08':  array_square[7],
		  '09':  array_square[8],
		  '10':  array_square[9],
		  '11':  array_square[10],
		  '12':  array_square[11],
		  '13':  array_square[12],
		  '14':  array_square[13],
		  '15':  array_square[14],
		  '16':  array_square[15],
		  '17': array_square[16]
		};

		

		var styleFunctionSquare = function(feature) {
		return styleSquare[feature.getProperties()['Codigo']];
		};

		olMap.getLayers().forEach(function(layer) {
		if (layer.get('name') == 'centroids') {
		layer.setStyle(styleFunctionSquare);
		}

		});	

	}
}
	
	// SCHOLARSHIPS
	var rad = document.myForm.var2;
    var prev = null;
	
	rad.addEventListener('change', function() {
            if(this !== prev) {
                prev = this;
            }

			var inputScholarships = rad.checked;
			if (inputScholarships==true) {
				console.log('IN');
				
				rad2[0].checked = false;
				rad2[1].checked = false;
				rad2[2].checked = false;
				
				window.info_var = 'scholarships';
				
				functionScholarchips();
				
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
				document.getElementById('text5').innerHTML = 'Scholarships (milions of euros)';
				document.getElementById('text6').innerHTML = '';

				document.getElementById('canvas_container51').appendChild(legend_scholarships3);
				var text = document.createElement('p');	text.innerHTML = '0.1'; text.style.textAlign = 'center';
				document.getElementById('canvas_container51').appendChild(text);
				document.getElementById('canvas_container52').appendChild(legend_scholarships2);
				var text = document.createElement('p');	text.innerHTML = '1'; text.style.textAlign = 'center';
				document.getElementById('canvas_container52').appendChild(text);
				document.getElementById('canvas_container53').appendChild(legend_scholarships);
				var text = document.createElement('p');	text.innerHTML = '10'; text.style.textAlign = 'center';
				document.getElementById('canvas_container53').appendChild(text);
				
			}
			
			else {
				window.info_var = '';
				loop();
				
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
				
				document.getElementById('text1').innerHTML = '';
				document.getElementById('text2').innerHTML = '';
				document.getElementById('text3').innerHTML = '';
				document.getElementById('text4').innerHTML = '';
				document.getElementById('text5').innerHTML = '';
				document.getElementById('text6').innerHTML = '';
			}
		});
		