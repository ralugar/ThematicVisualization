	// CHANGE YEAR

	// FUNCTION LOOP
	var loop = function() {
			
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
			
				if (window.info_var == "spent_fees") {
					var variable1 = centroids.features[i].properties['spent'][window.year_var];
					var variable2 = centroids.features[i].properties['fees'][window.year_var];
				}
				
				else if (window.info_var == "students_fees") {
					var variable1 = centroids.features[i].properties['students'][window.year_var];
					var variable2 = centroids.features[i].properties['fees'][window.year_var];
				}
				
				else if (window.info_var == "students_spent") {
					var variable1 = centroids.features[i].properties['students'][window.year_var];
					var variable2 = centroids.features[i].properties['spent'][window.year_var];
				}
				
				else if (window.info_var == "all") {
					var variable1 = centroids.features[i].properties['students'][window.year_var];
					var variable2 = centroids.features[i].properties['fees'][window.year_var];
					var variable3 = centroids.features[i].properties['spent'][window.year_var];
				}
				
				else if (window.info_var == "") {
					var variable =1;
				}
				
				else if (window.info_var == "scholarships") {
					var variable =0;
				}
				
				else if (window.info_var == "students" || window.info_var == "fees" || window.info_var == "spent") {
					var variable = centroids.features[i].properties[window.info_var][window.year_var];
				}	
				  
				  <!-- STYLE CIRCLES -->
				  
				// PARAMETERS
				  
				if (window.info_var == '' || window.info_var == 'scholarships') {
					radio = 0;
					color = '#ddbf88';
				}

				if (window.info_var == 'fees') {
					param = 50000;
					area = variable/param;
					radio = Math.sqrt(area/Math.PI);
					color = 'hsl(30, 70%, 50%)';
				}
				
				if (window.info_var == 'students') {
					param = 30;
					area = variable/param;
					radio = Math.sqrt(area/Math.PI);
					color = 'hsl(195, 70%, 50%)';
				}
				
				if (window.info_var == 'spent') {
					param = 50000;
					area = (variable/10)/param;
					radio = Math.sqrt(area/Math.PI);
					color = 'hsl(100, 70%, 50%)';
				}
				
				if (window.info_var == 'spent_fees') {
					param1 = 50000;
					area1 = (variable1/10)/param1;
					radio1 = Math.sqrt(area1/Math.PI);
					color1 = 'hsl(100, 70%, 50%)';
					param2 = 50000;
					area2 = variable2/param2;
					radio2 = Math.sqrt(area2/Math.PI);
					color2 = 'hsl(30, 70%, 50%)';
				}
				
				if (window.info_var == 'students_fees') {
					param1 = 30;
					area1 = variable1/param1;
					radio1 = Math.sqrt(area1/Math.PI);
					color1 = 'hsl(195, 70%, 50%)';
					param2 = 50000;
					area2 = variable2/param2;
					radio2 = Math.sqrt(area2/Math.PI);
					color2 = 'hsl(30, 70%, 50%)';
				}
				
				if (window.info_var == 'students_spent') {
					param1 = 30;
					area1 = variable1/param1;
					radio1 = Math.sqrt(area1/Math.PI);
					color1 = 'hsl(195, 70%, 50%)';
					param2 = 50000;
					area2 = (variable2/10)/param2;
					radio2 = Math.sqrt(area2/Math.PI);
					color2 = 'hsl(100, 70%, 50%)';
				}
				
				if (window.info_var == 'all') {
					param1 = 30;
					area1 = variable1/param1;
					radio1 = Math.sqrt(area1/Math.PI);
					color1 = 'hsl(195, 70%, 50%)';
					param2 = 50000;
					area2 = variable2/param2;
					radio2 = Math.sqrt(area2/Math.PI);
					color2 = 'hsl(30, 70%, 50%)';
					param3 = 50000;
					area3 = (variable3/10)/param3;
					radio3 = Math.sqrt(area3/Math.PI);
					color3 = 'hsl(100, 70%, 50%)';
				}
				
				// STYLES
				
				if (window.info_var == 'spent_fees') {
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
				
				else if (window.info_var == 'students_fees') {
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
				
				else if (window.info_var == 'students_spent') {
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
				
				else if (window.info_var == 'all') {
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
					//document.getElementById('canvas_container').appendChild(canvas3);
									
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
			
			if (window.info_var == 'spent_fees') {
			
				olMap.getLayers().forEach(function(layer) {
				if (layer.get('name') == 'centroids') {
					layer.setStyle(styleFunctionCircle2);
				}
				
				});	
			}
			
			else if (window.info_var == 'students_fees') {
			
				olMap.getLayers().forEach(function(layer) {
				if (layer.get('name') == 'centroids') {
					layer.setStyle(styleFunctionCircle3);
				}
				
				});	
			}
			
			else if (window.info_var == 'students_spent') {
			
				olMap.getLayers().forEach(function(layer) {
				if (layer.get('name') == 'centroids') {
					layer.setStyle(styleFunctionCircle4);
				}
				
				});	
			}
			
			else if (window.info_var == 'all') {
			
				olMap.getLayers().forEach(function(layer) {
				if (layer.get('name') == 'centroids') {
					layer.setStyle(styleFunctionCircle5);
				}
				
				});	
			}
			
			else {
				olMap.getLayers().forEach(function(layer) {
				if (layer.get('name') == 'centroids') {
					layer.setStyle(styleFunctionCircle);
				}
				
				});
			}
			
	};