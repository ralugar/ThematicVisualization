	// SCHOLARSHIPS STYLE
var functionScholarchips2 = function() {	

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
		var centerY = canvas.height / 2;

		if (variable[0] != 0) {
			var cont0 = 0;
			for (var j = 0; j< variable[0]; j++) {
			
				context.rect(centerX+ofsetX, centerY+ofsetY, side0, -side0);
				context.fillStyle = color;
				context.fillStyle = 'black';
				context.lineWidth = 0.5;
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

		olMap2.getLayers().forEach(function(layer) {
		if (layer.get('name') == 'centroids2') {
		layer.setStyle(styleFunctionSquare);
		}

		});	

	}
}
	
	// SCHOLARSHIPS
	var rad3 = document.myForm2.var2;
    var prev3 = null;
	
	rad3.addEventListener('change', function() {
            if(this !== prev3) {
                prev3 = this;
            }

			var inputScholarships2 = rad3.checked;
			if (inputScholarships2==true) {
								
				window.info_vars2 = 'scholarships';
				
				functionScholarchips2();
				
			}
			
			else {
				window.info_vars2 = '';
				loop2();
			}
		});