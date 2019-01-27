	var query = false;
	
	var selectQuery = function() {
		
		query = true;
	
		var select1 = document.selects.select1.value;
		var select11 = document.selects.select11.value;
		var select2 = document.selects.select2.value;
		var select21 = document.selects.select21.value;
		var select3 = document.selects.select3.value;
		var select31 = document.selects.select31.value;
		var select4 = document.selects.select4.value;
		var select41 = document.selects.select41.value;
		
		console.log([select1,select11],select2, select3);
		var spentMin = select1 * 1000000;
		var spentMax = select11  * 1000000;
		var feesMin = select2 * 1000000;
		var feesMax = select21  * 1000000;
		var scholarshipsMin = select3 * 1000000;
		var scholarshipsMax = select31  * 1000000;
		var studentsMin = select4 * 1000;
		var studentsMax = select41  * 1000;
		
	 var style1 = new ol.style.Style({ 
          stroke: new ol.style.Stroke({
            color: 'black',
            width: 0.5
          }),
          fill: new ol.style.Fill({
            color: '#f4dd9f'
          })
        });
		
	var styleP = new ol.style.Style(
		{stroke: new ol.style.Stroke(
			{color: '#282828',width: 0.75}),
		fill: new ol.style.Fill({color: '#e7e7e9'}), 
		text: textStyleP  });
		
	var styleF = new ol.style.Style(
		{stroke: new ol.style.Stroke(
			{color: '#282828',width: 0.75}),
		fill: new ol.style.Fill({color: '#e7e7e9'}) });
		
	var styleA = new ol.style.Style(
		{stroke: new ol.style.Stroke(
			{color: '#282828',width: 0.75}),
		fill: new ol.style.Fill(
			{color: '#e7e7e9'}), 
		text: textStyleF });	

	  var styleBase = {'A':styleA, 'P':styleP, 'F':styleF};
		for (var i = 0; i < centroids.features.length; i++) { 

			var variableStudents = centroids.features[i].properties['students'][window.year_var];
			var variableFees = centroids.features[i].properties['fees'][window.year_var];
			var variableSpent = centroids.features[i].properties['spent'][window.year_var];
			var variableScholarships = centroids.features[i].properties['scholarships2'][window.year_var];
			var code = centroids.features[i].properties['Codigo'];
			
			if ((studentsMin <= variableStudents && variableStudents < studentsMax) && (feesMin <= variableFees && variableFees < feesMax) && (spentMin <= variableSpent && variableSpent < spentMax) && (scholarshipsMin <= variableScholarships && variableScholarships < scholarshipsMax)) {
				styleBase[code] = new ol.style.Style({ 
				  stroke: new ol.style.Stroke({
					color: 'black',
					width: 1.5
				  }),
				  fill: new ol.style.Fill({
					color: '#eecb6d'
				  })
				});
				console.log(variableStudents);
			}
			else {
			
			styleBase[code] = style1;
			}
		}
		
		var styleFunctionBase = function(feature) {
			return styleBase[feature.getProperties()['Codigo']];
	    };
			
		olMap.getLayers().forEach(function(layer) {
		if (layer.get('name') == 'capaBase') {
			layer.setStyle(styleFunctionBase);
		}});
		
	};
	
	//SPENT
	$( function() {
	var minSpent = 40000000;
	var maxSpent = 1880000000;
    $( "#slider-range-spent" ).slider({
      range: true,
      min: minSpent,
      max: maxSpent,
	  step: 10000000,
      values: [ minSpent,maxSpent ],
      slide: function( event, ui ) {
      console.log(ui);
	  document.getElementById('myRange2').value = ui.values[0]/1000000;
	  document.getElementById('myRange22').value = ui.values[1]/1000000;
      }
    });
    
  } );
  
  var clearQuery = function() {
	  
	query = false;
	olMap.getLayers().forEach(function(layer) {
	if (layer.get('name') == 'capaBase') {
		layer.setStyle(styleFunctionBase);
	}
	});	
	
	olMap2.getLayers().forEach(function(layer) {
	if (layer.get('name') == 'capaBase') {
		layer.setStyle(styleFunctionBase);
	}
	
	});	
	
	olMap3.getLayers().forEach(function(layer) {
	if (layer.get('name') == 'capaBase') {
		layer.setStyle(styleFunctionBase);
	}
	
	});
  };
  
  // FEES
  	$( function() {
	var minFees = 5400000; 
	var maxFees = 440300000; 
    $( "#slider-range-fees" ).slider({
      range: true,
      min: minFees,
      max: maxFees,
	  step: 100000,
      values: [ minFees,maxFees ],
      slide: function( event, ui ) {
      console.log(ui);
	  document.getElementById('myRange3').value = ui.values[0]/1000000;
	  document.getElementById('myRange32').value = ui.values[1]/1000000;
      }
    });
    
  } );
  
  // SCHOLARSHIPS
  	$( function() {
	var minScholarships = 0; 
	var maxScholarships = 28170000; 
    $( "#slider-range-scholarships" ).slider({
      range: true,
      min: minScholarships,
      max: maxScholarships,
	  step: 10000,
      values: [ minScholarships,maxScholarships ],
      slide: function( event, ui ) {
      console.log(ui);
	  document.getElementById('myRange4').value = ui.values[0]/1000000;
	  document.getElementById('myRange42').value = ui.values[1]/1000000;
      }
    });
    
  } );
  
  // STUDENTS
  	$( function() {
	var minStudents = 6000; 
	var maxStudents = 247000; 
    $( "#slider-range-students" ).slider({
      range: true,
      min: minStudents,
      max: maxStudents,
	  step: 1000,
      values: [ minStudents,maxStudents ],
      slide: function( event, ui ) {
      console.log(ui);
	  document.getElementById('myRange5').value = ui.values[0]/1000;
	  document.getElementById('myRange52').value = ui.values[1]/1000;
      }
    });
    
  } );